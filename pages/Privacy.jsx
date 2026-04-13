import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Banner */}
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
              <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight text-left">
                Privacy Policy
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                We value your privacy and are committed to protecting your data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert prose-lg">
          <div className="mb-12 text-center">
            <p className="text-gray-400">Last Updated: November 17, 2024</p>
            <p className="mt-4 text-lg text-gray-300">
              Welcome to NOXALGO LLP&apos;s Privacy Policy. This policy outlines how
              we collect, use, disclose, and safeguard your information.
            </p>
          </div>

          {/* Information Collection Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Information We Collect
            </h2>

            <div className="space-y-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>
                    Name, Email Address, Phone Number, and Contact Information
                  </li>
                  <li>Company Details (for business entities)</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Technical Information
                </h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>IP Address, Browser Type, and Operating System</li>
                  <li>Cookies and Tracking Technologies</li>
                  <li>Usage Data and Navigation Patterns</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Financial Information
                </h3>
                <p className="text-gray-300">
                  Payment information is processed securely through third-party
                  payment gateways and is not stored on our servers.
                </p>
              </div>
            </div>
          </section>

          {/* Data Usage Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-white">
              How We Use Your Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Service & Support
                </h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide and maintain services</li>
                  <li>Respond to inquiries</li>
                  <li>Personalize experience</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Business & Marketing
                </h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Send newsletters and updates</li>
                  <li>Inform about new services</li>
                  <li>Promotional communications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional sections following similar pattern... */}

          {/* Contact Section */}
          <section className="mt-16 bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="text-gray-300">
              <p className="font-semibold">NOXALGO LLP</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@noxalgo.com"
                  className="text-blue-400 hover:text-blue-300">
                  privacy@noxalgo.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
