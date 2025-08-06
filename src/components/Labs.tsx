"use client";

import React from 'react';
import Link from 'next/link';

export default function Labs() {
  const labs = [
    {
      title: '🌱 Climate Innovation Lab',
      description: 'Building solutions for climate challenges in Gilgit Baltistan',
      link: '/labs/climate',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: '⚡ Green Energy Lab',
      description: 'Powering mountains with sustainable energy solutions',
      link: '/labs/energy',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: '🤖 Robotics & AI Lab',
      description: 'Exploring emerging technologies for innovation',
      link: '/labs/robotics',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-white" id="explore">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our specialized labs where innovation meets real-world impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <div 
              key={lab.title} 
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="p-6 text-center relative overflow-hidden">
                {/* Morphing background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
                  {lab.title}
                </h3>
                <p className="text-gray-600 mb-6 relative z-10 transition-all duration-300 group-hover:text-gray-700">
                  {lab.description}
                </p>
                <Link 
                  href={lab.link}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium relative z-10 transform hover:scale-110 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}