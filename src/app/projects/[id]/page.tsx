"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { ArrowLeft, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// ReadMore component for handling long text
const ReadMore = ({ text, maxLength = 150 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  
  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200 text-sm"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </span>
  );
};

// ProjectSlideshow component for projects with multiple images
const ProjectSlideshow = ({ project }: { project: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safety check for project object
  if (!project || !project.id) {
    return null;
  }
  
  // Define slides based on project ID
  const getSlides = () => {
    if (project.id === '2') {
       return [
         {
           image: "/images/projects/housing1.jpg",
           title: project.title,
           subtitle: project.subtitle,
           description: "Sustainable housing solutions for flood-affected communities"
         },
         {
           image: "/images/projects/hosuing2.gif",
           title: project.title,
           subtitle: project.subtitle,
           description: "Resilient construction techniques for disaster-prone areas"
         }
       ];
    } else if (project.id === '3') {
      return [
        {
          image: "/images/projects/solar-water-installation-1.jpg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Bringing clean water to remote villages through solar-powered solutions"
        },
        {
          image: "/images/projects/solar-water-installation-2.jpg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Professional installation of solar-powered water systems in rural communities"
        }
      ];
    } else if (project.id === '5') {
      return [
        {
          image: "/images/projects/Robotics1.png?v=2",
          title: project.title,
          subtitle: project.subtitle,
          description: "Advanced robotics training for community development"
        },
        {
          image: "/images/projects/Robotics2.jpeg?v=2",
          title: project.title,
          subtitle: project.subtitle,
          description: "Hands-on robotics workshops for students"
        },
        {
          image: "/images/projects/Robotics3.png?v=2",
          title: project.title,
          subtitle: project.subtitle,
          description: "Building innovative robotics solutions"
        },
        {
          image: "/images/projects/Robotics4.png?v=2",
          title: project.title,
          subtitle: project.subtitle,
          description: "Community robotics program achievements"
        }
       ];
    }
    return [];
  };
  
  const slides = getSlides();
  
  // Safety check for slides
  if (!slides || slides.length === 0) {
    return <div className="text-white text-center p-8">No slides available</div>;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={95}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md mb-4 transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg drop-shadow-md transition-all duration-500">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const projectData: { [key: string]: any } = {
  '1': {
    title: "E-Rozgar Program Gilgit Baltistan",
    subtitle: "Powered by Makeistan",
    location: "Gilgit Baltistan, Pakistan",

    beneficiaries: "180+ Youth",
    status: "Completed",
    description: "The E-Rozgar Program Gilgit-Baltistan is an initiative originally proposed by Makeistan platform, modeled after successful e-Rozgar initiatives in Punjab and Khyber Pakhtunkhwa. This program aims at combating youth unemployment by equipping the region's young people with market-relevant digital and freelancing skills. Despite being one of the most literate regions in Pakistan, Gilgit-Baltistan has historically lacked a structured employment strategy. With Pakistan emerging as the 4th fastest-growing freelance market globally, this program bridges the gap by offering digital skills training and pathways to economic empowerment.",
    executiveSummary: "Strategic response to youth unemployment in Gilgit-Baltistan through digital skills training and freelancing opportunities, leveraging Pakistan's position as the 4th fastest-growing freelance market globally.",
    background: "Youth unemployment is a pressing issue worldwide, and Gilgit-Baltistan is no exception—despite being one of the most literate regions in Pakistan, it has historically lacked a structured employment strategy. Meanwhile, Pakistan has emerged as the 4th fastest-growing freelance market globally, presenting a tremendous opportunity for young people to engage in online work.",
    mainGoal: "To equip youth in Gilgit-Baltistan with soft skills and online employability skills, enabling them to participate in the global digital economy and reduce regional unemployment.",
    objectives: [
      "To provide high-impact freelancing and digital skills training",
      "To promote self-employment through online work platforms",
      "To open new economic opportunities for youth through remote and freelance jobs"
    ],
    trainingAreas: [
      "Graphic Designing",
      "Web Development",
      "Accounting & Finance",
      "Technical Content Writing",
      "Machine Learning & Artificial Intelligence",
      "Freelancing Techniques & Marketplaces"
    ],
    impact: [
      "60 participants per cohort (Phase 1)",
      "120 trained youth (Phase 2)",
      "Increased online employment and freelance income among graduates",
      "Greater digital inclusion and economic participation from underrepresented communities"
    ],
    keyFeatures: [
      "Market-relevant digital skills curriculum",
      "Freelancing and online work platform training",
      "Soft skills and employability development",
      "Economic empowerment through remote work opportunities"
    ]
  },
  '2': {
    id: '2',
    title: 'Sustainable Housing for Flood-Affected Communities - Sindh',
    subtitle: 'Creating climate-resilient, affordable housing solutions rooted in local context and culture',
    location: 'Sindh Province, Pakistan',
    beneficiaries: '300+ Families',
    status: 'In Progress',
    description: 'In response to the devastating floods in Sindh, Makeistan has successfully completed its first low-cost, sustainable housing unit designed specifically for displaced and vulnerable communities. This initiative reflects our commitment to creating climate-resilient, affordable housing solutions that are deeply rooted in local context and culture. But our work goes beyond construction—we believe that empowering communities with knowledge is just as important as providing infrastructure. As part of this initiative, we are engaging with local residents to educate and train them in sustainable building practices, helping them understand the long-term benefits of eco-friendly living and how to replicate these models in their own communities.',
    approach: 'Our approach combines locally sourced materials, passive design principles, and renewable energy technologies to ensure these homes are not only cost-effective but also environmentally friendly and resilient to future climate-related disasters. The pilot house integrates natural ventilation, thermal insulation, and rain-resilient construction techniques tailored to the unique environmental challenges of Sindh.',
    communityEngagement: 'But our work goes beyond construction—we believe that empowering communities with knowledge is just as important as providing infrastructure. As part of this initiative, we are engaging with local residents to educate and train them in sustainable building practices, helping them understand the long-term benefits of eco-friendly living and how to replicate these models in their own communities.',
    futureVision: 'This project is a step toward scalable, community-led solutions for climate adaptation. With the success of our first prototype, we aim to expand this work to reach more families, ensuring that sustainable housing becomes a reality—not a privilege—for those who need it most.',
    goals: [
      'Construct 200 flood-resistant homes',
      'Train local builders in sustainable construction',
      'Establish community-led maintenance programs',
      'Create replicable housing models'
    ],
    impact: [
      '150 flood-resistant homes completed',
      'Local construction skills training',
      'Sustainable material sourcing',
      'Community-led implementation'
    ],
    keyFeatures: [
      'Climate-resilient design with passive cooling',
      'Locally sourced sustainable materials',
      'Natural ventilation and thermal insulation',
      'Rain-resilient construction techniques',
      'Community education and training programs',
      'Renewable energy integration'
    ]
  },
  '3': {
    id: '3',
    title: 'Project Water - Solar-Powered Clean Water Access in Sindh',
    subtitle: 'Harnessing renewable energy to provide safe, reliable, and sustainable access to drinking water',
    location: 'Sindh Province, Pakistan',
    beneficiaries: 'Multiple Villages',
    status: 'Active',
    description: 'Access to clean drinking water remains one of the most pressing challenges in rural Sindh, particularly in flood-affected and drought-prone communities. In response, Makeistan launched Project Water—a community-driven initiative that harnesses the power of renewable energy to provide safe, reliable, and sustainable access to drinking water. Through the installation of solar-powered water tubewells, Project Water brings clean groundwater to remote villages that have long struggled with water scarcity and contamination. These systems eliminate the need for expensive and polluting fuel-powered pumps, making clean water accessible in an eco-friendly and cost-efficient way. Each solar water unit is designed to serve an entire village, improving health outcomes, reducing the burden on women and children who often travel long distances to fetch water, and fostering resilience in the face of climate-induced water challenges. Project Water isn\'t just about infrastructure—it\'s about dignity, health, and sustainability. As we continue to scale this project across Sindh, our goal is to create a replicable model for clean water access that empowers communities and protects the environment.',
    goals: [
      'Install solar-powered water tubewells in remote villages',
      'Eliminate dependency on expensive fuel-powered pumps',
      'Improve health outcomes through clean water access',
      'Reduce burden on women and children for water collection',
      'Create replicable models for sustainable water access'
    ],
    impact: [
      'Clean groundwater access for multiple villages',
      'Reduced water-related health issues',
      'Environmental protection through renewable energy use',
      'Enhanced community resilience to climate challenges',
      'Improved quality of life for rural families'
    ],
    keyFeatures: [
      'Solar-powered water extraction systems',
      'Community-driven implementation approach',
      'Eco-friendly and cost-efficient technology',
      'Village-scale water access solutions',
      'Climate-resilient infrastructure'
    ]
  },
  '4': {
    id: '4',
    title: 'Makeistan Innovation Fellowship at KIU',
    subtitle: 'Empowering Youth Innovation in Gilgit-Baltistan',
    location: 'Karakoram International University, Gilgit',
    beneficiaries: '140 Students',
    status: 'Completed',
    description: 'The Makeistan Innovation Fellowship (MIF), launched in collaboration with Karakoram International University (KIU) and its Business Incubation Centre, successfully completed its 3-week pilot with 140 students from BBA and Electrical Engineering. Through hands-on learning in design thinking, digital fabrication, and entrepreneurship, students built 16 interdisciplinary projects tackling real-world problems.',
    approach: 'From smart irrigation systems to solar-wind energy solutions, and tech-enabled artisan tools, the program blended creativity, engineering, and business to spark innovation where it\'s needed most. The Fellowship focused on real-world problem-solving with local context and fostered cross-sector collaboration between academia, industry, and government.',
    toolsIntroduced: 'The Fellowship introduced cutting-edge tools like Arduino microcontrollers, 3D printers, and various sensors to students. These technologies enabled hands-on learning and practical application of theoretical knowledge, empowering students to build functional prototypes and innovative solutions.',
    futureVision: 'MIF has laid the foundation for a permanent Maker Lab at KIU and is set to become an annual flagship program, catalyzing a youth-led innovation ecosystem in Gilgit-Baltistan. This is just the beginning of a movement to equip the next generation with the tools to shape their future.',
    goals: [
      'Complete 3-week pilot program with 140 students',
      'Build 16 interdisciplinary innovation projects',
      'Introduce design thinking and digital fabrication',
      'Establish permanent Maker Lab at KIU',
      'Create annual flagship innovation program'
    ],
    impact: [
      '140 students trained in innovation methodologies',
      '16 real-world problem-solving projects completed',
      'Permanent Maker Lab established at KIU',
      'Cross-sector collaboration framework created',
      'Youth-led innovation ecosystem catalyzed'
    ],
    keyFeatures: [
      'Arduino, 3D printers, and sensor technologies',
      'Design thinking and entrepreneurship training',
      'Interdisciplinary project-based learning',
      'Academia-industry-government collaboration',
      'Local context problem-solving approach'
    ]
  },
  '5': {
    id: '5',
    title: "Community Robotics Program",
    subtitle: "Taking Innovation to Every Corner of Gilgit-Baltistan",
    location: "Across Gilgit-Baltistan",
    beneficiaries: "Hundreds of Students",
    status: "Active",
    description: "At Makeistan, we believe that access to cutting-edge technology and hands-on learning shouldn't be limited to big cities or elite schools. Our Community Robotics Program brings the future of learning directly to students across Gilgit-Baltistan—no matter how remote.",
    approach: "Through this mobile initiative, our team travels with all the necessary equipment, tools, and tech kits to organize on-site Robotics and AI Camps for school and college students. From learning the basics of electronics and programming to building their own robots, students get a chance to explore, experiment, and create—many for the first time in their lives.",
    methodology: "We organize hands-on robotics camps in schools and communities, teach students about sensors, coding, AI, and real-world applications, empower local youth with skills in problem-solving and innovation, and create exposure to STEM careers and emerging technologies.",
    achievements: "Our reach so far includes 10 successful camps across Gilgit-Baltistan, hundreds of students trained, and dozens of student-built robots and prototypes. By making tech education mobile, inclusive, and exciting, the Community Robotics Program is helping raise a new generation of makers, coders, and changemakers in the mountains of Pakistan.",
    goals: [
      "Introduce robotics education to 200+ students",
      "Develop technical and problem-solving skills",
      "Foster innovation and creativity in STEM fields",
      "Build a foundation for future technology careers"
    ],
    impact: [
      "Multiple robotics workshops successfully conducted",
      "Enhanced STEM education in the region",
      "Improved technical skill development among participants",
      "Cultivated innovation mindset in local youth"
    ],
    keyFeatures: [
      "Hands-on robotics workshops",
      "STEM curriculum integration",
      "Technical skill development programs",
      "Innovation and creativity training"
    ]
  }
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = React.use(params);
  const project = projectData[id];

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <BackButton />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BackButton />
      
      {/* Hero Section */}
      {(id === '2' || id === '3' || id === '5') ? (
        <ProjectSlideshow project={project} />
      ) : (
        <div className="relative h-[400px] w-full bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl drop-shadow-md">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-blue-600" size={20} />
              <h3 className="font-semibold text-gray-800">Location</h3>
            </div>
            <p className="text-gray-600">{project.location}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description and Goals */}
          <div className="lg:col-span-2 space-y-8">
            {/* Executive Summary */}
            {project.executiveSummary && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Executive Summary</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {project.executiveSummary}
                  </p>
                </div>
              </section>
            )}

            {/* Project Description */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.description} maxLength={300} />
                  </p>
              </div>
            </section>

            {/* Approach */}
            {project.approach && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.approach} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {/* Tools Introduced */}
            {project.toolsIntroduced && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Tools & Technologies</h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.toolsIntroduced} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {/* Methodology */}
            {project.methodology && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Methodology</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.methodology} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {/* Achievements */}
            {project.achievements && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.achievements} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {/* Future Vision */}
            {project.futureVision && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Future Vision</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <ReadMore text={project.futureVision} maxLength={150} />
                  </p>
                </div>
              </section>
            )}

            {/* Background */}
            {project.background && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Background</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.background}
                  </p>
                </div>
              </section>
            )}

            {/* Main Goal */}
            {project.mainGoal && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Goal</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {project.mainGoal}
                  </p>
                </div>
              </section>
            )}

            {/* Objectives */}
            {project.objectives && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Objectives</h2>
                <div className="space-y-4">
                  {project.objectives.map((objective: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Training Areas */}
            {project.trainingAreas && (
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Training Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.trainingAreas.map((area: string, index: number) => (
                    <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">📚</div>
                        <p className="text-gray-700 font-medium">{area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Impact Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Impact & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.impact.map((item: string, index: number) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Key Features and Image */}
          <div className="space-y-8">


            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
              <div className="space-y-3">
                {project.keyFeatures.map((feature: string, index: number) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 text-white rounded-full w-2 h-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Involved</h3>
              <p className="text-gray-600 mb-4">Interested in similar projects or want to collaborate?</p>
              <Link 
                href="/#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-block"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}