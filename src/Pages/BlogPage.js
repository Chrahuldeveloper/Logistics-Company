import React from "react";
import {
  Navbar,
  BlogPageHeroSection,
  NewsLetter,
  Footer,
  AllBlogs,
  DragTop,
} from "../components";
import { Help, Brochure } from "../components/Services/index";

export default function BlogPage() {
  return (
    <body className="overflow-x-clip">
      <Navbar />
      <BlogPageHeroSection />
      <div className="flex flex-col max-w-5xl lg:px-24 p-5 mx-auto lg:max-w-7xl gap-x-10 lg:flex-row md:justify-around md:items-start">
        <div className="space-y-8">
          <Help />
          <Brochure />
        </div>
        <div className="mt-7">
          <AllBlogs />
        </div>
      </div>
      <NewsLetter />
      <DragTop />
      <Footer />
    </body>
  );
}
