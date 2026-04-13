import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Midnight = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Midnight Code Guild
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Where Innovation Meets Community - A unique developer ecosystem
            dedicated to empowering tech enthusiasts worldwide through
            collaboration, learning, and growth.
          </p>
        </div>

        {/* What is MCG Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
              What is the Midnight Code Guild?
            </h2>
            <p className="text-gray-300 mb-6">
              The Midnight Code Guild is a dynamic community brought to life by
              NOXALGO LLP, serving as a sanctuary for developers, creators, and
              innovators. Inspired by ancient wizards, we transform passion into
              successful careers and ventures.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Community-Driven Development
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Career Growth & Opportunities
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Innovation & Entrepreneurship Support
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/other1.png"
              alt="Midnight Code Guild"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Collaborative Learning
            </h3>
            <p className="text-gray-300">
              Join workshops, hackathons, and coding challenges to enhance your
              skills while working with fellow developers.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Career Advancement
            </h3>
            <p className="text-gray-300">
              Access exclusive job opportunities, mentorship programs, and
              resources for professional growth.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Innovation Hub
            </h3>
            <p className="text-gray-300">
              Transform your ideas into reality with support from our network of
              entrepreneurs and investors.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Ready to Join the Guild?
          </h2>
          <p className="text-gray-300 mb-8">
            Become part of a thriving community where code meets creativity.
            Start your journey with NOXALGO LLP today.
          </p>
          <button className="bg-[#fffff0] text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Midnight;
