import React from "react";

const EditorHeader = () => {
  return (
    <div className="heading-wrapper mb-4">
      <input
        type="text"
        placeholder="Title Here"
        className=" w-full h-20 text-2xl pl-12 pt-4 pb-4"
      />
    </div>
  );
};

export default EditorHeader;
