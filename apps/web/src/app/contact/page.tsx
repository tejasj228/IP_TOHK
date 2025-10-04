"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    content: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        content: ""
      });
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-white py-20">
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="mb-6 font-bold text-4xl text-[#050a30] md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <div className="gradient-underline mx-auto mt-4" />
            <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg md:text-xl">
              Have questions about YCB or want to learn more about our programs? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-20 lg:grid-cols-5 lg:items-start">
            {/* Contact Information */}
            <div className="flex flex-col lg:col-span-2 lg:pr-12 lg:pt-12">
              <div className="mb-8">
                <h2 className="mb-4 font-bold text-3xl text-[#050a30] md:text-4xl">
                  Contact Information
                </h2>
                <p className="text-[#718096] text-xl">
                  Reach out to us through any of the following channels:
                </p>
              </div>

              <div className="flex-1 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[gold]/20">
                    <svg className="h-8 w-8 text-[#050a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26c.3.16.67.16.97 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#050a30] text-xl">Email</h3>
                    <p className="text-[#718096] text-lg">contact@ycb.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[gold]/20">
                    <svg className="h-8 w-8 text-[#050a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#050a30] text-xl">Phone</h3>
                    <p className="text-[#718096] text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[gold]/20">
                    <svg className="h-8 w-8 text-[#050a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#050a30] text-xl">Address</h3>
                    <p className="text-[#718096] text-lg">
                      123 Innovation Hub<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-12 shadow-lg lg:col-span-3 lg:pl-12">
              <div className="mb-8">
                <h2 className="mb-4 font-bold text-3xl text-[#050a30] md:text-4xl">
                  Send us a Message
                </h2>
                <p className="text-[#718096] text-xl">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {submitMessage && (
                <div className={`mb-6 rounded-lg p-4 ${
                  submitMessage.includes("Thank you") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                      placeholder="Your full name"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                      placeholder="your.email@example.com"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="number" className="text-base font-medium">Phone Number</Label>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                    placeholder="+91 98765 43210"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-base font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                    placeholder="What is this regarding?"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="content" className="text-base font-medium">Message *</Label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    rows={8}
                    value={formData.content}
                    onChange={handleInputChange}
                    className="flex min-h-[160px] w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base ring-offset-white placeholder:text-gray-500 focus:border-[gold] focus:outline-none focus:ring-2 focus:ring-[gold]/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us more about your inquiry..."
                    suppressHydrationWarning
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group hover:-translate-y-1 hover-glow flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}