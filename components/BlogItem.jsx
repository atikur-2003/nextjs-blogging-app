import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogItem = ({ item }) => {
  return (
    <div className="rounded-lg px-5 py-7 shadow-md hover:shadow-lg transition">
      <Image src={item.image} alt="item-image" className="rounded-lg"/>
      <p className="my-5 font-semibold">{item.category}</p>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="my-3 text-gray-600">{item.description.substring(0, 100) + "..."}</p>
      <Link href={`/blog/${item.id}`}>
      <p className="flex items-center gap-2 mt-5 cursor-pointer text-blue-500">Read More <FaArrowRightLong className="mt-1" /></p>
      </Link>
    </div>
  );
};

export default BlogItem;
