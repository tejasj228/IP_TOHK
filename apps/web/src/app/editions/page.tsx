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
    expectedParticipants: 80,
    dates: "20-27 July 2025",
    tagline: "Building tomorrow's changemakers today.",
    theme: "Digital Innovation for Social Impact",
    registrationOpen: true,
    comingSoonImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
                    {
                      currentEdition.highlights.keynotes[
                        currentEdition.highlights.keynotes.length - 1
                      ]
                    }
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

// ("use client");

// import { Calendar, ChevronDown, MapPin, Users } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { BlurFade } from "@/components/ui/blur-fade";
// import { Skiper } from "@/components/ui/skiper";

// // Constants
// const SENTENCE_KEY_LENGTH = 15;
// const PREVIEW_SENTENCES_COUNT = 3;

// // Mock data for different editions
// const editionsData = {
//   "Season 1": {
//     year: "2024",
//     season: "YCB 2024",
//     name: "YCB 2024 - Innovation for a Better World",
//     status: "completed",
//     location: "Delhi",
//     participants: 200,
//     dates: "15-22 March 2024",
//     theme: "Innovation for Sustainable Future",
//     groupPhoto:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     galleryImages: [
//       {
//         src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Sustainable Innovation Workshop",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Environmental Project Development",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Green Technology Demo",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Climate Action Planning",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Sustainability Presentation",
//       },
//     ],
//     article: {
//       title: "Transforming Ideas into Impact: YCB 2025",
//       content:
//         "The Young Changemaker Bootcamp 2025 marked a revolutionary chapter in youth empowerment and social innovation. Held in the vibrant capital city of Delhi, this edition brought together 200 passionate young minds from across India, each carrying a burning desire to create meaningful change in their communities. The week-long intensive program was designed around the theme of 'Innovation for Sustainable Future,' emphasizing the critical role of young leaders in addressing climate change, social inequality, and technological advancement. Participants engaged in hands-on workshops, collaborative projects, and mentorship sessions with industry leaders, social entrepreneurs, and change-makers. The bootcamp featured cutting-edge methodologies in design thinking, social entrepreneurship, and digital innovation. Each day began with inspirational talks from renowned speakers, followed by intensive skill-building sessions and collaborative problem-solving activities. The highlight of the program was the 'Innovation Challenge,' where teams developed sustainable solutions to real-world problems affecting their communities. From developing apps for rural healthcare access to creating sustainable waste management systems, the participants showcased remarkable creativity and practical thinking. The program also emphasized personal development, leadership skills, and the importance of building strong networks for sustained impact. By the end of the bootcamp, participants had not only gained valuable skills and knowledge but had also formed lasting friendships and professional connections that continue to support their change-making journeys. The success of YCB 2025 was measured not just in the innovative projects created during the program, but in the ongoing initiatives that participants launched in their home communities, creating a ripple effect of positive change across the nation.",
//     },
//     ideaForChange: {
//       title: "Digital Healthcare Bridge",
//       description:
//         "A comprehensive digital platform connecting rural communities with urban healthcare facilities through telemedicine, AI-powered preliminary diagnosis, and community health worker networks.",
//       impact: "Targeting 50,000+ rural residents across 5 states",
//       founders: ["Priya Sharma", "Rahul Kumar", "Anjali Patel"],
//     },
//     alumnus: {
//       name: "Arjun Malhotra",
//       achievement: "Founded EcoTech Solutions",
//       description:
//         "After YCB 2025, Arjun launched EcoTech Solutions, a startup focused on developing affordable renewable energy solutions for rural communities. His company has now installed solar systems in over 100 villages.",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       linkedin: "https://linkedin.com/in/arjun-malhotra",
//     },
//   },
//   "Season 2": {
//     year: "2024",
//     season: "Season 2",
//     location: "Mumbai",
//     participants: 180,
//     dates: "10-17 August 2024",
//     theme: "Youth Leadership in Digital Age",
//     groupPhoto:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     galleryImages: [
//       {
//         src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Digital Skills Workshop",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Coding Bootcamp Session",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Tech Innovation Lab",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Digital Literacy Training",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "App Development Demo",
//       },
//     ],
//     article: {
//       title: "Empowering Digital Natives: YCB 2024 Journey",
//       content:
//         "The Young Changemaker Bootcamp 2024 in Mumbai focused on harnessing the power of digital technology for social good. With 180 participants from diverse backgrounds, this edition explored how young leaders can leverage digital tools to address pressing social challenges. The program featured intensive workshops on digital literacy, social media for good, and technology-driven solutions. Participants learned about blockchain for transparency, AI for social impact, and mobile applications for community development. The bootcamp also emphasized the importance of digital ethics and responsible technology use. One of the key highlights was the 'Digital Innovation Lab' where participants created prototypes of apps and platforms addressing local challenges. The program included masterclasses from tech industry leaders, social entrepreneurs, and digital rights activists. Participants also engaged in community outreach programs, teaching digital skills to underprivileged youth in Mumbai's slums. The collaboration with local NGOs provided real-world experience in implementing digital solutions for social problems. The edition concluded with a 'Demo Day' where teams presented their digital innovations to a panel of investors and social impact leaders. Many of these projects received seed funding and mentorship support for further development. The lasting impact of YCB 2024 can be seen in the numerous digital initiatives launched by participants in their home states, creating a network of young digital change-makers across India. The program successfully demonstrated that when equipped with the right tools and mindset, young people can be powerful catalysts for positive change in the digital age.",
//     },
//     ideaForChange: {
//       title: "EduConnect Platform",
//       description:
//         "An AI-powered educational platform that connects students in remote areas with quality educational resources and live tutoring sessions through mobile technology.",
//       impact: "Serving 25,000+ students across rural India",
//       founders: ["Sneha Gupta", "Vikash Yadav", "Meera Singh"],
//     },
//     alumnus: {
//       name: "Kavya Jain",
//       achievement: "Co-founder of SkillBridge",
//       description:
//         "Kavya co-founded SkillBridge, a platform that connects rural youth with skill development opportunities. The platform has trained over 10,000 young people in digital and vocational skills.",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       linkedin: "https://linkedin.com/in/kavya-jain",
//     },
//   },
//   "Season 3": {
//     year: "2023",
//     season: "Season 3",
//     location: "Bangalore",
//     participants: 150,
//     dates: "20-27 May 2023",
//     theme: "Social Entrepreneurship & Community Impact",
//     groupPhoto:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     galleryImages: [
//       {
//         src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Social Enterprise Workshop",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Community Impact Project",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Entrepreneurship Mentoring",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Business Model Canvas",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Pitch Competition",
//       },
//     ],
//     article: {
//       title: "Building Tomorrow's Social Entrepreneurs: YCB 2023",
//       content:
//         "The 2023 edition of Young Changemaker Bootcamp in Bangalore marked a significant milestone in nurturing social entrepreneurship among India's youth. With 150 carefully selected participants, this edition focused on building sustainable social enterprises that could create lasting community impact. The program was designed in collaboration with leading social entrepreneurs, impact investors, and community development experts. Participants underwent intensive training in business model development, impact measurement, and sustainable financing for social ventures. The bootcamp featured real-world case studies from successful social enterprises, hands-on workshops on product development, and field visits to established social organizations in Bangalore. One of the unique aspects of YCB 2023 was the 'Community Immersion Program' where participants spent two days living and working with communities they aimed to serve, gaining invaluable insights into ground realities and user needs. The program also included sessions on legal frameworks for social enterprises, intellectual property protection, and scaling strategies. Participants worked in interdisciplinary teams to develop comprehensive business plans for their social ventures, with guidance from experienced mentors. The 'Social Impact Pitch' competition on the final day saw remarkable presentations of innovative solutions addressing education, healthcare, environment, and livelihood challenges. Several ventures received grants and incubation support from partner organizations. The alumni network from YCB 2023 has gone on to establish impactful social enterprises, with a collective reach of over 100,000 beneficiaries across various sectors. This edition successfully demonstrated that with proper guidance, resources, and network support, young social entrepreneurs can create scalable solutions to India's most pressing challenges.",
//     },
//     ideaForChange: {
//       title: "AgroTech Collective",
//       description:
//         "A farmer-centric platform providing weather predictions, crop advisory, market price information, and direct buyer connections through mobile and web applications.",
//       impact: "Supporting 15,000+ farmers across 3 states",
//       founders: ["Rajesh Kumar", "Divya Patel", "Suresh Reddy"],
//     },
//     alumnus: {
//       name: "Tanvi Khanna",
//       achievement: "CEO of Green Earth Initiative",
//       description:
//         "Tanvi leads Green Earth Initiative, focusing on sustainable agriculture and environmental conservation. Her organization has planted 50,000+ trees and trained 5,000+ farmers in sustainable practices.",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       linkedin: "https://linkedin.com/in/tanvi-khanna",
//     },
//   },
//   "Season 4": {
//     year: "2022",
//     season: "Season 4",
//     location: "Chennai",
//     participants: 120,
//     dates: "5-12 November 2022",
//     theme: "Climate Action & Environmental Sustainability",
//     groupPhoto:
//       "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     galleryImages: [
//       {
//         src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Climate Action Workshop",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Environmental Conservation Project",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Renewable Energy Demo",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Beach Cleanup Initiative",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Green Innovation Lab",
//       },
//     ],
//     article: {
//       title: "Climate Warriors in Action: YCB 2022 Chronicles",
//       content:
//         "In the coastal city of Chennai, the Young Changemaker Bootcamp 2022 brought together 120 passionate young environmental advocates under the theme 'Climate Action & Environmental Sustainability.' This edition was particularly significant as it coincided with growing global awareness about climate change and the urgent need for youth-led environmental action. The program was designed to equip participants with both the knowledge and tools necessary to become effective climate action leaders in their communities. The bootcamp featured expert sessions on climate science, renewable energy technologies, sustainable development practices, and environmental policy frameworks. Participants engaged in field visits to renewable energy installations, waste management facilities, and organic farms around Chennai. A unique feature of this edition was the 'Climate Action Challenge' where teams developed innovative solutions for local environmental problems such as coastal erosion, water scarcity, and waste management. The program also included practical workshops on sustainable living, environmental advocacy, and community mobilization techniques. Guest speakers included renowned environmentalists, policy makers, and representatives from international organizations working on climate issues. The 'Green Innovation Lab' provided participants with hands-on experience in developing eco-friendly products and technologies. Many participants went on to start environmental initiatives in their home communities, ranging from tree plantation drives to waste reduction campaigns. The edition also emphasized the importance of indigenous knowledge and traditional ecological practices in modern conservation efforts. By the end of the program, participants had not only gained technical knowledge about environmental issues but had also developed the confidence and networks necessary to drive meaningful climate action. The impact of YCB 2022 continues to resonate through various environmental projects and policy advocacy efforts led by its alumni across the country.",
//     },
//     ideaForChange: {
//       title: "Ocean Cleanup Network",
//       description:
//         "A community-driven initiative using innovative technology and local partnerships to clean coastal areas and rivers while creating livelihood opportunities for fishing communities.",
//       impact: "Cleaned 50+ beaches and rivers, engaged 2,000+ volunteers",
//       founders: ["Pooja Sharma", "Nikhil Bansal", "Shreya Agarwal"],
//     },
//     alumnus: {
//       name: "Rohit Menon",
//       achievement: "Founder of Sustainable Cities Project",
//       description:
//         "Rohit founded the Sustainable Cities Project, working with municipal governments to implement green infrastructure solutions. His work has impacted urban planning in 15+ cities.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       linkedin: "https://linkedin.com/in/rohit-menon",
//     },
//   },
//   "Season 5": {
//     year: "2021",
//     season: "Season 5",
//     location: "Virtual (Delhi)",
//     participants: 100,
//     dates: "12-19 September 2021",
//     theme: "Resilience & Community Building in Crisis",
//     groupPhoto:
//       "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     galleryImages: [
//       {
//         src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Virtual Workshop Session",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Online Collaboration",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Digital Community Building",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Remote Mentorship",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         alt: "Virtual Innovation Challenge",
//       },
//     ],
//     article: {
//       title: "United in Purpose: YCB 2021 Virtual Edition",
//       content:
//         "The Young Changemaker Bootcamp 2021 was a testament to the resilience and adaptability of both organizers and participants as it transitioned to a virtual format due to the global pandemic. Despite the challenges, this edition brought together 100 determined young leaders from across India under the theme 'Resilience & Community Building in Crisis.' The virtual format, while initially daunting, opened up new possibilities for participation and collaboration. The program was reimagined to leverage digital technologies for maximum engagement and learning. Interactive online workshops, virtual breakout sessions, and digital collaboration tools created an immersive learning experience. The bootcamp addressed the unprecedented challenges posed by the pandemic and explored how young leaders could contribute to building more resilient communities. Sessions covered crisis management, community health, digital inclusion, and mental health support systems. Participants learned about the power of technology in maintaining social connections and delivering essential services during lockdowns. The 'Innovation in Crisis' challenge encouraged teams to develop solutions for pandemic-related problems such as learning continuity, healthcare access, and economic recovery. Many innovative projects emerged, including apps for mental health support, platforms for connecting volunteers with vulnerable communities, and systems for ensuring food security. The virtual format also facilitated participation from international experts and allowed for unprecedented networking opportunities across geographical boundaries. Despite the physical distance, participants formed strong bonds through virtual team-building activities, online cultural exchanges, and collaborative projects. The edition demonstrated that the spirit of change-making transcends physical limitations and that young leaders can find innovative ways to create impact even in the most challenging circumstances. The lessons learned from YCB 2021 about resilience, adaptability, and virtual collaboration continue to influence how social change initiatives are designed and implemented in the post-pandemic world.",
//     },
//     ideaForChange: {
//       title: "Community Resilience Network",
//       description:
//         "A digital platform connecting community volunteers, local leaders, and resources to build resilient support systems for crisis response and community development.",
//       impact: "Connected 10,000+ volunteers, supported 500+ communities",
//       founders: ["Divya Mehta", "Rajesh Gupta", "Swati Joshi"],
//     },
//     alumnus: {
//       name: "Aman Verma",
//       achievement: "Director of Youth Crisis Response Initiative",
//       description:
//         "Aman leads a national initiative focused on youth-led crisis response and community resilience building. His work has established emergency response protocols in 25+ districts.",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       linkedin: "https://linkedin.com/in/aman-verma",
//     },
//   },
// };

// const EditionsPage = () => {
//   const [selectedSeason, setSelectedSeason] = useState("Season 1");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isArticleExpanded, setIsArticleExpanded] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const seasons = Object.keys(editionsData);
//   const currentEdition =
//     editionsData[selectedSeason as keyof typeof editionsData];

//   // Close dropdown when clicking outside or pressing escape
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     const handleEscapeKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscapeKey);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, []);

//   // Reset article expansion when season changes
//   useEffect(() => {
//     setIsArticleExpanded(false);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedSeason]);

//   return (
//     <div className="relative overflow-x-hidden">
//       {/* Hero Section with Background Image */}
//       <section
//         className="relative min-h-screen overflow-hidden bg-[#050a30]"
//         id="hero-section"
//       >
//         {/* Background image */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000"
//             style={{
//               backgroundImage: `url(${currentEdition.groupPhoto})`,
//             }}
//           />
//         </div>

//         {/* Enhanced gradient overlay - darker on left, lighter on right */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />

//         {/* Additional overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-transparent to-[#00000040]" />

//         <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
//           {/* Season Selector - positioned below header on all screens */}
//           <div className="pointer-events-auto absolute top-24 right-4 z-50 sm:top-24 sm:right-6 md:top-24 lg:top-28 lg:right-8">
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 aria-expanded={isDropdownOpen}
//                 aria-haspopup="listbox"
//                 aria-label="Select season"
//                 className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-2 font-medium text-[#050a30] shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:px-6 sm:py-3"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 type="button"
//               >
//                 <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
//                 <span className="text-sm sm:text-base">{selectedSeason}</span>
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform duration-200 sm:h-5 sm:w-5 ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {isDropdownOpen && (
//                 <div
//                   aria-label="Season options"
//                   className="absolute top-full right-0 z-50 mt-2 w-full min-w-[200px] rounded-xl border border-gray-200 bg-white shadow-lg"
//                   role="listbox"
//                 >
//                   <div className="py-2">
//                     {seasons.map((season) => (
//                       <button
//                         aria-selected={selectedSeason === season}
//                         className={`flex w-full items-center gap-3 px-4 py-3 text-left font-medium transition-all duration-200 ${
//                           selectedSeason === season
//                             ? "bg-[#050a30] text-white"
//                             : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
//                         }`}
//                         key={season}
//                         onClick={() => {
//                           setSelectedSeason(season);
//                           setIsDropdownOpen(false);
//                         }}
//                         role="option"
//                         type="button"
//                       >
//                         <Calendar className="h-4 w-4" />
//                         {season}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex h-full min-h-screen items-center">
//             <div className="w-full py-20 lg:py-32">
//               {/* Left Content - moved slightly left to avoid button overlap */}
//               <BlurFade delay={0.4} key={`hero-content-${selectedSeason}`}>
//                 <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-4 sm:ml-4 sm:space-y-6 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
//                   {/* Main Heading */}
//                   <h1 className="font-bold text-2xl text-white leading-tight md:text-3xl lg:text-5xl">
//                     {currentEdition.theme}
//                   </h1>

//                   {/* Edition Stats */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3 text-lg text-white">
//                       <MapPin className="h-6 w-6 text-[#FFD700]" />
//                       <span>{currentEdition.location}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-lg text-white">
//                       <Calendar className="h-6 w-6 text-[#FFD700]" />
//                       <span>{currentEdition.dates}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-lg text-white">
//                       <Users className="h-6 w-6 text-[#FFD700]" />
//                       <span>{currentEdition.participants} Participants</span>
//                     </div>
//                   </div>
//                 </div>
//               </BlurFade>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <div className="relative w-full bg-[#f7fafc] py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="space-y-16">
//             {/* Article Section */}
//             <BlurFade delay={0.2} key={`article-${selectedSeason}`}>
//               {/* Section Title */}
//               <div className="mb-8 text-center sm:mb-12">
//                 <h2 className="font-bold text-4xl text-[#050a30]">
//                   {currentEdition.article.title}
//                 </h2>
//                 <div className="gradient-underline mx-auto mt-4" />
//               </div>

//               <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
//                 <div className="prose max-w-none text-gray-700 leading-relaxed">
//                   {(() => {
//                     const sentences =
//                       currentEdition.article.content.split(". ");
//                     const previewSentences = sentences.slice(
//                       0,
//                       PREVIEW_SENTENCES_COUNT
//                     );
//                     const remainingSentences = sentences.slice(
//                       PREVIEW_SENTENCES_COUNT
//                     );

//                     return (
//                       <>
//                         {previewSentences.map((sentence, index) => (
//                           <span
//                             key={`preview-sentence-${sentence.substring(0, SENTENCE_KEY_LENGTH).replace(/[^a-zA-Z0-9]/g, "-")}-${index}`}
//                           >
//                             {sentence}
//                             {index < previewSentences.length - 1 && ". "}
//                           </span>
//                         ))}
//                         {previewSentences.length > 0 && ". "}

//                         {isArticleExpanded &&
//                           remainingSentences.map((sentence, index) => (
//                             <span
//                               key={`remaining-sentence-${sentence.substring(0, SENTENCE_KEY_LENGTH).replace(/[^a-zA-Z0-9]/g, "-")}-${index}`}
//                             >
//                               {sentence}
//                               {index < remainingSentences.length - 1 && ". "}
//                             </span>
//                           ))}

//                         {!isArticleExpanded &&
//                           remainingSentences.length > 0 && (
//                             <span className="text-gray-500">...</span>
//                           )}
//                       </>
//                     );
//                   })()}
//                 </div>

//                 {/* Read More / Read Less Button */}
//                 <div className="mt-6 flex justify-center">
//                   <button
//                     className="group hover:-translate-y-0.5 inline-flex items-center gap-2 rounded-lg bg-[#050a30] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#050a30]/90 hover:shadow-lg"
//                     onClick={() => setIsArticleExpanded(!isArticleExpanded)}
//                     type="button"
//                   >
//                     {isArticleExpanded ? "Read Less" : "Read More"}
//                     <svg
//                       className={`h-4 w-4 transition-transform duration-200 ${isArticleExpanded ? "rotate-180" : ""}`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <title>{isArticleExpanded ? "Collapse" : "Expand"}</title>
//                       <path
//                         d="M19 9l-7 7-7-7"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </BlurFade>
//             {/* Image Carousel Section */}
//             <BlurFade delay={0.3} key={`carousel-${selectedSeason}`}>
//               {/* Section Title */}
//               <div className="mb-8 text-center sm:mb-12">
//                 <h2 className="font-bold text-4xl text-[#050a30]">
//                   Edition{" "}
//                   <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
//                     Gallery
//                   </span>
//                 </h2>
//                 <div className="gradient-underline mx-auto mt-4" />
//                 <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
//                   Capturing moments from {currentEdition.season} -{" "}
//                   {currentEdition.theme}
//                 </p>
//               </div>

//               <Skiper images={currentEdition.galleryImages} />
//             </BlurFade>{" "}
//             {/* Featured Idea Section */}
//             <BlurFade delay={0.4} key={`idea-${selectedSeason}`}>
//               {/* Section Title */}
//               <div className="mb-8 text-center sm:mb-12">
//                 <h2 className="font-bold text-4xl text-[#050a30]">
//                   Featured{" "}
//                   <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
//                     Idea for Change
//                   </span>
//                 </h2>
//                 <div className="gradient-underline mx-auto mt-4" />
//                 <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
//                   Innovative solutions born from {currentEdition.season}
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/30 p-8 shadow-lg">
//                 <div className="mb-6">
//                   <h3 className="mb-4 font-bold text-2xl text-[#050a30]">
//                     {currentEdition.ideaForChange.title}
//                   </h3>
//                   <p className="mb-6 text-gray-700 text-lg leading-relaxed">
//                     {currentEdition.ideaForChange.description}
//                   </p>
//                   <div className="mb-6 rounded-lg bg-[#FFD700]/10 p-4">
//                     <p className="font-semibold text-[#B8860B] text-lg">
//                       Impact: {currentEdition.ideaForChange.impact}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="mb-3 font-semibold text-gray-800 text-lg">
//                       Founded by:
//                     </p>
//                     <div className="flex flex-wrap gap-3">
//                       {currentEdition.ideaForChange.founders.map((founder) => (
//                         <span
//                           className="rounded-full bg-[#050a30] px-4 py-2 text-white"
//                           key={`founder-${selectedSeason}-${founder.replace(/\s+/g, "-").toLowerCase()}`}
//                         >
//                           {founder}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </BlurFade>
//             {/* Featured Alumnus Section */}
//             <BlurFade delay={0.6} key={`alumnus-${selectedSeason}`}>
//               {/* Section Title */}
//               <div className="mb-8 text-center sm:mb-12">
//                 <h2 className="font-bold text-4xl text-[#050a30]">
//                   Featured{" "}
//                   <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
//                     Alumnus
//                   </span>
//                 </h2>
//                 <div className="gradient-underline mx-auto mt-4" />
//                 <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
//                   Success stories from {currentEdition.season} participants
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-indigo-50/30 p-8 shadow-lg">
//                 <div className="flex flex-col gap-8 md:flex-row md:items-start">
//                   <div className="flex-shrink-0">
//                     <div className="relative h-40 w-40 overflow-hidden rounded-full">
//                       <Image
//                         alt={currentEdition.alumnus.name}
//                         className="object-cover"
//                         fill
//                         src={currentEdition.alumnus.image}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="mb-3 font-bold text-2xl text-[#050a30]">
//                       {currentEdition.alumnus.name}
//                     </h3>
//                     <p className="mb-4 font-semibold text-[#FFD700] text-xl">
//                       {currentEdition.alumnus.achievement}
//                     </p>
//                     <p className="mb-6 text-gray-700 text-lg leading-relaxed">
//                       {currentEdition.alumnus.description}
//                     </p>
//                     <a
//                       className="inline-flex items-center gap-3 rounded-lg bg-[#050a30] px-6 py-3 text-white transition-all duration-200 hover:bg-[#050a30]/90"
//                       href={currentEdition.alumnus.linkedin}
//                       rel="noopener noreferrer"
//                       target="_blank"
//                     >
//                       <Users className="h-5 w-5" />
//                       Connect on LinkedIn
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </BlurFade>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditionsPage;
