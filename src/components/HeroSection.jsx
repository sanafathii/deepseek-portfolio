"use client";
import { useEffect } from "react";
import Typed from "typed.js";

export default function HeroSection() {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#2563EB] text-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Hi, I am Sana Fathi</h1>
      <p className="text-2xl mb-8">
        I am a <span id="typed-text"></span>
      </p>
      <a
        href="#projects"
        className="bg-[#10B981] text-white px-6 py-3 rounded-lg hover:bg-[#059669] transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}
