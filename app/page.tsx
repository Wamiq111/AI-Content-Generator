"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Header Section */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          AI Content Generator
        </h1>
        <p className="text-lg text-yellow-200 mt-2 font-medium drop-shadow-md">
          Generate high-quality content instantly with AI-powered tools.
        </p>
      </header>

      {/* Features Section */}
      <section className="max-w-5xl text-center">
        <h2 className="text-2xl font-semibold text-white mb-6 animate-fade-in">
          Why Choose Our AI Content Generator?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Instant Content Creation",
              description: "Generate articles, blogs, and more in seconds.",
              bgColor: "bg-blue-400",
            },
            {
              icon: "🧠",
              title: "AI-Powered Efficiency",
              description: "Uses cutting-edge AI models for accurate content.",
              bgColor: "bg-purple-500",
            },
            {
              icon: "🔍",
              title: "SEO Optimized",
              description: "Ensures search engine-friendly content.",
              bgColor: "bg-green-500",
            },
            {
              icon: "✏️",
              title: "Customizable Output",
              description: "Adjust content tone and style as per your needs.",
              bgColor: "bg-orange-500",
            },
            {
              icon: "💡",
              title: "User-Friendly Interface",
              description: "No technical skills required.",
              bgColor: "bg-red-500",
            },
            {
              icon: "📌",
              title: "Multiple Formats Supported",
              description: "Create content for blogs, social media, and ads.",
              bgColor: "bg-indigo-500",
            },
            {
              icon: "💰",
              title: "Affordable & Reliable",
              description: "High-quality content at a low cost.",
              bgColor: "bg-teal-500",
            },
            {
              icon: "⚡",
              title: "Fast Performance",
              description: "Quick content generation with minimal delays.",
              bgColor: "bg-orange-500",
            },
            {
              icon: "📊",
              title: "Data-Driven Insights",
              description: "Improve content strategy with AI-powered analytics.",
              bgColor: "bg-cyan-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-white ${feature.bgColor} hover:scale-105 transition-transform duration-300 animate-fade-in-up`}
            >
              <h3 className="font-bold text-lg">
                {feature.icon} {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-10 animate-fade-in">
        <Button
          variant="destructive"
          className="px-12 py-6 text-2xl font-semibold rounded-lg shadow-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-110 transition-transform duration-300"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
