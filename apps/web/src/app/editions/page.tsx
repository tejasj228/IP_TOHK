"use client";

import {
  Calendar,
  Camera,
  ChevronDown,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Skiper } from "@/components/ui/skiper";

// Mock data for editions (5 completed seasons, 1 current season)
const editionsData = {
  "YCB 2020": {
    year: "2020",
    season: "YCB 2020",
    name: "YCB 2020 – Foundations of Change",
    status: "completed",
    location: "Delhi",
    participants: 30,
    states: 8,
    schools: 20,
    expectedParticipants: 30,
    dates: "15-22 March 2020",
    tagline: "Building the foundation for tomorrow's leaders.",
    registrationOpen: false,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: ["Dr. A.P.J. Abdul Kalam", "Kiran Mazumdar-Shaw"],
      workshops: [
        "Leadership Fundamentals",
        "Innovation Thinking",
        "Communication Skills",
      ],
      visits: ["Rashtrapati Bhavan", "IIT Delhi", "Red Fort"],
      activities: ["Talent Night", "Cultural Exchange", "Team Building"],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Opening ceremony with participants",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Leadership workshop",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Team collaboration session",
      },
    ],

    winningIdeas: [
      {
        title: "EcoStart",
        description: "Sustainable startup incubator for youth",
        team: "Team GreenBegin",
      },
      {
        title: "SkillBridge",
        description: "Connecting rural youth with urban opportunities",
        team: "Team Connect",
      },
    ],

    testimonials: [
      {
        quote: "YCB 2020 was the beginning of my leadership journey.",
        author: "Rahul Kumar",
        location: "Delhi",
      },
      {
        quote: "I learned to think beyond boundaries and dream bigger.",
        author: "Sneha Agarwal",
        location: "Jaipur",
      },
    ],

    impact: {
      projectsStarted: 25,
      clubsFormed: 8,
      diversityStats: {
        genderBalance: "50% female, 50% male",
        ruralUrban: "35% rural, 65% urban",
      },
      initiatives: [
        "8 leadership clubs started in participating schools",
        "5 community service projects launched",
        "2 social initiatives founded by participants",
      ],
    },
  },

  "YCB 2021": {
    year: "2021",
    season: "YCB 2021",
    name: "YCB 2021 – Resilience & Innovation",
    status: "completed",
    location: "Bangalore",
    participants: 40,
    states: 10,
    schools: 25,
    expectedParticipants: 40,
    dates: "10-17 August 2021",
    tagline: "Rising stronger through innovation.",
    registrationOpen: false,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: ["Ratan Tata", "Falguni Nayar", "Ritesh Agarwal"],
      workshops: [
        "Digital Innovation",
        "Entrepreneurship",
        "Mental Health Awareness",
        "Climate Action",
      ],
      visits: [
        "Indian Space Research Organisation",
        "IISc Bangalore",
        "Lalbagh Botanical Garden",
      ],
      activities: [
        "Innovation Fair",
        "Cultural Night",
        "Outdoor Adventure",
        "Mindfulness Sessions",
      ],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Innovation showcase",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Digital workshop session",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Team presentation",
      },
      {
        src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Climate action project",
      },
    ],

    winningIdeas: [
      {
        title: "MindCare",
        description: "Mental health support app for teenagers",
        team: "Team Wellness",
      },
      {
        title: "CleanEnergy",
        description: "Solar-powered charging stations for rural areas",
        team: "Team SolarTech",
      },
      {
        title: "FoodShare",
        description: "Platform to reduce food waste in communities",
        team: "Team ZeroWaste",
      },
    ],

    testimonials: [
      {
        quote: "YCB 2021 taught me resilience during challenging times.",
        author: "Ananya Reddy",
        location: "Hyderabad",
      },
      {
        quote: "The innovation workshops opened my mind to possibilities.",
        author: "Vikram Singh",
        location: "Chandigarh",
      },
    ],

    impact: {
      projectsStarted: 45,
      clubsFormed: 15,
      diversityStats: {
        genderBalance: "55% female, 45% male",
        ruralUrban: "38% rural, 62% urban",
      },
      initiatives: [
        "12 innovation clubs started in participating schools",
        "6 mental health awareness campaigns launched",
        "4 climate action projects initiated",
      ],
    },
  },

  "YCB 2022": {
    year: "2022",
    season: "YCB 2022",
    name: "YCB 2022 – Technology for Good",
    status: "completed",
    location: "Mumbai",
    participants: 60,
    states: 15,
    schools: 40,
    expectedParticipants: 60,
    dates: "5-12 June 2022",
    tagline: "Harnessing technology for social impact.",
    registrationOpen: false,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: ["Sundar Pichai", "Nandan Nilekani", "Melinda French Gates"],
      workshops: [
        "AI for Social Good",
        "Blockchain Applications",
        "App Development",
        "Data Science Basics",
      ],
      visits: [
        "Tata Institute of Fundamental Research",
        "Gateway of India",
        "Mumbai Film City",
        "Tech Startup Hub",
      ],
      activities: [
        "Hackathon",
        "Tech Fair",
        "Beach Cleanup",
        "Bollywood Night",
      ],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Hackathon participants",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "AI workshop session",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "App development team",
      },
      {
        src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Tech showcase presentation",
      },
      {
        src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Beach cleanup initiative",
      },
    ],

    winningIdeas: [
      {
        title: "EduAI",
        description: "AI-powered personalized learning assistant",
        team: "Team SmartLearn",
      },
      {
        title: "HealthChain",
        description: "Blockchain-based medical records system",
        team: "Team MedChain",
      },
      {
        title: "FarmTech",
        description: "IoT-based smart farming solution",
        team: "Team AgriInnovate",
      },
      {
        title: "DisasterAlert",
        description: "Early warning system for natural disasters",
        team: "Team SafeGuard",
      },
    ],

    testimonials: [
      {
        quote: "YCB 2022 showed me how technology can solve real problems.",
        author: "Kiran Joshi",
        location: "Pune",
      },
      {
        quote:
          "The hackathon experience was transformative for my coding journey.",
        author: "Meera Patel",
        location: "Surat",
      },
    ],

    impact: {
      projectsStarted: 75,
      clubsFormed: 20,
      diversityStats: {
        genderBalance: "48% female, 52% male",
        ruralUrban: "42% rural, 58% urban",
      },
      initiatives: [
        "18 coding clubs started in participating schools",
        "10 tech-for-good projects launched",
        "5 startups incubated by participants",
      ],
    },
  },

  "YCB 2023": {
    year: "2023",
    season: "YCB 2023",
    name: "YCB 2023 – Sustainability & Impact",
    status: "completed",
    location: "Kolkata",
    participants: 65,
    states: 18,
    schools: 45,
    expectedParticipants: 65,
    dates: "22-29 October 2023",
    tagline: "Creating sustainable solutions for a better tomorrow.",
    registrationOpen: false,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: ["Dr. Vandana Shiva", "Anand Mahindra", "Greta Thunberg"],
      workshops: [
        "Sustainable Development",
        "Circular Economy",
        "Climate Science",
        "Social Entrepreneurship",
      ],
      visits: [
        "Victoria Memorial",
        "Indian Museum",
        "Eco Park",
        "Sustainable Living Center",
      ],
      activities: [
        "Sustainability Fair",
        "Cultural Heritage Walk",
        "River Cleanup",
        "Bengali Cultural Night",
      ],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Sustainability workshop",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Climate action planning",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "River cleanup team",
      },
      {
        src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Social enterprise pitch",
      },
    ],

    winningIdeas: [
      {
        title: "PlasticCycle",
        description: "Community-based plastic recycling network",
        team: "Team EcoCycle",
      },
      {
        title: "GreenEnergy",
        description: "Renewable energy solutions for rural communities",
        team: "Team SustainPower",
      },
      {
        title: "WasteToWealth",
        description: "Converting agricultural waste to bio-fuel",
        team: "Team BioInnovate",
      },
    ],

    testimonials: [
      {
        quote: "YCB 2023 made me passionate about environmental conservation.",
        author: "Riya Chatterjee",
        location: "Kolkata",
      },
      {
        quote:
          "I learned that small actions can create big environmental impact.",
        author: "Arjun Gupta",
        location: "Guwahati",
      },
    ],

    impact: {
      projectsStarted: 90,
      clubsFormed: 25,
      diversityStats: {
        genderBalance: "53% female, 47% male",
        ruralUrban: "45% rural, 55% urban",
      },
      initiatives: [
        "20 environmental clubs started in participating schools",
        "12 sustainability projects launched",
        "6 green startups founded by participants",
      ],
    },
  },

  "YCB 2024": {
    year: "2024",
    season: "YCB 2024",
    name: "YCB 2024 – Innovation for a Better World",
    status: "completed",
    location: "Chennai",
    participants: 70,
    states: 20,
    schools: 50,
    expectedParticipants: 70,
    dates: "15-22 March 2024",
    tagline: "A week of learning, collaboration, and changemaking.",
    registrationOpen: false,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: [
        "Dr. Abdul Kalam Center",
        "Kiran Mazumdar-Shaw",
        "Byju Raveendran",
      ],
      workshops: [
        "Design Thinking",
        "AI & Robotics",
        "Storytelling for Change",
        "Sustainable Innovation",
        "Space Technology",
      ],
      visits: [
        "ISRO Headquarters",
        "IIT Madras",
        "Marina Beach",
        "Innovation District",
      ],
      activities: [
        "Talent Night",
        "Space Tech Fair",
        "Beach Conservation",
        "Tamil Cultural Evening",
      ],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Opening ceremony with participants",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Design thinking workshop",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Team collaboration session",
      },
      {
        src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Innovation pitch competition",
      },
      {
        src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Cultural night celebration",
      },
    ],

    winningIdeas: [
      {
        title: "Waste to Gold",
        description:
          "Turning organic waste into affordable compost for farmers",
        team: "Team EcoInnovators",
      },
      {
        title: "LearnBridge",
        description: "AI-powered learning platform for rural students",
        team: "Team TechForAll",
      },
      {
        title: "WaterWise",
        description: "Smart water conservation system for schools",
        team: "Team AquaSavers",
      },
      {
        title: "HealthConnect",
        description: "Telemedicine app connecting villages to urban doctors",
        team: "Team MedTech",
      },
      {
        title: "SkillUp",
        description: "Peer-to-peer skill sharing platform for youth",
        team: "Team SkillShare",
      },
    ],

    testimonials: [
      {
        quote:
          "I came to YCB shy, but left with confidence to lead projects in my school.",
        author: "Priya Sharma",
        location: "Mumbai",
      },
      {
        quote:
          "YCB taught me that age is just a number when it comes to creating impact.",
        author: "Arjun Patel",
        location: "Ahmedabad",
      },
      {
        quote:
          "The connections I made at YCB continue to support my changemaking journey.",
        author: "Kavya Singh",
        location: "Bangalore",
      },
    ],

    impact: {
      projectsStarted: 105,
      clubsFormed: 30,
      diversityStats: {
        genderBalance: "52% female, 48% male",
        ruralUrban: "40% rural, 60% urban",
      },
      initiatives: [
        "25 innovation clubs started in participating schools",
        "15 community service projects launched",
        "8 social enterprises founded by participants",
      ],
    },
  },

  "YCB 2025": {
    year: "2025",
    season: "YCB 2025",
    name: "YCB 2025 – Future Leaders Summit",
    status: "upcoming",
    location: "Jaipur",
    participants: 80,
    states: 22,
    schools: 60,
    expectedParticipants: 80,
    dates: "20-27 July 2025",
    tagline: "Building tomorrow's changemakers today.",
    theme: "Digital Innovation for Social Impact",
    registrationOpen: true,
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    comingSoonImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

    highlights: {
      keynotes: ["Satya Nadella", "Priyanka Chopra", "Elon Musk"],
      workshops: [
        "Digital Innovation",
        "AI for Social Good",
        "Sustainable Tech",
        "Youth Leadership",
      ],
      visits: ["Hawa Mahal", "IIT Jodhpur", "City Palace", "Startup Incubator"],
      activities: [
        "Tech Showcase",
        "Rajasthani Cultural Night",
        "Innovation Challenge",
        "Leadership Summit",
      ],
    },

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Registration and welcome ceremony",
      },
      {
        src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Digital innovation workshop",
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Future leaders collaboration",
      },
    ],

    winningIdeas: [
      {
        title: "Coming Soon",
        description: "Innovative solutions from YCB 2025 participants",
        team: "Teams TBA",
      },
    ],

    testimonials: [
      {
        quote: "Looking forward to an amazing experience at YCB 2025!",
        author: "Participants",
        location: "Pan India",
      },
    ],

    impact: {
      projectsStarted: 0,
      clubsFormed: 0,
      diversityStats: {
        genderBalance: "Target: 50% female, 50% male",
        ruralUrban: "Target: 45% rural, 55% urban",
      },
      initiatives: [
        "Programs currently in progress",
        "Results will be available post-summit",
      ],
    },
  },
};

const EditionsPage = () => {
  const [selectedEdition, setSelectedEdition] = useState("YCB 2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editions = Object.keys(editionsData);
  const currentEdition =
    editionsData[selectedEdition as keyof typeof editionsData];

  // Close dropdown when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Render upcoming edition
  if (currentEdition.status === "upcoming") {
    return (
      <div className="relative overflow-x-hidden">
        {/* Hero Section for Upcoming Edition */}
        <section className="relative min-h-screen overflow-hidden bg-[#050a30]">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(${currentEdition.comingSoonImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a30] via-[#050a30]/80 to-[#050a30]/60" />

          <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
            {/* Edition Selector */}
            <div className="pointer-events-auto absolute top-24 right-4 z-50 sm:right-6 lg:right-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Select edition"
                  className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 font-medium text-[#050a30] text-xs shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                >
                  <Calendar className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-base">
                    {selectedEdition}
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 sm:h-5 sm:w-5 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    aria-label="Edition options"
                    className="absolute top-full right-0 z-50 mt-2 w-full min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg sm:min-w-[200px] sm:rounded-xl"
                    role="listbox"
                  >
                    <div className="py-1 sm:py-2">
                      {editions.map((edition) => (
                        <button
                          aria-selected={selectedEdition === edition}
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left font-medium text-xs transition-all duration-200 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm ${
                            selectedEdition === edition
                              ? "bg-[#050a30] text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                          }`}
                          key={edition}
                          onClick={() => {
                            setSelectedEdition(edition);
                            setIsDropdownOpen(false);
                          }}
                          role="option"
                          type="button"
                        >
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          {edition}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex h-full min-h-screen items-center">
              <div className="w-full py-20 lg:py-32">
                <BlurFade delay={0.4} key={`hero-content-${selectedEdition}`}>
                  <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-6 sm:ml-4 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
                    <div className="inline-block rounded-lg bg-[#FFD700]/20 px-4 py-2 font-semibold text-[#FFD700] text-sm">
                      COMING SOON
                    </div>

                    <h1 className="font-bold text-3xl text-white leading-tight md:text-4xl lg:text-6xl">
                      {currentEdition.name}
                    </h1>

                    <p className="text-gray-200 text-xl lg:text-2xl">
                      {currentEdition.tagline}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-lg text-white">
                        <MapPin className="h-6 w-6 text-[#FFD700]" />
                        <span>{currentEdition.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg text-white">
                        <Calendar className="h-6 w-6 text-[#FFD700]" />
                        <span>{currentEdition.dates}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg text-white">
                        <Users className="h-6 w-6 text-[#FFD700]" />
                        <span>
                          {currentEdition.expectedParticipants} Expected
                          Participants
                        </span>
                      </div>
                    </div>

                    {currentEdition.registrationOpen && (
                      <div className="flex gap-4">
                        <button
                          className="rounded-lg bg-[#FFD700] px-8 py-4 font-bold text-[#050a30] transition-all duration-200 hover:scale-105 hover:bg-[#FFD700]/90"
                          type="button"
                        >
                          Register Your Interest
                        </button>
                        <button
                          className="rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#050a30]"
                          type="button"
                        >
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Render completed edition
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section - Edition Overview */}
      <section className="relative min-h-screen overflow-hidden bg-[#050a30]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url(${currentEdition.groupPhoto})` }}
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}
        {/* Enhanced gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Edition Selector */}
          <div className="pointer-events-auto absolute top-24 right-4 z-50 sm:right-6 lg:right-8">
            <div className="relative" ref={dropdownRef}>
              <button
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select edition"
                className="flex items-center gap-2 rounded-lg bg-[#050a30] px-3 py-1.5 font-medium text-white text-xs shadow-lg transition-all duration-200 hover:bg-[#050a30]/90 focus:outline-none focus:ring-2 focus:ring-[#050a30]/20 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
              >
                <Calendar className="h-3.5 w-3.5 text-white sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-base">{selectedEdition}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-white transition-transform duration-200 sm:h-5 sm:w-5 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  aria-label="Edition options"
                  className="absolute top-full right-0 z-50 mt-2 w-full min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg sm:min-w-[200px] sm:rounded-xl"
                  role="listbox"
                >
                  <div className="py-1 sm:py-2">
                    {editions.map((edition) => (
                      <button
                        aria-selected={selectedEdition === edition}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left font-medium text-xs transition-all duration-200 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm ${
                          selectedEdition === edition
                            ? "bg-[#050a30] text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        key={edition}
                        onClick={() => {
                          setSelectedEdition(edition);
                          setIsDropdownOpen(false);
                        }}
                        role="option"
                        type="button"
                      >
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        {edition}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex h-full min-h-screen items-center">
            <div className="w-full py-20 lg:py-32">
              <BlurFade delay={0.4} key={`hero-content-${selectedEdition}`}>
                <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-6 sm:ml-4 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
                  <h1 className="font-bold text-3xl text-white leading-tight md:text-4xl lg:text-6xl">
                    {currentEdition.name}
                  </h1>

                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-extrabold text-transparent">
                    <p className="text-[#FFD700] text-xl lg:text-2xl">
                      {currentEdition.tagline}
                    </p>
                  </span>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium text-sm">Location</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.location}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <Users className="h-5 w-5" />
                        <span className="font-medium text-sm">
                          Participants
                        </span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.participants}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <Globe className="h-5 w-5" />
                        <span className="font-medium text-sm">States</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.states}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-medium text-sm">Schools</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.schools}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative w-full bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Highlights Section - Article Style */}
            <BlurFade delay={0.2} key={`highlights-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Edition{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Highlights
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  A week of transformative experiences, learning, and
                  collaboration
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg lg:p-12">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6 text-gray-800 text-xl leading-relaxed">
                    {selectedEdition} was a remarkable convergence of
                    inspiration, innovation, and impact, bringing together
                    passionate young changemakers for an intensive week of
                    learning and collaboration.
                  </p>

                  <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                    <div className="rounded-lg bg-blue-100 p-2">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    Visionary Leadership
                  </h3>
                  <p className="mb-6">
                    The program featured inspiring keynote sessions from
                    distinguished speakers who shared their transformative
                    journeys. Participants had the privilege of learning from{" "}
                    {currentEdition.highlights.keynotes.slice(0, -1).join(", ")}{" "}
                    and{" "}
                    {currentEdition.highlights.keynotes.at(-1)}
                    , each bringing unique perspectives on leadership,
                    innovation, and social impact. These sessions not only
                    provided valuable insights but also sparked meaningful
                    conversations about the role of youth in shaping our
                    collective future.
                  </p>

                  <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                    <div className="rounded-lg bg-green-100 p-2">
                      <Lightbulb className="h-6 w-6 text-green-600" />
                    </div>
                    Hands-On Learning
                  </h3>
                  <p className="mb-6">
                    The heart of the bootcamp lay in its comprehensive workshop
                    series, designed to equip participants with practical skills
                    and innovative thinking approaches. Through immersive
                    sessions on{" "}
                    {currentEdition.highlights.workshops
                      .slice(0, -1)
                      .join(", ")}{" "}
                    and{" "}
                    {
                      currentEdition.highlights.workshops[
                        currentEdition.highlights.workshops.length - 1
                      ]
                    }
                    , participants developed critical competencies for modern
                    changemaking. These workshops emphasized experiential
                    learning, encouraging participants to apply concepts
                    immediately and collaborate across diverse perspectives.
                  </p>

                  <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                    <div className="rounded-lg bg-purple-100 p-2">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    Immersive Experiences
                  </h3>
                  <p className="mb-6">
                    Beyond the classroom, participants embarked on educational
                    visits that provided real-world context to their learning.
                    The carefully curated visits to{" "}
                    {currentEdition.highlights.visits.slice(0, -1).join(", ")}{" "}
                    and{" "}
                    {
                      currentEdition.highlights.visits[
                        currentEdition.highlights.visits.length - 1
                      ]
                    }{" "}
                    offered unique insights into governance, innovation
                    ecosystems, and India's rich heritage. These experiences
                    broadened perspectives and helped participants understand
                    the interconnected nature of social challenges and
                    solutions.
                  </p>

                  <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                    <div className="rounded-lg bg-orange-100 p-2">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                    Community Building
                  </h3>
                  <p className="mb-6">
                    The magic of {selectedEdition} extended far beyond formal
                    sessions through carefully designed community-building
                    activities. From the vibrant{" "}
                    {currentEdition.highlights.activities
                      .slice(0, -1)
                      .join(", ")}{" "}
                    to{" "}
                    {
                      currentEdition.highlights.activities[
                        currentEdition.highlights.activities.length - 1
                      ]
                    }
                    , these moments fostered deep connections among
                    participants. These informal interactions often sparked the
                    most innovative collaborations and lasting friendships,
                    creating a supportive network that continues to thrive long
                    after the program's conclusion.
                  </p>

                  <div className="mt-8 rounded-lg bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                    <p className="font-semibold text-[#050a30] text-lg">
                      The convergence of inspiring leadership, practical
                      learning, immersive experiences, and genuine community
                      created an environment where young changemakers could
                      truly flourish and develop the confidence to drive
                      meaningful impact in their communities.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
            {/* Photo Gallery */}
            <BlurFade delay={0.3} key={`gallery-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Photo{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Gallery
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Capturing the best moments from {selectedEdition}
                </p>
              </div>

              <Skiper images={currentEdition.galleryImages} />
            </BlurFade>
            {/* My Idea for Change Competition */}
            <BlurFade delay={0.4} key={`ideas-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Ideas
                  </span>{" "}
                  for Change
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Top winning ideas from our innovation competition
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentEdition.winningIdeas.map((idea, index) => (
                  <div
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
                    key={idea.title}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] font-bold text-[#050a30] text-sm">
                        {index + 1}
                      </div>
                      <Trophy className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <h3 className="mb-3 font-bold text-[#050a30] text-lg">
                      {idea.title}
                    </h3>
                    <p className="mb-4 text-gray-700">{idea.description}</p>
                    <div className="rounded-lg bg-gray-50 px-3 py-2">
                      <p className="font-medium text-gray-600 text-sm">
                        {idea.team}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
            {/* Alumni Voices */}
            <BlurFade delay={0.5} key={`testimonials-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Alumni{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Voices
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Hear from the changemakers of {selectedEdition}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {currentEdition.testimonials.map((testimonial) => (
                  <div
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
                    key={testimonial.author}
                  >
                    <div className="mb-4">
                      <Star className="h-6 w-6 text-[#FFD700]" />
                    </div>
                    <blockquote className="mb-4 text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-[#050a30]">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
            {/* Impact Snapshot */}
            <BlurFade delay={0.6} key={`impact-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Impact{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Snapshot
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  The lasting change created by {selectedEdition} participants
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-indigo-50/30 p-8 shadow-lg">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Stats */}
                  <div className="text-center">
                    <div className="mb-2 font-bold text-4xl text-[#050a30]">
                      {currentEdition.impact.projectsStarted}%
                    </div>
                    <p className="text-gray-700">
                      Participants started projects after YCB
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-2 font-bold text-4xl text-[#050a30]">
                      {currentEdition.impact.clubsFormed}
                    </div>
                    <p className="text-gray-700">New clubs formed in schools</p>
                  </div>

                  <div className="text-center md:col-span-2 lg:col-span-1">
                    <div className="mb-2 font-bold text-[#050a30] text-lg">
                      Diversity
                    </div>
                    <p className="text-gray-700 text-sm">
                      {currentEdition.impact.diversityStats.genderBalance}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {currentEdition.impact.diversityStats.ruralUrban}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                    Key Initiatives Born
                  </h3>
                  <ul className="space-y-2">
                    {currentEdition.impact.initiatives.map((initiative) => (
                      <li className="flex items-start gap-3" key={initiative}>
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-[#FFD700]" />
                        <span className="text-gray-700">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
            {/* Closing Message */}
            <BlurFade delay={0.7} key={`closing-${selectedEdition}`}>
              <div className="rounded-2xl bg-gradient-to-r from-[#050a30] to-[#0a1540] p-8 text-center text-white shadow-xl lg:p-12">
                <div className="mx-auto max-w-3xl">
                  <div className="mb-4 text-4xl">✨</div>
                  <p className="text-xl leading-relaxed lg:text-2xl">
                    <strong>{selectedEdition}</strong> wasn't just a program, it
                    was a launchpad for{" "}
                    <span className="text-[#FFD700]">
                      {currentEdition.participants} young changemakers
                    </span>{" "}
                    who are now carrying their projects back into schools and
                    communities across India.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionsPage;
