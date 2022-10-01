import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
    setSignInData(formData);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return navigate("/docs");
    }
    if (signInData) {
      axios
        .post(
          "http://10.1.105.126:8080/api/v1/auth/login",
          JSON.stringify(signInData),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user._id);
          navigate("/docs");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [signInData]);

  return (
    <div class="flex min-h-full items-center justify-center py-12 m-24 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md  p-12 rounded-2xl space-y-8 border border-red-200 ">
        <div>
          <img class="mx-auto h-16 w-auto" src="/logo.png" alt="Your Company" />
          <h2 class="mt-6 text-center text-[25px] font-bold tracking-tight text-gray-900 ">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6 " onSubmit={submitHandler}>
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md ">
            <div class="p-2">
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div class="p-2">
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none rounded-none rounded-b-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          ​ ​
          <div class="mb-3 mt-3">
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
