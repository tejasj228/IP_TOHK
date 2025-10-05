"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageCircle,
  Star,
  Target,
  Users,
  UserCheck,
  Mail,
  CreditCard,
  Award,
  Clipboard,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HowToApply() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should show floating nav (mobile only)
      // Show after scrolling past the page header and sidebar area
      const pageHeader = document.querySelector('.page-header') as HTMLElement;
      const sidebar = document.querySelector('.sidebar-nav') as HTMLElement;
      
      let triggerPoint = 300; // Default fallback
      
      if (pageHeader) {
        triggerPoint = pageHeader.offsetTop + pageHeader.offsetHeight + 100;
      } else if (sidebar) {
        triggerPoint = sidebar.offsetTop + 200;
      }
      
      setShowFloatingNav(window.scrollY > triggerPoint);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId) as HTMLElement;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) as HTMLElement;
    if (element) {
      const navHeight = 120;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "steps", label: "Application Steps", icon: Clipboard },
    { id: "looking-for", label: "What We Look For", icon: Star },
    { id: "admissions", label: "Admissions Process", icon: CheckCircle },
    { id: "tips", label: "Application Tips", icon: Lightbulb },
  ];

  const applicationSteps = [
    {
      step: "Step 1",
      title: "Check Eligibility",
      description: "Before you begin, make sure you meet the eligibility criteria",
      icon: <UserCheck className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
      details: [
        "You are a high school student (Grades 9–12 or equivalent).",
        "You have parental/guardian consent (if under 18).",
        "You are comfortable with English (the medium of instruction)."
      ]
    },
    {
      step: "Step 2",
      title: "Create an Account",
      description: "Sign up on our website to begin your application",
      icon: <Users className="h-6 w-6" />,
      color: "from-green-400 to-green-600",
      details: [
        "This will allow you to save progress, track status, and receive updates."
      ]
    },
    {
      step: "Step 3",
      title: "Complete the Application Form",
      description: "Fill in your details and respond to essay & introduction questions",
      icon: <FileText className="h-6 w-6" />,
      color: "from-purple-400 to-purple-600",
      details: [
        "Takes about 30–40 minutes to complete",
        "Help us understand your curiosity, interests, and motivation to join YCB"
      ]
    },
    {
      step: "Step 4",
      title: "Pay the Application Fee",
      description: "Submit the non-refundable fee to confirm your application",
      icon: <CreditCard className="h-6 w-6" />,
      color: "from-orange-400 to-orange-600",
      details: [
        "Application fee: ₹500 (non-refundable)"
      ]
    },
    {
      step: "Step 5",
      title: "Round 1 Review",
      description: "Our team reviews applications to shortlist candidates",
      icon: <Clipboard className="h-6 w-6" />,
      color: "from-red-400 to-red-600",
      details: [
        "Applications reviewed for the next stage"
      ]
    },
    {
      step: "Step 6",
      title: "Round 2: Group Discussion",
      description: "Shortlisted applicants participate in group discussion or interview",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "from-indigo-400 to-indigo-600",
      details: [
        "Assess creativity, problem-solving, and teamwork skills"
      ]
    },
    {
      step: "Step 7",
      title: "Admission Offer",
      description: "Selected students receive official admission letter",
      icon: <Award className="h-6 w-6" />,
      color: "from-teal-400 to-teal-600",
      details: [
        "Confirm your spot by paying the program fee within the deadline"
      ]
    }
  ];

  const qualities = [
    {
      emoji: "🌱",
      title: "Curiosity & Passion",
      description: "A genuine interest in solving real-world problems."
    },
    {
      emoji: "💡",
      title: "Creative Thinking",
      description: "The ability to think differently and come up with bold ideas."
    },
    {
      emoji: "🤝",
      title: "Collaboration",
      description: "Willingness to work in diverse teams and learn from peers."
    },
    {
      emoji: "❤️",
      title: "Commitment",
      description: "The drive to follow through and make ideas happen."
    },
    {
      emoji: "💬",
      title: "Clarity",
      description: "Comfort with expressing yourself in English, since it's the medium of instruction."
    }
  ];

  const tips = [
    {
      title: "Be authentic",
      description: "Write essays in your own voice — we want to know you.",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Show your passion",
      description: "Share problems you care about, even if you don't have solutions yet.",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Keep it clear",
      description: "Avoid long, complicated answers — focus on clarity and honesty.",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Prepare for GD/Interview",
      description: "Think about how you solve problems, work in teams, and communicate ideas.",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      title: "Don't overthink",
      description: "Curiosity and sincerity matter more than perfect answers.",
      icon: <Lightbulb className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header - Separate from main content */}
      <div className="page-header w-full px-8 lg:px-16 xl:px-24 pt-32 pb-8">
        <div className="text-center">
          <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl text-[#050a30]">
            How to <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Apply</span>?
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-6"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
            The application process is simple, but it requires thought and sincerity. Our process is designed to get to know you — your curiosity, ideas, and passion. Here's how it works:
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sidebar-nav bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-28">
              <h3 className="text-lg font-bold text-[#050a30] mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                {navigationItems.map((item) => {
                  return (
                    <button
                      className={`flex w-full items-center rounded-xl px-0 py-3 text-left font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-soft-dark text-white shadow-lg px-4"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30] hover:px-4"
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
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Application Overview
                  </h2>
                  
                  <div className="mb-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                    <h3 className="mb-3 font-bold text-[#050a30] text-xl">
                      Simple but Thoughtful Process
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our application process is designed to understand who you are beyond grades and achievements. We want to know about your curiosity, your ideas, and your passion for making a difference in the world.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Quick Application</h4>
                      <p className="text-gray-600 text-sm">Takes only 30-40 minutes to complete</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Personal Touch</h4>
                      <p className="text-gray-600 text-sm">Get to know you through essays and discussions</p>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                      <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Star className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-[#050a30] mb-2">Merit-Based</h4>
                      <p className="text-gray-600 text-sm">Selection based on potential, not perfection</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Steps */}
            <section id="steps" className="scroll-mt-32">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Application Steps
                  </h2>

                  <div className="space-y-6">
                    {applicationSteps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className={`bg-gradient-to-r ${step.color} rounded-xl p-3 text-white flex-shrink-0`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                                {step.step}
                              </span>
                              <h3 className="font-bold text-[#050a30] text-lg">{step.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-3">{step.description}</p>
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What We're Looking For */}
            <section id="looking-for" className="scroll-mt-32">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    What We're Looking For
                  </h2>
                  
                  <div className="mb-8 rounded-xl border border-green-200 bg-green-50 p-6">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      We don't look for "perfect" resumes — we look for <strong>potential</strong>. Successful YCB participants share these qualities:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {qualities.map((quality, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{quality.emoji}</div>
                          <div>
                            <h3 className="font-bold text-[#050a30] text-lg mb-2">{quality.title}</h3>
                            <p className="text-gray-600">{quality.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Admissions Process */}
            <section id="admissions" className="scroll-mt-32">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Admissions Process
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="h-6 w-6 text-blue-600" />
                          <h3 className="font-bold text-[#050a30]">Rolling Admissions</h3>
                        </div>
                        <p className="text-gray-700">Applications are reviewed on a rolling basis – apply early to increase your chances.</p>
                      </div>
                      
                      <div className="border border-green-200 bg-green-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                          <h3 className="font-bold text-[#050a30]">Final Selection</h3>
                        </div>
                        <p className="text-gray-700">Final selections are made after Round 2 (Group Discussion).</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="border border-purple-200 bg-purple-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Mail className="h-6 w-6 text-purple-600" />
                          <h3 className="font-bold text-[#050a30]">Admission Letter</h3>
                        </div>
                        <p className="text-gray-700">Once selected, you'll receive an official admission letter and payment details.</p>
                      </div>
                      
                      <div className="border border-orange-200 bg-orange-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="h-6 w-6 text-orange-600" />
                          <h3 className="font-bold text-[#050a30]">Limited Seats</h3>
                        </div>
                        <p className="text-gray-700">Seats are limited, so confirm your place promptly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Tips */}
            <section id="tips" className="scroll-mt-32">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-yellow-50/20 to-amber-50/30 p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Tips for Applying
                  </h2>

                  <div className="space-y-4">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#050a30] mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 rounded-xl p-6 text-center">
                    <h3 className="font-bold text-[#050a30] text-xl mb-3">Ready to Apply?</h3>
                    <p className="text-gray-700 mb-6">Start your journey as a young changemaker today!</p>
                    <button className="group hover:-translate-y-1 hover-glow inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-8 py-4 font-bold text-[#050a30] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg">
                      Start Application
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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
          
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
            <div className="relative">
              {/* Expanded Menu */}
              {isFloatingNavOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-white rounded-xl shadow-xl border border-gray-200 py-2 w-64 max-h-80 overflow-y-auto">
                  {navigationItems.map((item) => {
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsFloatingNavOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                          activeSection === item.id
                            ? "bg-soft-dark text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
              
              {/* Menu Button */}
              <button
                onClick={() => setIsFloatingNavOpen(!isFloatingNavOpen)}
                className="px-5 py-3 bg-soft-dark text-white rounded-full flex items-center gap-2 font-medium text-sm hover:bg-opacity-90 transition-all duration-200 shadow-lg"
              >
                {navigationItems.find(item => item.id === activeSection)?.label || "Quick Navigation"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFloatingNavOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}