import React from "react";
import SignIn from "../Buttons/SignIn";
import SignUp from "../Buttons/SignUp";
import { useNavigate } from "react-router-dom";

const Newnav = ({ isDoc, isLogin }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <nav class="navbar bg-white px-2 shadow">
        <div class="lg:flex md:justify-between items-center">
          <ul class="lg:flex  md:justify-between items-center ">
            <div class="logo-design wrap mr-5 flex items-center px-5 py-4">
              <img class="h-12" src="/logo.png" alt="" />
            </div>
            <div class="Overview mx-2 md:py-5 border-[#bd3738] lg:py-5 px-5 hover:border-b-2">
              <a href="#">About Us</a>
            </div>
            <div class="Overview mx-2 md:py-5 border-[#bd3738] lg:py-5 px-5 hover:border-b-2">
              <a href="#">Contact Us</a>
            </div>
            <div class="Overview mx-2 md:py-5 border-[#bd3738] lg:py-5 px-5 hover:border-b-2">
              <a href="#">Try For Free</a>
            </div>
          </ul>
          <ul class=" md:flex md:justify-between items-center py-2 text-[#bd3738]">
            <div class="mx-2 py-3 px-5">
              <a href="#">release v 0.1.0</a>
            </div>
            {!isDoc && <SignUp />}
            {!isDoc && <SignIn />}
            {isDoc && (
              <button
                className="bg-[#BD3738] text-white px-4 py-2 rounded-md mr-8"
                onClick={logOutHandler}
              >
                Log Out
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Newnav;
