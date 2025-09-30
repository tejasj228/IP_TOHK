"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  Target, 
  BookOpen, 
  GraduationCap, 
  DollarSign, 
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Award,
  Lightbulb,
  Globe,
  Heart,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import tohkLogo from "@/assets/tohk.jpg";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<"about" | "eligibility" | "curriculum" | "beyond" | "aid" | "reviews" | "faq">("about");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      topics: ["Personal Leadership", "Values & Purpose", "Goal Setting", "Communication Skills"],
      icon: "🎯",
      color: "from-blue-400 to-blue-600"
    },
    {
      week: "Week 3-4",
      title: "Climate Science & Impact",
      topics: ["Climate Change Basics", "Environmental Science", "Sustainability Principles", "Global Challenges"],
      icon: "🌍",
      color: "from-green-400 to-green-600"
    },
    {
      week: "Week 5-6",
      title: "Innovation & Technology",
      topics: ["Design Thinking", "Tech for Good", "Innovation Methods", "Digital Solutions"],
      icon: "💡",
      color: "from-purple-400 to-purple-600"
    },
    {
      week: "Week 7-8",
      title: "Social Impact & Entrepreneurship",
      topics: ["Social Ventures", "Impact Measurement", "Business Models", "Scaling Solutions"],
      icon: "🚀",
      color: "from-orange-400 to-orange-600"
    },
    {
      week: "Week 9-10",
      title: "Leadership & Advocacy",
      topics: ["Public Speaking", "Community Organizing", "Policy Advocacy", "Movement Building"],
      icon: "📢",
      color: "from-red-400 to-red-600"
    },
    {
      week: "Week 11-12",
      title: "Project Implementation",
      topics: ["Capstone Project", "Mentorship", "Real-world Application", "Presentation"],
      icon: "🎓",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const eligibilityData = [
    {
      title: "Age Requirement",
      description: "18-25 years old",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Education",
      description: "Currently enrolled in college or recent graduate",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Passion",
      description: "Strong interest in climate action and social change",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Commitment",
      description: "Available for 12-week intensive program",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const beyondCurriculumItems = [
    {
      title: "Networking Events",
      description: "Connect with industry leaders, fellow changemakers, and potential collaborators",
      icon: <Globe className="w-8 h-8" />,
      features: ["Monthly meetups", "Industry panels", "Peer connections", "Mentor matching"]
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from experienced professionals and successful alumni",
      icon: <Award className="w-8 h-8" />,
      features: ["Personal mentor", "Career guidance", "Project support", "Long-term relationship"]
    },
    {
      title: "Real Projects",
      description: "Work on actual challenges faced by NGOs, startups, and social enterprises",
      icon: <Target className="w-8 h-8" />,
      features: ["Live projects", "Real impact", "Portfolio building", "Client interaction"]
    },
    {
      title: "Global Community",
      description: "Join a worldwide network of young changemakers creating positive impact",
      icon: <Users className="w-8 h-8" />,
      features: ["Alumni network", "Global chapters", "Collaboration opportunities", "Lifetime access"]
    }
  ];

  const faqData = [
    {
      question: "What makes YCB different from other programs?",
      answer: "YCB combines rigorous academic content with hands-on project work, connecting you with real organizations and experienced mentors. Our focus on climate action and social entrepreneurship, combined with a global network of changemakers, creates a unique learning environment that prepares you for real-world impact."
    },
    {
      question: "Is the program conducted online or offline?",
      answer: "YCB is a hybrid program that combines online learning modules with in-person workshops and networking events. This allows us to accommodate participants from different locations while still providing valuable face-to-face interactions and collaborative experiences."
    },
    {
      question: "What kind of support is available during the program?",
      answer: "Participants receive comprehensive support including personal mentorship, peer learning groups, technical assistance, career guidance, and access to our alumni network. We also provide mental health support and academic assistance as needed."
    },
    {
      question: "Can I participate if I'm working full-time?",
      answer: "The program is designed to be intensive but flexible. While it requires significant commitment (15-20 hours per week), many participants successfully balance it with work or studies. We provide recorded sessions and flexible scheduling for working professionals."
    },
    {
      question: "What happens after completing the program?",
      answer: "Graduates join our global alumni network with access to job opportunities, continued mentorship, funding connections, and collaboration on future projects. Many alumni start their own ventures, join impact organizations, or become mentors themselves."
    },
    {
      question: "Are there any prerequisites for applying?",
      answer: "No specific academic background is required, but we look for demonstrated passion for social change, basic communication skills, and commitment to the program duration. We welcome applications from diverse academic and professional backgrounds."
    }
  ];

  const alumniReviews = [
    {
      name: "Priya Sharma",
      batch: "YCB 2024",
      role: "Founder, EcoSolutions India",
      review: "YCB transformed my understanding of climate action. The mentorship and real projects gave me the confidence to start my own environmental consultancy.",
      rating: 5,
      image: "PS"
    },
    {
      name: "Arjun Patel",
      batch: "YCB 2023",
      role: "Climate Policy Analyst",
      review: "The network I built through YCB has been invaluable. I'm now working with the government on climate policy, thanks to connections made during the program.",
      rating: 5,
      image: "AP"
    },
    {
      name: "Maya Singh",
      batch: "YCB 2024",
      role: "Social Entrepreneur",
      review: "YCB didn't just teach me about climate change - it gave me the tools and network to actually make a difference. My startup now impacts 10,000+ farmers.",
      rating: 5,
      image: "MS"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
            backgroundSize: "60px 60px"
          }} />
        </div>
        
        <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#050a30] mb-6">
            About <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">YCB</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover everything about the Young Changemakers Bootcamp - from curriculum to community, eligibility to impact.
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
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-soft-dark text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
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
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">About Young Changemakers Bootcamp</h2>
                  
                  {/* Mission Statement */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-xl border border-[#FFD700]/20">
                    <h3 className="text-xl font-bold text-[#050a30] mb-3">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To empower young individuals with the knowledge, skills, and network needed to drive meaningful climate action and social change in their communities and beyond.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Comprehensive Curriculum</h4>
                      <p className="text-gray-600 text-sm">12 weeks of intensive learning covering climate science, leadership, innovation, and entrepreneurship.</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Global Network</h4>
                      <p className="text-gray-600 text-sm">Connect with like-minded changemakers, mentors, and industry leaders from around the world.</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Real-World Projects</h4>
                      <p className="text-gray-600 text-sm">Work on actual challenges with partner organizations to create tangible impact.</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Mentorship</h4>
                      <p className="text-gray-600 text-sm">Personalized guidance from experienced professionals and successful alumni.</p>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">500+</div>
                      <div className="text-sm text-gray-600">Alumni</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">50+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">200+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Eligibility & Dates */}
            {activeTab === "eligibility" && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">Eligibility & Important Dates</h2>
                  
                  {/* Eligibility Requirements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#050a30] mb-4">Who Can Apply?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {eligibilityData.map((item, index) => (
                        <div key={index} className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                            {item.icon}
                          </div>
                          <h4 className="font-bold text-[#050a30] mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div>
                    <h3 className="text-xl font-bold text-[#050a30] mb-4">Important Dates - YCB 2025</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">Application Opens</div>
                          <div className="text-sm text-gray-600">January 15, 2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                        <Calendar className="w-6 h-6 text-orange-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">Application Deadline</div>
                          <div className="text-sm text-gray-600">March 15, 2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                        <Calendar className="w-6 h-6 text-green-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">Program Starts</div>
                          <div className="text-sm text-gray-600">April 1, 2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                        <Calendar className="w-6 h-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-[#050a30]">Program Ends</div>
                          <div className="text-sm text-gray-600">June 30, 2025</div>
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
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">12-Week Curriculum</h2>
                  <p className="text-gray-600 mb-8">A comprehensive journey through climate action, leadership, and social entrepreneurship.</p>
                  
                  {/* Curriculum Flow */}
                  <div className="space-y-4 md:space-y-6">
                    {curriculumModules.map((module, index) => (
                      <div key={index} className="relative">
                        {/* Connection Line - Hidden on mobile */}
                        {index < curriculumModules.length - 1 && (
                          <div className="absolute left-6 top-16 md:top-20 w-0.5 h-12 md:h-16 bg-gradient-to-b from-gray-300 to-transparent hidden md:block"></div>
                        )}
                        
                        <div className="flex gap-4 md:gap-6 items-start">
                          {/* Icon Circle */}
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center text-white text-sm md:text-lg font-bold shadow-lg flex-shrink-0`}>
                            {module.icon}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 bg-white rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                              <h3 className="text-lg md:text-xl font-bold text-[#050a30]">{module.title}</h3>
                              <span className="text-xs md:text-sm font-medium text-[#FFD700] bg-[#FFD700]/10 px-2 md:px-3 py-1 rounded-full self-start">
                                {module.week}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                              {module.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-xs md:text-sm">{topic}</span>
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
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">Beyond the Curriculum</h2>
                  <p className="text-gray-600 mb-8">YCB offers much more than just coursework - it's a complete ecosystem for your growth.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {beyondCurriculumItems.map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl flex items-center justify-center text-[#050a30]">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#050a30]">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 text-[#FFD700]" />
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
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">Fee Structure & Financial Aid</h2>
                  
                  {/* Fee Structure */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#050a30] mb-4">Program Fee</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-[#050a30] mb-2">₹25,000</div>
                        <div className="text-gray-600">Complete 12-week program</div>
                        <div className="text-sm text-[#FFD700] font-medium">Early bird: ₹20,000 (Before Feb 15)</div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-[#050a30]">What's Included</div>
                          <div className="text-sm text-gray-600 mt-2">
                            All learning materials, mentorship, project support, networking events, and certificate
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-[#050a30]">Payment Plans</div>
                          <div className="text-sm text-gray-600 mt-2">
                            3 installments available. No interest charged for early payment
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-[#050a30]">Refund Policy</div>
                          <div className="text-sm text-gray-600 mt-2">
                            Full refund within first week. 50% refund within first month
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Aid */}
                  <div>
                    <h3 className="text-xl font-bold text-[#050a30] mb-4">Financial Aid & Scholarships</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-gray-100">
                        <h4 className="font-bold text-[#050a30] mb-3">Need-Based Scholarships</h4>
                        <p className="text-gray-600 text-sm mb-4">Up to 100% fee waiver for deserving candidates based on financial need and merit.</p>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Income certificate required
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Academic transcripts
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Statement of purpose
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 border border-gray-100">
                        <h4 className="font-bold text-[#050a30] mb-3">Merit Scholarships</h4>
                        <p className="text-gray-600 text-sm mb-4">Partial scholarships for outstanding applicants with proven track record in social impact.</p>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Portfolio of past work
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Leadership experience
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
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
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-6">What Our Alumni Say</h2>
                  <p className="text-gray-600 mb-8">Hear from graduates who are now making impact across the globe.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alumniReviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-soft-dark rounded-full flex items-center justify-center text-white font-bold">
                            {review.image}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#050a30]">{review.name}</h4>
                            <div className="text-sm text-gray-600">{review.role}</div>
                            <div className="text-xs text-[#FFD700] font-medium">{review.batch}</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 mb-3">
                          {renderStars(review.rating)}
                        </div>
                        
                        <p className="text-gray-600 text-sm italic">"{review.review}"</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Overall Statistics */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">4.9/5</div>
                      <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">98%</div>
                      <div className="text-sm text-gray-600">Would Recommend</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">85%</div>
                      <div className="text-sm text-gray-600">Career Impact</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#050a30]">92%</div>
                      <div className="text-sm text-gray-600">Still Connected</div>
                    </div>
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
                  
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="font-semibold text-[#050a30] pr-4">{faq.question}</h3>
                          {expandedFaq === index ? (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {expandedFaq === index && (
                          <div className="px-6 pb-6">
                            <div className="w-full h-px bg-gray-100 mb-4"></div>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact for More Questions */}
                  <div className="mt-8 text-center p-6 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-xl border border-[#FFD700]/20">
                    <h3 className="font-bold text-[#050a30] mb-2">Still have questions?</h3>
                    <p className="text-gray-600 mb-4">We're here to help! Reach out to our team for personalized answers.</p>
                    <a 
                      href="mailto:ycbootcamp@taleofhumankind.org"
                      className="inline-flex items-center gap-2 bg-soft-dark text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-200"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />

      {/* Footer */}
      <footer className="bg-soft-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
            {/* Column 1 - Brand */}
            <div className="flex flex-col items-center space-y-4 md:items-start">
              {/* TOHK Logo at top */}
              <Image
                alt="TOHK logo"
                className="h-16 w-16 rounded-full object-cover"
                height={64}
                priority
                src={tohkLogo}
                width={64}
              />
              {/* TOH title below logo */}
              <h3 className="font-bold text-2xl">TOH</h3>
              {/* YCB subtitle below TOH */}
              <p className="text-sm text-white/80">
                Young Changemaker Bootcamp
              </p>
            </div>

            {/* Column 2 - Program */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Program</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="transition-colors hover:text-[gold]" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/about"
                  >
                    About YCB
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/network"
                  >
                    Our Network
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/#editions"
                  >
                    Previous Editions
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/#featured"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/apply"
                  >
                    Apply
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/privacy"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/terms"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/conduct"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/safeguarding"
                  >
                    Safeguarding Policy
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/calendar"
                  >
                    Tentative Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Connect */}
            <div className="space-y-4">
              <h4 className="font-bold text-[gold] text-lg">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="break-all transition-colors hover:text-[gold]"
                    href="mailto:ycbootcamp@taleofhumankind.org"
                  >
                    ycbootcamp@taleofhumankind.org
                  </a>
                </li>
                <li className="flex items-center justify-center space-x-2 md:justify-start">
                  <div className="h-4 w-4 rounded bg-[#d9d9d9]" />
                  <a
                    className="transition-colors hover:text-[gold]"
                    href="/instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-white/10 border-t pt-8 text-center">
            <p className="text-sm text-white/70">
              © 2025 The Tale of Humankind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;