import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/User/userSlice";
import { persistor } from "../redux/store";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { userName } = currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutFun = () => {
    dispatch(logOut()); // Dispatch the logout action
    persistor.purge();
    navigate("/");
  };
  return (
    <div className="wrapper bg-black w-full min-h-14 text-white flex justify-end items-center  pr-10">
      <div className=" w-1/6 h-full flex justify-around   items-center">
        <div>{userName}</div>
        <button className="flex items-center gap-2" onClick={() => logOutFun()}>
          logout <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
