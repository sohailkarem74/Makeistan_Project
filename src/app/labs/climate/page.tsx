"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { ExternalLink } from 'lucide-react';

export default function ClimateLab() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <Image
          src="/images/main3.jpg"
          alt="Climate Innovation Lab"
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
              Climate Innovation Lab
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md mb-4 transition-all duration-500">
              Makeistan Climate Innovation Lab
            </p>
            <p className="text-lg drop-shadow-md transition-all duration-500">
              Fighting climate challenges with design, innovation, and community power
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Why Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Why MCIL?</h2>
            <p className="text-gray-800 text-lg mb-4">
              Climate change is real—and it's here. From glacier melt to water crises, 
              Pakistan is at the frontline. MCIL is Makeistan's bold new initiative to 
              fight climate challenges with design, innovation, and community power.
            </p>
          </section>

          {/* What We Do */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-800 transition-colors duration-300">Build Climate Tech</h3>
                <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Low-cost, high-impact climate solutions</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-800 transition-colors duration-300">Empower Communities</h3>
                <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Design solutions with local expertise</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-800 transition-colors duration-300">Train Youth</h3>
                <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Climate innovation and green skills</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-800 transition-colors duration-300">Prototype Solutions</h3>
                <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Real-world eco-solutions</p>
              </div>
            </div>
          </section>

          {/* Focus Areas */}
          <section>
            <h2 className="text-3xl font-bold text-green-600 mb-6">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-green-200 p-4 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <p className="font-bold text-lg text-green-700 group-hover:text-green-800 transition-colors duration-300">⚡ Renewable Energy</p>
                <p className="text-sm text-gray-800 mt-2 group-hover:text-gray-900 transition-colors duration-300">Solar | Wind | Micro-hydro</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-4 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <p className="font-bold text-lg text-green-700 group-hover:text-green-800 transition-colors duration-300">🏠 Eco-Architecture</p>
                <p className="text-sm text-gray-800 mt-2 group-hover:text-gray-900 transition-colors duration-300">Sustainable Housing</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-4 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <p className="font-bold text-lg text-green-700 group-hover:text-green-800 transition-colors duration-300">🌱 Climate-Smart Agriculture</p>
                <p className="text-sm text-gray-800 mt-2">Sustainable farming solutions</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-4 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <p className="font-bold text-lg text-green-700 group-hover:text-green-800 transition-colors duration-300">💧 Water Innovation</p>
                <p className="text-sm text-gray-800 mt-2 group-hover:text-gray-900 transition-colors duration-300">Clean water technologies</p>
              </div>
              <div className="bg-white border-2 border-green-200 p-4 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 group">
                <p className="font-bold text-lg text-green-700 group-hover:text-green-800 transition-colors duration-300">♻️ Waste-to-Resource</p>
                <p className="text-sm text-gray-800 mt-2 group-hover:text-gray-900 transition-colors duration-300">Circular economy solutions</p>
              </div>
            </div>
          </section>

          {/* Collaboration Section */}
          <section className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Collaborate?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in partnering with our Climate Lab or have a sustainability project? We'd love to hear from you and explore how we can work together.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:Info@makeistan.com?subject=Climate Lab Collaboration&body=Hello Climate Lab team,%0D%0A%0D%0AI am interested in collaborating with your lab and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
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