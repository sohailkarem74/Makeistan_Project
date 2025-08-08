"use client";

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Leaf, Zap, Bot } from 'lucide-react';

export default function Labs() {
  const labs = [
    {
      title: 'Climate Innovation Lab',
      emoji: '🌱',
      description: 'Building solutions for climate challenges in Gilgit Baltistan through design thinking and sustainable innovation',
      link: '/labs/climate',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      icon: Leaf,
      category: 'Climate & Environment',

    },
    {
      title: 'Green Energy Lab',
      emoji: '⚡',
      description: 'Powering mountains sustainably with innovative energy solutions and community-based renewable projects',
      link: '/labs/energy',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      icon: Zap,
      category: 'Energy & Power',

    },
    {
      title: 'Robotics, AI & Emerging Technologies',
      emoji: '🤖',
      description: 'Exploring the future through robotics, AI, IoT, drones, and AR/VR to solve real-world challenges',
      link: '/labs/robotics',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      icon: Bot,
      category: 'Technology & AI',

    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" id="explore">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Innovation Labs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our specialized labs where cutting-edge technology meets community impact, fostering innovation that addresses real-world challenges.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {labs.map((lab, index) => {
            const IconComponent = lab.icon;
            return (
              <div 
                key={lab.title} 
                className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.02] hover:-translate-y-3 group overflow-hidden relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                
                {/* Lab Header */}
                <div className={`relative bg-gradient-to-br ${lab.bgColor} to-white p-8 border-b border-gray-100`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{lab.emoji}</div>
                      <div className="absolute -inset-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>

                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {lab.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base group-hover:text-gray-700 transition-colors duration-300">
                    {lab.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/80 transition-all duration-300">
                    <IconComponent size={18} className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                    <span className="font-medium">{lab.category}</span>
                  </div>
                </div>

                {/* Lab Content */}
                <div className="relative p-8">
                  <div className="relative overflow-hidden">
                    {/* Enhanced morphing background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-2xl transform scale-110"></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <Link 
                          href={lab.link}
                          className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg text-sm relative overflow-hidden justify-center"
                        >
                         {/* Button shine effect */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                         <span className="relative z-10">Read More</span>
                         <ExternalLink size={14} className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Innovate?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our innovation ecosystem and be part of Gilgit-Baltistan's technological revolution.
            </p>
            <Link 
               href="/labs"
               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg text-sm"
             >
               View All Labs
               <ExternalLink size={14} />
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}