import { createContext, useEffect, useState } from "react";
import { CODE_SNIPPETS } from "../Constant";
import { executeCode } from "../api";
import Axiosinstance from "../axios_instance";

export const editor = createContext();

const EditorContext = ({ children }) => {
  const [theam, setTheam] = useState("white");
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [onSave, setOnSave] = useState(false);
  const [user, setUser] = useState(null);
  const [tocken, setTocken] = useState("null");
  const [userAllCode,setUserAllCode] = useState(null)

  const toggleTheam =(prev)=>{
    setTheam((prev)=> theam === "dark" ? "white":"dark")
  }
// console.log(user)

  const runCode = async () => {
    if (!value) return;
    try {
      setLoading(true);
      const { run: result } = await executeCode(language, value);
      setOutput(result.output.split("\n"));
      setLoading(false);
    } catch (error) {}
  };

useEffect(()=>{
  const sesionData = JSON.parse(sessionStorage.getItem("user"))
  setUser(sesionData)
},[])
useEffect(()=>{
  const tocken = sessionStorage.getItem("tocken")
  setTocken(tocken)
},[user])


const fetchUserAllCode =async()=>{
  const response = await Axiosinstance.get("/user/user-all-code")
  setUserAllCode(response.data.data)
}
useEffect(()=>{
 
  fetchUserAllCode()
  // console.log(codes?.length)
  // setUserCodeCount(codes?.length)

},[])

  return (
    <editor.Provider
      value={{
        setLanguage,
        value,
        setValue,
        runCode,
        output,
        loading,
        setOnSave,
        onSave,
        user,
        setUser,
        tocken,
        theam,
        toggleTheam,
        language,
        userAllCode,
        fetchUserAllCode
      }}
    >
      {children}
    </editor.Provider>
  );
};

export default EditorContext;
