import React from "react";
import Button from "@mui/material/Button";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TableViewIcon from "@mui/icons-material/TableView";

const EditorWidgets = ({ boldHandler, italicHandler, underlineHandler }) => {
  return (
    <div className="widgets flex justify-between pr-12 pl-12 mt-10 mb-5">
      <div className="widget-left flex ">
        <div
          className="icon-wrapper flex items-center mr-12 text-slate-500"
          onClick={() => {
            boldHandler();
          }}
        >
          <FormatBoldIcon fontSize="medium" />
        </div>
        <div className="icon-wrapper flex items-center mr-12 text-slate-500">
          <FormatItalicIcon fontSize="medium" />
        </div>
        <div className="icon-wrapper flex items-center mr-12 text-slate-500">
          <FormatUnderlinedIcon fontSize="medium" />
        </div>
        <div className="icon-wrapper flex items-center mr-12 text-slate-500">
          <AddPhotoAlternateIcon fontSize="medium" />
        </div>
        <div className="icon-wrapper flex items-center mr-12 text-slate-500">
          <TableViewIcon fontSize="medium" />
        </div>
      </div>
      <div className="widget-right">
        <Button variant="contained">Save</Button>
      </div>
    </div>
  );
};

export default EditorWidgets;
