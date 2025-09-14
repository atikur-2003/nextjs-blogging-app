import React from "react";

const Banner = () => {
  return (
    <div className="py-10 mt-14 md:py-14 lg:py-20 px-5 md:px-10 lg:px-16">
      <h1 className="text-3xl lg:text-5xl text-[#374151] font-bold mb-4">
        Welcome to Blogger
      </h1>
      <p className="text-lg text-gray-600 max-w-4xl">
        Welcome to blogger app! Here you'll find a wide range of articles about
        Technology, Startup and Lifestyles. You can login to this website and
        can read your preferred article.
      </p>
    </div>
  );
};

export default Banner;
