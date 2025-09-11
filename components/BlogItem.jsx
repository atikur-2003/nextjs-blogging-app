import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ item }) => {
  return (
    <div className="rounded-lg px-5 py-7 shadow-lg">
      <Image src={item.image} alt="item-image" className="rounded-lg"/>
      <p className="my-5">{item.category}</p>
      <h3>{item.title}</h3>
      <p className="my-3">{item.description}</p>
      <p className="flex items-center gap-2 mt-5">Read More <Image src={assets.arrow} alt="arrow icon"/></p>
    </div>
  );
};

export default BlogItem;
