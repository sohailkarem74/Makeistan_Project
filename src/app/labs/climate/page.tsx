"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

export default function ClimateLab() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/main3.jpg"
          alt="Climate Innovation Lab"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/15 to-blue-700/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-2xl shadow-black">
            Climate Innovation Lab
          </h1>
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
              Pakistan is at the frontline. MCIL is Makiestan Official's bold new initiative to 
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