import React from "react";
import Newnav from "../components/NewNav/Newnav";
import AddIcon from "@mui/icons-material/Add";

const Document = () => {
  return (
    <div>
      <Newnav isDoc={true} />
      <div className="content-wrapper w-[95%] m-auto">
        <div class="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4 mt-8">
          <div>
            <div class="p-6  mt-3 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md m-auto">
              <div class="flex justify-between mb-8">
                <div class="text-[#BD3738]">
                  <AddIcon />
                </div>
                <div class="text-gray-400">
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </div>
              <a href="#">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-700 ">
                  UI/UX design
                </h5>
              </a>
              <p class=" text-xs text-gray-400 dark:text-gray-400">5 files</p>
            </div>
          </div>
          <div>
            <div class="p-6  mt-3 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md m-auto">
              <div class="flex justify-between mb-8">
                <div class="text-[#BD3738]">
                  <span class="material-symbols-outlined">folder</span>
                </div>
                <div class="text-gray-400">
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </div>
              <a href="#">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-700 ">
                  Add New files
                </h5>
              </a>
              <p class=" text-xs text-gray-400 dark:text-gray-400">5 files</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
