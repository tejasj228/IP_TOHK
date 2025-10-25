"use client";

import { ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Abhijay from "./../alumni_story/Abhijay.jpg";
import Manan from "./../alumni_story/Manan.jpg";
import Nandini from "./../alumni_story/Nandini.jpg";
import NavyaTEDx from "./../alumni_story/Navya.jpg";
import Nishtha from "./../alumni_story/Nishtha.jpg";
import Reyansh from "./../alumni_story/Reyansh.jpg";
import Tseten from "./../alumni_story/Tseten.jpg";

// Constants
const PARAGRAPH_KEY_LENGTH = 50;

// Featured stories data
const featuredStories: Record<
  string,
  {
    title: string;
    author: string;
    location: string;
    published: string;
    label: string;
    image: string;
    content: string[];
  }
> = {
  "nandini-nithyanandh-winter-2023": {
    title:
      "My Journey at YCB Winter 2023: A Week of Learning, Friendship, and Inspiration",
    author: "Nandini Nithyanandh",
    location: "Tamil Nadu, Season 2",
    published: "Winter 2023",
    label: "Participant Story",
    image: Nandini.src,
    content: [
      "The winter of 2023 will always hold a special place in my heart. It was when I attended YCB (Young Changemakers Bootcamp). What began as just another program quickly turned into one of the most memorable experiences of my student life, seven days filled with learning, laughter, and lifelong connections.",
      "The very first day started with an exciting ice-breaker session, which instantly turned a group of strangers into friends. The energy in the room was infectious, everyone was eager to learn, collaborate, and grow together. By the end of the day, we were already cheering for each other like a close-knit team. Day two took us on a delightful local trip to Rashtrapati Bhavan and India Gate. Walking through those historic places with a group of like-minded peers felt surreal, we weren't just tourists; we were young dreamers exploring the roots of our nation's leadership and history.",
      "The following days were packed with insightful sessions and workshops, each one sparking new ideas and perspectives. One of the most memorable sessions was on Creativity and Innovation by Professor Anuj Grover from IIIT Delhi, whose words made us rethink what it truly means to create and to lead. Another highlight was learning about Entrepreneurship; not from textbooks, but through real-life experiences and practical discussions that opened our minds to endless possibilities.",
      "A major highlight of the bootcamp was the 'My Idea for Change' competition. It challenged us to think critically about the issues around us and come up with innovative solutions. The mentors were incredibly supportive throughout, offering valuable feedback and encouragement that pushed us to refine our ideas. But beyond the sessions and competitions, what truly made YCB unforgettable were the people. The mentors, participants, and organizers created an environment where everyone felt heard and valued. I had the privilege of meeting some of the most inspiring people in the industry and the sweetest mentors who genuinely cared about our growth.",
      "A heartfelt thank you to Aniket bhaiya, the visionary founder of The Tale of Humankind, for creating such a meaningful platform. And special appreciation to Ayushi didi, Kumar bhaiya and Twisha didi; their constant support, warmth, and friendship made being away from home so much easier. As I look back, YCB Winter 2023 wasn't just a bootcamp, it was a transformative journey that nurtured confidence, creativity, and courage. It reminded me that change starts small, often with an idea, a conversation, or even a week that changes everything.",
    ],
  },
  "manan-sangtani-mentor": {
    title: "From Ideas to Impact: My Journey as a YCB Mentor",
    author: "Manan Sangtani",
    location: "BITS Goa",
    published: "2023",
    label: "Mentor Story",
    image: Manan.src,
    content: [
      "Since childhood, I've been drawn to ideas, innovation, and the desire to create positive change. So when I got the opportunity to be a mentor and team member at the Young Changemakers Bootcamp, organized by Tale of Humankind at IIT Delhi, it felt like the perfect place to channel that passion.",
      "The bootcamp brought together an inspiring group of school students who had qualified through their dedication to entrepreneurship and changemaking. Being able to interact with them, understand their ideas, and help them refine their solutions was genuinely fulfilling. Their energy and vision were infectious, I saw parts of myself in many of them: curious, hopeful, and ready to make an impact.",
      "Stepping into the IIT Delhi campus for the first time was exciting in itself. The environment was buzzing with innovation and ambition. But beyond the campus, what truly made this experience unforgettable was the team I got to work with. Coming from different colleges and backgrounds, we quickly became close friends. Seven days of working, learning, and growing together created a bond I'll always value.",
      "My role extended beyond mentoring, from managing daily operations to supporting participants during sessions, and attending insightful talks by guest speakers. Every moment was a chance to learn. The bootcamp curriculum was brilliantly designed, offering a blend of hands-on experience and inspiring guidance. I made sure to attend as many sessions as I could, and each one left me with something new to reflect on.",
      "What stood out most during the week was the strong sense of community. Whether it was the young changemakers, the speakers, or our team; the energy was unmatched. A special shoutout to Aniket, Rhythm, Namsel, and Karma, your support, laughter, and teamwork made this journey even more special.",
      "This wasn't just an event. It was a space where ideas came to life, where people connected deeply, and where I was reminded of why changemaking matters. I'm grateful for every moment, and I carry this experience forward with renewed purpose.",
    ],
  },
  "tseten-lhamu-bhutia-season-5": {
    title: "Lines of Culture and Lessons of Change: My YCB Experience",
    author: "Tseten Lhamu Bhutia",
    location: "Sikkim, Season 5",
    published: "June 2025",
    label: "Participant Story",
    image: Tseten.src,
    content: [
      "Walking into the Young Changemakers Bootcamp, I carried a bundle of curiosity, excitement, and a little nervousness. I had little idea how much this experience would shape my understanding of myself and the world around me.",
      "Every moment was one I'd love to relive. There was something in the smiles as well as the glooms that carried lessons I'll remember for a lifetime. One such moment that stands out was sitting on a couch with my teammates the night before the much-awaited My Idea for Change competition (after clearing up one of their messy rooms!). In those few hours, we turned from quiet strangers to friends, sharing stories, hopes, and frustrations. Together, we came up with a business idea that meant something to all of us: Lines of Culture, an initiative to combat regional discrimination and prejudice by sharing real facts and stories from different regions across India through social media and creative merchandise.",
      "As we discussed further, it struck me; each of us, from such different backgrounds, shared the same desire: to make things better, not just for ourselves, but for our communities. That night, I realized real change begins when we choose to listen, empathize, and work together. During the camp, through interactive sessions, group projects, and unplanned conversations over meals at Shiwalik Mess, I learned that changemaking isn't about having all the answers, it's about asking the right questions, finding like-minded people, and persisting even when things feel uncertain.",
      "Those days at YCB left me more open-minded and resilient. They pushed me to rethink what leadership and impact truly mean. The biggest changes so far have been within me, I'm more empathetic, curious, and driven to keep learning. I may not have created massive shifts in my community yet, but YCB taught me that change begins with small steps, and I'm determined to act on these lessons.",
      "If I could offer one message, it would be this: trust in your ability to make small ripples. Together, those ripples will grow. And never underestimate the power of inner transformation, the world changes when we do.",
    ],
  },
  "abhijay-srivastava-season-1": {
    title: "100x Learning: How YCB Changed the Way I Think and Create",
    author: "Abhijay Srivastava",
    location: "Tamil Nadu, Season 1",
    published: "Summer 2023",
    label: "Participant Story",
    image: Abhijay.src,
    content: [
      "Hi! I am Abhijay. I was fortunate enough to be a part of YCB (Young Changemaker's Bootcamp) Chapter 1 in the summer, 2023.",
      "YCB gave me a fresh perspective on my career path, as well as on math, science, entrepreneurship, design, and much more. It was an intense week, packed with learning from a mix of professors, startup founders, college seniors, and even an RJ. Each day brought a new session and a new experience. I still clearly remember Debjani Ghosh - Former President of NASSCOM now - and asking her 'What is NASSCOM?' ~ 'We get enough heads turning for the government to act in weeks rather than years.'",
      "Every session held its own purpose. My favourite was the one held on Design Thinking by Pavan Pagaria, a professor at IIT-Delhi. He gave us fellow students an entire new outlook on how to THINK. How do you invent something? How do you design a necessary product for the world? 'be like a fly on a wall - observe & record behaviour'",
      "Someone would think that okay, maybe high schoolers getting exposed to such beautiful ideas and teaching methods might get a 10x head start. I felt it was 100x. All of us with the enthusiasm needed to connect and build together for a better tomorrow. Special thanks to Aniket and his team gave us that opportunity. I personally connected with many of the host members - Priyanshu Ratnakar, Pragya Sikka, and Tushar, learning priceless insights from them. I had a blast there.",
      "I couldn't have asked for anything more. All in all, at the end, every participant learnt 100x more about how to build and how to bring change for good than they ever could have in a normal environment.",
    ],
  },
  "nishtha-agnihotri-season-2": {
    title: "A Week That Changed How I See the World",
    author: "Nishtha Agnihotri",
    location: "Uttar Pradesh, Season 2",
    published: "Winter 2023",
    label: "Participant Story",
    image: Nishtha.src,
    content: [
      "Attending the Young Changemakers Bootcamp (YCB) was one of the most exciting experiences of my life. I joined the program with curiosity and a little nervousness, but by the end of the week, I had learned more than I ever expected.",
      "Each day was filled with something new, from learning how to make business models and tell better stories, to exploring AI, nanotechnology, and drones. One session that really inspired me was with Prof. V. Ramagopala Rao, where we learned about amazing new research in nanotechnology and how innovations can help solve real problems.",
      "The AI and Figma workshops were super fun! We got to try hands-on activities; designing apps, understanding how technology works, and seeing how math connects with machine learning. I also enjoyed the sessions on creative problem solving and business model creation, where we learned how to turn an idea into something practical and impactful.",
      "Apart from the sessions, what made YCB special were the people. I met so many bright students, kind mentors, and inspiring speakers who shared their stories and experiences. We supported each other, worked together, and became good friends by the end.",
      "Looking back, YCB was more than just a bootcamp. It opened my mind, helped me think differently, and made me believe that anyone, no matter how young can make a difference. I am really thankful to my teachers and the organizers for giving me this amazing opportunity. It's an experience I will always remember!",
    ],
  },
  "reyansh-juneja-shark-tank": {
    title: "Innovation in Action: Reyansh's MemoTag on Shark Tank",
    author: "YCB Team",
    location: "Season 2 Alumni",
    published: "2024",
    label: "Alumni Achievement",
    image: Reyansh.src,
    content: [
      "We're incredibly proud to share that Reyansh Juneja, a participant of the Young Changemakers Bootcamp Season 2, has taken his entrepreneurial journey to national television!",
      "Reyansh is the Founder of MemoTag, an innovative startup that has been featured on Shark Tank India, Season 4. His journey from ideation during the bootcamp to pitching his product on one of India's biggest entrepreneurial platforms is a true reflection of what YCB stands for, turning ideas into real impact.",
      "Reyansh's story reminds us that changemaking doesn't stop at the bootcamp, it begins there. His passion, creativity, and courage to dream big continue to inspire the entire YCB community.",
    ],
  },
  "navya-nilay-umass": {
    title: "From YCB to UMass: Navya's Next Chapter in Changemaking",
    author: "YCB Team",
    location: "Season 1 Alumni",
    published: "2024",
    label: "Alumni Achievement",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      "Once a curious kid in YCB, Navya Nilay, a participant from Young Changemakers Bootcamp Season 1, has been selected to pursue Computer Science at the University of Massachusetts.",
      "Navya's journey from being a reflective young changemaker at YCB to stepping into one of the world's leading universities reflects his dedication, growth, and unshakable spirit to learn and create.",
      "At YCB, we saw his curiosity in action; questioning, exploring, and pushing boundaries. Today, he continues to embody the changemaker mindset wherever she goes. The entire YCB family is proud and excited to see the impact he'll create next!",
    ],
  },
  "navya-kautish-tedx": {
    title: "The Audacity of Ambition: YCB Alumna Navya Inspires at TEDx",
    author: "YCB Team",
    location: "Season 3 Alumni",
    published: "2024",
    label: "Alumni Achievement",
    image: NavyaTEDx.src,
    content: [
      "From the vibrant classrooms of the Young Changemakers Bootcamp to the red circle of TEDx, Navya Kautish's journey is a story of courage, purpose, and relentless ambition.",
      "A participant of YCB Season 3, Navya recently took the TEDx stage to deliver her talk 'The Audacity of Ambition,' where she explored what it truly means to dream big and pursue 'unrealistic' goals with courage. Through her powerful words, she reminded everyone that ambition isn't arrogance, it's the belief that our dreams can redefine what's possible.",
      "At just 18, Navya is already a mental health activist, author, researcher, and recipient of the Next Genius Scholarship, continuing to embody the changemaker spirit that YCB stands for.",
    ],
  },
};

export default function StoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const story = featuredStories[slug];

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-bold text-4xl text-[#050a30]">
            Story Not Found
          </h1>
          <p className="mb-8 text-gray-600 text-lg">
            The story you're looking for doesn't exist.
          </p>
          <Link href="/featured">
            <Button className="bg-[#050a30] hover:bg-[#050a30]/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Featured Stories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-[#050a30]">
        <Image
          alt={story.title}
          className="object-cover opacity-30"
          fill
          priority
          src={story.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a30] via-[#050a30]/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="-mt-32 relative pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/featured">
            <Button
              className="mb-6 bg-white/90 text-[#050a30] backdrop-blur-sm hover:bg-white"
              variant="outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>
          </Link>

          {/* Story Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            {/* Label */}
            <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-4 py-1.5 font-semibold text-[#050a30] text-sm">
              {story.label}
            </div>

            {/* Title */}
            <h1 className="mb-6 font-bold text-3xl text-[#050a30] leading-tight sm:text-4xl lg:text-5xl">
              {story.title}
            </h1>

            {/* Meta Information */}
            <div className="mb-8 flex flex-wrap gap-4 border-gray-200 border-b pb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#FFD700]" />
                <span className="font-medium">{story.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FFD700]" />
                <span>{story.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FFD700]" />
                <span>{story.published}</span>
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              {story.content.map((paragraph) => (
                <p
                  className="mb-6 text-gray-700 text-lg leading-relaxed"
                  key={paragraph.slice(0, PARAGRAPH_KEY_LENGTH)}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
              <h3 className="mb-4 font-bold text-2xl text-[#050a30]">
                Ready to Start Your Own Journey?
              </h3>
              <p className="mb-6 text-gray-700">
                Join the next Young Changemakers Bootcamp and become part of a
                community that's creating real impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/editions">
                  <Button className="bg-[#050a30] hover:bg-[#050a30]/90">
                    Explore Editions
                  </Button>
                </Link>
                <Link href="/featured">
                  <Button variant="outline">Read More Stories</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
