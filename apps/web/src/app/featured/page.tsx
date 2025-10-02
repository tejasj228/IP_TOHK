"use client";

import { Blog8 } from "@/components/blog";

// YCB-specific blog posts data
const ycbBlogPosts = [
  {
    id: "youth-leadership-digital-age",
    title: "Youth Leadership in the Digital Age: Lessons from YCB 2024",
    summary:
      "Discover how young changemakers are leveraging digital technologies to create sustainable social impact. Learn from success stories and practical strategies from our Mumbai edition.",
    label: "Leadership",
    author: "Priya Sharma",
    published: "15 Dec 2024",
    url: "/featured/youth-leadership-digital-age",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Leadership", "Digital Innovation", "Youth Empowerment"],
  },
  {
    id: "sustainable-entrepreneurship-guide",
    title: "Building Sustainable Social Enterprises: A Complete Guide",
    summary:
      "A comprehensive guide to creating social enterprises that drive positive change while ensuring long-term sustainability. Insights from YCB 2023 participants and their successful ventures.",
    label: "Entrepreneurship",
    author: "Arjun Malhotra",
    published: "28 Nov 2024",
    url: "/featured/sustainable-entrepreneurship-guide",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Social Enterprise", "Sustainability", "Impact"],
  },
  {
    id: "climate-action-youth-movements",
    title:
      "Climate Action Through Youth Movements: The Power of Collective Change",
    summary:
      "Explore how young activists are mobilizing communities for climate action. Learn from real campaigns and discover strategies for environmental advocacy from YCB 2022 alumni.",
    label: "Climate Action",
    author: "Kavya Jain",
    published: "10 Nov 2024",
    url: "/featured/climate-action-youth-movements",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      "Climate Action",
      "Environmental Advocacy",
      "Community Mobilization",
    ],
  },
  {
    id: "digital-inclusion-rural-communities",
    title: "Bridging the Digital Divide: Technology for Rural Development",
    summary:
      "How technology can empower rural communities and create inclusive growth. Learn about innovative solutions developed by YCB participants for digital inclusion.",
    label: "Technology",
    author: "Sneha Gupta",
    published: "25 Oct 2024",
    url: "/featured/digital-inclusion-rural-communities",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Technology", "Rural Development", "Digital Inclusion"],
  },
  {
    id: "mental-health-youth-advocacy",
    title: "Mental Health Advocacy: Breaking Stigma Through Youth Voices",
    summary:
      "Understanding the role of young advocates in mental health awareness. Stories of impact and strategies for creating supportive communities during challenging times.",
    label: "Mental Health",
    author: "Aman Verma",
    published: "12 Oct 2024",
    url: "/featured/mental-health-youth-advocacy",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Mental Health", "Community Support", "Advocacy"],
  },
  {
    id: "innovation-for-education",
    title: "Revolutionizing Education: Tech Solutions for Learning Equity",
    summary:
      "Explore innovative educational technologies that are making quality learning accessible to all. Discover solutions developed by young innovators for educational equity.",
    label: "Education",
    author: "Tanvi Khanna",
    published: "05 Oct 2024",
    url: "/featured/innovation-for-education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Education", "EdTech", "Innovation"],
  },
];

const FeaturedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
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

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 font-bold text-5xl text-[#050a30] md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Dive into inspiring stories of change, innovation, and impact from
            our Young Changemaker community. Discover insights, strategies, and
            real-world solutions from the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <div className="pb-20">
        <Blog8
          posts={ycbBlogPosts}
        />
      </div>
    </div>
  );
};

export default FeaturedPage;
