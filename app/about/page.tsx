import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our SEO Agency</h1>
                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  We're a team of SEO experts passionate about helping businesses grow through data-driven strategies.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Our Team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Our Journey"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Founded in 2010, our agency began with a simple mission: to help businesses navigate the complex world
                  of search engine optimization with transparency and measurable results.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Over the years, we've evolved with the ever-changing digital landscape, staying ahead of algorithm
                  updates and industry trends to deliver cutting-edge strategies that drive real business growth.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Today, we're proud to have helped hundreds of businesses across various industries achieve their
                  growth goals through strategic SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                The principles that guide our work and relationships with clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-full dark:bg-emerald-950">
                <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-center text-zinc-500 dark:text-zinc-400">
                We strive for excellence in everything we do, from research to implementation to reporting.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-full dark:bg-emerald-950">
                <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-center text-zinc-500 dark:text-zinc-400">
                We believe in complete transparency in our strategies, processes, and reporting.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-full dark:bg-emerald-950">
                <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Results-Driven</h3>
              <p className="text-center text-zinc-500 dark:text-zinc-400">
                We focus on delivering measurable results that contribute to your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                The experts behind our successful SEO strategies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Founder & CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-zinc-500 dark:text-zinc-400">SEO Director</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Technical SEO Lead</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Content Strategy Manager</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">David Kim</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Link Building Specialist</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team Member"
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Lisa Thompson</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Analytics Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Work With Us?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Let's discuss how we can help your business grow through strategic SEO.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
