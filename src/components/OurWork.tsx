"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Rozgar Program Gilgit Baltistan",
    description: "Empowering communities through digital skills and employment opportunities",
    status: "completed"
  },
  {
    id: 2,
    title: "Sustainable Housing for Flood-Affected Communities – Sindh",
    description: "Building resilient homes for disaster-affected families",
    status: "ongoing"
  },
  {
    id: 3,
    title: "Solar Powered Clean Water Access in Sindh",
    description: "Providing clean water solutions through renewable energy",
    status: "completed"
  },
  {
    id: 4,
    title: "Makeistan Fellowship at KIU Gilgit",
    description: "Developing future leaders through innovation and technology",
    status: "ongoing"
  }
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="our-work" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover the impactful projects we&apos;ve undertaken to create positive change in communities across Pakistan
          </p>
        </div>

        {/* Project Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group animate-fade-in-up ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105 animate-pulse-custom'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 shadow-md hover:shadow-xl'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10">{project.title}</span>
                {activeTab !== index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transition-all duration-700 ease-out transform hover:scale-102 hover:shadow-2xl animate-fade-in-up animation-delay-400">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Project Image Placeholder */}
            <div className="w-full md:w-1/2 animate-slide-in-left animation-delay-600">
              <div className="bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg h-64 flex items-center justify-center transition-all duration-500 hover:from-blue-200 hover:to-purple-300 group relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-2 animate-float">📊</div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Project Image</p>
                </div>
                {/* Morphing background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="w-full md:w-1/2 animate-slide-in-right animation-delay-800">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-gray-800 transition-all duration-300 hover:text-blue-600">
                  {projects[activeTab].title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 animate-pulse-custom ${
                  projects[activeTab].status === 'completed' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}>
                  {projects[activeTab].status}
                </span>
              </div>
              
              <p className="text-gray-800 mb-6 leading-relaxed transition-all duration-300 hover:text-gray-900">
                {projects[activeTab].description}
              </p>
              
              <div className="flex gap-4">
                <Link 
                  href={`/projects/${projects[activeTab].id}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 shadow-md group relative overflow-hidden"
                >
                  <span className="relative z-10">View Details</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}