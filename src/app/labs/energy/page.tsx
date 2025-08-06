"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

export default function EnergyLab() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/main5.jpg"
          alt="Green Energy Lab"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-green-800/15 to-green-700/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Green Energy Lab
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Powering Mountains, Sustainably</h2>
            <p className="text-gray-700 text-lg mb-4">
              Energy poverty is real in Gilgit-Baltistan — with towns and villages facing up to 20 hours 
              of load shedding, deforestation rising, and families struggling to stay warm.
            </p>
            <p className="text-gray-700 text-lg">
              At Makiestan Official Energy, we're building clean, affordable, and locally-made energy solutions 
              designed for life in the mountains.
            </p>
          </section>

          {/* What We're Working On */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-6">🔬 What We're Working On</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors duration-300">🔋 Micro Wind Turbines</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Harnessing mountain winds for sustainable power</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors duration-300">🔥 High-Efficiency Stoves</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Clean cooking solutions for mountain communities</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors duration-300">☀️ Smart Solar Kits</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Affordable solar solutions for homes</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors duration-300">🔌 Off-grid EV Chargers</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Sustainable mobility solutions</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors duration-300">🧊 Battery Thermal Systems</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Specialized for cold climates</p>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="bg-green-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">🌟 Join Our Mission</h2>
            <p className="mb-6 text-gray-700">
              We don't just prototype—we solve problems with our community. If you're an engineer, 
              designer, or innovator passionate about green tech and energy justice, come build with us.
            </p>
          </section>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-block bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}