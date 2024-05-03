/* eslint-disable no-unused-vars */
import React from "react";

function HeaderCard() {
  return (
    <div>
      <div className="grid grid-cols-12 md:gap-x-10  rounded-xl py-10  sm: w-full md:w-full   sm:rounded-none overflow-hidden bg-zinc-200 px-14">
        <div className=" col-span-12 lg:col-span-6 h-[90vh] w-full  ">
          <div className="h-[70%] w-full md:rounded-3xl overflow-hidden rounded-none">
            <img
              className="object-cover  object-left w-full h-full"
              src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full overflow-hidden">
            <div className="font-normal md:text-5xl mt-5 text-4xl">
              NADETTA COAT BEIGE
            </div>
            <div className="mt-3 flex gap-2">
              <div>⭐⭐⭐⭐⭐</div>{" "}
              <div className="text-zinc-500">(4.8 from 328 Reviwes)</div>
            </div>
            <div className="flex gap-6 md:gap-16 mt-[-3px] ">
              <div>
                <div className="font-bold  mt-5  text-xs md:text-sm w-32 text-zinc-600">
                  Select Color
                </div>
                <div className="flex mt-3 gap-2 font-serif ">
                  <div className="bg-black border-zinc-300  rounded-full w-7 h-7"></div>
                  <div className="bg-zinc-400  border-purple-700 border-3 rounded-full w-7 h-7"></div>
                </div>
              </div>
              <div>
                <div className="font-bold  mt-5 text-xs md:text-sm text-zinc-600">
                  Select Size
                </div>
                <div
                  className="flex gap-2  mt-3  md:gap-6  absolute
                md:flex md:static left-30"
                >
                  <div className=" md:w-16 justify-center flex items-center px-2 py-1 border-[2px] border-zinc-400 rounded-xl w-14">
                    X
                  </div>
                  <div className=" w-14 md:w-16  justify-center flex items-center px-2 py-1 border-[2px] border-zinc-400 rounded-xl">
                    X
                  </div>
                  <div className=" w-14 md:w-16  justify-center flex items-center px-2 py-1 border-[2px] border-zinc-400 rounded-xl">
                    X
                  </div>
                  <div className=" w-14  md:w-16  justify-center flex items-center px-2 py-1 border-[2px] bg-zinc-900 text-zinc-200 border-zinc-900 rounded-xl">
                    X
                  </div>
                  <div className=" w-14 md:w-16  justify-center  items-center px-2 py-1 border-[2px] border-zinc-400 rounded-xl hidden md:flex">
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-6 h-[90vh] ">
          <div className="h-[70%] w-full rounded-3xl overflow-hidden ">
            <div className="flex gap-1">
              <div className=" h-80 w-full">
                <img
                  className="w-full h-full object-cover  rounded-2xl object-left-bottom"
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className=" h-80 w-full">
                <img
                  className="w-full h-full object-cover  rounded-2xl object-left-bottom"
                  src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="h-56 w-full mt-1">
              <img
                className="w-full h-full object-cover object-center rounded-2xl "
                src="https://images.unsplash.com/flagged/photo-1554033750-2137b5cfd7ce?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="font-semibold px-14">Total Price </div>{" "}
          </div>
          <div className="h-[30%] w-full">
            <div className="flex gap-4">
              <div className=" text-6xl mt-5 font-semibold ">$699 </div>
              <div className="flex justify-center items-center text-3xl font-semibold text-zinc-400 line-through tracking-wide">
                $600
              </div>
            </div>
            <div className="flex justify-around mt-5">
              <div className="w-[45%] border-2 border-black  rounded-full p-3 gap-2 justify-center flex items-center ">
                ADD TO CART
              </div>
              <div className="w-[45%] border-2 border-black  rounded-full p-3 gap-2 bg-zinc-900 text-white  justify-center flex items-center ">
                BUY IT NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
