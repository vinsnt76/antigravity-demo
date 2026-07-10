"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";

export default function QuoteDemoPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the form after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/bains-screenshot.webp"
        alt="Background"
        fill
        className="object-cover brightness-[0.85]"
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Centred Card Form */}
      {isOpen && (
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="relative bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-lg transition-all duration-300 transform scale-100">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Close form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <MultiStepForm />
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-[#F4C430] hover:bg-[#e0b220] text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-glow"
          title="Get a Renovation Quote"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
