import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Hackathon = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Hackathons: Unleashing Innovation
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            At NOXALGO LLP, we create high-energy experiences where brilliant
            minds collaborate to solve real-world challenges and push the
            boundaries of technology.
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
              What Sets NOXALGO Hackathons Apart?
            </h2>
            <p className="text-gray-300 mb-6">
              Unlike typical corporate hackathons, we focus on fostering a
              culture of innovation, creativity, and practical problem-solving.
              Our events combine cutting-edge technology with real business
              challenges.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Industry-Relevant Challenges
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Expert Mentorship
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Global Participation
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/4.jpg"
              alt="Hackathon"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Real-World Impact
            </h3>
            <p className="text-gray-300">
              Solutions developed during our hackathons address actual business
              challenges and are ready for immediate implementation.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Learning Platform
            </h3>
            <p className="text-gray-300">
              Access to industry experts, mentorship, and resources to enhance
              your skills in software development, AI, and more.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Career Opportunities
            </h3>
            <p className="text-gray-300">
              Connect with potential employers, showcase your skills, and
              network with industry leaders.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Ready to Hack the Future?
          </h2>
          <p className="text-gray-300 mb-8">
            Join NOXALGO&apos;s next hackathon and be part of the innovation
            revolution.
          </p>
          <button className="bg-[#fffff0] text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Register Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hackathon;
