import React from "react";
// import Textarea from "@mui/joy/Textarea";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const EditorBox = () => {
  return (
    <div className="px-12">
      <TextareaAutosize
        aria-label="minimum height"
        minRows={20}
        placeholder="Minimum 3 rows"
        className="p-5 w-full border rounded-xl"
      />
    </div>
  );
};

export default EditorBox;
