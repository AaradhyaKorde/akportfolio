import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mentorship = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mentorship Programs
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Empowering the Next Generation of Innovators with NOXALGO LLP
            through personalized guidance, hands-on experience, and industry
            expertise.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
              Why Choose NOXALGO LLP?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  Hands-On Guidance from Industry Experts
                </h3>
                <p className="text-gray-300">
                  Connect with seasoned professionals who bring extensive
                  experience in software development, AI, blockchain, and
                  digital marketing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  Holistic Development Focus
                </h3>
                <p className="text-gray-300">
                  Beyond technical skills, we emphasize soft skills development
                  including communication, leadership, and problem-solving
                  abilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  Community and Networking
                </h3>
                <p className="text-gray-300">
                  Join The Midnight Code Guild - our vibrant community of
                  developers, innovators, and tech enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/2.jpg"
              alt="Mentorship"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Beginner to Pro Developer Track
            </h3>
            <p className="text-gray-300">
              Build a strong foundation in coding and software development.
              Perfect for aspiring developers entering the tech industry.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Advanced Developer Upskilling
            </h3>
            <p className="text-gray-300">
              Expand your expertise in AI, blockchain, or full-stack
              development. Designed for mid-level professionals.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Entrepreneur&apos;s Program
            </h3>
            <p className="text-gray-300">
              Transform your ideas into scalable businesses with guidance on
              product development and business strategy.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Success Stories
          </h2>
          <div className="space-y-6">
            <blockquote className="text-gray-300 italic">
              &quot;NOXALGO&apos;s mentorship program transformed my coding
              hobby into a full-fledged career. I&apos;m now working as a
              full-stack developer at a leading tech company.&quot;
              <footer className="text-[#fffff0] mt-2">
                — Richa K., Full-Stack Developer
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-gray-300 mb-8">
            Join NOXALGO LLP&apos;s mentorship programs and take the first step
            towards achieving your tech career goals.
          </p>
          <button className="bg-[#fffff0] text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentorship;
