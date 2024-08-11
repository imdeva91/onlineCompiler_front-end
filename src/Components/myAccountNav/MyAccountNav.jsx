import React from "react";
import { NavLink } from "react-router-dom";

const MyAccountNav = () => {
  return (
    <nav className="flex items-center  justify-around w-[60vw] h-[50px]">
      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-orange-400"
            : " hover:bg-gray-200 px-2 py-2  hover:rounded hover:text-black"
        }
      >
        PROFILE
      </NavLink>
      <NavLink
        to="/user/code"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-orange-400"
            : " hover:bg-gray-200 px-2 py-2  hover:rounded hover:text-black"
        }
      >
        CODE
      </NavLink>
      <NavLink
        to="post"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-orange-400"
            : " hover:bg-gray-200 px-2 py-2  hover:rounded hover:text-black"
        }
      >
        POST
      </NavLink>
      <NavLink
        to="/challenges"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-orange-400"
            : "  hover:bg-gray-200 px-2 py-2  hover:rounded hover:text-black"
        }
      >
        CHALLENGES
      </NavLink>
    </nav>
  );
};

export default MyAccountNav;
