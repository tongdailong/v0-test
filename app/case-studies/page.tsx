import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Revenue Growth",
      description: "How we helped an online retailer increase organic traffic by 200% and boost revenue by 150%.",
      industry: "E-commerce",
      results: ["200% Traffic Increase", "150% Revenue Growth", "75% Bounce Rate Reduction"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      description: "How we helped a SaaS company increase qualified leads by 300% through targeted SEO strategies.",
      industry: "Software",
      results: ["300% Lead Increase", "75% Cost Reduction", "45% Conversion Rate Improvement"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Local Business Visibility",
      description:
        "How we helped a local service business dominate local search results and increase bookings by 250%.",
      industry: "Local Services",
      results: ["250% Booking Increase", "Top 3 Rankings for 50+ Keywords", "185% GMB Conversion Increase"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Healthcare Provider Expansion",
      description: "How we helped a healthcare provider expand into new markets with location-specific SEO strategies.",
      industry: "Healthcare",
      results: ["320% New Patient Increase", "Top Rankings in 5 New Markets", "68% Reduction in Cost Per Acquisition"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "B2B Lead Generation",
      description: "How we helped a B2B company establish thought leadership and generate high-quality leads.",
      industry: "B2B Services",
      results: ["175% Organic Traffic Growth", "225% Increase in Qualified Leads", "35% Higher Average Deal Size"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "E-learning Platform Growth",
      description: "How we helped an e-learning platform increase course enrollments through content-driven SEO.",
      industry: "Education",
      results: ["400% Organic Traffic Increase", "250% Course Enrollment Growth", "65% Improvement in User Engagement"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Success Stories</h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                See how we&apos;ve helped businesses like yours achieve remarkable growth through strategic SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Featured Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold">National Retailer SEO Transformation</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  How we helped a national retail chain recover from a significant traffic drop after a website redesign
                  and achieve a 350% increase in organic traffic and 200% growth in online sales.
                </p>
                <div className="space-y-2">
                  <h3 className="font-medium">Results:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                      <span className="text-zinc-500 dark:text-zinc-400">350% Organic Traffic Increase</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                      <span className="text-zinc-500 dark:text-zinc-400">200% Online Sales Growth</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                      <span className="text-zinc-500 dark:text-zinc-400">45% Improvement in Conversion Rate</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/case-studies/national-retailer">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">More Success Stories</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Explore our collection of case studies across various industries.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-zinc-950"
              >
                <Link href={`/case-studies/${study.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Case Study</span>
                </Link>
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={study.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                    {study.industry}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{study.title}</h3>
                  <p className="mt-2 text-zinc-500 dark:text-zinc-400">{study.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Results:</h4>
                    <ul className="mt-2 space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                          <span className="text-zinc-500 dark:text-zinc-400">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Be Our Next Success Story?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Get a free SEO audit and discover how we can help you achieve similar results.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
