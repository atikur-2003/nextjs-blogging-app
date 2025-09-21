import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Blogs = () => {
  return (
    <div className="py-20">
      <Navbar></Navbar>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
