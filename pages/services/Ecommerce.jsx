import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              E-commerce Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with our cutting-edge e-commerce solutions
              that drive growth and enhance customer experience.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <div className="text-purple-500 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your E-commerce Journey?
            </h2>
            <p className="text-lg mb-6">
              Let&apos;s create your success story together
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Features data
const features = [
  {
    icon: "🛍️",
    title: "Custom E-commerce Development",
    description:
      "Tailored solutions that match your unique business requirements and goals.",
  },
  {
    icon: "🔒",
    title: "Secure Payment Integration",
    description:
      "Implementation of robust payment gateways and security measures.",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    description:
      "Responsive interfaces that provide seamless shopping experiences across all devices.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Fast-loading pages and optimized user experience for better conversion rates.",
  },
  {
    icon: "🔄",
    title: "Inventory Management",
    description:
      "Advanced systems to track and manage your product inventory efficiently.",
  },
  {
    icon: "📊",
    title: "Analytics Integration",
    description:
      "Detailed insights and reporting to track your business growth and customer behavior.",
  },
];

export default Ecommerce;
