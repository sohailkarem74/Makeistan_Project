import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <BackButton />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 text-center relative animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Makeistan</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Gilgit Baltistan's First Ever Makerspace</h3>
            <p className="text-xl text-gray-600 font-medium mb-6">Where Ideas Come Alive</p>
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in-up">
        {/* Welcome Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Hub</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pakistan's first collaborative makerspace, built to empower people with tools, skills, and community needed to turn bold ideas into real-world solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rooted in Gilgit-Baltistan, we're addressing real challenges like energy access, climate resilience, and livelihood generation through hands-on learning.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Driven</h3>
                <p className="text-gray-700 leading-relaxed">
                  Democratizing innovation by providing access to cutting-edge tools, expert mentorship, and collaborative environment for local innovators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Labs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our specialized labs focus on climate innovation, green energy solutions, and robotics & AI, 
                  providing hands-on experience with cutting-edge technology.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Training Programs</h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer comprehensive training workshops and fellowship programs designed to build technical 
                  skills and foster entrepreneurial thinking.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Building</h3>
                <p className="text-gray-700 leading-relaxed">
                  We create a vibrant ecosystem where like-minded individuals collaborate, share knowledge, 
                  and support each other's innovative endeavors.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  From concept to prototype, we guide innovators through the entire product development cycle, 
                  providing mentorship and resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="mb-20">
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Students Trained</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-700 font-medium">Specialized Labs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-1"></div>
              </div>
              <p className="text-gray-700 mb-6">
                Ready to be part of Gilgit-Baltistan's innovation revolution? We'd love to hear from you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <div className="text-3xl mb-4">📍</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Location</h4>
                <p className="text-gray-700">Gilgit-Baltistan, Pakistan</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <div className="text-3xl mb-4">📧</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Email</h4>
                <p className="text-gray-700">info@makeistan.org</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                <div className="text-3xl mb-4">🌐</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Website</h4>
                <p className="text-gray-700">www.makeistan.org</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    {/* Footer */}
    <Footer />
    </>
  );
}