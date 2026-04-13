import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Nocode = () => {
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
              No-Code Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build powerful applications without writing code using our no-code
              development platforms.
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
              Ready to Build Without Code?
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
    icon: "🎨",
    title: "Visual Development",
    description:
      "Create applications using intuitive drag-and-drop interfaces.",
  },
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    description:
      "Quick iteration and testing of ideas without technical barriers.",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    description: "Automate business processes without complex programming.",
  },
  {
    icon: "📱",
    title: "App Development",
    description: "Build web and mobile applications without coding knowledge.",
  },
  {
    icon: "🔌",
    title: "Integration Solutions",
    description: "Connect various platforms and services without code.",
  },
  {
    icon: "📊",
    title: "Custom Dashboards",
    description: "Create powerful analytics dashboards using no-code tools.",
  },
];

export default Nocode;
