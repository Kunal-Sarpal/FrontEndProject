/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";



function Navbar() {
  return (
    <div className="w-full px-3 md:px-0">
      <div className="flex justify-between py-2 items-center ">
        <div className=" gap-8 justify-center items-center hidden md:flex">
          <div>Home</div>
          <div className="font-bold">
            Shop <span className="block trasnlate-ori"></span>
          </div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-2">
          <div className="text-2xl flex justify-center items-center">
            <CiBag1 />
          </div>
          <div className="font-bold text-lg">GLAMORA</div>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="text-xl text-zinc-500">
            <IoSearch />
          </div>
          <div className="text-lg text-zinc-500">
            <FaRegBell />
          </div>
          <div>
            <button className="border-[1px] border-zinc-400 p-1 px-2 rounded-full w-28 flex items-center justify-center gap-3 text-md font-semibold text-zinc-600 ">
              <div>My Cart </div>
              <div>
                <IoBagHandleOutline />{" "}
              </div>
            </button>
          </div>
          <div className="w-8 h-8 border-[1px] border-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
