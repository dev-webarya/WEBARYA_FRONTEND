"use client";

import React from "react";

type Props = {
  className?: string;
  scrolled?: boolean;
};

export function WebAryaLogo({ className = "", scrolled = true }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Company logo image - using Cloudinary background removal */}
      <img
        src="https://res.cloudinary.com/dmpuu4gvn/image/upload/e_background_removal/v1757748236/android-chrome-512x512_p8hxjv.png"
        alt="WebARYA logo"
        className="w-8 h-8 flex-none object-contain"
      />

      {/* Brand text - color changes based on scroll */}
      <span className="text-xl font-extrabold tracking-tight transition-colors duration-300">
        <span className={scrolled ? "text-black" : "text-white"}>Web</span>
        <span className={scrolled ? "text-blue-600" : "text-blue-400"}>ARYA</span>
      </span>
    </div>
  );
}
