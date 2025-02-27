"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  return ( 
    <>
      <h1>AI Content Generator</h1>
      <Button variant="destructive">Subscribe</Button>
    </>
  );
}