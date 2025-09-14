"use client";
import { blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

const BlogDetails = ({ params }) => {
  const [data, setData] = useState(null);

  const blogId = use(params);

  const fetchBlogData = () => {
    for (let data of blog_data) {
      if (Number(blogId.id) === data.id) {
        setData(data);
        console.log(data);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div>
      <div></div>
      {data ? (
        <>
          <div className="bg-gray-200 text-center py-28">
            <h1 className="text-2xl md:text-3xl font-semibold">{data.title}</h1>
            <Image
              className="mx-auto w-14 mt-5"
              src={data.author_img}
              alt="author-image"
            ></Image>
            <p className="mt-2">{data.author}</p>
            <p className="mt-2">Category : {data.category}</p>
          </div>
          <div className="text-center mx-3 max-w-4xl md:mx-auto -mt-20 mb-10">
            <Image
              className="w-130 mx-auto rounded-lg"
              src={data.image}
              alt="Blog Image"
            ></Image>
            
            <p className="mt-5">{data.description}</p>
          </div>
        </>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default BlogDetails;
