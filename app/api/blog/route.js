import { connectDB } from "@/lib/config/db";
import { BlogModel } from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

// No top-level LoadDB() - connect inside handlers instead

export async function GET() {
  return NextResponse.json({ msg: "api working" });
}

export async function POST(req) {
  try {
    // Connect to DB here (safe to call multiple times)
    await connectDB();

    // Only allow POST
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }

    const formData = await req.formData();

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      image: formData.get("image"),
      author: formData.get("author"),
      author_img: formData.get("authorImg"),
    };

    // Basic validation (add more based on your schema)
    if (!blogData.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    if (!blogData.description) {
      return NextResponse.json({ error: "Description is required" }, { status: 400 });
    }
    // Add similar checks for other required fields if needed

    const createdBlog = await BlogModel.create(blogData);
    console.log("Data posted successfully");

    // Return success response with optional data
    return NextResponse.json({ success: true, blog: createdBlog }, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Failed to create blog", details: error.message }, { status: 500 });
  }
}