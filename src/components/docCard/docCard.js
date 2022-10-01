import React from "react";

const docCard = () => {
  return (
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
  );
};

export default docCard;
