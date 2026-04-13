import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Let&apos;s Connect
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                I&apos;m always looking for new opportunities and collaborations. Feel free to reach out to me.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* LinkedIn */}
            <div className="text-center p-7 bg-zinc-900 rounded-lg border border-[#32456C] hover:border-[#fffff0] transition-all">
              <div className="flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32"
                  viewBox="0 0 448 512"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.36 107.3 0 82.3 0 52.7 0 23.6 24.36 0 54.84 0 85.2 0 109.6 23.6 109.6 52.7 109.6 82.3 85.17 107.3 54.84 107.3zm394.8 340.7h-92.4V302.4c0-34.7-12.5-58.4-43.6-58.4-23.8 0-37.9 16-44.1 31.4-2.3 5.4-2.8 12.9-2.8 20.5V448h-92.89s1.2-236.9 0-260.9h92.88v37c12.3-19 34.4-46.2 83.7-46.2 61.1 0 106.8 39.7 106.8 125.2zm0 0"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/aaradhya-korde/"
                className="text-gray-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/aaradhya-korde/
              </a>
            </div>

            {/* GitHub */}
            <div className="text-center p-7 bg-zinc-900 rounded-lg border border-[#32456C] hover:border-[#fffff0] transition-all">
              <div className="flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/AaradhyaKorde"
                className="text-gray-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/AaradhyaKorde
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-7 bg-zinc-900 rounded-lg border border-[#32456C] hover:border-[#fffff0] transition-all">
              <div className="flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <a
                href="mailto:aaradhyakorde.dev@gmail.com"
                className="text-gray-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                aaradhyakorde.dev@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-7 bg-zinc-900 rounded-lg border border-[#32456C] hover:border-[#fffff0] transition-all">
              <div className="flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-gray-400">+91 9920359684</p>
            </div>
          </div>
  

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 rounded-2xl border border-[#32456C] hover:border-[#fffff0] transition-all duration-300 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-200 mb-3 text-sm font-medium uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-zinc-800/80 border-2 border-[#32456C] rounded-lg focus:border-[#fffff0] focus:outline-none text-white placeholder-gray-500 transition-all duration-300 hover:bg-zinc-800"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-200 mb-3 text-sm font-medium uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-zinc-800/80 border-2 border-[#32456C] rounded-lg focus:border-[#fffff0] focus:outline-none text-white placeholder-gray-500 transition-all duration-300 hover:bg-zinc-800"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-200 mb-3 text-sm font-medium uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-900 border border-[#32456C] rounded-lg focus:border-[#fffff0] focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 bg-zinc-900 border border-[#32456C] rounded-lg focus:border-[#fffff0] focus:outline-none text-white"
                required></textarea>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-lg hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {submitStatus === "success" && (
                <span className="text-green-500">
                  Message sent successfully!
                </span>
              )}
              {submitStatus === "error" && (
                <span className="text-red-500">
                  Failed to send message. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
