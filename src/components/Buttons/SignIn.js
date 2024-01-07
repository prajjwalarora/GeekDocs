import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const signInHandler = () => {
    navigate("/login");
  };
  return (
    <div
      class="rounded border border-gray-300 py-3 px-7 text-[#bd3738] mr-7"
      onClick={() => {
        signInHandler();
      }}
    >
      <span>Sign In</span>
    </div>
  );
};

export default SignIn;
