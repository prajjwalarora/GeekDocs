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
          className="icon-wrapper flex items-center mr-12 text-slate-500 cursor-pointer"
          onClick={() => {
            boldHandler();
          }}
        >
          <FormatBoldIcon fontSize="medium" />
        </div>
        <div
          className="icon-wrapper flex items-center mr-12 cursor-pointer"
          onClick={() => {
            italicHandler();
          }}
        >
          <FormatItalicIcon fontSize="medium" />
        </div>
        <div
          className="icon-wrapper flex items-center mr-12 cursor-pointer"
          onClick={() => {
            underlineHandler();
          }}
        >
          <FormatUnderlinedIcon fontSize="medium" />
        </div>
        <div
          className="icon-wrapper flex items-center mr-12 cursor-pointer"
          onClick={() => {
            boldHandler();
          }}
        >
          <AddPhotoAlternateIcon fontSize="medium" />
          <span className="text-[10px] bg-[#BD3738] text-white px-2 rounded-full py-1 ml-1 bg-opacity-70">
            Coming Soon
          </span>
        </div>
        <div
          className="icon-wrapper flex items-center mr-12 cursor-pointer"
          onClick={() => {
            boldHandler();
          }}
        >
          <TableViewIcon fontSize="medium" />
          <span className="text-[10px] bg-[#BD3738] text-white px-2 rounded-full py-1 ml-1 bg-opacity-70">
            Coming Soon
          </span>
        </div>
      </div>
      <div className="widget-right"></div>
    </div>
  );
};

export default EditorWidgets;
