"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Floating Particles */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 opacity-30"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute w-3 h-3 bg-purple-400 rounded-full top-1/3 right-1/4 opacity-30"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-pink-400 rounded-full bottom-1/4 left-1/3 opacity-30"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />

      {/* Decorative Side Elements */}
      <motion.div
        className="absolute left-0 top-1/4 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-2xl"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute right-0 top-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Header Section */}
      <motion.header
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI Content Generator
        </motion.h1>
        <motion.p
          className="text-lg bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2 font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Generate high-quality content instantly with AI-powered tools.
        </motion.p>
      </motion.header>

      {/* Features Section */}
      <motion.section
        className="max-w-5xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6"
          variants={itemVariants}
        >
          Why Choose Our AI Content Generator?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Instant Content Creation",
              description: "Generate articles, blogs, and more in seconds.",
              bgColor: "bg-gradient-to-r from-indigo-600 to-purple-600",
            },
            {
              icon: "🧠",
              title: "AI-Powered Efficiency",
              description: "Uses cutting-edge AI models for accurate content.",
              bgColor: "bg-gradient-to-r from-purple-600 to-pink-600",
            },
            {
              icon: "🔍",
              title: "SEO Optimized",
              description: "Ensures search engine-friendly content.",
              bgColor: "bg-gradient-to-r from-pink-600 to-red-600",
            },
            {
              icon: "✏️",
              title: "Customizable Output",
              description: "Adjust content tone and style as per your needs.",
              bgColor: "bg-gradient-to-r from-red-600 to-orange-600",
            },
            {
              icon: "💡",
              title: "User-Friendly Interface",
              description: "No technical skills required.",
              bgColor: "bg-gradient-to-r from-orange-600 to-yellow-600",
            },
            {
              icon: "📌",
              title: "Multiple Formats Supported",
              description: "Create content for blogs, social media, and ads.",
              bgColor: "bg-gradient-to-r from-yellow-600 to-green-600",
            },
            {
              icon: "💰",
              title: "Affordable & Reliable",
              description: "High-quality content at a low cost.",
              bgColor: "bg-gradient-to-r from-green-600 to-teal-600",
            },
            {
              icon: "⚡",
              title: "Fast Performance",
              description: "Quick content generation with minimal delays.",
              bgColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
            },
            {
              icon: "📊",
              title: "Data-Driven Insights",
              description: "Improve content strategy with AI-powered analytics.",
              bgColor: "bg-gradient-to-r from-cyan-600 to-blue-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md text-white ${feature.bgColor} hover:scale-105 transition-transform duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-bold text-lg">
                {feature.icon} {feature.title}
              </h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        className="mt-10 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button
          variant="destructive"
          className="px-12 py-6 text-2xl font-semibold rounded-lg shadow-lg bg-gradient-to-r from-red-600 to-pink-600 text-white hover:scale-110 transition-transform duration-300"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
        </Button>
      </motion.div>

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-900 to-purple-900 animate-gradient-x" />
      </motion.div>
    </div>
  );
}