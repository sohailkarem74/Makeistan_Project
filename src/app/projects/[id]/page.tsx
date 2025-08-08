"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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

// Define interfaces for better type safety
interface Project {
  id: string;
  title: string;
  [key: string]: any;
}

interface ProjectStep {
  title: string;
  description: string;
}

interface ProjectItem {
  title: string;
  challenge?: string;
  description: string;
  focus?: string;
}

// ProjectSlideshow component for projects with multiple images
const ProjectSlideshow = ({ project }: { project: Project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safety check for project object
  if (!project || !project.id) {
    return null;
  }
  
  // Define slides based on project ID
  const getSlides = () => {
    if (project.id === '1') {
      return [
        {
          image: "/images/projects/E1.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Digital skills training for youth empowerment"
        },
        {
          image: "/images/projects/E2.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Creating sustainable employment opportunities"
        },
        {
          image: "/images/projects/E3.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Freelancing and entrepreneurship development"
        },
        {
          image: "/images/projects/E4.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Community tech centers and innovation hubs"
        }
      ];
    } else if (project.id === '2') {
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
    } else if (project.id === '4') {
      return [
        {
          image: "/images/fellowship/K1.jpg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Innovation and design thinking workshops at KIU"
        },
        {
          image: "/images/fellowship/K2.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Students building innovative solutions with cutting-edge technology"
        },
        {
          image: "/images/fellowship/K3.jpg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Collaborative learning and prototype development"
        }
      ];
    } else if (project.id === '5') {
      return [
        {
          image: "/images/projects/Robotics1.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Advanced robotics training for community development"
        },
        {
          image: "/images/projects/Robotics2.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Hands-on robotics workshops for students"
        },
        {
          image: "/images/projects/Robotics3.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Building innovative robotics solutions"
        },
        {
          image: "/images/projects/Robotics4.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Community robotics program achievements"
        },
        {
          image: "/images/projects/Robotics5.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Collaborative robotics learning environment"
        },
        {
          image: "/images/projects/Robotics6.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Robotics innovation and creativity showcase"
        },
        {
          image: "/images/projects/Robotics7.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Technical skills development in robotics"
        },
        {
          image: "/images/projects/Robotics8.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Community engagement through robotics"
        },
        {
          image: "/images/projects/Robotics9.jpeg",
          title: project.title,
          subtitle: project.subtitle,
          description: "Future leaders in robotics and technology"
        }
       ];
    }
    return [];
  };
  
  const slides = getSlides();
  
  // Debug logging
  console.log('Project ID:', project.id);
  console.log('Slides:', slides);
  
  // Safety check for slides
  if (!slides || slides.length === 0) {
    return (
      <div className="relative h-[700px] w-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            {project.subtitle}
          </p>
        </div>
      </div>
    );
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
    <div className="relative h-[700px] w-full overflow-hidden">
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

// FellowshipSlideshow component for fellowship projects
const FellowshipSlideshow = ({ project }: { project: Project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Fellowship images based on project ID
  const fellowshipImages = project.id === '4' ? [
    '/images/fellowship/K1.jpg',
    '/images/fellowship/K2.jpeg',
    '/images/fellowship/K3.jpg'
  ] : [
    '/images/fellowship/f1.JPG',
    '/images/fellowship/f2.JPG',
    '/images/fellowship/f3.JPG',
    '/images/fellowship/f4.JPG',
    '/images/fellowship/f5.JPG',
    '/images/fellowship/f6.JPG',
    '/images/fellowship/f7.JPG'
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % fellowshipImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, fellowshipImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fellowshipImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fellowshipImages.length) % fellowshipImages.length);
  };

  return (
    <div 
      className="relative h-[700px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      {fellowshipImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Fellowship image ${index + 1}`}
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
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md transition-all duration-500">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {fellowshipImages.map((_, index) => (
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

const projectData: { [key: string]: Project } = {
  '1': {
    id: '1',
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
  },
  '6': {
    id: '6',
    title: 'Gilgit-Baltistan Climate Fellowship',
    subtitle: 'A 10-day human-centered design program in Gilgit-Baltistan',
    location: 'Various valleys of Gilgit-Baltistan',
    beneficiaries: '30 international + 10 local participants',
    status: 'Active',
    description: 'The Gilgit-Baltistan Design Fellowship is a 10-day human-centered design program that aims to bring together people from diverse backgrounds and experiences to participate in a hands-on experience in Gilgit-Baltistan. The goal of the fellowship is to upskill and connect changemakers, innovators, artists, students, and teachers with the local communities of Gilgit-Baltistan. Participants will collaborate to co-design and co-create solutions to some of the serious challenges faced by the residents of the region.',
    approach: 'This hands-on fellowship will teach design thinking and local innovation to the participants. Participants will have the opportunity to work in a makerspace, where they will build functional prototypes. They will engage directly with the community, staying with local families to gain a better understanding of user needs and challenges. The fellowship brings together 30 international and national participants, as well as 10 local participants from the communities of Gilgit-Baltistan working together as a team on six different projects.',
    methodology: 'We use community-centered design thinking with participatory research. Our process includes iterative prototyping, local knowledge integration, and sustainable impact measurement.',
    goals: [
      'Upskill and connect changemakers, innovators, artists, students, and teachers',
      'Collaborate with local communities of Gilgit-Baltistan',
      'Co-design and co-create solutions to serious regional challenges',
      'Teach design thinking and local innovation',
      'Build functional prototypes in makerspace',
      'Engage directly with community through homestays'
    ],
    projects: [
      {
        title: 'Gulmit Carpet Centre',
        challenge: 'How might we improve the efficiency of the carpet-making unit in Gulmit?',
        description: 'Korgah is a women-run carpet weaving center located in Gulmit, Gojal, Upper Hunza. Established in 2005, it began with the efforts of around 18 women who sought to create a space for weaving traditional, pure handmade carpets, rugs, and handcrafting embroidered purses and wallets.',
        focus: 'The team will collaborate with the artisans to research trends in Pakistan, assist in setting up an online store and help scale up their business using local resources, incorporating local designs, culture, and the most in-demand styles in the market.'
      },
      {
        title: 'Al-Amin Model School Gulmit',
        challenge: 'How might we integrate a modern practical learning system into the education system of Al-Amin Model School Gulmit?',
        description: 'Al-Amin Model School & College in Gulmit was established on September 21, 1991. It is an initiative of the Gulmit Educational and Social Welfare Society (GESWS), a registered community-based organization dedicated to improving the quality of life through educational and developmental activities.',
        focus: 'The team will work with teachers and students to assess their current models and collaboratively design a curriculum focused on STEM, hands-on activities, and new learning methods, working on prototypes with students and teachers.'
      },
      {
        title: 'Fruit Jam Centre Nagar',
        challenge: 'How might we improve the jam-making process to ensure that the new methods are both efficient and hygienic?',
        description: 'Nestled in the picturesque Nagar Valley, Mamobar Organics is a charming small business operated by dedicated community members. This venture crafts jams, fragrant oils, and soothing green teas using organic methods and local fruits.',
        focus: 'The team will collaborate to improve the jam-making process, ensuring new methods are efficient and hygienic while maintaining the organic nature of products and supporting community food preservation.'
      },
      {
        title: 'Women Artisans',
        challenge: 'How might we enhance the local handicraft projects of Hunza, helping local women artisans build products that are viable, scalable, eco-friendly, and profitable?',
        description: 'In Hunza Valley, women artisans and entrepreneurs play a crucial role in economic activities. These women have strong command of the handicraft industry, creating exceptional designs with international recognition, boosted by tourism and online business.',
        focus: 'Co-design products, introduce new flavors and colors, conduct user research for market needs and demands, enabling artisans to boost sales and enhance local handicraft projects.'
      },
      {
        title: 'Glaciers',
        challenge: 'What steps can we take to save the melting glaciers?',
        description: 'Glaciers in Gilgit-Baltistan are melting rapidly due to climate change, raising concerns about glacial lake outburst floods (GLOFs) as new lakes form from meltwater, posing threats to inhabitants and ecosystem.',
        focus: 'Work with the local Passu community to find solutions to decrease glacier melting and suggest ways for community collaboration in efforts to save glaciers and prevent accelerated melting.'
      }
    ],
    process: [
       'Information gathering',
       'Problem framing', 
       'Field and community visits',
       'Idea generation',
       'Sketch modeling',
       'Field and community review',
       'Prototype',
       'Solution refinement',
       'Community showcase',
       'Continuity planning'
     ],
     selectionProcess: {
       overview: 'Individuals who wish to participate in this program must undergo a thorough selection process designed to ensure the best candidates are chosen.',
       steps: [
         {
           step: 'Application Form',
           description: 'Applicants complete a comprehensive application form, providing detailed information about their backgrounds, skills, and aspirations.'
         },
         {
           step: 'Interview',
           description: 'Successful candidates are invited to attend an interview to showcase their unique qualities and potential contributions to the program.'
         },
         {
           step: 'Final Selection',
           description: 'A panel of independent jurors, consisting of experts in various fields, evaluates candidates to create a diverse and well-rounded team.'
         }
       ],
       diversity: 'The committee aims to gather a harmonious mix of designers, innovators, artists, engineers, changemakers, educators, students, and teachers, ensuring that a variety of perspectives and expertise are represented. This approach enhances the program\'s collaborative environment and maximizes its potential for innovation and impact.'
     },
    impact: [
      'Cross-cultural collaboration and knowledge exchange',
      'Community-driven innovation solutions',
      'Capacity building in design thinking methodologies',
      'Sustainable development through local engagement',
      'Enhanced problem-solving skills for participants'
    ],
    keyFeatures: [
      'Human-centered design methodology',
      'Community homestay experiences',
      'Makerspace prototype development',
      'Cross-sector collaboration framework',
      'Local innovation and design thinking training'
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
      {(id === '1' || id === '2' || id === '3' || id === '4' || id === '5') ? (
        <ProjectSlideshow project={project} />
      ) : id === '6' ? (
        <FellowshipSlideshow project={project} />
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
                <div className="bg-gray-50 rounded-lg p-6">
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

            {/* Fellowship Projects */}
            {project.projects && (
              <section>
                <div className="bg-blue-600 rounded-lg p-6 text-white mb-6">
                  <h2 className="text-3xl font-bold mb-2">Fellowship Projects</h2>
                  <p className="text-white/90 text-lg">Six transformative projects addressing real community challenges</p>
                </div>
                
                <div className="space-y-6">
                  {project.projects.map((proj: ProjectItem, index: number) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{proj.title}</h3>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded p-3 mb-3">
                            <p className="text-gray-700 font-medium italic">{proj.challenge}</p>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3">{proj.description}</p>
                          <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-3">
                            <p className="text-gray-700 font-medium">{proj.focus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Fellowship Process */}
             {project.process && (
               <section>
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Fellowship Process</h2>
                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {project.process.map((step: string, index: number) => (
                       <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                         <div className="flex items-center gap-3">
                           <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                             {index + 1}
                           </div>
                           <p className="text-gray-700 font-medium">{step}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </section>
             )}

             {/* Selection Process */}
             {project.selectionProcess && (
               <section>
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Selection Process</h2>
                 <div className="space-y-6">
                   <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                     <p className="text-gray-700 leading-relaxed text-lg">{project.selectionProcess.overview}</p>
                   </div>
                   
                   <div className="space-y-4">
                     {project.selectionProcess.steps.map((step: ProjectStep, index: number) => (
                       <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                         <div className="flex items-start gap-4">
                           <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                             {index + 1}
                           </div>
                           <div className="flex-1">
                             <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                             <p className="text-gray-700 leading-relaxed">{step.description}</p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                   
                   <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                     <h3 className="text-lg font-bold text-gray-800 mb-3">Diversity & Team Composition</h3>
                     <p className="text-gray-700 leading-relaxed">{project.selectionProcess.diversity}</p>
                   </div>
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


          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for partners, volunteers, and supporters to help us expand our impact. 
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