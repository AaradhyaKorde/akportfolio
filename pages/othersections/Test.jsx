import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Test = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            NoxAlgo Employability Test
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Bridging the Skills Gap in Tech Industry - A comprehensive
            assessment platform designed to evaluate, validate and showcase your
            technical and soft skills to potential employers.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
              Why Choose NoxAlgo Test?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  Industry-Aligned Assessment
                </h3>
                <p className="text-gray-300">
                  Our tests are designed to evaluate practical skills and
                  real-world problem-solving abilities that top companies
                  actively seek in candidates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  Unmatched Opportunities
                </h3>
                <p className="text-gray-300">
                  Get fast-tracked to interviews with leading companies and
                  access exclusive job opportunities not available on
                  traditional platforms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#fffff0]">
                  AI-Powered Evaluation
                </h3>
                <p className="text-gray-300">
                  Experience fair and unbiased assessment through our advanced
                  AI-driven evaluation system with instant results and detailed
                  feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/3.jpg"
              alt="NoxAlgo Test"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#fffff0]">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
                1. Register
              </h3>
              <p className="text-gray-300">
                Sign up and choose your test category based on your skills and
                career goals.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
                2. Take the Test
              </h3>
              <p className="text-gray-300">
                Complete adaptive challenges that assess both technical and soft
                skills.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-4 text-[#fffff0]">
                3. Get Results
              </h3>
              <p className="text-gray-300">
                Receive instant results and get matched with relevant job
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Success Stories
          </h2>
          <div className="space-y-6">
            <blockquote className="text-gray-300 italic">
              &quot;The NoxAlgo Test was my gateway to landing a role at a
              leading tech firm. The practical challenges truly helped showcase
              my abilities.&quot;
              <footer className="text-[#fffff0] mt-2">
                — Priya K., Full-Stack Developer
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#fffff0]">
            Ready to Transform Your Career?
          </h2>
          <p className="text-gray-300 mb-8">
            Take the first step towards your dream job with the NoxAlgo
            Employability Test.
          </p>
          <button className="bg-[#fffff0] text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Start Your Assessment
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
