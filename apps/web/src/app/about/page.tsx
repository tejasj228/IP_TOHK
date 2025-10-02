"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  MessageCircle,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import tohkLogo from "@/assets/tohk.jpg";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<
    | "about"
    | "eligibility"
    | "curriculum"
    | "beyond"
    | "aid"
    | "reviews"
    | "faq"
  >("about");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<FaqCategory>("About YCB");

  const navigationItems = [
    { id: "about", label: "About YCB", icon: BookOpen },
    { id: "eligibility", label: "Eligibility & Dates", icon: Calendar },
    { id: "curriculum", label: "Curriculum", icon: GraduationCap },
    { id: "beyond", label: "Beyond the Curriculum", icon: Lightbulb },
    { id: "aid", label: "Fee & Financial Aid", icon: DollarSign },
    { id: "reviews", label: "Alumni Reviews", icon: Star },
    { id: "faq", label: "FAQ's", icon: MessageCircle },
  ];

  const curriculumModules = [
    {
      week: "Week 1-2",
      title: "Foundation & Self-Discovery",
      topics: [
        "Personal Leadership",
        "Values & Purpose",
        "Goal Setting",
        "Communication Skills",
      ],
      icon: "🎯",
      color: "from-blue-400 to-blue-600",
    },
    {
      week: "Week 3-4",
      title: "Climate Science & Impact",
      topics: [
        "Climate Change Basics",
        "Environmental Science",
        "Sustainability Principles",
        "Global Challenges",
      ],
      icon: "🌍",
      color: "from-green-400 to-green-600",
    },
    {
      week: "Week 5-6",
      title: "Innovation & Technology",
      topics: [
        "Design Thinking",
        "Tech for Good",
        "Innovation Methods",
        "Digital Solutions",
      ],
      icon: "💡",
      color: "from-purple-400 to-purple-600",
    },
    {
      week: "Week 7-8",
      title: "Social Impact & Entrepreneurship",
      topics: [
        "Social Ventures",
        "Impact Measurement",
        "Business Models",
        "Scaling Solutions",
      ],
      icon: "🚀",
      color: "from-orange-400 to-orange-600",
    },
    {
      week: "Week 9-10",
      title: "Leadership & Advocacy",
      topics: [
        "Public Speaking",
        "Community Organizing",
        "Policy Advocacy",
        "Movement Building",
      ],
      icon: "📢",
      color: "from-red-400 to-red-600",
    },
    {
      week: "Week 11-12",
      title: "Project Implementation",
      topics: [
        "Capstone Project",
        "Mentorship",
        "Real-world Application",
        "Presentation",
      ],
      icon: "🎓",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const eligibilityData = [
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
    "Alumni Reviews"
  ] as const;

  type FaqCategory = typeof faqCategories[number];

  const faqData: Record<FaqCategory, Array<{question: string; answer: string}>> = {
    "About YCB": [
      {
        question: "What makes YCB different from other programs?",
        answer: "YCB combines rigorous academic content with hands-on project work, connecting you with real organizations and experienced mentors. Our focus on climate action and social entrepreneurship, combined with a global network of changemakers, creates a unique learning environment that prepares you for real-world impact."
      },
      {
        question: "Is the program conducted online or offline?",
        answer: "YCB is a hybrid program that combines online learning modules with in-person workshops and networking events. This allows us to accommodate participants from different locations while still providing valuable face-to-face interactions and collaborative experiences."
      },
      {
        question: "What happens after completing the program?",
        answer: "Graduates join our global alumni network with access to job opportunities, continued mentorship, funding connections, and collaboration on future projects. Many alumni start their own ventures, join impact organizations, or become mentors themselves."
      }
    ],
    "Eligibility & Dates": [
      {
        question: "Are there any prerequisites for applying?",
        answer: "No specific academic background is required, but we look for demonstrated passion for social change, basic communication skills, and commitment to the program duration. We welcome applications from diverse academic and professional backgrounds."
      },
      {
        question: "Can I participate if I'm working full-time?",
        answer: "The program is designed to be intensive but flexible. While it requires significant commitment (15-20 hours per week), many participants successfully balance it with work or studies. We provide recorded sessions and flexible scheduling for working professionals."
      },
      {
        question: "What are the age requirements?",
        answer: "YCB is open to individuals aged 18-30 who are passionate about creating positive change. We believe this age range captures emerging leaders who are ready to take action and have the energy to drive meaningful impact."
      }
    ],
    "Curriculum": [
      {
        question: "What kind of support is available during the program?",
        answer: "Participants receive comprehensive support including personal mentorship, peer learning groups, technical assistance, career guidance, and access to our alumni network. We also provide mental health support and academic assistance as needed."
      },
      {
        question: "How are the projects structured?",
        answer: "Projects are real-world challenges provided by partner organizations. You'll work in teams of 4-5 participants, guided by industry mentors, to develop practical solutions over the course of the program. Each project culminates in a presentation to stakeholders."
      }
    ],
    "Beyond the Curriculum": [
      {
        question: "What networking opportunities are available?",
        answer: "YCB provides extensive networking through monthly alumni meetups, industry expert sessions, partner organization visits, and our global online community. You'll connect with changemakers across sectors and geographies."
      },
      {
        question: "Is there ongoing support after graduation?",
        answer: "Yes! Alumni receive lifetime access to our network, quarterly check-ins with career counselors, funding opportunity alerts, collaboration platforms, and invitations to exclusive events and workshops."
      }
    ],
    "Fee & Financial Aid": [
      {
        question: "What is the program fee?",
        answer: "The program fee varies by location and format. We offer need-based scholarships covering up to 80% of costs. Financial assistance is available for deserving candidates who demonstrate passion and commitment."
      },
      {
        question: "Are there payment plans available?",
        answer: "Yes, we offer flexible payment plans including installment options and deferred payment for students. Our goal is to make the program accessible to passionate changemakers regardless of financial background."
      }
    ],
    "Alumni Reviews": [
      {
        question: "How do alumni stay connected?",
        answer: "Our alumni network is active through monthly meetups, online forums, collaborative projects, and mentorship programs. Many alumni also return as mentors and guest speakers for current participants."
      },
      {
        question: "What career opportunities are available to alumni?",
        answer: "Alumni have access to exclusive job boards, startup opportunities, government positions, and NGO roles. Our career services team also provides ongoing support for career transitions and advancement."
      }
    ]
  };

  const alumniReviews = [
    {
      name: "Priya Sharma",
      batch: "YCB 2024",
      role: "Founder, EcoSolutions India",
      review: "YCB transformed my understanding of climate action. The mentorship and real projects gave me the confidence to start my own environmental consultancy.",
      image: "PS"
    },
    {
      name: "Arjun Patel",
      batch: "YCB 2023",
      role: "Climate Policy Analyst",
      review: "The network I built through YCB has been invaluable. I'm now working with the government on climate policy, thanks to connections made during the program.",
      image: "AP"
    },
    {
      name: "Maya Singh",
      batch: "YCB 2024",
      role: "Social Entrepreneur",
      review: "YCB didn't just teach me about climate change - it gave me the tools and network to actually make a difference. My startup now impacts 10,000+ farmers.",
      image: "MS"
    },
    {
      name: "Rahul Kumar",
      batch: "YCB 2023",
      role: "Sustainability Consultant",
      review: "The hands-on projects and real-world experience I gained through YCB were game-changing. I now lead sustainability initiatives for Fortune 500 companies.",
      image: "RK"
    },
    {
      name: "Ananya Joshi",
      batch: "YCB 2024",
      role: "Green Tech Innovator",
      review: "YCB's emphasis on innovation and technology helped me develop a clean energy solution that's now being implemented across rural communities.",
      image: "AJ"
    },
    {
      name: "Vikram Mehta",
      batch: "YCB 2023",
      role: "Impact Investment Analyst",
      review: "The program opened my eyes to the intersection of finance and social impact. I now help direct millions in funding toward sustainable development projects.",
      image: "VM"
    },
    {
      name: "Kavya Reddy",
      batch: "YCB 2024",
      role: "Community Development Lead",
      review: "YCB taught me that change starts at the grassroots level. I'm now leading community-driven initiatives that have transformed 50+ villages.",
      image: "KR"
    }
  ];

  const renderStars = (rating: number) => {
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
        
        <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#050a30] mb-6">
            About <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">YCB</span>
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-28">
              <h3 className="text-lg font-bold text-[#050a30] mb-4">Explore YCB</h3>
              <div className="space-y-3">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-soft-dark text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                      }`}
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                    >
                      <IconComponent className="h-5 w-5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* About YCB */}
            {activeTab === "about" && (
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
                      To empower young individuals with the knowledge, skills,
                      and network needed to drive meaningful climate action and
                      social change in their communities and beyond.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Comprehensive Curriculum
                      </h4>
                      <p className="text-gray-600 text-sm">
                        12 weeks of intensive learning covering climate science,
                        leadership, innovation, and entrepreneurship.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Global Network
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connect with like-minded changemakers, mentors, and
                        industry leaders from around the world.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Real-World Projects
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Work on actual challenges with partner organizations to
                        create tangible impact.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                        <Award className="h-6 w-6 text-orange-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Mentorship
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Personalized guidance from experienced professionals and
                        successful alumni.
                      </p>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
                      <div className="font-bold text-2xl text-[#050a30]">
                        500+
                      </div>
                      <div className="text-gray-600 text-sm">Alumni</div>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
                      <div className="font-bold text-2xl text-[#050a30]">
                        50+
                      </div>
                      <div className="text-gray-600 text-sm">Countries</div>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
                      <div className="font-bold text-2xl text-[#050a30]">
                        200+
                      </div>
                      <div className="text-gray-600 text-sm">Projects</div>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
                      <div className="font-bold text-2xl text-[#050a30]">
                        95%
                      </div>
                      <div className="text-gray-600 text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Eligibility & Dates */}
            {activeTab === "eligibility" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Eligibility & Important Dates
                  </h2>

                  {/* Eligibility Requirements */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Who Can Apply?
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {eligibilityData.map((item, index) => (
                        <div
                          className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-lg"
                          key={index}
                        >
                          <div
                            className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                          >
                            {item.icon}
                          </div>
                          <h4 className="mb-2 font-bold text-[#050a30]">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div>
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Important Dates - YCB 2025
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <Calendar className="h-6 w-6 text-blue-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Application Opens
                          </div>
                          <div className="text-gray-600 text-sm">
                            January 15, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <Calendar className="h-6 w-6 text-orange-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Application Deadline
                          </div>
                          <div className="text-gray-600 text-sm">
                            March 15, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <Calendar className="h-6 w-6 text-green-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Program Starts
                          </div>
                          <div className="text-gray-600 text-sm">
                            April 1, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <Calendar className="h-6 w-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Program Ends
                          </div>
                          <div className="text-gray-600 text-sm">
                            June 30, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Curriculum */}
            {activeTab === "curriculum" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    12-Week Curriculum
                  </h2>
                  <p className="mb-8 text-gray-600">
                    A comprehensive journey through climate action, leadership,
                    and social entrepreneurship.
                  </p>

                  {/* Curriculum Flow */}
                  <div className="space-y-4 md:space-y-6">
                    {curriculumModules.map((module, index) => (
                      <div className="relative" key={index}>
                        {/* Connection Line - Hidden on mobile */}
                        {index < curriculumModules.length - 1 && (
                          <div className="absolute top-16 left-6 hidden h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent md:top-20 md:block md:h-16" />
                        )}

                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Icon Circle */}
                          <div
                            className={`h-10 w-10 rounded-full bg-gradient-to-r md:h-12 md:w-12 ${module.color} flex flex-shrink-0 items-center justify-center font-bold text-sm text-white shadow-lg md:text-lg`}
                          >
                            {module.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-lg md:p-6">
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <h3 className="font-bold text-[#050a30] text-lg md:text-xl">
                                {module.title}
                              </h3>
                              <span className="self-start rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700 text-xs md:px-3 md:text-sm">
                                {module.week}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                              {module.topics.map((topic, topicIndex) => (
                                <div
                                  className="flex items-center gap-2 text-gray-600 text-sm"
                                  key={topicIndex}
                                >
                                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-500 md:h-4 md:w-4" />
                                  <span className="text-xs md:text-sm">
                                    {topic}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Beyond the Curriculum */}
            {activeTab === "beyond" && (
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
            )}

            {/* Fee & Financial Aid */}
            {activeTab === "aid" && (
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
            )}

            {/* Alumni Reviews */}
            {activeTab === "reviews" && (
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
                        
                        <p className="text-gray-600 text-sm italic">"{review.review}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ */}
            {activeTab === "faq" && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">Frequently Asked Questions</h2>
                  <p className="text-gray-600 mb-8">Got questions? We've got answers. Click on any question to expand.</p>
                  
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Category Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="bg-white rounded-xl border border-gray-100 p-4">
                        <h3 className="font-semibold text-[#050a30] mb-4">Categories</h3>
                        <div className="space-y-2">
                          {faqCategories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setSelectedFaqCategory(category);
                                setExpandedFaq(null);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedFaqCategory === category
                                  ? "bg-[#050a30] text-white"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* FAQ Content */}
                    <div className="flex-1">
                      <div className="space-y-4">
                        {faqData[selectedFaqCategory]?.map((faq, index) => (
                          <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                            <button
                              className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                              onClick={() =>
                                setExpandedFaq(expandedFaq === index ? null : index)
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
                          <div className="text-center py-8 text-gray-500">
                            No FAQs available for this category.
                          </div>
                        )}
                      </div>
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
            )}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
  );
};

export default AboutPage;
