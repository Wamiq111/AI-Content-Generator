"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          AI Content Generator
        </h1>
        <p className="text-lg text-yellow-200 mt-2 font-medium drop-shadow-md">
          Generate high-quality content instantly with AI-powered tools.
        </p>
      </header>

      {/* Features Section */}
      <section className="max-w-5xl text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Why Choose Our AI Content Generator?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-blue-400 text-white">
            <h3 className="font-bold text-lg">🚀 Instant Content Creation</h3>
            <p>Generate articles, blogs, and more in seconds.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-purple-500 text-white">
            <h3 className="font-bold text-lg">🧠 AI-Powered Efficiency</h3>
            <p>Uses cutting-edge AI models for accurate content.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-green-500 text-white">
            <h3 className="font-bold text-lg">🔍 SEO Optimized</h3>
            <p>Ensures search engine-friendly content.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-orange-500 text-white">
            <h3 className="font-bold text-lg">✏️ Customizable Output</h3>
            <p>Adjust content tone and style as per your needs.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-red-500 text-white">
            <h3 className="font-bold text-lg">💡 User-Friendly Interface</h3>
            <p>No technical skills required.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-indigo-500 text-white">
            <h3 className="font-bold text-lg">📌 Multiple Formats Supported</h3>
            <p>Create content for blogs, social media, and ads.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-teal-500 text-white">
            <h3 className="font-bold text-lg">💰 Affordable & Reliable</h3>
            <p>High-quality content at a low cost.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-orange-500 text-white">
            <h3 className="font-bold text-lg">⚡ Fast Performance</h3>
            <p>Quick content generation with minimal delays.</p>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-cyan-500 text-white">
            <h3 className="font-bold text-lg">📊 Data-Driven Insights</h3>
            <p>Improve content strategy with AI-powered analytics.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-10">
        <Button
          variant="destructive"
          className="px-12 py-6 text-2xl font-semibold rounded-lg shadow-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-110 transition duration-300"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
