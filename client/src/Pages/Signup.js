import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/register", formData);
      console.log(response.data);
      toast(response.data.message);
      navigate("/Login");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div className="wrapper w-full min-h-[100vh] flex justify-center items-center  ">
        <div className="left-part lg:w-1/2 w-[90%] md:w[70%] flex justify-center items-center flex-col">
          <h2 className="text-center w-1/2 text-2xl mb-4">
            Registeration Form
          </h2>
          <form
            action="#"
            className=" lg:w-1/2 w-full min-h-[380px] justify-center px-4 flex flex-col gap-6 pt-6 bg-gray-200 rounded-xl"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md"
              placeholder="UserName"
              name="userName"
              value={formData.userName}
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <input
              type="email"
              className="w-full  px-4 py-2 rounded-md"
              placeholder="abc@email.com"
              name="email"
              value={formData.email}
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <div className="input flex items-center   rounded-md pr-4 bg-white">
              <input
                type={showPass ? "password" : "text"}
                className="w-full  px-4 py-2 focus:outline-none"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
              <span
                className="h-full ml-2"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div>
              <button className="w-full active:scale-[1.01] hover:opacity-80 transition-all delay-100   px-4 py-2 rounded-md bg-[#FF4F5A] active:bg-[#e40918] text-white">
                Submit
              </button>

              <p className="opacity-80">
                already have an account?
                <span className="text-[#FF4F5A] ">
                  <Link to="/Login">login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="right-part w-1/2 h-[500px] hidden lg:block">
          <img
            src="/register.jpg"
            alt="register-png"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
