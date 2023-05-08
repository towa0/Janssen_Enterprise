import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link, animateScroll as scroll } from "react-scroll";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handeClick = () => setNav(!nav);
  const handeClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[90px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-1xl font-bold mr-64 sm:text-4xl ">
            Janssen <br /> Enterprise
          </h1>
          <ul className="hidden md:flex ml-14">
            <li>
              <Link to="home" smooth={true} offset={50} duration={500} />
              <button className="border-none bg-transparent text-black mr-7">
                Home
              </button>
            </li>
            <li>
              <Link to="about" smooth={true} offset={50} duration={500} />
              <button className="border-none bg-transparent text-black mr-7">
                About
              </button>
            </li>

            <li>
              <Link to="support" smooth={true} offset={50} duration={500} />
              <button className="border-none bg-transparent text-black mr-7">
                Support
              </button>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={50} duration={500} />
              <button className="border-none bg-transparent text-black mr-7">
                Platforms
              </button>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={50} duration={500} />
              <button className="border-none bg-transparent text-black mr-7">
                Pricing
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-7">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handeClick}>
          {!nav ? (
            <GiHamburgerMenu className="w-5" />
          ) : (
            <GrFormClose className="w-5" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li>
          <Link onClick={handeClose} to="home" smooth={true} offset={50} duration={500} />
          <button className="border-none bg-transparent text-black mr-7">
            Home
          </button>
        </li>
        <li>
          <Link onClick={handeClose} to="about" smooth={true} offset={50} duration={500} />
          <button className="border-none bg-transparent text-black mr-7">
            About
          </button>
        </li>

        <li>
          <Link onClick={handeClose} to="support" smooth={true} offset={50} duration={500} />
          <button className="border-none bg-transparent text-black mr-7">
            Support
          </button>
        </li>
        <li>
          <Link to="platforms" smooth={true} offset={50} duration={500} />
          <button className="border-none bg-transparent text-black mr-7">
            Platforms
          </button>
        </li>
        <li>
          <Link onClick={handeClose} to="pricing" smooth={true} offset={50} duration={500} />
          <button className="border-none bg-transparent text-black mr-7">
            Pricing
          </button>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
