import { blog_data } from "@/Assets/assets";
import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
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
          <button className="">All</button>
          <button className="">Technology</button>
          <button className="">Startup</button>
          <button className="">Lifestyle</button>
        </div>
      </div>

      {/* blog item card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
        {blog_data.map((item, index) => (
          <BlogItem key={index} item={item}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
