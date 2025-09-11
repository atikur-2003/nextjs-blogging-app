import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
        {/* navbar */}
      <div className="flex items-center justify-between shadow-md py-3 px-5 md:px-10 lg:px-16">
        <div>
          <Link href="/">
            <Image src={assets.logo} alt="logo" className="w-36"></Image>
          </Link>
        </div>
        <div>
          <Link href="/">
            <button className="px-4 py-1 text-lg border rounded-lg cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* heading content */}
      <div className="py-10 md:py-14 lg:py-20 px-5 md:px-10 lg:px-16">
        <h1 className="text-3xl lg:text-5xl text-[#374151] font-bold mb-4">Welcome to Blogger</h1>
        <p className="text-lg text-gray-600 max-w-4xl">Welcome to blogger app! Here you'll find a wide range of articles about Technology, Startup and Lifestyles. You can login to this website and can read your preferred article.</p>
      </div>
    </div>
  );
};

export default Header;
