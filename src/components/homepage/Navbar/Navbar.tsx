"use client";

import { useState } from "react";
import { Icon } from "@/icons";
import { images } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Menu",
      path: "/",
    },
    {
      name: "Awards",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];
  return (
    <nav className="w-full flex justify-between items-center p-4 md:p-8">
      <div className="flex justify-start items-center">
        <Image height={40} width={40} src={images.gericht} alt="logo" />
      </div>
      <ul className="hidden md:flex flex-1 justify-center items-center list-none">
        {navItems?.map((nav, index) => (
          <li
            key={index}
            className="mx-4 cursor-pointer text-white hover:text-gray-400"
          >
            <a href={nav.path}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex justify-end items-center button-main">
        <a
          href="/"
          className="mx-4 text-white transition ease-in-out"
        >
          Book Table
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <Icon.menu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full transition ease-in-out flex flex-col items-center z-50">
            <Icon.restaurant
              fontSize={27}
              className="text-golden cursor-pointer absolute top-5 right-5"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="flex flex-col items-center list-none my-8 space-y-5">
              {navItems?.map((nav, index) => (
                <li
                  key={index}
                  className="text-yellow-600 text-2xl cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                >
                  <a href={nav.path}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
