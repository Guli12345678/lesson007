import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // HOF
  return (
    <div className="min-h-screen bg-slate-300">
      <div className="flex justify-center absolute top-[50%] left-[50%] translate-[-50%] ">
        <div className="w-[300px]  flex-row items-center justify-center bg-slate-900 text-white">
          <h2 className="flex justify-self-center mt-5">Login Form</h2>

          <div className="ml-6 mt-7">
            <span>Email</span>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <br />
            <span>Password</span>
            <br />

            <input type="text" placeholder="Enter your password" />
          </div>
          <div className=" flex gap-5 mt-5 justify-center mb-6">
            <button
              className="text-white bg-gray-600 w-[100px] h-[40px]"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
            <button
              className="text-white bg-gray-600 w-[100px] h-[40px]"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
