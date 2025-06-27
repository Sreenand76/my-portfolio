"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/Text-GenerationEffect";

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative py-20 lg:pt-28 lg:pb-48 overflow-hidden flex justify-center"
      style={{
        background: "transparent"
      }}
    >
      {/* Glowing particles - updated to match the purple/blue theme */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "linear-gradient(to right, #a855f7, #6366f1)"
            }}
          />
        ))}
      </div>

      <div className="md:w-[70vw] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
         
        
        <h className="text-3xl md:text-3xl lg:text-5xl bg-clip-text text-transparent bg-purple-100">Recent Experience</h>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Glass Card - updated colors to match theme */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-purple-500/20 relative"
        >
          {/* Glow effect - updated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl pointer-events-none" />
          
          {/* Animated border - updated gradient */}
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-transparent to-blue-500/40 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl" />
          </div>

          <div className="p-6 md:p-8 relative">
            {/* Company & Duration */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Advertyzement (TYZ)
              </h3>
              <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/20 backdrop-blur-sm">
                Jan 2025 - Jun 2025
              </span>
            </div>

            {/* Position & Location */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-1">
                Front-End Developer
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "GraphQL", "Tailwind", "GitLab"].map((tech) => (
                  <motion.span 
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 bg-purple-900/30 text-gray-200 rounded-md text-xs font-medium border border-purple-500/20 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-300 mt-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Bangalore (Remote)
              </p>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 md:space-y-3">
              {[
                "Developed client-facing web apps with React & GraphQL",
                "Optimized data handling with GraphQL, improving performance by 20%",
                "Built reusable UI components for design consistency",
                "Implemented real-time notifications with Firebase Cloud Messaging",
                "Collaborated using GitLab to deliver production features",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start text-gray-300 text-sm md:text-base"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block text-purple-400 mr-2 mt-1"
                  >
                    ✦
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;