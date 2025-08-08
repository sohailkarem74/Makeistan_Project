"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`fixed top-24 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full opacity-60 hover:opacity-100 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}