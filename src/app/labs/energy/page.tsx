"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { ExternalLink } from 'lucide-react';

export default function EnergyLab() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <Image
          src="/images/main5.jpg"
          alt="Green Energy Lab"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg transition-all duration-500">
              Green Energy Lab
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md mb-4 transition-all duration-500">
              Makeistan Green Energy Lab
            </p>
            <p className="text-lg drop-shadow-md transition-all duration-500">
              Powering mountains sustainably with innovative energy solutions
            </p>
          </div>
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
              At Makeistan Energy, we're building clean, affordable, and locally-made energy solutions 
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

          {/* Collaboration Section */}
          <section className="mt-16 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Collaborate?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in partnering with our Energy Lab or have a renewable energy project? We'd love to hear from you and explore how we can work together.
 a mail incon in get in otouch buttons in labs in labs get in touvh butoons add the icon of our work
             </p>
            <div className="flex justify-center">
              <a
                href="mailto:Info@makeistan.com?subject=Energy Lab Collaboration&body=Hello Energy Lab team,%0D%0A%0D%0AI am interested in collaborating with your lab and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ExternalLink size={18} />
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}