"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

export default function RoboticsLab() {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <main className="min-h-screen">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/robotics-lab.jpg"
          alt="Robotics Lab"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-800/15 to-purple-700/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Robotics, AI & Emerging Technologies
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Robotics, AI & Emerging Technologies</h2>
            <div className="text-gray-700 text-lg">
              <p className="mb-4">
                At Makeistan, we are advancing innovation by integrating Robotics, Artificial Intelligence (AI), Internet of Things (IoT), drones, and AR/VR into learning and product development. Our programs cater to both students and professionals—providing schools, universities, and organizations with the tools, training, and collaborative space to explore and apply emerging technologies in meaningful ways.
              </p>
              {showFullText && (
                <p className="mb-4">
                  From building autonomous robots and smart IoT systems to developing drone solutions and immersive AR/VR experiences, we enable participants to experiment, prototype, and solve real-world challenges. Whether you're an educator designing future-ready curricula, a researcher exploring intelligent systems, or a startup developing tech-driven solutions, Makeistan offers the platform, expertise, and ecosystem to bring your ideas to life.
                </p>
              )}
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-purple-600 hover:text-purple-800 font-semibold underline transition-colors duration-200"
              >
                {showFullText ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">💻 Our Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">🤖 Robotics</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Build and program autonomous robots for real-world applications</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">🧠 Artificial Intelligence</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Develop smart solutions using machine learning and AI</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">📱 Internet of Things</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Create connected devices and smart systems</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">🚁 Drones</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Design and develop drone solutions for various applications</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">🥽 AR/VR</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Build immersive experiences and applications</p>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="bg-purple-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">🌟 Who Can Join?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">📚 Students</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Learn and experiment with emerging technologies</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">👩‍🏫 Educators</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Design future-ready curricula</p>
              </div>
              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group">
                <h3 className="text-xl font-bold mb-3 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">💡 Innovators</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Develop tech-driven solutions</p>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-block bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
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