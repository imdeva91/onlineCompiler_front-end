import React, { useContext } from "react";
import CodeEditorNav from "../../Components/codeEditorNav/CodeEditorNav";
import CodeEditor from "../../Components/codeEditor/CodeEditor";
import Output from "../../Components/output/Output";
import SaveCode from "../../Components/saveCode/SaveCode";
import { editor } from "../../context/EditorContext";

const Home = () => {
  const { onSave, setOnSave } = useContext(editor);

  return (
    <div className="reletive">
      <CodeEditorNav />

      <div className="w-[100%] flex items-center justify-around">
        <CodeEditor />
        <Output />
      </div>
      {onSave ? <SaveCode /> : ""}

    </div>
  );
};

export default Home;
