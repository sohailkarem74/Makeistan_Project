'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import { ExternalLink, MapPin, Users, Calendar, Target, Lightbulb } from 'lucide-react';

const fellowships = [
  {
    id: 1,
    title: "Gilgit-Baltistan Climate Fellowship",
    description: "A 10-day human-centered design program that brings together people from diverse backgrounds to participate in a hands-on experience in Gilgit-Baltistan.",
    duration: "10 days",
    participants: "30 international + 10 local participants",
    location: "Various valleys of Gilgit-Baltistan",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    image: "🏔️",
    category: "Climate & Innovation",
    goals: [
      "Upskill and connect changemakers, innovators, artists, students, and teachers",
      "Collaborate with local communities of Gilgit-Baltistan",
      "Co-design and co-create solutions to serious regional challenges",
      "Teach design thinking and local innovation",
      "Build functional prototypes in makerspace",
      "Engage directly with community through homestays"
    ],
    projects: [
      {
        title: "Gulmit Carpet Centre",
        challenge: "How might we improve the efficiency of the carpet-making unit in Gulmit?",
        description: "Korgah is a women-run carpet weaving center in Gulmit, Gojal, Upper Hunza. Established in 2005 with 18 women creating traditional handmade carpets, rugs, and embroidered accessories.",
        focus: "Research trends, set up online store, scale business using local resources and designs"
      },
      {
        title: "Al-Amin Model School Gulmit",
        challenge: "How might we integrate a modern practical learning system into the education system?",
        description: "Al-Amin Model School & College established in 1991 by Gulmit Educational and Social Welfare Society (GESWS), offering SSC program.",
        focus: "Design STEM-focused curriculum, hands-on activities, new learning methods, and prototypes"
      },
      {
        title: "Fruit Jam Centre Nagar",
        challenge: "How might we improve the jam-making process to ensure efficiency and hygiene?",
        description: "Mamobar Organics in Nagar Valley crafts organic jams, oils, and green teas using local fruits, herbs, and sun-dried fruits.",
        focus: "Improve jam-making process while maintaining organic nature and supporting food preservation"
      },
      {
        title: "Women Artisans",
        challenge: "How might we enhance local handicraft projects helping women artisans build viable, scalable, eco-friendly, and profitable products?",
        description: "Women artisans in Hunza Valley create exceptional designs with international recognition, boosted by tourism and online business.",
        focus: "Co-design products, introduce new flavors and colors, conduct user research for market needs"
      },
      {
        title: "Glaciers",
        challenge: "What steps can we take to save the melting glaciers?",
        description: "Glaciers in Gilgit-Baltistan are melting rapidly due to climate change, raising concerns about glacial lake outburst floods (GLOFs).",
        focus: "Work with Passu community to find solutions to decrease glacier melting and prevent acceleration"
      }
    ],
    process: [
      "Information gathering",
      "Problem framing",
      "Field and community visits",
      "Idea generation",
      "Sketch modeling",
      "Field and community review",
      "Prototype",
      "Solution refinement",
      "Community showcase",
      "Continuity planning"
    ],
    selectionProcess: {
      description: "Individuals who wish to participate in this program must undergo a thorough selection process designed to ensure the best candidates are chosen.",
      steps: [
        {
          title: "Application Form",
          description: "Complete a comprehensive application form providing detailed information about backgrounds, skills, and aspirations."
        },
        {
          title: "Interview Process",
          description: "Successful candidates will be invited to attend an interview to showcase their unique qualities and potential contributions."
        },
        {
          title: "Panel Evaluation",
          description: "Final selection made by a panel of independent jurors consisting of experts in various fields."
        }
      ],
      diversity: "The committee aims to gather a harmonious mix of designers, innovators, artists, engineers, changemakers, educators, students, and teachers, ensuring that a variety of perspectives and expertise are represented."
    }
  },
  {
    id: 2,
    title: "Makeistan Innovation Fellowship at KIU",
    description: "A 3-week pilot program that trained 140 students in design thinking, digital fabrication, and entrepreneurship, resulting in 16 interdisciplinary innovation projects.",
    location: "Karakoram International University, Gilgit",
    duration: "3-week pilot program",
    beneficiaries: "140 Students",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    image: "🎓",
    category: "Education & Innovation",
    impact: [
      "140 students trained in innovation methodologies",
      "16 real-world problem-solving projects completed",
      "Permanent Maker Lab established at KIU",
      "Youth-led innovation ecosystem catalyzed"
    ]
  }
];

export default function Programs() {
  const [selectedFellowship, setSelectedFellowship] = useState(null);

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fellowship Programs</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Transformative Learning Experiences</h3>
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
        {/* Programs Overview Section */}
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
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fellowship Programs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Immersive learning experiences that bring together diverse changemakers to tackle real-world challenges through human-centered design.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Training 180+ participants across multiple programs, fostering innovation and creating sustainable solutions for local communities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaborative Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connecting innovators, artists, students, and educators to co-create solutions through hands-on prototyping and community engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fellowship Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Fellowship Programs</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fellowships.map((fellowship) => (
              <div key={fellowship.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{fellowship.image}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  {fellowship.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {fellowship.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{fellowship.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{fellowship.beneficiaries}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{fellowship.location}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {fellowship.category}
                  </span>
                </div>
                
                {fellowship.id === 1 ? (
                  <Link 
                    href="/projects/6"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </Link>
                ) : fellowship.id === 2 ? (
                  <Link 
                    href="/projects/4"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </Link>
                ) : (
                  <button 
                    onClick={() => setSelectedFellowship(fellowship)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Fellowship Modal */}
        {selectedFellowship && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedFellowship.title}</h2>
                    <p className="text-blue-100 opacity-90">{selectedFellowship.description}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedFellowship(null)}
                    className="text-white hover:text-gray-200 text-3xl font-bold ml-4 transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-8 overflow-y-auto max-h-[calc(95vh-120px)]">
              
              {selectedFellowship.goals && (
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Target className="w-6 h-6 mr-3 text-blue-600" />
                      Fellowship Goals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedFellowship.goals.map((goal, index) => (
                        <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFellowship.projects && (
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3 text-green-600" />
                      Fellowship Projects
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      {selectedFellowship.projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                              {index + 1}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">{project.title}</h4>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg mb-4">
                            <p className="text-blue-700 font-semibold italic text-sm">Challenge:</p>
                            <p className="text-blue-800 font-medium">{project.challenge}</p>
                          </div>
                          <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Focus:</span> {project.focus}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFellowship.process && (
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🔄</span>
                      Fellowship Process
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {selectedFellowship.process.map((step, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold shadow-lg">
                            {index + 1}
                          </div>
                          <p className="text-sm text-gray-700 font-semibold leading-tight">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFellowship.selectionProcess && (
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🎯</span>
                      Selection Process
                    </h3>
                    <div className="bg-white p-5 rounded-xl mb-6 shadow-sm border border-orange-100">
                      <p className="text-gray-700 text-lg leading-relaxed">{selectedFellowship.selectionProcess.description}</p>
                    </div>
                    
                    <div className="grid gap-5 mb-6">
                      {selectedFellowship.selectionProcess.steps.map((step, index) => (
                        <div key={index} className="bg-white p-5 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                          </div>
                          <p className="text-gray-700 ml-12 leading-relaxed">{step.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300 shadow-lg">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">🤝</span>
                        <h4 className="text-xl font-bold text-gray-800">Diversity & Collaboration</h4>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{selectedFellowship.selectionProcess.diversity}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFellowship.impact && (
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🎯</span>
                      Key Impact
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedFellowship.impact.map((item, index) => (
                        <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-green-100">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        )}

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