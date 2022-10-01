import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ListIcon from "@mui/icons-material/List";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-100 h-14">
      <div className="ml-10">
        <CloseIcon />
      </div>

      <div className="nav-right flex  mr-10">
        <div className="nav-option-wrapper mr-5 ml-5 flex items-center">
          <QuestionMarkIcon />
          <span>Writing Guide</span>
        </div>
        <div className="nav-option-wrapper mr-5 ml-5 flex items-center">
          <ListIcon />
          <span>Options</span>
        </div>
        <div className="">
          <Button variant="contained">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
