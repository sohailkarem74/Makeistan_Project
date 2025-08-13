"use client";

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">About Makeistan</h2>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Makeistan is a collaborative innovation hub where creativity, technology, and community come together. 
            Designed as an open-access makerspace, it empowers individuals, teams, and organizations to exchange ideas, 
            gain hands-on experience, and turn bold concepts into real-world solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-xl transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 group animate-slide-in-left animation-delay-400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-all duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">Our Mission</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                To empower innovators in Gilgit Baltistan to build sustainable solutions through 
                hands-on learning and collaborative innovation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-green-50 group animate-slide-in-right animation-delay-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-all duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">Our Vision</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                To become the leading innovation hub in Gilgit Baltistan, fostering a culture of 
                creativity and technological advancement.
              </p>
            </div>
          </div>

          <div className="mt-12 animate-fade-in-up animation-delay-800">
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 
                rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More About Us</span>
              <svg className="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Morphing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}