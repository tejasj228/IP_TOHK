"use client";

import { Users } from "lucide-react";
import { useState } from "react";

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
    {
      id: 1,
      name: "Abhinav Yadav",
      college: "Delhi Technological University",
      city: "Delhi",
    },
    { id: 2, name: "Arpit Kumar", college: "IIT Delhi", city: "Delhi" },
    { id: 3, name: "Arun Kumar", college: "NSUT Delhi", city: "Delhi" },
    { id: 4, name: "Aryan Kumar", college: "BITS Pilani", city: "Pilani" },
    { id: 5, name: "Harsh Siwhan", college: "IIT Bombay", city: "Mumbai" },
    { id: 6, name: "Jivansh Kapoor", college: "IIT Madras", city: "Chennai" },
    { id: 7, name: "Kartikeya Singh", college: "IIT Kanpur", city: "Kanpur" },
    { id: 8, name: "Mohit Pangti", college: "IIIT Delhi", city: "Delhi" },
    { id: 9, name: "Parth Kumar", college: "VIT Vellore", city: "Vellore" },
    {
      id: 10,
      name: "Pranav Khorwal",
      college: "Manipal Institute",
      city: "Manipal",
    },
    { id: 11, name: "Rohan Saini", college: "SRM University", city: "Chennai" },
    {
      id: 12,
      name: "Shivani Ruhela",
      college: "Amity University",
      city: "Noida",
    },
    {
      id: 13,
      name: "Swastik Jaiswal",
      college: "Lovely Professional University",
      city: "Jalandhar",
    },
    {
      id: 14,
      name: "Aadarsh Kumar Jha",
      college: "NIT Warangal",
      city: "Warangal",
    },
    {
      id: 15,
      name: "Aadi Jindal",
      college: "KIIT University",
      city: "Bhubaneswar",
    },
    {
      id: 16,
      name: "Aadit Jain",
      college: "Thapar University",
      city: "Patiala",
    },
    {
      id: 17,
      name: "Aaditya Saini",
      college: "Chitkara University",
      city: "Chandigarh",
    },
    {
      id: 18,
      name: "Aalekh Bansal",
      college: "Bennett University",
      city: "Greater Noida",
    },
    {
      id: 19,
      name: "Aaradhy Tiwari",
      college: "Shiv Nadar University",
      city: "Greater Noida",
    },
    {
      id: 20,
      name: "Aarav Jalan",
      college: "Ashoka University",
      city: "Sonipat",
    },
  ],
  "YCB 2024": [
    {
      id: 1,
      name: "Aditi Sharma",
      college: "Lady Shri Ram College",
      city: "Delhi",
    },
    {
      id: 2,
      name: "Rahul Verma",
      college: "St. Stephen's College",
      city: "Delhi",
    },
    { id: 3, name: "Priya Singh", college: "Miranda House", city: "Delhi" },
    { id: 4, name: "Vikash Kumar", college: "Hindu College", city: "Delhi" },
    { id: 5, name: "Neha Gupta", college: "Hansraj College", city: "Delhi" },
    { id: 6, name: "Amit Pandey", college: "Ramjas College", city: "Delhi" },
    { id: 7, name: "Kavya Jain", college: "Kirori Mal College", city: "Delhi" },
    { id: 8, name: "Rohit Agarwal", college: "SRCC", city: "Delhi" },
    {
      id: 9,
      name: "Sneha Yadav",
      college: "Venkateshwara College",
      city: "Delhi",
    },
    { id: 10, name: "Arjun Malhotra", college: "Gargi College", city: "Delhi" },
  ],
  "YCB 2023": [
    {
      id: 1,
      name: "Tanvi Khanna",
      college: "Christ University",
      city: "Bangalore",
    },
    { id: 2, name: "Deepak Sinha", college: "Symbiosis", city: "Pune" },
    {
      id: 3,
      name: "Megha Tripathi",
      college: "Fergusson College",
      city: "Pune",
    },
    {
      id: 4,
      name: "Saurabh Mishra",
      college: "St. Xavier's College",
      city: "Mumbai",
    },
    {
      id: 5,
      name: "Ritu Bhardwaj",
      college: "Jai Hind College",
      city: "Mumbai",
    },
    { id: 6, name: "Karan Sethi", college: "Wilson College", city: "Mumbai" },
    {
      id: 7,
      name: "Anjali Tiwari",
      college: "Mithibai College",
      city: "Mumbai",
    },
    { id: 8, name: "Varun Chopra", college: "HR College", city: "Mumbai" },
  ],
  "YCB 2022": [
    {
      id: 1,
      name: "Ishita Goyal",
      college: "Presidency College",
      city: "Kolkata",
    },
    {
      id: 2,
      name: "Abhishek Kumar",
      college: "Jadavpur University",
      city: "Kolkata",
    },
    { id: 3, name: "Pooja Sharma", college: "Loyola College", city: "Chennai" },
    {
      id: 4,
      name: "Nikhil Bansal",
      college: "Madras Christian College",
      city: "Chennai",
    },
    {
      id: 5,
      name: "Shreya Agarwal",
      college: "Stella Maris College",
      city: "Chennai",
    },
    {
      id: 6,
      name: "Manish Yadav",
      college: "St. Joseph's College",
      city: "Bangalore",
    },
  ],
  "YCB 2021": [
    {
      id: 1,
      name: "Divya Mehta",
      college: "Mount Carmel College",
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Rajesh Gupta",
      college: "CHRIST University",
      city: "Bangalore",
    },
    {
      id: 3,
      name: "Swati Joshi",
      college: "Jyoti Nivas College",
      city: "Bangalore",
    },
    {
      id: 4,
      name: "Himanshu Singh",
      college: "St. Joseph's College",
      city: "Bangalore",
    },
    {
      id: 5,
      name: "Priyanka Verma",
      college: "Bishop Cotton Women's College",
      city: "Bangalore",
    },
  ],
};

const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState<"speakers" | "participants">(
    "speakers"
  );
  const [selectedWorkshop, setSelectedWorkshop] = useState("YCB 2025");
  const [showAllMentors, setShowAllMentors] = useState(false);

  const workshopYears = Object.keys(workshopData);

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

        <div className="relative z-10 w-full px-4 text-center sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <h1 className="mb-6 font-bold text-5xl text-[#050a30] md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Network
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Meet our distinguished speakers and talented participants who make
            the Young Changemakers Bootcamp a transformative experience.
          </p>
        </div>
      </section>

      {/* Navigation Sidebar */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0 md:w-60 lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Browse Network
              </h3>
              <div className="space-y-3">
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                    activeTab === "speakers"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                  onClick={() => setActiveTab("speakers")}
                >
                  <Users className="h-5 w-5" />
                  Past Mentors
                </button>
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                    activeTab === "participants"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                  onClick={() => setActiveTab("participants")}
                >
                  <Users className="h-5 w-5" />
                  Alumni
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "speakers" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                    Past Mentors
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Influential leaders, innovators, and changemakers inspiring
                    our community
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {(showAllMentors
                      ? speakersData
                      : speakersData.slice(0, 10)
                    ).map((speaker) => (
                      <div
                        className="group hover:-translate-y-1 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:border-[#FFD700]/30 hover:shadow-xl"
                        key={speaker.id}
                      >
                        <div className="relative mb-4">
                          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soft-dark font-bold text-white text-xl">
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="mb-1 font-bold text-[#050a30] transition-colors group-hover:text-[#1e40af]">
                            {speaker.name}
                          </h3>
                          <p className="mb-1 font-medium text-amber-500 text-sm">
                            {speaker.position}
                          </p>
                          <p className="mb-3 text-gray-500 text-xs">
                            {speaker.organization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  {!showAllMentors && speakersData.length > 10 && (
                    <div className="mt-8 flex justify-center">
                      <button
                        className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
                        onClick={() => setShowAllMentors(true)}
                      >
                        View More
                        <svg
                          className="transition-transform duration-300 group-hover:translate-x-2"
                          fill="none"
                          height="18"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "participants" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                    Alumni
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Former participants who have completed our bootcamp and are
                    now making impact in their communities
                  </p>

                  {/* Workshop Year Tabs */}
                  <div className="mb-8 flex flex-wrap gap-2 rounded-xl bg-gray-100 p-1">
                    {workshopYears.map((year) => (
                      <button
                        className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                          selectedWorkshop === year
                            ? "bg-soft-dark text-white shadow-md"
                            : "text-gray-600 hover:bg-white hover:text-[#050a30]"
                        }`}
                        key={year}
                        onClick={() => setSelectedWorkshop(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Participants Grid */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {workshopData[
                      selectedWorkshop as keyof typeof workshopData
                    ].map((participant, _index) => (
                      <div
                        className="group rounded-xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/30 p-4 transition-all duration-300 hover:border-[#FFD700]/30 hover:shadow-lg"
                        key={participant.id}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-dark font-bold text-sm text-white">
                            {participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate font-semibold text-[#050a30] transition-colors group-hover:text-[#1e40af]">
                              {participant.name}
                            </h4>
                            <p className="truncate text-gray-500 text-sm">
                              {participant.college}
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="rounded bg-amber-100 px-2 py-0.5 font-medium text-amber-600 text-xs">
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
    </div>
  );
};

export default NetworkPage;
