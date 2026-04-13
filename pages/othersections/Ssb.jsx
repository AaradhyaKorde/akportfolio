import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Ssb = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mission SSB
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Empowering Engineers to Join the Indian Armed Forces through
            comprehensive training, expert mentorship, and exclusive insights
            from military officials.
          </p>
        </div>

        {/* What is Mission SSB Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
              What is Mission SSB?
            </h2>
            <p className="text-gray-300 mb-6">
              Mission SSB is an exclusive initiative by NOXALGO LLP designed to
              support engineers who aspire to join the Indian Armed Forces
              through the Services Selection Board (SSB) process.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Comprehensive Preparation
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Exclusive Podcasts with Military Officials
              </li>
              <li className="flex items-start">
                <span className="text-[#fffff0] mr-2">•</span>
                Mentorship and Guidance
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/5.jpg"
              alt="SSB Training"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Program Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Holistic Training
            </h3>
            <p className="text-gray-300">
              Comprehensive modules covering psychological tests, group tasks,
              interviews, and physical training.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Expert Mentorship
            </h3>
            <p className="text-gray-300">
              One-on-one guidance from former SSB officers and successful
              candidates.
            </p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
              Tech Integration
            </h3>
            <p className="text-gray-300">
              AI-powered assessments and virtual training modules for enhanced
              preparation.
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
              &quot;Mission SSB not only prepared me for the selection board but
              also instilled a sense of discipline and confidence that helped me
              clear the interview.&quot;
              <footer className="text-[#fffff0] mt-2">
                — Rajat A., Indian Army Officer
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Join the Mission SSB Revolution
          </h2>
          <p className="text-gray-300 mb-8">
            Your gateway to serving the nation awaits. Start your journey with
            NOXALGO LLP today.
          </p>
          <button className="bg-[#fffff0] text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ssb;
