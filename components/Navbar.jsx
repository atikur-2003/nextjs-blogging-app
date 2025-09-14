import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full bg-white flex items-center justify-between shadow-md py-3 px-5 md:px-10 lg:px-16">
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
    </div>
  );
};

export default Navbar;
