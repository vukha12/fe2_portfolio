import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="m-10 flex fixed shadow-2xl">
      <ul className="flex flex-col space-y-2 text-1xl  p-6 justify-start items-start text-white">
        {navLinks.map((item) => (
          <li className=" relative">
            <a
              className="navbar-link hover:text-gray-300 transition duration-300"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
