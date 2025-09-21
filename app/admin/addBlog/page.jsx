"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const addBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    author: "",
    authorImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formData.title);
    formData.append("description", formData.description);
    formData.append("image", formData.image);
    formData.append("category", formData.category);
    formData.append("author", formData.author);
    formData.append("authorImg", formData.authorImg);

    const response = await axios.post("/api/blog", formData);
    
    if (response.data.success) {
      toast.success(response.data.msg);
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="min-h-screen py-7 p-4">
      <div className="w-full max-w-1xl  rounded-lg shadow-lg p-8">
        <h1 className="text-1xl font-bold text-center mb-6">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write blog description..."
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="file"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
            >
              <option value="Select A Category">Select A Category</option>
              <option value="Technology">Technology</option>
              <option value="Startup">Startup</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* Author */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                required
                className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Author Image URL
              </label>
              <input
                type="file"
                name="authorImage"
                value={formData.authorImage}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-green-500 focus:border-none outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border border-green-500 text-green-500 hover:bg-green-500 py-3 rounded-lg hover:text-white cursor-pointer transition"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default addBlog;
