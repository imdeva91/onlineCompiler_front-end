import React, { useContext, useRef } from "react";
import Editor from "@monaco-editor/react";
import { editor } from "../../context/EditorContext";

const CodeEditor = () => {
    const editRef = useRef()
    const {value,language,setValue} = useContext(editor)

    const onMount =(e)=>{
        editRef.current = e;
        e.focus()
    }
  return (
    <Editor
      height="80vh"
      width="60vw"
      language={language}
      value={value}
      theme="vs-dark"
      onMount={onMount}
      onChange={(value)=>setValue(value)}
    />
  );
};

export default CodeEditor;
