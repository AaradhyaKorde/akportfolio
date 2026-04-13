"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Why = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Stagger the animations
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#101314] w-full min-h-screen pt-10 ">
      <div className="max-w-6xl mx-auto px-4 md:px-5 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="lg:w-1/2 mx-4 md:ml-8 mb-8 lg:mb-0">
            <h2
              ref={(el) => (cardsRef.current[3] = el)}
              className="text-2xl md:text-[2.5rem] font-[Montserrat] text-[#fffff0] mb-4"
            >
              My Journey
            </h2>
       
            <p className="text-neutral-400 text-lg mb-6 text-justify tracking-tighter">
              I’m a full-stack developer with 3+ years of experience building scalable web applications and SaaS platforms using the MERN stack. What started as curiosity about how systems handle real-time data and scale turned into a focus on building high-performance, user-centric applications.
              <br /><br />
              At Claimant Mitra, I helped build a complete digital platform from scratch, transforming manual workflows into a scalable system supporting hundreds of agents. Currently at NoxAlgo, I work on SaaS products like Steer Health, where I’ve optimized data-heavy dashboards (100k+ records), improved performance by up to 60%, and implemented secure, scalable systems.
              <br /><br />
              For me, great software isn’t just about writing code — it’s about solving real problems, optimizing performance, and building systems that create measurable impact.
            </p>
       
            {/* <Link
              href="/About"
              className="relative inline-flex items-center px-6 sm:px-8 md:px-12 py-2 sm:py-3 overflow-hidden text-sm sm:text-base md:text-lg font-medium text-[#fffff0] border-2 border-[#fffff0] rounded-full hover:text-black group hover:bg-[#fffff0] w-full sm:w-auto justify-center">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#fffff0] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 hidden sm:flex items-center justify-start w-8 sm:w-10 h-8 sm:h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative">More About Us</span>
            </Link> */}
          </div>

          <div className="lg:w-1/2 space-y-3 md:space-y-4 px-4 md:px-0 -mt-2">
            {/* Expert Team Card */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-[#fffff0]/10 p-3 md:p-4 border border-[#fffff0] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/performance-icon.svg"
                    alt="Performance-Driven"
                    width={150}
                    height={75}
                    className="w-[150px] h-[95px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#fffff0] mb-1.5 text-center md:text-left">
                  Performance-Driven
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                  I specialize in building fast, scalable applications. From optimizing React.js apps to designing APIs that handle thousands of requests, I focus on speed, reliability, and growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Committed to Delivery Card */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-[#fffff0]/10 p-3 md:p-4 border border-[#fffff0] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/collaboration-icon.svg"
                    alt="Collaborative Builder"
                    width={150}
                    height={75}
                    className="w-[150px] h-[95px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#fffff0] mb-1.5 text-center md:text-left">
                  Collaborative Builder
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                  Great products are a team sport. I bring strong cross-functional collaboration and enjoy mentoring, reviewing code, and aligning engineering with business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* 24-hour Assistance Card */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="bg-[#fffff0]/10 p-3 md:p-4 border border-[#fffff0] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/evolving-icon.svg"
                    alt="Always Evolving"
                    width={150}
                    height={75}
                    className="w-[150px] h-[85px] object-contain text-[#fffff0]"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#fffff0] mb-1.5 text-center md:text-left">
                  Always Evolving
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                  Tech moves fast. Whether it's React Native for mobile or AI-driven tools, I stay curious and adapt quickly, bringing modern solutions to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
