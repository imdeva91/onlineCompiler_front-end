import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { editor } from "../../context/EditorContext";
import profile from "../../assets/profile.svg";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { user, setUser } = useContext(editor);
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    toast.success("Logout succsesfully", {
      position: "top-right",
      autoClose: 5000,
    });
    navigate("/");
  };
  return (
    <nav className="h-[80px] flex items-center justify-between shadow-sm px-10">
      <div className="py-3">
        <Link to="/" className="flex items-center gap-3">
        <img className="w-[50px] h-[50px] " src={logo} alt="logo" />
        <h1 className="font-semibold text-xl "><span className="bg-blue-600 text-white py-1 px-1 rounded">COD</span><span className="text-blue-600">ERS</span></h1>
        </Link>
      </div>
      <div className="flex items-center gap-10 ">
        <div className="flex items-center gap-5 border-r-2 px-10 ">
          <Link to="search">
          <BsSearch className="cursor-pointer w-[35px] h-[35px] hover:bg-gray-200 px-2 py-2 
           hover:rounded-[50%]" />
          </Link>
          <LuSunMoon className="cursor-pointer w-[35px] h-[35px] hover:bg-gray-200 px-2 py-2  hover:rounded-[50%]" />
          <h1 className="cursor-pointer  hover:bg-gray-200 px-2 py-2  hover:rounded">
            CHALLENGES
          </h1>
        </div>
        {user ? (
          <div className="h-[50px] relative  cursor-pointer">
            <Popover className="relative">
              <PopoverButton className="outline-none border-none">
                <img
                  src={profile}
                  alt="profile"
                  className="h-[50px] border-2  border-black rounded-[50%] w-[50px] "
                />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col justify-center items-center gap-2 bg-slate-200 w-[140px] py-3"
              >
                <Link to="/profile" className="hover:bg-slate-50 px-7 py-2">
                  My account
                </Link>
                <button
                  className="hover:bg-slate-50 px-11 py-2"
                  onClick={() => logOut()}
                >
                  LogOut
                </button>
              </PopoverPanel>
            </Popover>
          </div>
        ) : (
          <button>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black  hover:bg-gray-200 px-2 py-2  hover:rounded"
              }
            >
              LOGIN
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
