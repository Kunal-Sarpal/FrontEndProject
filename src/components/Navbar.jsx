import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isHovered, setIsHovered] = useState(null);
  const [showPhotos, setShowPhotos] = useState(false);

  const categories = [
    "Topwear",
    "T-Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Sweatshirts",
    "Sweaters",
    "Jackets",
    "Blazers & Coats",
    "Suits",
    "Rain Jackets",
    "Indian & Festive Wear",
    "Kurtas & Kurta Sets",
    "Sherwanis",
    "Nehru Jackets",
    "Dhotis",
    "Bottomwear",
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Shorts",
    "Track Pants & Joggers",
    "Innerwear & Sleepwear",
    "Briefs & Trunks",
    "Boxers",
    "Vests",
    "Sleepwear & Loungewear",
    "Thermals",
    "Plus Size",
    "Footwear",
    "Casual Shoes",
    "Sports Shoes",
    "Formal Shoes",
    "Sneakers",
    "Sandals & Floaters",
    "Flip Flops",
    "Socks",
    "Personal Care & Grooming",
    "Sunglasses & Frames",
    "Watches",
    "Sports & Active Wear",
    "Sports Shoes",
    "Sports Sandals",
    "Active T-Shirts",
    "Track Pants & Shorts",
    "Tracksuits",
    "Jackets & Sweatshirts",
    "Sports Accessories",
    "Swimwear",
    "Gadgets",
    "Smart Wearables",
    "Fitness Gadgets",
    "Headphones",
    "Speakers",
    "Fashion Accessories",
    "Wallets",
    "Belts",
    "Perfumes & Body Mists",
    "Trimmers",
    "Deodorants",
    "Ties, Cufflinks & Pocket Squares",
    "Accessory Gift Sets",
    "Caps & Hats",
    "Mufflers, Scarves & Gloves",
    "Phone Cases",
    "Rings & Wristwear",
    "Helmets",
    "Bags & Backpacks",
    "Luggages & Trolleys",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative px-14">
      <div className="w-full px-3 md:px-0">
        <div className="flex justify-between py-2 items-center">
          <div className="gap-8 justify-center items-center hidden md:flex">
            <div
              onMouseEnter={() => setIsHovered("shop")}
              onMouseLeave={() => setIsHovered(null)}
              className={
                activeTab === "shop"
                  ? "font-normal cursor-pointer relative border-t-4 "
                  : "cursor-pointer relative"
              }
            >
              <div className="text-sm font-semibold">SHOP</div>
              {isHovered === "shop" && (
                <div className="absolute top-full left-0 bg-white w-[60vw] h-fit border  border-gray-300 shadow-lg rounded-md p-4 grid grid-cols-4 gap-2 duration-200">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className={
                        [
                          "Topwear",
                          "T-Shirts",
                          "Casual Shirts",
                          "Gadgets",
                          "Fashion Accessories",
                          "Formal Shirts",
                        ].includes(category)
                          ? "text-red-500 text-lg font-semibold"
                          : "text-xs  "
                      }
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div
              className="text-lg text-red-500  relative"
              onMouseEnter={() => setShowPhotos(true)}
              onMouseLeave={() => setShowPhotos(false)}
            >
              <div className="text-sm font-semibold">STUDIO</div>
              {showPhotos && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 w-96 h-96 shadow-lg rounded-md p-2 grid duration-200">
                  <div className="text-zinc-500">Explore New Fashion 
                  <p className="text-sm">Your daily inspiration for everything fashion</p>  
                  </div>
                
                  <img className="w-full h-full"
                    src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                    alt="Studio"
                  />
                  <button className="text-sm border-[2px] border-zinc-500 rounded-lg m-1 text-zinc-500">Explore {"->"}</button>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setIsHovered("about")}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleTabClick("about")}
              className={
                activeTab === "about"
                  ? "font-normal cursor-pointer relative"
                  : "cursor-pointer relative"
              }
            >
             <div className="text-sm font-semibold">ABOUT</div>
              {isHovered === "about" && (
                <div className="absolute top-full left-0 bg-white w-64 h-64 border border-gray-300 shadow-lg rounded-md p-4">
                  <div>About Us</div>
                  <div>Our Team</div>
                </div>
              )}
            </div>
           
            <div
              onMouseEnter={() => setIsHovered("contact")}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleTabClick("contact")}
              className={
                activeTab === "contact"
                  ? "font-normal cursor-pointer relative"
                  : "cursor-pointer relative"
              }
            >
              <div className="text-sm font-semibold">CONTACT</div>
              {isHovered === "contact" && (
                <div className="absolute top-full left-0 bg-white w-64 h-64 border border-gray-300 shadow-lg rounded-md p-4">
                  <h1 className="text-red-500 text-xl font-semibold">{`Kunal Production's`}</h1>
                  <div className="text-sm">sarpalkunal7@gmail.com</div>
                  <div className="text-sm">+91 7814505429</div>
                  <div className="border-[1px] p-3 mt-28 border-zinc-500 rounded-md justify-center items-center flex  text-sm bg-red-500 text-white">Contact Us</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="text-xl flex justify-center items-center">
              <CiBag1 />
            </div>
            <div className="font-bold text-lg animate-pulse">3NT3.FASHION</div>
          </div>
          <div className="flex gap-6 justify-center items-center">
          
            <div className="text-xl text-zinc-500 border-2 border-zinc-400 w-44 rounded-full px-2 py-1 hover:border-2 hover:border-blue-300">
               <div className="flex justify-between ">
<div className="text-xs">Search..</div>
              <IoSearch />
               </div>
            </div>
            <div className="text-lg text-zinc-500">
              <FaRegBell />
            </div>
            <div>
              <button className="border-[1px] border-zinc-400 p-1 px-2 rounded-full w-28 flex items-center justify-center gap-3 text-md font-semibold text-zinc-600">
                <div>My Cart </div>
                <div>
                  <IoBagHandleOutline />
                </div>
              </button>
            </div>
            <div
              className="w-8 h-8 border-[1px] border-black rounded-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ><img className="object-cover w-full h-full rounded-full"src="https://images.unsplash.com/photo-1625595234473-c00c86c73353?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
