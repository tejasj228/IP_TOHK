"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import imageBg from "@/assets/image.png";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Skip to main content */}
			<div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50">
				Skip to main content
			</div>

			{/* Hero Section */}
			<section className="relative h-[588px] bg-[#050a30] overflow-hidden">
				{/* Background image with proper fallback */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url(${imageBg.src})`
					}}
				/>
				{/* Gradient overlay for text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

				<div className="relative z-10 h-full max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
						{/* Left Content */}
						<div className="pt-20">
							{/* Youth Changemaker Bootcamp Badge */}
							<div className="inline-block bg-[gold] px-6 py-3 rounded-full mb-8">
								<span className="text-[#1a365d] font-bold text-lg">Youth Changemaker Bootcamp</span>
							</div>

							{/* Main Heading */}
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
								Equip young people with a {" "}
								<span className="text-[gold]">changemaking</span> mindset.
							</h1>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-[gold] text-[#1a365d] hover:bg-[gold]/90 px-8 py-3 text-base font-bold">
									Apply
								</Button>
								<Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#050a30] px-8 py-3 text-base font-bold">
									Learn More
								</Button>
							</div>
						</div>
					</div>

					{/* Pagination dots */}
					{/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
						<div className="w-3 h-3 bg-[#d9d9d9] rounded-full" />
						<div className="w-3 h-3 bg-[d9d9d9] rounded-full" />
						<div className="w-3 h-3 bg-[gold] rounded-full" />
						<div className="w-3 h-3 bg-[d9d9d9] rounded-full" />
						<div className="w-3 h-3 bg-[d9d9d9] rounded-full" />
					</div> */}
				</div>
			</section>

			{/* About YCB Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-[#050a30] mb-4">About YCB</h2>
					<div className="w-24 h-1 bg-[#d9d9d9] mx-auto mb-12" />

					<div className="max-w-4xl mx-auto">
						<p className="text-lg text-[#718096] leading-relaxed">
							The Youth Changemaker Bootcamp (YCB) is a transformative program designed to empower young people
							with the skills, mindset, and network needed to create positive change in their communities and beyond.
							Through immersive learning experiences, mentorship, and collaborative projects, participants develop
							critical thinking, leadership, and social innovation capabilities.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-[#050a30] mb-4">Testimonials</h2>
					<div className="w-24 h-1 bg-[#d9d9d9] mx-auto mb-4" />
					<p className="text-lg text-[#718096] mb-16 max-w-2xl mx-auto">
						Hear what our students have to say about their transformative journey.
					</p>

					{/* Testimonial Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Testimonial 1 */}
						<Card className="bg-[#f6f6f6] border-0 shadow-lg">
							<CardContent className="p-8 text-center">
								<div className="w-20 h-20 bg-[#d9d9d9] rounded-full mx-auto mb-6 border-4 border-[gold]" />
								<blockquote className="text-[#2d3748] text-sm leading-relaxed mb-6">
									"Working with mentors and peers from across India opened my eyes to diverse perspectives. The collaborative environment was truly inspiring."
								</blockquote>
								<h4 className="font-bold text-[#1a365d] text-xl mb-2">Priya Patel</h4>
								<p className="text-[#718096] text-sm">Kendriya Vidyalaya, Mumbai</p>
							</CardContent>
						</Card>

						{/* Testimonial 2 */}
						<Card className="bg-[#f6f6f6] border-0 shadow-lg">
							<CardContent className="p-8 text-center">
								<div className="w-20 h-20 bg-[#d9d9d9] rounded-full mx-auto mb-6 border-4 border-[gold]" />
								<blockquote className="text-[#2d3748] text-sm leading-relaxed mb-6">
									"The program transformed my understanding of social impact and gave me the tools to make a real difference in my community."
								</blockquote>
								<h4 className="font-bold text-[#1a365d] text-xl mb-2">Arjun Singh</h4>
								<p className="text-[#718096] text-sm">Delhi Public School, Delhi</p>
							</CardContent>
						</Card>

						{/* Testimonial 3 */}
						<Card className="bg-[#f6f6f6] border-0 shadow-lg">
							<CardContent className="p-8 text-center">
								<div className="w-20 h-20 bg-[#d9d9d9] rounded-full mx-auto mb-6 border-4 border-[gold]" />
								<blockquote className="text-[#2d3748] text-sm leading-relaxed mb-6">
									"YCB connected me with like-minded changemakers and helped me develop a clear vision for my social enterprise."
								</blockquote>
								<h4 className="font-bold text-[#1a365d] text-xl mb-2">Meera Iyer</h4>
								<p className="text-[#718096] text-sm">St. Xavier's College, Mumbai</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#050a30] text-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Column 1 - Brand */}
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-12 h-12 bg-[#d9d9d9] rounded-full" />
								<div>
									<h3 className="text-2xl font-bold">TOH</h3>
									<p className="text-sm">Youth Changemaker Bootcamp</p>
								</div>
							</div>
						</div>

						{/* Column 2 - Program */}
						<div className="space-y-4">
							<h4 className="text-[gold] font-bold text-lg">Program</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-[gold] transition-colors">Home</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">About YCB</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Our Network</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Previous Editions</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Featured</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Apply</a></li>
							</ul>
						</div>

						{/* Column 3 - Legal */}
						<div className="space-y-4">
							<h4 className="text-[gold] font-bold text-lg">Legal</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-[gold] transition-colors">Privacy Notice</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Terms of Use</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Code of Conduct</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Safeguarding Policy</a></li>
								<li><a href="#" className="hover:text-[gold] transition-colors">Tentative Calendar</a></li>
							</ul>
						</div>

						{/* Column 4 - Connect */}
						<div className="space-y-4">
							<h4 className="text-[gold] font-bold text-lg">Connect</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="mailto:ycbootcamp@taleofhumankind.org" className="hover:text-[gold] transition-colors">
									ycbootcamp@taleofhumankind.org
								</a></li>
								<li className="flex items-center space-x-2">
									<div className="w-4 h-4 bg-[#d9d9d9] rounded" />
									<a href="#" className="hover:text-[gold] transition-colors">Instagram</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Copyright */}
					<div className="border-t border-white/10 mt-12 pt-8 text-center">
						<p className="text-white/70 text-sm">
							© 2025 The Tale of Humankind. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
