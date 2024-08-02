import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="wrapper w-full h-screen flex justify-center items-center">
        <img
          src="/bg.jpg"
          alt="bg-img"
          className="w-[100%] h-[100%] brightness-[0.3] bg-img "
        />
        <div className="content  md:w-[50%]  flex flex-col gap-10 absolute  md:bottom-[40%] md:left-[25%] sm:bottom-[40%] sm:w-[90%] ">
          <h2 className="text-4xl font-semibold text-center text-white">
            Welcome to Authentication{" "}
            <span className="text-yellow-400">Mern App</span>
          </h2>
          <p className="text-center  opacity-50 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit accusantium eos odio facere cum dignissimos molestias
            neque similique, tempora fugiat!
          </p>
          <div className="btn-section  flex justify-center items-center gap-10 text-xl font-sans">
            <button className=" text-[18px] w-[25%] rounded bg-white  py-2">
              <Link to="/Login">Login</Link>
            </button>
            <button className=" text-[18px] w-[25%] rounded py-2 bg-yellow-400">
              <Link to="/Signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
