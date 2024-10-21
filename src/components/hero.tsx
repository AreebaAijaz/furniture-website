import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


const bgStyle = {
  backgroundImage: "url('./hero.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HeroBanner() {
  return (
    <section>
      <div
        style={bgStyle}
        className="h-screen text-white flex pt-2 flex-col"
      >
        {/* Navbar */}
        <div className="flex justify-between w-full">
          <div className="logo-section text-3xl font-extrabold p-3 pl-10 mx-9">
            <p>soudemy</p>
          </div>
          <div className="menus-section font-bold flex gap-x-10 p-5 mr-auto">
            <Link href="/">Home</Link>
            <Link href="./shop">Shop</Link>
            <Link href="./about">About us</Link>
            <Link href="./blog">Blog</Link>
          </div>
          <div className="menu-icons flex gap-x-10 p-6 mr-16">
            <FaSearch />
            <FaShoppingBag />
            <IoMdMenu />
          </div>
        </div>

        {/* Centered Content */}
        <div className="content text-white flex flex-col items-center justify-center text-center mx-auto flex-grow pb-48">
          <h1 className="text-3xl uppercase font-bold">All for your home</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            de<br/>consequuntur rem mollitia, voluptatem placeat
            quasi voluptates<br/>eligendi ullam corrupti.
          </p>
          <button className="px-10 py-3 mt-4 flex justify-center items-center border  border-white hover:bg-slate-600 hover:border-black">
             View More
        </button>
        </div>
        <div>
        <button className="h-16 w-7 bg-gray-400 flex justify-end items-center">
        </button>
      </div>
      </div>

    </section>
  );
}
