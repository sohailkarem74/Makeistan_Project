"use client";

import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';
import { ExternalLink, Mail, MapPin, Briefcase } from 'lucide-react';

export default function TeamPage() {

  return (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="pt-24 pb-16 text-center relative animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet our Leadership & Team</h2>
               <h3 className="text-2xl font-semibold text-blue-600 mb-6">Innovators Behind Makeistan</h3>
                 <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                 Brilliant minds united by a shared mission: transforming education through hands-on innovation and empowering the next generation of creators.
               </p>
               <div className="flex items-center justify-center mb-6">
                 <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
                 <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
                 <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in-up">

          <section className="mb-20">
            {/* Founder - Top of Pyramid */}
            <div className="flex justify-center mb-16 animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 group text-center max-w-sm mx-auto">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg">
                    <img 
                      src="/images/team/ehsam.jpg" 
                      alt="Ehsam Ullah Baig" 
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CEO
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-800 transition-colors duration-300">Ehsam Ullah Baig</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  "I've never believed that innovation belongs only in labs or big tech hubs. I believe it starts wherever someone dares to ask, 'What if we built something better?' That belief sparked Makeistan not as a typical startup, but as a space for young minds to explore, build, and create solutions that truly matter. Over the years, this journey has taken me into clean energy, climate tech, smart agriculture, and real world education across Pakistan. I'm still learning every step of the way. But I'm driven by the idea that meaningful change doesn't need to be massive it just needs to be made."
                </p>
                <a 
                  href="https://www.linkedin.com/in/ehsamullahbaig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>



            {/* Team Members Grid */}
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Core Team</h3>
                <div className="flex items-center justify-center mb-6">
                   <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
                   <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
                   <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
                 </div>
                <p className="text-gray-600">The dedicated professionals making our vision a reality</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up">
                {/* Team Member 1 - CTO */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 group text-center max-w-sm mx-auto">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-1 shadow-lg hover:w-44 hover:h-44 transition-all duration-300 ease-in-out">
                      <img 
                        src="/images/team/sohail.jpg" 
                        alt="Sohail Karim" 
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Team Member
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-800 transition-colors duration-300">Sohail Karim</h3>
                  <p className="text-purple-600 font-medium mb-3">Data Science Student | GIKI Institute</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    "I've always been curious about how technology can make life better. Lately, I've been diving into the world of AI and machine learning. It's all new to me, but I'm genuinely excited to learn and grow. Being part of Makeistan gives me the chance to explore these areas, contribute to real projects, and turn my interest into something meaningful."
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/sohail-karim-a7902a200" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                {/* Team Member 2 - Malayika */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-100 group text-center max-w-sm mx-auto">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-rose-500 p-1 shadow-lg hover:w-44 hover:h-44 transition-all duration-300 ease-in-out">
                      <img 
                        src="/images/team/malaika.jpg" 
                        alt="Malayika Mashroof Khan" 
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Team Member
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-800 transition-colors duration-300">Malayika Mashroof Khan</h3>
                  <p className="text-pink-600 font-medium mb-3">Electrical Engineering Student | Purpose-Driven Innovator</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    "With every circuit I design and every system I build, I aim to bring ideas to life. I'm passionate about applying technology to solve real-world challenges — smart, scalable, and sustainable."
                  </p>
                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    title="LinkedIn profile coming soon"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                {/* Team Member 3 - Head of Education */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 group text-center max-w-sm mx-auto">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 p-1 shadow-lg hover:w-44 hover:h-44 transition-all duration-300 ease-in-out">
                      <img 
                        src="/images/team/yazdan.jpg" 
                        alt="Yazdan Ali Khan" 
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Team Member
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-800 transition-colors duration-300">Yazdan Ali Khan</h3>
                  <p className="text-orange-600 font-medium mb-3">Electrical Engineering Student | GIKI Institute</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    "I humbly attempt within my best efforts to design, build, and innovate with a focus on real-world application. As an electrical engineering student, I'm passionate about creating smart, efficient, and sustainable systems that solve problems and drive progress."
                  </p>
                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    title="LinkedIn profile coming soon"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                {/* Team Member 4 - Energy Lab Director */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 group text-center max-w-sm mx-auto">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 p-1 shadow-lg hover:w-44 hover:h-44 transition-all duration-300 ease-in-out">
                      <img 
                        src="/images/team/mohsin.jpg" 
                        alt="Mohsin" 
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Team Member
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-800 transition-colors duration-300">Mohsin</h3>
                  <p className="text-indigo-600 font-medium mb-3">Computer Engineering Graduate | COMSATS Islamabad</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    "I am a Computer Engineering graduate from COMSATS University Islamabad with a deep passion for technology, innovation, and problem-solving. With a strong foundation in both hardware and software systems, I focus on developing efficient, reliable, and scalable solutions. My academic background and hands-on project experience have equipped me with skills in programming, embedded systems, IoT applications, and system optimization. I'm driven by a curiosity to explore emerging technologies and a strong commitment to delivering impactful results, which I believe makes me a valuable contributor to any tech-driven initiative."
                  </p>
                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    title="LinkedIn profile coming soon"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>


              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100 animate-fade-in-up">
            <div className="max-w-4xl mx-auto px-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Make Impact?</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join a team where your creativity shapes the future. Together, we're building more than projects—we're cultivating tomorrow's innovators.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:Info@makeistan.com" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}