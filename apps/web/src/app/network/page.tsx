"use client";

import { useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import tohkLogo from "@/assets/tohk.jpg";

// Speakers & Mentors Data (influential people from various fields)
const speakersData = [
  {
    id: 1,
    name: "Ratan Tata",
    position: "Chairman Emeritus",
    organization: "Tata Group",
    linkedin: "https://linkedin.com/in/ratan-tata",
    image: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Priyanka Chopra",
    position: "Global Icon & Actress",
    organization: "UNICEF Goodwill Ambassador",
    linkedin: "https://linkedin.com/in/priyanka-chopra",
    image: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Sundar Pichai",
    position: "CEO",
    organization: "Google & Alphabet",
    linkedin: "https://linkedin.com/in/sundar-pichai",
    image: "/api/placeholder/200/200",
  },
  {
    id: 4,
    name: "Mary Kom",
    position: "Olympic Boxer",
    organization: "Sports Authority of India",
    linkedin: "https://linkedin.com/in/mary-kom",
    image: "/api/placeholder/200/200",
  },
  {
    id: 5,
    name: "Kiran Mazumdar-Shaw",
    position: "Executive Chairperson",
    organization: "Biocon Limited",
    linkedin: "https://linkedin.com/in/kiran-mazumdar-shaw",
    image: "/api/placeholder/200/200",
  },
  {
    id: 6,
    name: "A.P.J. Abdul Kalam",
    position: "Former President of India",
    organization: "Missile Man of India",
    linkedin: "https://linkedin.com/in/apj-abdul-kalam",
    image: "/api/placeholder/200/200",
  },
  {
    id: 7,
    name: "Ritesh Agarwal",
    position: "Founder & CEO",
    organization: "OYO Rooms",
    linkedin: "https://linkedin.com/in/ritesh-agarwal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 8,
    name: "Saina Nehwal",
    position: "Olympic Badminton Player",
    organization: "Indian Badminton Association",
    linkedin: "https://linkedin.com/in/saina-nehwal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 9,
    name: "Vijay Shekhar Sharma",
    position: "Founder & CEO",
    organization: "Paytm",
    linkedin: "https://linkedin.com/in/vs-sharma",
    image: "/api/placeholder/200/200",
  },
  {
    id: 10,
    name: "Deepika Padukone",
    position: "Actor & Mental Health Advocate",
    organization: "Live Love Laugh Foundation",
    linkedin: "https://linkedin.com/in/deepika-padukone",
    image: "/api/placeholder/200/200",
  },
  {
    id: 11,
    name: "Anand Mahindra",
    position: "Chairman",
    organization: "Mahindra Group",
    linkedin: "https://linkedin.com/in/anand-mahindra",
    image: "/api/placeholder/200/200",
  },
  {
    id: 12,
    name: "Alia Bhatt",
    position: "Actor & Environmental Activist",
    organization: "CoExist",
    linkedin: "https://linkedin.com/in/alia-bhatt",
    image: "/api/placeholder/200/200",
  },
];

// YCB Workshop/Edition Data
const workshopData = {
  "YCB 2025": [
    { id: 1, name: "Abhinav Yadav", college: "Delhi Technological University", city: "Delhi" },
    { id: 2, name: "Arpit Kumar", college: "IIT Delhi", city: "Delhi" },
    { id: 3, name: "Arun Kumar", college: "NSUT Delhi", city: "Delhi" },
    { id: 4, name: "Aryan Kumar", college: "BITS Pilani", city: "Pilani" },
    { id: 5, name: "Harsh Siwhan", college: "IIT Bombay", city: "Mumbai" },
    { id: 6, name: "Jivansh Kapoor", college: "IIT Madras", city: "Chennai" },
    { id: 7, name: "Kartikeya Singh", college: "IIT Kanpur", city: "Kanpur" },
    { id: 8, name: "Mohit Pangti", college: "IIIT Delhi", city: "Delhi" },
    { id: 9, name: "Parth Kumar", college: "VIT Vellore", city: "Vellore" },
    { id: 10, name: "Pranav Khorwal", college: "Manipal Institute", city: "Manipal" },
    { id: 11, name: "Rohan Saini", college: "SRM University", city: "Chennai" },
    { id: 12, name: "Shivani Ruhela", college: "Amity University", city: "Noida" },
    { id: 13, name: "Swastik Jaiswal", college: "Lovely Professional University", city: "Jalandhar" },
    { id: 14, name: "Aadarsh Kumar Jha", college: "NIT Warangal", city: "Warangal" },
    { id: 15, name: "Aadi Jindal", college: "KIIT University", city: "Bhubaneswar" },
    { id: 16, name: "Aadit Jain", college: "Thapar University", city: "Patiala" },
    { id: 17, name: "Aaditya Saini", college: "Chitkara University", city: "Chandigarh" },
    { id: 18, name: "Aalekh Bansal", college: "Bennett University", city: "Greater Noida" },
    { id: 19, name: "Aaradhy Tiwari", college: "Shiv Nadar University", city: "Greater Noida" },
    { id: 20, name: "Aarav Jalan", college: "Ashoka University", city: "Sonipat" },
  ],
  "YCB 2024": [
    { id: 1, name: "Aditi Sharma", college: "Lady Shri Ram College", city: "Delhi" },
    { id: 2, name: "Rahul Verma", college: "St. Stephen's College", city: "Delhi" },
    { id: 3, name: "Priya Singh", college: "Miranda House", city: "Delhi" },
    { id: 4, name: "Vikash Kumar", college: "Hindu College", city: "Delhi" },
    { id: 5, name: "Neha Gupta", college: "Hansraj College", city: "Delhi" },
    { id: 6, name: "Amit Pandey", college: "Ramjas College", city: "Delhi" },
    { id: 7, name: "Kavya Jain", college: "Kirori Mal College", city: "Delhi" },
    { id: 8, name: "Rohit Agarwal", college: "SRCC", city: "Delhi" },
    { id: 9, name: "Sneha Yadav", college: "Venkateshwara College", city: "Delhi" },
    { id: 10, name: "Arjun Malhotra", college: "Gargi College", city: "Delhi" },
  ],
  "YCB 2023": [
    { id: 1, name: "Tanvi Khanna", college: "Christ University", city: "Bangalore" },
    { id: 2, name: "Deepak Sinha", college: "Symbiosis", city: "Pune" },
    { id: 3, name: "Megha Tripathi", college: "Fergusson College", city: "Pune" },
    { id: 4, name: "Saurabh Mishra", college: "St. Xavier's College", city: "Mumbai" },
    { id: 5, name: "Ritu Bhardwaj", college: "Jai Hind College", city: "Mumbai" },
    { id: 6, name: "Karan Sethi", college: "Wilson College", city: "Mumbai" },
    { id: 7, name: "Anjali Tiwari", college: "Mithibai College", city: "Mumbai" },
    { id: 8, name: "Varun Chopra", college: "HR College", city: "Mumbai" },
  ],
  "YCB 2022": [
    { id: 1, name: "Ishita Goyal", college: "Presidency College", city: "Kolkata" },
    { id: 2, name: "Abhishek Kumar", college: "Jadavpur University", city: "Kolkata" },
    { id: 3, name: "Pooja Sharma", college: "Loyola College", city: "Chennai" },
    { id: 4, name: "Nikhil Bansal", college: "Madras Christian College", city: "Chennai" },
    { id: 5, name: "Shreya Agarwal", college: "Stella Maris College", city: "Chennai" },
    { id: 6, name: "Manish Yadav", college: "St. Joseph's College", city: "Bangalore" },
  ],
  "YCB 2021": [
    { id: 1, name: "Divya Mehta", college: "Mount Carmel College", city: "Bangalore" },
    { id: 2, name: "Rajesh Gupta", college: "CHRIST University", city: "Bangalore" },
    { id: 3, name: "Swati Joshi", college: "Jyoti Nivas College", city: "Bangalore" },
    { id: 4, name: "Himanshu Singh", college: "St. Joseph's College", city: "Bangalore" },
    { id: 5, name: "Priyanka Verma", college: "Bishop Cotton Women's College", city: "Bangalore" },
  ],
};

const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState<"speakers" | "participants">("speakers");
  const [selectedWorkshop, setSelectedWorkshop] = useState("YCB 2025");

  const workshopYears = Object.keys(workshopData);

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
            Our <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Network</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished speakers and talented participants who make the Young Changemakers Bootcamp a transformative experience.
          </p>
        </div>
      </section>

      {/* Navigation Sidebar */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-28">
              <h3 className="text-lg font-bold text-[#050a30] mb-4">Browse Network</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("speakers")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                    activeTab === "speakers"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  Past Mentors / Alumni
                </button>
                <button
                  onClick={() => setActiveTab("participants")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                    activeTab === "participants"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  Participants
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "speakers" && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-2">Past Mentors / Alumni</h2>
                  <p className="text-gray-600 mb-8">Influential leaders, innovators, and changemakers inspiring our community</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {speakersData.map((speaker) => (
                      <div
                        key={speaker.id}
                        className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative mb-4">
                          <div className="w-20 h-20 mx-auto rounded-full bg-soft-dark flex items-center justify-center text-white text-xl font-bold">
                            {speaker.name.split(" ").map(n => n[0]).join("")}
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-[#050a30] mb-1 group-hover:text-[#1e40af] transition-colors">
                            {speaker.name}
                          </h3>
                          <p className="text-sm text-amber-500 font-medium mb-1">{speaker.position}</p>
                          <p className="text-xs text-gray-500 mb-3">{speaker.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "participants" && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-[#050a30] mb-2">Participants</h2>
                  <p className="text-gray-600 mb-8">Past mentors, alumni, and talented individuals who have been part of our bootcamp editions</p>
                  
                  {/* Workshop Year Tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
                    {workshopYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedWorkshop(year)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          selectedWorkshop === year
                            ? "bg-soft-dark text-white shadow-md"
                            : "text-gray-600 hover:text-[#050a30] hover:bg-white"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Participants Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {workshopData[selectedWorkshop as keyof typeof workshopData].map((participant, index) => (
                      <div
                        key={participant.id}
                        className="group bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-4 border border-gray-100 hover:shadow-lg hover:border-[#FFD700]/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-soft-dark flex items-center justify-center text-white text-sm font-bold">
                            {participant.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-[#050a30] truncate group-hover:text-[#1e40af] transition-colors">
                              {participant.name}
                            </h4>
                            <p className="text-sm text-gray-500 truncate">{participant.college}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-600 text-xs font-medium rounded">
                                {participant.city}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                    href="/#about"
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

export default NetworkPage;