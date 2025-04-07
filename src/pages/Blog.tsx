import React from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { Newsletter } from "@/components/home/Newsletter";

export function Blog() {
  return (
    <div className="w-[99.1vw]">
      <BlogHero />
      <Newsletter />
    </div>
  );
} 