'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import { ExternalLink, MapPin, Users, Calendar, Target, Lightbulb, Zap, Leaf, Bot } from 'lucide-react';

const labs = [
  {
    id: 1,
    title: "Climate Innovation Lab",
    description: "Building solutions for climate challenges in Gilgit Baltistan through design thinking, community engagement, and sustainable innovation.",
    location: "Makeistan Makerspace, Gilgit",
    focus: "Climate Solutions & Sustainability",

    image: "🌱",
    category: "Climate & Environment",
    link: "/labs/climate",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
    icon: Leaf,
    keyAreas: [
      "Renewable Energy Systems",
      "Water Conservation Technologies",
      "Sustainable Agriculture Solutions",
      "Eco-Architecture & Green Building",
      "Climate Data & Monitoring",
      "Community Resilience Planning"
    ],
    impact: [
      "Climate-resilient solutions for mountain communities",
      "Sustainable innovation prototypes developed",
      "Community engagement in climate action",
      "Local capacity building in green technologies"
    ]
  },
  {
    id: 2,
    title: "Green Energy Lab",
    description: "Powering mountains sustainably with innovative energy solutions, addressing energy poverty through micro wind turbines, smart solar systems, and community-based renewable energy projects.",
    location: "Makeistan Makerspace, Gilgit",
    focus: "Renewable Energy & Power Systems",

    image: "⚡",
    category: "Energy & Power",
    link: "/labs/energy",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    icon: Zap,
    keyAreas: [
      "Micro Wind Turbine Systems",
      "Smart Solar Kit Development",
      "Energy Storage Solutions",
      "Grid Integration Technologies",
      "Energy Efficiency Systems",
      "Community Power Planning"
    ],
    impact: [
      "Reduced energy poverty in remote areas",
      "Sustainable power solutions for 20+ hour load shedding",
      "Community-owned renewable energy systems",
      "Local technical capacity in green energy"
    ]
  },
  {
    id: 3,
    title: "Robotics, AI & Emerging Technologies",
    description: "Exploring the future of technology through robotics, artificial intelligence, IoT, drones, and AR/VR, enabling participants to experiment, prototype, and solve real-world challenges.",
    location: "Makeistan Makerspace, Gilgit",
    focus: "Advanced Technologies & Innovation",

    image: "🤖",
    category: "Technology & AI",
    link: "/labs/robotics",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
    icon: Bot,
    keyAreas: [
      "Autonomous Robotics Systems",
      "Artificial Intelligence Applications",
      "Internet of Things (IoT) Solutions",
      "Drone Technology & Applications",
      "Augmented & Virtual Reality",
      "Smart Automation Systems"
    ],
    impact: [
      "Next-generation technology skills development",
      "Innovation in automation and AI applications",
      "Smart solutions for local challenges",
      "Future-ready workforce preparation"
    ]
  }
];

export default function LabsPage() {
  const [selectedLab, setSelectedLab] = useState(null);

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Innovation Labs</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Where Technology Meets Impact</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Explore our specialized labs where cutting-edge technology, sustainable innovation, and community impact converge to solve real-world challenges.
            </p>
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
        {/* Labs Overview Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Innovation Ecosystem</h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Climate Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Developing sustainable solutions for climate challenges through community-centered design and innovative technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Green Energy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Powering mountain communities with renewable energy solutions, addressing energy poverty through innovative technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Emerging Technologies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Exploring robotics, AI, IoT, and AR/VR to create smart solutions for local and global challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Labs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Specialized Labs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each lab focuses on specific technological domains while fostering interdisciplinary collaboration and community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {labs.map((lab, index) => {
              const IconComponent = lab.icon;
              return (
                <div 
                  key={lab.id} 
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedLab(selectedLab?.id === lab.id ? null : lab)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  {/* Lab Header */}
                  <div className={`bg-gradient-to-r ${lab.bgColor} to-gray-50 p-6 border-b border-gray-200`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{lab.image}</div>

                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {lab.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {lab.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin size={16} className="text-blue-500" />
                      <span>{lab.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target size={16} className="text-orange-500" />
                      <span>{lab.focus}</span>
                    </div>
                  </div>

                  {/* Lab Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{lab.category}</span>
                      <IconComponent size={20} className="text-gray-400" />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.keyAreas.slice(0, 3).map((area, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {area}
                            </span>
                          ))}
                          {lab.keyAreas.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{lab.keyAreas.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <Link 
                          href={lab.link}
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
                        >
                          Explore Lab
                          <ExternalLink size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Selected Lab Details Modal */}
        {selectedLab && (
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className={`bg-gradient-to-r ${selectedLab.bgColor} to-gray-50 p-8 border-b border-gray-200`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedLab.title}</h2>
                  <button 
                    onClick={() => setSelectedLab(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedLab.description}</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                      Key Focus Areas
                    </h3>
                    <div className="space-y-2">
                      {selectedLab.keyAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-500" />
                      Expected Impact
                    </h3>
                    <div className="space-y-2">
                      {selectedLab.impact.map((impact, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Link 
                    href={selectedLab.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
                  >
                    Visit {selectedLab.title}
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our labs and be part of Gilgit-Baltistan's innovation revolution. Whether you're a student, researcher, or innovator, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:Info@makeistan.com?subject=Lab Collaboration Inquiry&body=Hello Makeistan Team,%0D%0A%0D%0AI am interested in collaborating with your innovation labs and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                Get In Touch
                <ExternalLink size={18} />
              </a>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}