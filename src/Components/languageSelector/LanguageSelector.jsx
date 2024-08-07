import React, { useContext } from "react";
import { editor } from "../../context/EditorContext";
import { CODE_SNIPPETS } from "../../Constant";

const LanguageSelector = () => {
    const {setLanguage,setValue} = useContext(editor)
    const handleChange =(e)=>{
        setLanguage(e.target.value)
        setValue(CODE_SNIPPETS[e.target.value])
    }
  return (
    <div>
      <select onChange={handleChange} defaultValue="javaScript" className="bg-blue-500 text-white px-4 py-2 rounded outline-none cursor-pointer">
        <option  value="javascript">javaScript</option>
        <option value="java">Java</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>


      </select>
    </div>
  );
};

export default LanguageSelector;
