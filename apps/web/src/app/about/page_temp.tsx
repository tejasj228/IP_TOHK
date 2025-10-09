"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageCircle,
  Mic,
  Search,
  Star,
  Target,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

// Snapshots Slider Component
const SnapshotsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Workshop Session",
      gradient: "from-blue-100 to-purple-100",
      description: "Interactive learning sessions with hands-on activities",
    },
    {
      title: "Team Collaboration",
      gradient: "from-green-100 to-blue-100",
      description: "Students working together on innovative solutions",
    },
    {
      title: "Prototype Building",
      gradient: "from-purple-100 to-pink-100",
      description: "Creating tangible solutions to real-world problems",
    },
    {
      title: "Final Presentations",
      gradient: "from-orange-100 to-red-100",
      description: "Showcasing innovative ideas to mentors and judges",
    },
    {
      title: "Mentorship Sessions",
      gradient: "from-teal-100 to-cyan-100",
      description: "One-on-one guidance from industry experts",
    },
    {
      title: "Innovation Labs",
      gradient: "from-yellow-100 to-orange-100",
      description: "Exploring cutting-edge technologies and tools",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mb-8">
      <h3 className="mb-6 text-center font-bold text-[#050a30] text-xl">
        Snapshots from Past Editions
      </h3>

      <div className="relative w-full">
        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <div
                  className={`group relative overflow-hidden bg-gradient-to-br ${slide.gradient} aspect-[16/9] transition-all duration-300`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h4 className="mb-2 font-bold text-gray-800 text-xl md:text-2xl">
                      {slide.title}
                    </h4>
                    <p className="max-w-md text-gray-600 text-sm md:text-base">
                      {slide.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full bg-white/80 p-2 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full bg-white/80 p-2 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "scale-125 bg-[#050a30]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              key={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedFaqCategory, setSelectedFaqCategory] =
    useState<FaqCategory>("About YCB");
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "eligibility",
        "curriculum",
        "beyond",
        "aid",
        "reviews",
        "faq",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Check if we should show floating nav (mobile only)
      const heroSection = document.querySelector(
        ".hero-section"
      ) as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowFloatingNav(window.scrollY > heroBottom + 100);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Account for header
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigationItems = [
    { id: "about", label: "About YCB", icon: BookOpen },
    { id: "eligibility", label: "Eligibility & Dates", icon: Calendar },
    { id: "curriculum", label: "Inside the Bootcamp", icon: GraduationCap },
    { id: "beyond", label: "Beyond the Curriculum", icon: Lightbulb },
    { id: "aid", label: "Fee & Financial Aid", icon: DollarSign },
    { id: "reviews", label: "Alumni Reviews", icon: Star },
    { id: "faq", label: "FAQ's", icon: MessageCircle },
  ];

  const bootcampDays = [
    {
      day: "Day 0",
      title: "Kickoff & Orientation",
      description:
        "Welcome, icebreakers, campus walk, and informal interaction with mentors & peers.",
      icon: "�",
      color: "from-blue-400 to-blue-600",
    },
    {
      day: "Day 1",
      title: "Spotting Problems That Matter",
      description:
        "Intro to science & tech, changemaking for a better world, observation walks, drone demo, icebreaker games.",
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      day: "Day 2",
      title: "Exploring Innovation",
      description:
        "AI/ML & ChatGPT, cognitive psychology, design & innovation lab visit, 3D printing demo, entrepreneurship mindset, expressive art, Web 3.0, movie night.",
      icon: "�",
      color: "from-purple-400 to-purple-600",
    },
    {
      day: "Day 3",
      title: "Creativity & Design Thinking",
      description:
        "Team formation, ideation with mentors, problem validation, design thinking, app/web basics, talent night.",
      icon: "�",
      color: "from-orange-400 to-orange-600",
    },
    {
      day: "Day 4",
      title: "From Ideas to Ventures",
      description:
        "Product innovation, unique value proposition, financial basics, business plan prep, pitching practice, storytelling & photography workshop.",
      icon: "�",
      color: "from-red-400 to-red-600",
    },
    {
      day: "Day 5",
      title: "The Big Pitch",
      description:
        "My Idea for Change Competition, career guidance, interaction with faculty, mini farewell, sports, music & cultural night.",
      icon: <Mic className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      day: "Day 6",
      title: "Closing & Departure",
      description:
        "Reflections, goodbyes, departure with new ideas and lifelong friendships.",
      icon: <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-pink-400 to-pink-600",
    },
  ];

  const _eligibilityData = [
    {
      title: "Age Requirement",
      description: "18-25 years old",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Education",
      description: "Currently enrolled in college or recent graduate",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Passion",
      description: "Strong interest in climate action and social change",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Commitment",
      description: "Available for 12-week intensive program",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const beyondCurriculumItems = [
    {
      title: "Networking Events",
      description:
        "Connect with industry leaders, fellow changemakers, and potential collaborators",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "Monthly meetups",
        "Industry panels",
        "Peer connections",
        "Mentor matching",
      ],
    },
    {
      title: "Mentorship Program",
      description:
        "One-on-one guidance from experienced professionals and successful alumni",
      icon: <Award className="h-8 w-8" />,
      features: [
        "Personal mentor",
        "Career guidance",
        "Project support",
        "Long-term relationship",
      ],
    },
    {
      title: "Real Projects",
      description:
        "Work on actual challenges faced by NGOs, startups, and social enterprises",
      icon: <Target className="h-8 w-8" />,
      features: [
        "Live projects",
        "Real impact",
        "Portfolio building",
        "Client interaction",
      ],
    },
    {
      title: "Global Community",
      description:
        "Join a worldwide network of young changemakers creating positive impact",
      icon: <Users className="h-8 w-8" />,
      features: [
        "Alumni network",
        "Global chapters",
        "Collaboration opportunities",
        "Lifetime access",
      ],
    },
  ];

  const faqCategories = [
    "About YCB",
    "Eligibility & Dates",
    "Curriculum",
    "Beyond the Curriculum",
    "Fee & Financial Aid",
    "Alumni Reviews",
  ] as const;

  type FaqCategory = (typeof faqCategories)[number];

  const faqData: Record<
    FaqCategory,
    Array<{ question: string; answer: string }>
  > = {
    "About YCB": [
      {
        question: "What makes YCB different from other programs?",
        answer:
          "YCB combines rigorous academic content with hands-on project work, connecting you with real organizations and experienced mentors. Our focus on climate action and social entrepreneurship, combined with a global network of changemakers, creates a unique learning environment that prepares you for real-world impact.",
      },
      {
        question: "Is the program conducted online or offline?",
        answer:
          "YCB is a hybrid program that combines online learning modules with in-person workshops and networking events. This allows us to accommodate participants from different locations while still providing valuable face-to-face interactions and collaborative experiences.",
      },
      {
        question: "What happens after completing the program?",
        answer:
          "Graduates join our global alumni network with access to job opportunities, continued mentorship, funding connections, and collaboration on future projects. Many alumni start their own ventures, join impact organizations, or become mentors themselves.",
      },
    ],
    "Eligibility & Dates": [
      {
        question: "Are there any prerequisites for applying?",
        answer:
          "No specific academic background is required, but we look for demonstrated passion for social change, basic communication skills, and commitment to the program duration. We welcome applications from diverse academic and professional backgrounds.",
      },
      {
        question: "Can I participate if I'm working full-time?",
        answer:
          "The program is designed to be intensive but flexible. While it requires significant commitment (15-20 hours per week), many participants successfully balance it with work or studies. We provide recorded sessions and flexible scheduling for working professionals.",
      },
      {
        question: "What are the age requirements?",
        answer:
          "YCB is open to individuals aged 18-30 who are passionate about creating positive change. We believe this age range captures emerging leaders who are ready to take action and have the energy to drive meaningful impact.",
      },
    ],
    Curriculum: [
      {
        question: "What kind of support is available during the program?",
        answer:
          "Participants receive comprehensive support including personal mentorship, peer learning groups, technical assistance, career guidance, and access to our alumni network. We also provide mental health support and academic assistance as needed.",
      },
      {
        question: "How are the projects structured?",
        answer:
          "Projects are real-world challenges provided by partner organizations. You'll work in teams of 4-5 participants, guided by industry mentors, to develop practical solutions over the course of the program. Each project culminates in a presentation to stakeholders.",
      },
    ],
    "Beyond the Curriculum": [
      {
        question: "What networking opportunities are available?",
        answer:
          "YCB provides extensive networking through monthly alumni meetups, industry expert sessions, partner organization visits, and our global online community. You'll connect with changemakers across sectors and geographies.",
      },
      {
        question: "Is there ongoing support after graduation?",
        answer:
          "Yes! Alumni receive lifetime access to our network, quarterly check-ins with career counselors, funding opportunity alerts, collaboration platforms, and invitations to exclusive events and workshops.",
      },
    ],
    "Fee & Financial Aid": [
      {
        question: "What is the program fee?",
        answer:
          "The program fee varies by location and format. We offer need-based scholarships covering up to 80% of costs. Financial assistance is available for deserving candidates who demonstrate passion and commitment.",
      },
      {
        question: "Are there payment plans available?",
        answer:
          "Yes, we offer flexible payment plans including installment options and deferred payment for students. Our goal is to make the program accessible to passionate changemakers regardless of financial background.",
      },
    ],
    "Alumni Reviews": [
      {
        question: "How do alumni stay connected?",
        answer:
          "Our alumni network is active through monthly meetups, online forums, collaborative projects, and mentorship programs. Many alumni also return as mentors and guest speakers for current participants.",
      },
      {
        question: "What career opportunities are available to alumni?",
        answer:
          "Alumni have access to exclusive job boards, startup opportunities, government positions, and NGO roles. Our career services team also provides ongoing support for career transitions and advancement.",
      },
    ],
  };

  const alumniReviews = [
    {
      name: "Priya Sharma",
      batch: "YCB 2024",
      role: "Founder, EcoSolutions India",
      review:
        "YCB transformed my understanding of climate action. The mentorship and real projects gave me the confidence to start my own environmental consultancy.",
      image: "PS",
    },
    {
      name: "Arjun Patel",
      batch: "YCB 2023",
      role: "Climate Policy Analyst",
      review:
        "The network I built through YCB has been invaluable. I'm now working with the government on climate policy, thanks to connections made during the program.",
      image: "AP",
    },
    {
      name: "Maya Singh",
      batch: "YCB 2024",
      role: "Social Entrepreneur",
      review:
        "YCB didn't just teach me about climate change - it gave me the tools and network to actually make a difference. My startup now impacts 10,000+ farmers.",
      image: "MS",
    },
    {
      name: "Rahul Kumar",
      batch: "YCB 2023",
      role: "Sustainability Consultant",
      review:
        "The hands-on projects and real-world experience I gained through YCB were game-changing. I now lead sustainability initiatives for Fortune 500 companies.",
      image: "RK",
    },
    {
      name: "Ananya Joshi",
      batch: "YCB 2024",
      role: "Green Tech Innovator",
      review:
        "YCB's emphasis on innovation and technology helped me develop a clean energy solution that's now being implemented across rural communities.",
      image: "AJ",
    },
    {
      name: "Vikram Mehta",
      batch: "YCB 2023",
      role: "Impact Investment Analyst",
      review:
        "The program opened my eyes to the intersection of finance and social impact. I now help direct millions in funding toward sustainable development projects.",
      image: "VM",
    },
    {
      name: "Kavya Reddy",
      batch: "YCB 2024",
      role: "Community Development Lead",
      review:
        "YCB taught me that change starts at the grassroots level. I'm now leading community-driven initiatives that have transformed 50+ villages.",
      image: "KR",
    },
  ];

  const _renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        className={`h-4 w-4 ${i < rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
        key={i}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden pt-32 pb-12">
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

        <div className="relative z-10 w-full px-8 text-center lg:px-16 xl:px-24">
          <h1 className="mb-6 font-bold text-5xl text-[#050a30] md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              YCB
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Discover everything about the Young Changemakers Bootcamp - from
            curriculum to community, eligibility to impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Explore YCB
              </h3>
              <div className="space-y-3">
                {navigationItems.map((item) => {
                  return (
                    <button
                      className={`flex w-full items-center rounded-xl px-0 py-3 text-left font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-soft-dark px-4 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:px-4 hover:text-[#050a30]"
                      }`}
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* About YCB */}
            <section className="scroll-mt-32" id="about">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    About Young Changemakers Bootcamp
                  </h2>

                  {/* Mission Statement */}
                  <div className="mb-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                    <h3 className="mb-3 font-bold text-[#050a30] text-xl">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our mission is to empower high school students with the
                      mindset, skills, and community to become changemakers —
                      solving real problems with empathy, creativity, and
                      teamwork.
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-6">
                    <p className="text-gray-700 leading-relaxed">
                      The Young Changemakers Bootcamp (YCB) is an intensive
                      one-week residential program for students of grades 9–12.
                      It exposes them to real-world problem solving,
                      engineering, and innovation. Through hands-on learning and
                      interdisciplinary coursework, students identify pressing
                      challenges, design solutions, build prototypes, and pitch
                      their ideas — guided by mentors, innovators, and
                      entrepreneurs. YCB transforms students' potential into
                      action, helping them discover their power to drive
                      meaningful change in their schools, communities, and
                      beyond.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                        <BookOpen className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Experiential Learning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        A structured journey of problem-solving, design
                        thinking, and innovation.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200">
                        <Users className="h-6 w-6 text-green-600 transition-all duration-300 group-hover:text-green-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Diverse Peer Network
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Bringing together bright students from across India for
                        collaborative learning.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                        <Target className="h-6 w-6 text-purple-600 transition-all duration-300 group-hover:text-purple-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Real-World Projects
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Students design practical solutions to pressing
                        challenges in society.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
                        <Award className="h-6 w-6 text-orange-600 transition-all duration-300 group-hover:text-orange-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Expert Mentorship
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Guidance from entrepreneurs, educators, and
                        professionals for lasting impact.
                      </p>
                    </div>
                  </div>

                  {/* Snapshots from past edition */}
                  <SnapshotsSlider />
                </div>
              </div>
            </section>

            {/* Eligibility & Dates */}
            <section className="scroll-mt-32" id="eligibility">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Eligibility & Dates
                  </h2>

                  {/* Eligibility Requirements */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Who Can Apply?
                    </h3>
                    <div className="rounded-xl border border-gray-100 bg-white p-6">
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            High school students from anywhere in India.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Must be in Grade 9, 10, 11, or 12 while attending in
                            June 2025.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Students who have just finished Class 12 board exams
                            are also eligible.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            The program will be conducted in English, so
                            students should be comfortable with written & spoken
                            English.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Applicants will fill an online form and write a
                            short essay to show curiosity, creativity, and
                            passion for solving problems.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div>
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Important Dates
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">📥</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Applications Open
                          </div>
                          <div className="text-gray-600 text-sm">
                            April 22, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">📌</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Application Deadline
                          </div>
                          <div className="text-gray-600 text-sm">
                            May 23, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">📢</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Round 1 Results Announced
                          </div>
                          <div className="text-gray-600 text-sm">
                            June 1, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">🎤</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Group Discussion Slots
                          </div>
                          <div className="text-gray-600 text-sm">
                            May 22 – June 3, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">✅</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Final Shortlist
                          </div>
                          <div className="text-gray-600 text-sm">
                            June 5, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="text-2xl">🏕</div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Bootcamp Dates
                          </div>
                          <div className="text-gray-600 text-sm">
                            June 17–23, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section className="scroll-mt-32" id="curriculum">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Inside the Bootcamp
                  </h2>
                  <p className="mb-8 text-gray-600">
                    A transformative 7-day journey of discovery, innovation, and
                    impact.
                  </p>

                  {/* Bootcamp Days Flow */}
                  <div className="mb-12 space-y-4 md:space-y-6">
                    {bootcampDays.map((day, index) => (
                      <div className="relative" key={index}>
                        {/* Connection Line - Hidden on mobile */}
                        {index < bootcampDays.length - 1 && (
                          <div className="absolute top-16 left-6 hidden h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent md:top-20 md:block md:h-16" />
                        )}

                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Icon Circle */}
                          <div
                            className={`h-10 w-10 rounded-full bg-gradient-to-r md:h-12 md:w-12 ${day.color} flex flex-shrink-0 items-center justify-center font-bold text-sm text-white shadow-lg md:text-lg`}
                          >
                            {day.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-lg md:p-6">
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <h3 className="font-bold text-[#050a30] text-lg md:text-xl">
                                {day.title}
                              </h3>
                              <span className="self-start rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700 text-xs md:px-3 md:text-sm">
                                {day.day}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed md:text-base">
                              {day.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn from Inspiring Leaders Section */}
                  <div className="rounded-xl border border-gray-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-6 md:p-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl md:text-2xl">
                      Learn from Inspiring Leaders
                    </h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Over the past editions, YCB participants have had the
                      chance to interact with and learn directly from leading
                      innovators, entrepreneurs, and changemakers.
                    </p>

                    <div className="mb-6">
                      <p className="mb-4 font-medium text-gray-700">
                        ✨ Past speakers and mentors have included:
                      </p>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600 text-lg">
                            A
                          </div>
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Ajai Chowdhry
                            </div>
                            <div className="text-gray-600 text-sm">
                              Co-Founder of HCL
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-600 text-lg">
                            D
                          </div>
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Debjani Ghosh
                            </div>
                            <div className="text-gray-600 text-sm">
                              President, NASSCOM
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-lg text-purple-600">
                            D
                          </div>
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Dia Mirza
                            </div>
                            <div className="text-gray-600 text-sm">
                              Actor & UN Environment Goodwill Ambassador
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 font-bold text-lg text-orange-600">
                            R
                          </div>
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Prof. Ramgopal Rao
                            </div>
                            <div className="text-gray-600 text-sm">
                              Former Director, IIT Delhi
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center text-gray-600">
                        …and many more incredible leaders from diverse fields.
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <a
                        className="inline-flex items-center gap-2 rounded-lg bg-[#050a30] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#050a30]/90"
                        href="/network"
                      >
                        <span>
                          🔗 See our complete mentor and speaker network
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Beyond the Curriculum */}
            <section className="scroll-mt-32" id="beyond">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Beyond the Curriculum
                  </h2>
                  <p className="mb-8 text-gray-600">
                    YCB offers much more than just coursework - it's a complete
                    ecosystem for your growth.
                  </p>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {beyondCurriculumItems.map((item, index) => (
                      <div
                        className="hover:-translate-y-1 rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                        key={index}
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 text-[#050a30]">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-[#050a30] text-xl">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mb-4 text-gray-600">{item.description}</p>
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <div
                              className="flex items-center gap-2 text-gray-600 text-sm"
                              key={featureIndex}
                            >
                              <ArrowRight className="h-4 w-4 text-[#FFD700]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Fee & Financial Aid */}
            <section className="scroll-mt-32" id="aid">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Fee Structure & Financial Aid
                  </h2>

                  {/* Fee Structure */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Program Fee
                    </h3>
                    <div className="rounded-xl border border-gray-100 bg-white p-6">
                      <div className="mb-6 text-center">
                        <div className="mb-2 font-bold text-4xl text-[#050a30]">
                          ₹25,000
                        </div>
                        <div className="text-gray-600">
                          Complete 12-week program
                        </div>
                        <div className="font-medium text-[#FFD700] text-sm">
                          Early bird: ₹20,000 (Before Feb 15)
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-gray-50 p-4 text-center">
                          <div className="font-semibold text-[#050a30]">
                            What's Included
                          </div>
                          <div className="mt-2 text-gray-600 text-sm">
                            All learning materials, mentorship, project support,
                            networking events, and certificate
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4 text-center">
                          <div className="font-semibold text-[#050a30]">
                            Payment Plans
                          </div>
                          <div className="mt-2 text-gray-600 text-sm">
                            3 installments available. No interest charged for
                            early payment
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4 text-center">
                          <div className="font-semibold text-[#050a30]">
                            Refund Policy
                          </div>
                          <div className="mt-2 text-gray-600 text-sm">
                            Full refund within first week. 50% refund within
                            first month
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Aid */}
                  <div>
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Financial Aid & Scholarships
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-xl border border-gray-100 bg-white p-6">
                        <h4 className="mb-3 font-bold text-[#050a30]">
                          Need-Based Scholarships
                        </h4>
                        <p className="mb-4 text-gray-600 text-sm">
                          Up to 100% fee waiver for deserving candidates based
                          on financial need and merit.
                        </p>
                        <div className="text-gray-600 text-sm">
                          <div className="mb-1 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Income certificate required
                          </div>
                          <div className="mb-1 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Academic transcripts
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Statement of purpose
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-gray-100 bg-white p-6">
                        <h4 className="mb-3 font-bold text-[#050a30]">
                          Merit Scholarships
                        </h4>
                        <p className="mb-4 text-gray-600 text-sm">
                          Partial scholarships for outstanding applicants with
                          proven track record in social impact.
                        </p>
                        <div className="text-gray-600 text-sm">
                          <div className="mb-1 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Portfolio of past work
                          </div>
                          <div className="mb-1 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Leadership experience
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Community recommendations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alumni Reviews */}
            <section className="scroll-mt-32" id="reviews">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    What Our Alumni Say
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Hear from graduates who are now making impact across the
                    globe.
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {alumniReviews.map((review, index) => (
                      <div
                        className="hover:-translate-y-1 rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                        key={index}
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-dark font-bold text-white">
                            {review.image}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#050a30]">
                              {review.name}
                            </h4>
                            <div className="text-gray-600 text-sm">
                              {review.role}
                            </div>
                            <div className="font-medium text-amber-500 text-xs">
                              {review.batch}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm italic">
                          "{review.review}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="scroll-mt-32" id="faq">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Got questions? We've got answers. Click on any question to
                    expand.
                  </p>

                  {/* Category Filter Tabs */}
                  <div className="mb-8 flex flex-wrap gap-3">
                    {faqCategories.map((category) => (
                      <button
                        className={`rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200 ${
                          selectedFaqCategory === category
                            ? "bg-[#050a30] text-white shadow-lg"
                            : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-[#050a30]"
                        }`}
                        key={category}
                        onClick={() => {
                          setSelectedFaqCategory(category);
                          setExpandedFaq(null);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* FAQ Content */}
                  <div>
                    <div className="space-y-4">
                      {faqData[selectedFaqCategory]?.map((faq, index) => (
                        <div
                          className="overflow-hidden rounded-xl border border-gray-100 bg-white"
                          key={index}
                        >
                          <button
                            className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                            onClick={() =>
                              setExpandedFaq(
                                expandedFaq === index ? null : index
                              )
                            }
                          >
                            <h3 className="pr-4 font-semibold text-[#050a30]">
                              {faq.question}
                            </h3>
                            {expandedFaq === index ? (
                              <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                            ) : (
                              <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-500" />
                            )}
                          </button>

                          {expandedFaq === index && (
                            <div className="px-6 pb-6">
                              <div className="mb-4 h-px w-full bg-gray-100" />
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      )) || (
                        <div className="py-8 text-center text-gray-500">
                          No FAQs available for this category.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact for More Questions */}
                <div className="mt-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 text-center">
                  <h3 className="mb-2 font-bold text-[#050a30]">
                    Still have questions?
                  </h3>
                  <p className="mb-4 text-gray-600">
                    We're here to help! Reach out to our team for personalized
                    answers.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-soft-dark px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105"
                    href="mailto:ycbootcamp@taleofhumankind.org"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />

      {/* Floating Navigation for Mobile */}
      {showFloatingNav && (
        <>
          {/* Overlay to close menu when clicking outside */}
          {isFloatingNavOpen && (
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setIsFloatingNavOpen(false)}
            />
          )}

          <div className="-translate-x-1/2 fixed bottom-6 left-1/2 z-50 transform lg:hidden">
            <div className="relative">
              {/* Expanded Menu */}
              {isFloatingNavOpen && (
                <div className="-translate-x-1/2 absolute bottom-full left-1/2 mb-3 max-h-80 w-64 transform overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationItems.map((item) => {
                    return (
                      <button
                        className={`flex w-full items-center px-4 py-3 text-left font-medium text-sm transition-all duration-200 ${
                          activeSection === item.id
                            ? "bg-soft-dark text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                        }`}
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsFloatingNavOpen(false);
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Menu Button */}
              <button
                className="flex items-center gap-2 rounded-full bg-soft-dark px-5 py-3 font-medium text-sm text-white shadow-lg transition-all duration-200 hover:bg-opacity-90"
                onClick={() => setIsFloatingNavOpen(!isFloatingNavOpen)}
              >
                {navigationItems.find((item) => item.id === activeSection)
                  ?.label || "Explore YCB"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isFloatingNavOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutPage;
