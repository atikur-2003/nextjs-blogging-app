import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-[#374151] mb-6">About Us</h1>

      <p className="text-lg text-gray-600 mb-6">
        Welcome to our blog! We share insights, guides, and stories on{" "}
        <span className="font-medium text-gray-800">lifestyle</span>,{" "}
        <span className="font-medium text-gray-800">technology</span>, and{" "}
        <span className="font-medium text-gray-800">startups</span>. 
        Our goal is to provide valuable content that helps you grow, 
        stay inspired, and stay ahead in your personal and professional life.
      </p>

      <h2 className="text-2xl font-semibold text-[#374151] mb-4">
        What We Write About
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li><strong>Lifestyle:</strong> Tips for a balanced and productive life.</li>
        <li><strong>Technology:</strong> Guides on learning, tools, and future trends.</li>
        <li><strong>Startups:</strong> Insights on entrepreneurship and growth strategies.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#374151] mb-4">
        Our Mission
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        We believe knowledge should be simple, practical, and inspiring. 
        Through our blogs, we aim to empower readers with fresh perspectives 
        and actionable advice for everyday challenges.
      </p>

      <h2 className="text-2xl font-semibold text-[#374151] mb-4">
        Meet the Author
      </h2>
      <p className="text-lg text-gray-600">
        Hi, I’m <span className="font-medium text-gray-800">Alex Bennett</span>, 
        the writer behind this blog. With a passion for technology and lifestyle design, 
        I share my learnings, experiments, and experiences to help others achieve 
        balance and success in their journey.
      </p>
    </div>
  );
};

export default AboutPage;
