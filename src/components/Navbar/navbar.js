import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-14">
      <div className="">
        <CloseIcon />
      </div>

      <div className="nav-right flex ">
        <div className="nav-option-wrapper mr-5 ml-5 flex items-center">
          <QuestionMarkIcon />
          <span>Writing Guide</span>
        </div>
        <div className="nav-option-wrapper mr-5 ml-5 flex items-center">
          <MoreVertIcon />
          <span>Options</span>
        </div>
        <div className=" ml-5">
          <Button variant="contained">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
