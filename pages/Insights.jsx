import React from "react";
import Blogcard from "./components/Blogcard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import blogs from "../utils/blogs";
export default function Insights() {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutbanner1.jpg"
            alt="Banner background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl px-4">
            <div className="text-left mx-20">
              <h1 className="text-4xl md:text-4xl font-semibold text-white leading-tight text-left">
                Stay Up-to-Date with Our Latest Insights and Expertise.
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                Discover the latest trends, releases and news in the sneaker
                world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Blogcard
                key={blog.id}
                image={blog.image}
                heading={blog.heading}
                blog={blog.blog}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
