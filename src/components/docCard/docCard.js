import React from "react";
import { Link } from "react-router-dom";

const docCard = ({ d }) => {
  return (
    <Link to={`/editor/?docId=${d.docId}`}>
      <div class="p-6  mt-3 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md m-auto">
        <div class="flex justify-between mb-8">
          <div class="text-[#BD3738]">
            <span class="material-symbols-outlined">folder</span>
          </div>
          <div class="text-gray-400">
            <span class="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-700 ">
          {d["title"]}
        </h5>
        <p class=" text-xs text-gray-400 dark:text-gray-400">5 files</p>
      </div>
    </Link>
  );
};

export default docCard;
