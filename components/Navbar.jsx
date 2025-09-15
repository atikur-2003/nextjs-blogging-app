"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from 'next-auth/react'; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  // Function to handle logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' }); 
  };

  return (
    <nav className="flex items-center justify-between px-4 lg:px-10 py-3 shadow-lg">
      {/* Brand/Title on the left */}
      <div>
        <Link href="/">
          <Image src={assets.logo} alt="logo" className="w-36"></Image>
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Nav links and auth button for desktop */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-lg transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditional Auth button for desktop */}
      <div className="hidden md:flex">
        {status === 'authenticated' ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile menu, shown only when `isOpen` is true */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden w-full absolute top-16 left-0 bg-gray-700 p-4 transition-all duration-300 ease-in-out z-10`}
      >
        <ul className="flex flex-col space-y-4 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            {status === 'authenticated' ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
