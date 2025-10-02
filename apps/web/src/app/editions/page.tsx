"use client";

import { Award, Calendar, ChevronDown, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

// Constants
const SENTENCE_KEY_LENGTH = 15;

// Mock data for different editions
const editionsData = {
  "YCB 2025": {
    year: "2025",
    location: "Delhi",
    participants: 200,
    theme: "Innovation for Sustainable Future",
    groupPhoto:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    article: {
      title: "Transforming Ideas into Impact: YCB 2025",
      content:
        "The Young Changemaker Bootcamp 2025 marked a revolutionary chapter in youth empowerment and social innovation. Held in the vibrant capital city of Delhi, this edition brought together 200 passionate young minds from across India, each carrying a burning desire to create meaningful change in their communities. The week-long intensive program was designed around the theme of 'Innovation for Sustainable Future,' emphasizing the critical role of young leaders in addressing climate change, social inequality, and technological advancement. Participants engaged in hands-on workshops, collaborative projects, and mentorship sessions with industry leaders, social entrepreneurs, and change-makers. The bootcamp featured cutting-edge methodologies in design thinking, social entrepreneurship, and digital innovation. Each day began with inspirational talks from renowned speakers, followed by intensive skill-building sessions and collaborative problem-solving activities. The highlight of the program was the 'Innovation Challenge,' where teams developed sustainable solutions to real-world problems affecting their communities. From developing apps for rural healthcare access to creating sustainable waste management systems, the participants showcased remarkable creativity and practical thinking. The program also emphasized personal development, leadership skills, and the importance of building strong networks for sustained impact. By the end of the bootcamp, participants had not only gained valuable skills and knowledge but had also formed lasting friendships and professional connections that continue to support their change-making journeys. The success of YCB 2025 was measured not just in the innovative projects created during the program, but in the ongoing initiatives that participants launched in their home communities, creating a ripple effect of positive change across the nation.",
    },
    ideaForChange: {
      title: "Digital Healthcare Bridge",
      description:
        "A comprehensive digital platform connecting rural communities with urban healthcare facilities through telemedicine, AI-powered preliminary diagnosis, and community health worker networks.",
      impact: "Targeting 50,000+ rural residents across 5 states",
      founders: ["Priya Sharma", "Rahul Kumar", "Anjali Patel"],
    },
    alumnus: {
      name: "Arjun Malhotra",
      achievement: "Founded EcoTech Solutions",
      description:
        "After YCB 2025, Arjun launched EcoTech Solutions, a startup focused on developing affordable renewable energy solutions for rural communities. His company has now installed solar systems in over 100 villages.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/arjun-malhotra",
    },
  },
  "YCB 2024": {
    year: "2024",
    location: "Mumbai",
    participants: 180,
    theme: "Youth Leadership in Digital Age",
    groupPhoto:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    article: {
      title: "Empowering Digital Natives: YCB 2024 Journey",
      content:
        "The Young Changemaker Bootcamp 2024 in Mumbai focused on harnessing the power of digital technology for social good. With 180 participants from diverse backgrounds, this edition explored how young leaders can leverage digital tools to address pressing social challenges. The program featured intensive workshops on digital literacy, social media for good, and technology-driven solutions. Participants learned about blockchain for transparency, AI for social impact, and mobile applications for community development. The bootcamp also emphasized the importance of digital ethics and responsible technology use. One of the key highlights was the 'Digital Innovation Lab' where participants created prototypes of apps and platforms addressing local challenges. The program included masterclasses from tech industry leaders, social entrepreneurs, and digital rights activists. Participants also engaged in community outreach programs, teaching digital skills to underprivileged youth in Mumbai's slums. The collaboration with local NGOs provided real-world experience in implementing digital solutions for social problems. The edition concluded with a 'Demo Day' where teams presented their digital innovations to a panel of investors and social impact leaders. Many of these projects received seed funding and mentorship support for further development. The lasting impact of YCB 2024 can be seen in the numerous digital initiatives launched by participants in their home states, creating a network of young digital change-makers across India. The program successfully demonstrated that when equipped with the right tools and mindset, young people can be powerful catalysts for positive change in the digital age.",
    },
    ideaForChange: {
      title: "EduConnect Platform",
      description:
        "An AI-powered educational platform that connects students in remote areas with quality educational resources and live tutoring sessions through mobile technology.",
      impact: "Serving 25,000+ students across rural India",
      founders: ["Sneha Gupta", "Vikash Yadav", "Meera Singh"],
    },
    alumnus: {
      name: "Kavya Jain",
      achievement: "Co-founder of SkillBridge",
      description:
        "Kavya co-founded SkillBridge, a platform that connects rural youth with skill development opportunities. The platform has trained over 10,000 young people in digital and vocational skills.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/kavya-jain",
    },
  },
  "YCB 2023": {
    year: "2023",
    location: "Bangalore",
    participants: 150,
    theme: "Social Entrepreneurship & Community Impact",
    groupPhoto:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    article: {
      title: "Building Tomorrow's Social Entrepreneurs: YCB 2023",
      content:
        "The 2023 edition of Young Changemaker Bootcamp in Bangalore marked a significant milestone in nurturing social entrepreneurship among India's youth. With 150 carefully selected participants, this edition focused on building sustainable social enterprises that could create lasting community impact. The program was designed in collaboration with leading social entrepreneurs, impact investors, and community development experts. Participants underwent intensive training in business model development, impact measurement, and sustainable financing for social ventures. The bootcamp featured real-world case studies from successful social enterprises, hands-on workshops on product development, and field visits to established social organizations in Bangalore. One of the unique aspects of YCB 2023 was the 'Community Immersion Program' where participants spent two days living and working with communities they aimed to serve, gaining invaluable insights into ground realities and user needs. The program also included sessions on legal frameworks for social enterprises, intellectual property protection, and scaling strategies. Participants worked in interdisciplinary teams to develop comprehensive business plans for their social ventures, with guidance from experienced mentors. The 'Social Impact Pitch' competition on the final day saw remarkable presentations of innovative solutions addressing education, healthcare, environment, and livelihood challenges. Several ventures received grants and incubation support from partner organizations. The alumni network from YCB 2023 has gone on to establish impactful social enterprises, with a collective reach of over 100,000 beneficiaries across various sectors. This edition successfully demonstrated that with proper guidance, resources, and network support, young social entrepreneurs can create scalable solutions to India's most pressing challenges.",
    },
    ideaForChange: {
      title: "AgroTech Collective",
      description:
        "A farmer-centric platform providing weather predictions, crop advisory, market price information, and direct buyer connections through mobile and web applications.",
      impact: "Supporting 15,000+ farmers across 3 states",
      founders: ["Rajesh Kumar", "Divya Patel", "Suresh Reddy"],
    },
    alumnus: {
      name: "Tanvi Khanna",
      achievement: "CEO of Green Earth Initiative",
      description:
        "Tanvi leads Green Earth Initiative, focusing on sustainable agriculture and environmental conservation. Her organization has planted 50,000+ trees and trained 5,000+ farmers in sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/tanvi-khanna",
    },
  },
  "YCB 2022": {
    year: "2022",
    location: "Chennai",
    participants: 120,
    theme: "Climate Action & Environmental Sustainability",
    groupPhoto:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    article: {
      title: "Climate Warriors in Action: YCB 2022 Chronicles",
      content:
        "In the coastal city of Chennai, the Young Changemaker Bootcamp 2022 brought together 120 passionate young environmental advocates under the theme 'Climate Action & Environmental Sustainability.' This edition was particularly significant as it coincided with growing global awareness about climate change and the urgent need for youth-led environmental action. The program was designed to equip participants with both the knowledge and tools necessary to become effective climate action leaders in their communities. The bootcamp featured expert sessions on climate science, renewable energy technologies, sustainable development practices, and environmental policy frameworks. Participants engaged in field visits to renewable energy installations, waste management facilities, and organic farms around Chennai. A unique feature of this edition was the 'Climate Action Challenge' where teams developed innovative solutions for local environmental problems such as coastal erosion, water scarcity, and waste management. The program also included practical workshops on sustainable living, environmental advocacy, and community mobilization techniques. Guest speakers included renowned environmentalists, policy makers, and representatives from international organizations working on climate issues. The 'Green Innovation Lab' provided participants with hands-on experience in developing eco-friendly products and technologies. Many participants went on to start environmental initiatives in their home communities, ranging from tree plantation drives to waste reduction campaigns. The edition also emphasized the importance of indigenous knowledge and traditional ecological practices in modern conservation efforts. By the end of the program, participants had not only gained technical knowledge about environmental issues but had also developed the confidence and networks necessary to drive meaningful climate action. The impact of YCB 2022 continues to resonate through various environmental projects and policy advocacy efforts led by its alumni across the country.",
    },
    ideaForChange: {
      title: "Ocean Cleanup Network",
      description:
        "A community-driven initiative using innovative technology and local partnerships to clean coastal areas and rivers while creating livelihood opportunities for fishing communities.",
      impact: "Cleaned 50+ beaches and rivers, engaged 2,000+ volunteers",
      founders: ["Pooja Sharma", "Nikhil Bansal", "Shreya Agarwal"],
    },
    alumnus: {
      name: "Rohit Menon",
      achievement: "Founder of Sustainable Cities Project",
      description:
        "Rohit founded the Sustainable Cities Project, working with municipal governments to implement green infrastructure solutions. His work has impacted urban planning in 15+ cities.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/rohit-menon",
    },
  },
  "YCB 2021": {
    year: "2021",
    location: "Virtual (Delhi)",
    participants: 100,
    theme: "Resilience & Community Building in Crisis",
    groupPhoto:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    article: {
      title: "United in Purpose: YCB 2021 Virtual Edition",
      content:
        "The Young Changemaker Bootcamp 2021 was a testament to the resilience and adaptability of both organizers and participants as it transitioned to a virtual format due to the global pandemic. Despite the challenges, this edition brought together 100 determined young leaders from across India under the theme 'Resilience & Community Building in Crisis.' The virtual format, while initially daunting, opened up new possibilities for participation and collaboration. The program was reimagined to leverage digital technologies for maximum engagement and learning. Interactive online workshops, virtual breakout sessions, and digital collaboration tools created an immersive learning experience. The bootcamp addressed the unprecedented challenges posed by the pandemic and explored how young leaders could contribute to building more resilient communities. Sessions covered crisis management, community health, digital inclusion, and mental health support systems. Participants learned about the power of technology in maintaining social connections and delivering essential services during lockdowns. The 'Innovation in Crisis' challenge encouraged teams to develop solutions for pandemic-related problems such as learning continuity, healthcare access, and economic recovery. Many innovative projects emerged, including apps for mental health support, platforms for connecting volunteers with vulnerable communities, and systems for ensuring food security. The virtual format also facilitated participation from international experts and allowed for unprecedented networking opportunities across geographical boundaries. Despite the physical distance, participants formed strong bonds through virtual team-building activities, online cultural exchanges, and collaborative projects. The edition demonstrated that the spirit of change-making transcends physical limitations and that young leaders can find innovative ways to create impact even in the most challenging circumstances. The lessons learned from YCB 2021 about resilience, adaptability, and virtual collaboration continue to influence how social change initiatives are designed and implemented in the post-pandemic world.",
    },
    ideaForChange: {
      title: "Community Resilience Network",
      description:
        "A digital platform connecting community volunteers, local leaders, and resources to build resilient support systems for crisis response and community development.",
      impact: "Connected 10,000+ volunteers, supported 500+ communities",
      founders: ["Divya Mehta", "Rajesh Gupta", "Swati Joshi"],
    },
    alumnus: {
      name: "Aman Verma",
      achievement: "Director of Youth Crisis Response Initiative",
      description:
        "Aman leads a national initiative focused on youth-led crisis response and community resilience building. His work has established emergency response protocols in 25+ districts.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/aman-verma",
    },
  },
};

const EditionsPage = () => {
  const [selectedEdition, setSelectedEdition] = useState("YCB 2025");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editionYears = Object.keys(editionsData);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 font-bold text-4xl text-[#050a30] sm:text-5xl md:text-6xl">
            Previous{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Editions
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-lg leading-relaxed sm:text-xl">
            Explore the journey of Young Changemaker Bootcamp through the years.
            Each edition has been a unique experience of learning, growth, and
            impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Mobile Dropdown - visible only on smaller screens */}
          <div className="lg:hidden">
            <div className="relative" ref={dropdownRef}>
              <button
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select edition year"
                className="flex w-full items-center justify-between rounded-xl bg-soft-dark px-4 py-3 text-left font-medium text-white shadow-lg transition-all duration-200 hover:bg-soft-dark/90 focus:outline-none focus:ring-2 focus:ring-soft-dark/20"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white">{selectedEdition}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-white/80 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  aria-label="Edition years"
                  className="absolute top-full left-0 z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg"
                  role="listbox"
                >
                  <div className="py-2">
                    {editionYears.map((year) => (
                      <button
                        aria-selected={selectedEdition === year}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left font-medium transition-all duration-200 ${
                          selectedEdition === year
                            ? "bg-soft-dark text-white shadow-lg"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                        }`}
                        key={year}
                        onClick={() => {
                          setSelectedEdition(year);
                          setIsDropdownOpen(false);
                        }}
                        role="option"
                        type="button"
                      >
                        <Calendar className="h-4 w-4" />
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Sidebar - visible only on larger screens */}
          <div className="hidden flex-shrink-0 lg:block lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Browse Editions
              </h3>
              <div className="space-y-2">
                {editionYears.map((year) => (
                  <button
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                      selectedEdition === year
                        ? "bg-soft-dark text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                    }`}
                    key={year}
                    onClick={() => setSelectedEdition(year)}
                    type="button"
                  >
                    <Calendar className="h-5 w-5" />
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Edition Header */}
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                    YCB {currentEdition.year}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {currentEdition.theme}
                  </p>
                </div>
                <div className="flex gap-6 text-center">
                  <div>
                    <div className="font-bold text-2xl text-[#FFD700]">
                      {currentEdition.participants}
                    </div>
                    <div className="text-gray-600 text-sm">Participants</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-[#FFD700]">
                      {currentEdition.location}
                    </div>
                    <div className="text-gray-600 text-sm">Location</div>
                  </div>
                </div>
              </div>

              {/* Group Photo */}
              <BlurFade
                delay={0.1}
                duration={0.3}
                inView
                key={`group-photo-${selectedEdition}`}
              >
                <div className="relative h-64 overflow-hidden rounded-xl md:h-80">
                  <Image
                    alt={`YCB ${currentEdition.year} Group Photo`}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    fill
                    src={currentEdition.groupPhoto}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 max-w-[calc(100%-4rem)]">
                    <div className="w-fit rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm">
                      <p className="font-semibold text-[#050a30] text-sm leading-tight">
                        {currentEdition.theme}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Article Section */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-4 font-bold text-2xl text-[#050a30]">
                {currentEdition.article.title}
              </h3>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                {currentEdition.article.content
                  .split(". ")
                  .map((sentence, index, array) => (
                    <span
                      key={`sentence-${sentence.substring(0, SENTENCE_KEY_LENGTH).replace(/[^a-zA-Z0-9]/g, "-")}-${index}`}
                    >
                      {sentence}
                      {index < array.length - 1 && ". "}
                    </span>
                  ))}
              </div>
            </div>

            {/* Idea for Change Section */}
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/30 p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-[#FFD700]" />
                <h3 className="font-bold text-2xl text-[#050a30]">
                  Featured Idea for Change
                </h3>
              </div>
              <div className="mb-4">
                <h4 className="mb-2 font-bold text-[#050a30] text-xl">
                  {currentEdition.ideaForChange.title}
                </h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  {currentEdition.ideaForChange.description}
                </p>
                <div className="mb-4 rounded-lg bg-[#FFD700]/10 p-4">
                  <p className="font-semibold text-[#B8860B]">
                    Impact: {currentEdition.ideaForChange.impact}
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-gray-800">
                    Founded by:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentEdition.ideaForChange.founders.map((founder) => (
                      <span
                        className="rounded-full bg-soft-dark px-3 py-1 text-sm text-white"
                        key={`founder-${selectedEdition}-${founder.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {founder}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Alumnus Section */}
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-indigo-50/30 p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-[#FFD700]" />
                <h3 className="font-bold text-2xl text-[#050a30]">
                  Featured Alumnus
                </h3>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex-shrink-0">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      alt={currentEdition.alumnus.name}
                      className="object-cover"
                      fill
                      src={currentEdition.alumnus.image}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 font-bold text-[#050a30] text-xl">
                    {currentEdition.alumnus.name}
                  </h4>
                  <p className="mb-3 font-semibold text-[#FFD700]">
                    {currentEdition.alumnus.achievement}
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    {currentEdition.alumnus.description}
                  </p>
                  {/*<a
                    className="inline-flex items-center gap-2 rounded-lg bg-soft-dark px-4 py-2 text-sm text-white transition-all duration-200 hover:bg-soft-dark/90"
                    href={currentEdition.alumnus.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Users className="h-4 w-4" />
                    Connect on LinkedIn
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionsPage;
