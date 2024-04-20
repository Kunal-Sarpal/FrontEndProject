import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState
import axios from "axios"; // Import axios
import Marquee from "react-fast-marquee";

import "./Marquee.css";

function Products() {
  const [products, setProducts] = useState([]); // Initialize products state

  // Function to fetch data and update state
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="flex flex-wrap gap-2  mt-16  justify-center z-40 relative bg-zinc-200 md:shadow-sm   rounded-xl">
      <div className="w-full  h-48 ">
        <Marquee className="h-full uppercase text-5xl shadow-none shadow-black">
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-105 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name hover:scale-110 transition-all duration-300 ">
              Zara
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300 ">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              H&M
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Gucci
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Nike
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Adidas
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Louis Vuitton
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Prada
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Chanel
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Versace
            </div>
          </div>
          <div className="text-center bg-white rounded-lg p-8 shadow-lg w-52  md:w-72 hover:scale-110 transition-all duration-300">
            <div className="md:text-2xl text-sm   font-semibold m-2 text-zinc-600 brand-name  transition-all duration-300 ">
              Calvin Klein
            </div>
          </div>
        </Marquee>
      </div>

      {products.map((item, index) => (
        <div onClick
          key={index}
          className=" md:w-72 w-80  transition-all duration-150  bg-zinc-200 relative h-[50vh]  hover:shadow-lg hover:shadow-zinc-500 mb-10 hover:scale-105"
        >
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="object-cover w-full h-full"
              src={item.image}
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-sm tracking-tight text-slate-900">
                {item.title}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-2xl font-normal text-slate-900">
                  ${item.price}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  $699
                </span>
              </p>
              <div className="flex items-center w-32 absolute right-0">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <svg
                    key={rating}
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
            <a
              href="#"
              className=" absolute shadow-xl shadow-zinc-400 flex items-center justify-center  px-5 py-2.5 text-center text-sm font-medium  hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 bottom-[-20px] bg-white text-zinc-900 rounded-full w-3/4 left-9 transition-all duration-200"
            >
              <svg  
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
