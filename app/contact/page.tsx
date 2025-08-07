"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Get in touch with our SEO experts to discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Fill out the form below and one of our SEO experts will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">123 SEO Street, Digital City, 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">info@seoagency.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {isSubmitted ? (
                <div className="rounded-lg border bg-emerald-50 p-8 text-center dark:bg-emerald-950">
                  <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">Thank You!</h3>
                  <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Your message has been received. One of our SEO experts will contact you shortly.
                  </p>
                  <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="website"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Website URL
                      </label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your SEO needs and goals..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Location</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Visit our office to meet our team of SEO experts.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="aspect-video overflow-hidden rounded-lg border">
              <div className="h-full w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <p className="text-zinc-500 dark:text-zinc-400">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Find answers to common questions about our SEO services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does it take to see results from SEO?</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results
                typically take 3-6 months, depending on your industry, competition, and starting point.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you guarantee first-page rankings?</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                We don't guarantee specific rankings as search engines constantly evolve their algorithms. However, we
                do guarantee that we'll use industry best practices and data-driven strategies to improve your
                visibility.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What makes your SEO agency different?</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                We focus on data-driven strategies, complete transparency, and measurable results. Our team stays
                up-to-date with the latest SEO trends and algorithm changes to ensure your strategy is always current.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer contracts or month-to-month services?</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                We offer both options. While we recommend a minimum 6-month commitment for SEO campaigns to see
                meaningful results, we also provide month-to-month services for specific projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
