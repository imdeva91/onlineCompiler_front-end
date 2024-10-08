import React, { useContext } from "react";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { editor } from "../../context/EditorContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CODE_SNIPPETS } from "../../Constant";

const CodeEditorNav = () => {
  const {runCode ,setOnSave,user,language,value} = useContext(editor)
  const navigate = useNavigate()

  const handleSave =()=>{
    if(user ){
      if(CODE_SNIPPETS[language] !== value){
        setOnSave(true)

      }else{
        toast.error("write some code then save", {
          position: "top-right",
          autoClose: 5000,
         
          });
      }
    }else{
      toast.error("User not login", {
        position: "top-right",
        autoClose: 5000,
       
        });
        navigate("/signin")
    }
  }
  return (
    <nav className="h-[60px] flex items-center justify-end gap-5 px-10">
      <LanguageSelector />
      <button className={`bg-green-500 text-white px-4 py-2 rounded  `}   onClick={handleSave}>
        SAVE CODE
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={()=>runCode()}>
        RUN CODE
      </button>
    </nav>
  );
};

export default CodeEditorNav;
