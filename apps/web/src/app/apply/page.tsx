"use client";

import { Calendar, Clock, ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ApplyPage() {
  const applications = [
    {
      id: "ycb-2025",
      title: "Young Changemakers Bootcamp 2025",
      description: "Join our flagship program for young innovators and social entrepreneurs",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      deadline: "March 15, 2025",
      status: "Open",
      duration: "6 months",
      location: "Multiple Cities",
    },
    {
      id: "summer-intensive",
      title: "Summer Innovation Intensive",
      description: "Fast-track program for rapid prototyping and validation",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop", 
      deadline: "May 30, 2025",
      status: "Open",
      duration: "2 months",
      location: "Delhi & Mumbai",
    },
    {
      id: "leadership-program",
      title: "Youth Leadership Development",
      description: "Comprehensive leadership training for emerging changemakers",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      deadline: "July 15, 2025",
      status: "Coming Soon",
      duration: "4 months",
      location: "Bangalore & Pune",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Available </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Programs</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            Choose the program that best fits your goals and timeline
          </p>
        </div>
      </section>

      {/* Application Cards Section */}
        <section className="pt-4 pb-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {applications.map((program) => (
              <Card
                key={program.id}
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:shadow-xl p-0 gap-0"
              >
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        program.status === "Open"
                          ? "bg-green-500 text-white"
                          : program.status === "Opening Soon"
                          ? "bg-amber-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {program.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full mt-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm">Deadline: {program.deadline}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-500">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-sm">Duration: {program.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="w-4 h-4 rounded-full bg-gold" />
                      <span className="text-sm">Location: {program.location}</span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className={`w-full group/btn transition-all duration-300 ${
                        program.status === "Open" || program.status === "Opening Soon"
                          ? "smooth-hover bg-[gold] hover:scale-105 hover:bg-[gold]/90 font-bold text-[#1a365d]"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={program.status === "Coming Soon"}
                    >
                      <Link 
                        href={program.status !== "Coming Soon" ? "/how-to-apply" : "#"}
                        className="flex items-center justify-center gap-2 font-bold"
                      >
                        {program.status === "Coming Soon" ? "Coming Soon" : "Apply"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Make an Impact?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Join thousands of young changemakers who have transformed their communities through our programs. Your journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="smooth-hover bg-[gold] hover:scale-105 hover:bg-[gold]/90 font-bold text-[#1a365d] px-6 py-3 transition-all duration-300"
              >
                <Link href="/how-to-apply" className="flex items-center gap-2">
                  Learn How to Apply
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-6 py-3"
              >
                <Link href="/contact">
                  Have Questions?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}