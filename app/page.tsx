"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Glowing/Sparkling Tiny Dots/Stars in Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <header className="text-center mb-12 animate-fade-in relative z-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          AI Content Generator
        </h1>
        <p className="text-lg bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2 font-medium drop-shadow-md">
          Generate high-quality content instantly with AI-powered tools.
        </p>
      </header>

      {/* Features Section */}
      <section className="max-w-5xl text-center relative z-10">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          Why Choose Our AI Content Generator?
        </h2>
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
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-white ${feature.bgColor} hover:scale-105 transition-transform duration-300 animate-fade-in-up relative overflow-hidden`}
            >
              {/* Glowing Border Light */}
              <div className="absolute inset-0 rounded-lg bg-white/10 blur-md animate-glow-border" />
              <h3 className="font-bold text-lg relative z-10">
                {feature.icon} {feature.title}
              </h3>
              <p className="relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-10 animate-fade-in relative z-10">
        <Button
          variant="destructive"
          className="px-12 py-6 text-2xl font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-110 transition-transform duration-300 animate-pulse"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
