import React from "react";

const EditorHeader = ({ header }) => {
  return (
    <div className="heading-wrapper mb-4">
      <input
        type="text"
        placeholder="Title Here"
        value={header.toUpperCase()}
        className=" w-full h-20 text-2xl pl-12 pt-4 pb-4"
        disabled
      />
    </div>
  );
};

export default EditorHeader;
