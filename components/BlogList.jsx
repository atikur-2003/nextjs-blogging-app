"use client"
import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {

  const [menu, setMenu] = useState("All");

  return (
    <div className="px-4 md:px-10 lg:px-16 my-16">
      {/* blog section heading */}

      <div>
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#374151]">
            Latest Blogs
          </h1>
        </div>
        <div className="flex gap-4 justify-center mt-7">
          <button onClick={()=>setMenu('All')} className={menu==='All'?"text-green-500":"cursor-pointer"}>All</button>
          <button onClick={()=>setMenu('Technology')} className={menu==='Technology'?"text-green-500":"cursor-pointer"}>Technology</button>
          <button onClick={()=>setMenu('Startup')} className={menu==='Startup'?"text-green-500":"cursor-pointer"}>Startup</button>
          <button onClick={()=>setMenu('Lifestyle')} className={menu==='Lifestyle'?"text-green-500":"cursor-pointer"}>Lifestyle</button>
        </div>
      </div>

      {/* blog item section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
        {blog_data.filter((item)=>menu==='All'?true:item.category===menu).map((item, index) => (
          <BlogItem key={index} item={item}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
