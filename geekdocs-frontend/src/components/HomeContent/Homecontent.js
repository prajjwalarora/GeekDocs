import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../Buttons/SignIn";
import SignUp from "../Buttons/SignUp";

const Homecontent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="mx-10 pt-32">
        <div class="flex items-center justify-center">
          <div class="contianer-content flex justify-between">
            <div class="left p-9">
              <p class="intro mb-8 text-7xl">
                Build your best ideas together, in Geek Docs
              </p>
              <p class="mb-8 text-xl text-stone">
                Create and collaborate on online documents in real-time and from
                any device.
              </p>
              <div class="flex justify-start">
                <SignUp />
                <SignIn />
              </div>
            </div>
            <div class="right">
              <img
                src="https://lh3.googleusercontent.com/4BcOYDs5e95hVbpGR0kDVKXRVAldcyYoHrM3q7Ashp2JrVARBVgglUwS_xPaIg_yuqWZJEpwlIjHUcQ63i9SPZBMq5E-t3A9EH5VX1y_mcRY_IbhYbg=s0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecontent;
