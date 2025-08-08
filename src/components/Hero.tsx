"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of workspace images for slideshow
  const workspaceImages = [
    '/images/main4.jpg', // Main image 4
    '/images/main1.jpg', // Main image 1
    '/images/main2.jpg', // Main image 2
    '/images/climate-lab.jpg', // Climate lab workspace
    '/images/main3.jpg', // Main image 3
    '/images/robotics-lab.jpg' // Robotics lab workspace
  ];
  
  // Note: To add more workspace images, simply add them to the public/images folder
  // and update this array with the new image paths
  
  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? workspaceImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % workspaceImages.length
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % workspaceImages.length
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [workspaceImages.length]);

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {workspaceImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`MAKEISTAN Workspace ${index + 1}`}
              fill
              className={`object-cover object-center transition-all duration-700 ${
                isHovered ? 'brightness-30 scale-105' : 'brightness-50'
              }`}
              style={{ objectPosition: 'center 40%' }}
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {workspaceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Removed Large Background Text */}

      {/* Default Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto opacity-100 transform scale-100 transition-all duration-1000 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className={`text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 ease-out transform tracking-wider ${
          isHovered ? 'scale-105 text-shadow-lg' : 'scale-100'
        }`}>
          MAKEISTAN Official
        </h1>
        <div className="space-y-4">
          <p className={`text-2xl md:text-3xl text-white font-light transition-all duration-500 ease-out transform ${
            isHovered ? 'translate-y-[-4px] scale-102' : 'translate-y-0 scale-100'
          }`}>
            Gilgit Baltistan's First Ever Makerspace
          </p>
          <p className={`text-xl md:text-2xl text-white font-light mb-8 transition-all duration-500 ease-out transform delay-100 ${
            isHovered ? 'translate-y-[-4px] scale-102' : 'translate-y-0 scale-100'
          }`}>
            Where Innovation Meets Impact
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <a 
            href="#explore"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl font-medium w-48 transform hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Our Labs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-110 hover:shadow-2xl font-medium w-48 transform hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>


    </div>
  );
}