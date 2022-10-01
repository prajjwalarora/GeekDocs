import React from "react";
import EditorBox from "./EditorBox/EditorBox";

import EditorHeader from "./EditorHeader/EditorHeader";
import EditorWidgets from "./EditorWidgets/EditorWidgets";

const EditorElement = () => {
  function boldHandler() {
    console.log("Bold Clicked");
  }
  function italicHandler() {
    console.log("Bold Clicked");
  }
  function underlineHandler() {
    console.log("Bold Clicked");
  }
  return (
    <div className="m-auto">
      <EditorHeader />
      <EditorWidgets
        boldHandler={boldHandler}
        italicHandler={italicHandler}
        underlineHandler={underlineHandler}
      />
      <EditorBox />
    </div>
  );
};

export default EditorElement;
