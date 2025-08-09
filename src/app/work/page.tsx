"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { ExternalLink, Calendar, MapPin, Users, Target } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Rozgar Program Gilgit Baltistan",
    description: "Empowering communities through digital skills training and creating sustainable employment opportunities in remote mountainous regions.",
    location: "Gilgit Baltistan, Pakistan",

    beneficiaries: "180+ Youth",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    image: "💻",
    category: "Digital Skills",
    impact: [
      "85% employment rate among participants",
      "3 community tech centers established",
      "200+ women empowered",
      "15 local startups launched"
    ]
  },
  {
    id: 2,
    title: "Sustainable Housing for Flood-Affected Communities - Sindh",
    description: "Building climate-resilient housing solutions for communities affected by devastating floods using sustainable materials and innovative construction techniques.",
    location: "Sindh Province, Pakistan",

    beneficiaries: "300+ Families",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-800",
    image: "🏠",
    category: "Climate Resilience",
    impact: [
      "150 flood-resistant homes completed",
      "Local construction skills training",
      "Sustainable material sourcing",
      "Community-led implementation"
    ]
  },
  {
    id: 3,
    title: "Project Water - Solar-Powered Clean Water Access in Sindh",
    description: "A community-driven initiative that harnesses renewable energy to provide safe, reliable, and sustainable access to drinking water through solar-powered water tubewells in remote villages.",
    location: "Sindh Province, Pakistan",

    beneficiaries: "Multiple Villages",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    image: "💧",
    category: "Water & Energy",
    impact: [
      "Clean groundwater access for multiple villages",
      "Reduced water-related health issues",
      "Environmental protection through renewable energy",
      "Enhanced community resilience to climate challenges"
    ]
  },
  {
    id: 4,
    title: "Smart Traditional Stove - Reimagining Heating for Mountain Communities",
    description: "Re-engineering traditional stoves for fuel efficiency and smart heat distribution in high mountain regions where winters are long and harsh.",
    location: "Gilgit-Baltistan & Chitral, Pakistan",
    beneficiaries: "Mountain Communities",
    status: "Prototyping",
    statusColor: "bg-yellow-100 text-yellow-800",
    image: "🔥",
    category: "Innovation & Sustainability",
    impact: [
      "Currently prototyping with local families",
      "Incorporating community feedback for practical design",
      "Testing durability in harsh mountain conditions",
      "Developing maintenance protocols for long-term use"
    ]
  },
  {
    id: 5,
    title: "Community Robotics Program",
    description: "Taking innovation to every corner of Gilgit-Baltistan through mobile robotics camps that bring cutting-edge technology and hands-on learning directly to students—no matter how remote.",
    location: "Across Gilgit-Baltistan",
    beneficiaries: "Hundreds of Students",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    image: "🤖",
    category: "Technology & Education",
    impact: [
      "10 successful camps across Gilgit-Baltistan",
      "Hundreds of students trained in robotics and AI",
      "Dozens of student-built robots and prototypes",
      "New generation of makers and changemakers"
    ]
  }
];

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = projects;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center relative animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14V6.5" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Transforming Communities Through Innovation</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Projects Overview Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              </div>

            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transforming communities through technology-driven solutions that address real-world challenges across Pakistan.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reaching over 1850+ lives across 3 provinces with sustainable solutions for education, housing, and digital empowerment.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaborative Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Working hand-in-hand with local communities, universities, and organizations to create lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{project.location}</span>
                  </div>


                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target size={16} className="text-orange-500" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Impact Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Impact:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.impact.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </Link>
                </div>


              </div>
            </div>
          ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for partners, volunteers, and supporters to help us expand our impact. 
            Join us in creating positive change in communities across Pakistan.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:Info@makeistan.com?subject=Inquiry about Makeistan Projects&body=Hello Makeistan team,%0D%0A%0D%0AI am interested in learning more about your projects and would like to get in touch.%0D%0A%0D%0AThank you!"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}