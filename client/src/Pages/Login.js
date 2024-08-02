import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/User/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, loading } = useSelector((state) => state.user);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const { data } = await axios.post("/api/user/login", formData);
      console.log(data);
      dispatch(signInSuccess(data));

      toast(message);

      navigate("/profile");
    } catch (err) {
      dispatch(signInFailure(err));
    }
  };
  return (
    <>
      <div className="wrapper w-full min-h-[100vh] flex justify-center items-center ">
        <div className="left-part lg:w-1/2 w-[90%]  flex justify-center items-center flex-col">
          <h2 className="text-center w-1/2 text-2xl mb-4">Login Form</h2>
          <form
            action="#"
            className=" lg:w-1/2  w-full min-h-[300px] px-4 flex justify-center flex-col gap-6 pt-6 bg-gray-200 rounded-xl"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="email"
              className="w-full  px-4 py-2 rounded-md"
              placeholder="abc@email.com"
              onChange={(e) => {
                changeHandler(e);
              }}
              name="email"
              value={formData.email}
            />
            <div className="input flex items-center  rounded-md pr-4 bg-white">
              <input
                type={showPass ? "password" : "text"}
                className="w-full  px-4 py-2 focus:outline-none"
                placeholder="Password"
                onChange={(e) => {
                  changeHandler(e);
                }}
                name="password"
                value={formData.password}
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div>
              <button className="w-full  px-4 py-2 hover:opacity-90 rounded-md bg-[#4E50FD] text-white">
                {loading ? "loading..." : "Submit"}
              </button>

              <p className="opacity-80">
                do not have an account?
                <span className="text-[#FF4F5A] ">
                  <Link to="/Signup">register</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="right-part w-1/2 h-[500px] hidden lg:block">
          <img
            src="/login.jpg"
            alt="register-png"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
