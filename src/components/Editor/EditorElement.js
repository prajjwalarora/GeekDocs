import React from "react";
import EditorBox from "./EditorBox/EditorBox";

import EditorHeader from "./EditorHeader/EditorHeader";

const EditorElement = ({ socket }) => {
  return (
    <div className="m-auto">
      <EditorHeader />

      <EditorBox socket={socket} />
    </div>
  );
};

export default EditorElement;
