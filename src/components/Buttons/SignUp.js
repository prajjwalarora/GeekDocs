import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/signup");
  };
  return (
    <div
      class="mr-6 rounded bg-[#bd3738] py-3 px-5 text-white"
      onClick={() => {
        signUpHandler();
      }}
    >
      Sign Up
    </div>
  );
};

export default SignUp;
