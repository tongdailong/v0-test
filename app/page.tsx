import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Globe, LineChart, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Boost Your Online Visibility with Data-Driven SEO
                </h1>
                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  We help businesses grow through strategic search engine optimization that delivers measurable results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Explore Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="SEO Growth Chart"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact in Numbers</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                We've helped businesses achieve remarkable growth through our proven SEO strategies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-8 bg-white dark:bg-zinc-950">
              <div className="text-emerald-600 dark:text-emerald-500">
                <TrendingUp className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold">250%</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-center">Average Traffic Increase</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-8 bg-white dark:bg-zinc-950">
              <div className="text-emerald-600 dark:text-emerald-500">
                <BarChart3 className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold">85%</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-center">Conversion Rate Improvement</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-8 bg-white dark:bg-zinc-950">
              <div className="text-emerald-600 dark:text-emerald-500">
                <LineChart className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-center">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our SEO Services</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Comprehensive solutions tailored to your business goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Keyword Research</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Discover high-value keywords that your target audience is searching for.
              </p>
              <Link
                href="/services/keyword-research"
                className="text-emerald-600 hover:underline dark:text-emerald-500"
              >
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">On-Page SEO</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Optimize your website's content and structure to rank higher in search results.
              </p>
              <Link href="/services/on-page-seo" className="text-emerald-600 hover:underline dark:text-emerald-500">
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Technical SEO</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Improve your website's technical aspects to enhance search engine crawling and indexing.
              </p>
              <Link href="/services/technical-seo" className="text-emerald-600 hover:underline dark:text-emerald-500">
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <LineChart className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Content Strategy</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Develop engaging, SEO-friendly content that attracts and converts your target audience.
              </p>
              <Link
                href="/services/content-strategy"
                className="text-emerald-600 hover:underline dark:text-emerald-500"
              >
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Link Building</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Earn high-quality backlinks to boost your website's authority and rankings.
              </p>
              <Link href="/services/link-building" className="text-emerald-600 hover:underline dark:text-emerald-500">
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-950">
                <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">SEO Analytics</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Track and analyze your SEO performance with comprehensive reporting.
              </p>
              <Link href="/services/seo-analytics" className="text-emerald-600 hover:underline dark:text-emerald-500">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" className="mt-8">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                See how we've helped businesses like yours achieve remarkable growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-zinc-950">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="E-commerce Case Study"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">E-commerce Revenue Growth</h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  How we helped an online retailer increase organic traffic by 200% and boost revenue by 150%.
                </p>
                <div className="mt-4 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium text-emerald-600 dark:text-emerald-500">Results:</span>
                  <span className="ml-2">200% Traffic Increase, 150% Revenue Growth</span>
                </div>
                <Link href="/case-studies/ecommerce">
                  <Button variant="link" className="mt-4 p-0 text-emerald-600 dark:text-emerald-500">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-zinc-950">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="SaaS Case Study"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">SaaS Lead Generation</h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  How we helped a SaaS company increase qualified leads by 300% through targeted SEO strategies.
                </p>
                <div className="mt-4 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium text-emerald-600 dark:text-emerald-500">Results:</span>
                  <span className="ml-2">300% Lead Increase, 75% Cost Reduction</span>
                </div>
                <Link href="/case-studies/saas">
                  <Button variant="link" className="mt-4 p-0 text-emerald-600 dark:text-emerald-500">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/case-studies">
              <Button variant="outline" className="mt-4">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Don't just take our word for it. Hear from businesses we've helped.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="space-y-2">
                <div className="flex space-x-1 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">
                  "Working with this SEO agency transformed our online presence. Our organic traffic has increased by
                  200% in just 6 months."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Client"
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="space-y-2">
                <div className="flex space-x-1 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">
                  "Their data-driven approach to SEO helped us identify opportunities we were missing. Our conversions
                  have increased by 150%."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Client"
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">CEO, GrowthStartup</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 bg-white dark:bg-zinc-950">
              <div className="space-y-2">
                <div className="flex space-x-1 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">
                  "The team's expertise in technical SEO resolved issues that were holding our site back for years. Our
                  rankings improved dramatically."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Client"
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Digital Manager, RetailBrand</p>
                </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Get a free SEO audit and discover how we can help you achieve your business goals.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </form>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                We'll get back to you within 24 hours. No spam, we promise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
