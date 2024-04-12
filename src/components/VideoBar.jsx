import React from "react";
import video from "../VIdeo/kunal.mp4";
function VideoBar() {
  return (
    <div className="w-full h-screen  mt-16 shadow-sm shadow-zinc-400 rounded-xl" >
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 h-48   w-full md:text-5xl p-5 bg-zinc-100 flex justify-center  items-center text-xl text-start ">
            STYLISH WOMEN'S COATS → YOUR OUTERWEAR UPGRADE
          </div>
          <div className="col-span-6 h-48   w-full md:text-xl p-5 bg-zinc-100 flex items-center justify-around text-sm">
            <div className=" w-96">
              Stay cozy and stylish with our selection of women's coats! From
              classic trenches to warm parkas, we've got you covered in every
              season.
            </div>
          </div>
        </div>
        <div className=" h-[70vh] w-full relative ">
          <div className=" absolute h-full w-full backdrop-blur-sm bottom-0 flex justify-center items-center">
            {" "}
            <div className="text-7xl absolute font-normal bottom-0 p-4  text-zinc-900 mix-blend-difference flex-col flex justify-center items-center md:w-1/2  w-full h-full ">
           <div className="text-white md:text-3xl font-light text-2xl w-full flex justify-center"> NADETTA COAT BEIGE</div><div className="md:text-6xl font-semibold text-4xl">Timeless Style with Our <div className="md:text-5xl w-full flex justify-center text-black font-semibold ">Beige Coat Collection</div></div>
            </div>{" "}
          </div>
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            src={video}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default VideoBar;
