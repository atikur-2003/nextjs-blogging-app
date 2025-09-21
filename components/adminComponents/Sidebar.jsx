"use client"
import { assets } from "@/Assets/assets"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-lg">
        <div className="px-4 py-5 border-b">
          <Link href="/">
            <Image src={assets.logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <nav className="p-4 space-y-4">
          <Link
            href="/admin/addBlog"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Image src={assets.add_icon} alt="add-icon" className="w-6" />
            <p className="text-base font-medium">Add Blog</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Image src={assets.blog_icon} alt="blog-icon" className="w-6" />
            <p className="text-base font-medium">Blog List</p>
          </Link>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow px-4 py-3 z-20">
        <Link href="/">
          <Image src={assets.logo} alt="logo" className="w-28" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 md:hidden`}
      >
        <div className="px-4 py-5 border-b flex justify-between items-center">
          <Link href="/">
            <Image src={assets.logo} alt="logo" className="w-28" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="focus:outline-none">
            ✕
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link
            href="/admin/addBlog"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Image src={assets.add_icon} alt="add-icon" className="w-6" />
            <p className="text-base font-medium">Add Blog</p>
          </Link>
          <Link
            href="/admin/blogList"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Image src={assets.blog_icon} alt="blog-icon" className="w-6" />
            <p className="text-base font-medium">Blog List</p>
          </Link>
        </nav>
      </div>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  )
}

export default Sidebar
