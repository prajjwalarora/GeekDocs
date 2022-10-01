import React from "react";
import EditorBox from "./EditorBox/EditorBox";

const EditorElement = ({ socket }) => {
  return (
    <div className="m-auto">
      <EditorBox socket={socket} />
    </div>
  );
};

export default EditorElement;
