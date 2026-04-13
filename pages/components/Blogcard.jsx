import React from "react";
import BackgroundGradient from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function Blogcard({ image, heading, blog, link }) {
  // Add prop validation
  if (!image || !heading || !link) {
    return (
      <div className="text-[#fffff0]">
        Missing required props for Blogcard component
      </div>
    );
  }

  // Limit blog text to 30 words
  const limitWords = (text, limit) => {
    if (!text) return '';
    const words = text.split(/\s+/);
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] px-6 py-2 mx-3 bg-zinc-900 border border-[#fffff0]">
        <Image
          src={image}
          alt={heading}
          height={400}
          width={400}
          className="object-cover w-full h-[250px] rounded-lg"
        />
        <h1 className="text-base sm:text-xl text-[#fffff0] mt-4 mb-2 font-semibold line-clamp-2">
          {heading}
        </h1>

        <p className="text-sm text-neutral-400 line-clamp-3">
          {limitWords(blog, 30)}
        </p>
        <div className="mt-4">
          <Link
            href={link}
            className="inline-block rounded-full px-4 py-2 text-sm font-medium text-[#fffff0] bg-zinc-800 hover:bg-zinc-700 transition-colors">
            Read More
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
}
