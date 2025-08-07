import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Globe, LineChart, Search, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our SEO Services</h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Comprehensive solutions tailored to your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Service 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Keyword Research"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <Search className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">Keyword Research</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our comprehensive keyword research identifies the most valuable search terms for your business. We
                  analyze search volume, competition, and user intent to target keywords that will drive qualified
                  traffic to your website.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Competitor keyword analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Long-tail keyword opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Search intent optimization</span>
                  </li>
                </ul>
                <Link href="/services/keyword-research">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="On-Page SEO"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <Globe className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">On-Page SEO</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our on-page SEO service optimizes every element of your website to improve search engine rankings. We
                  enhance your content, meta tags, headings, and internal linking structure to maximize relevance and
                  authority.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Content optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Meta tag enhancement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Internal linking strategy</span>
                  </li>
                </ul>
                <Link href="/services/on-page-seo">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Technical SEO"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">Technical SEO</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our technical SEO service addresses the behind-the-scenes elements that impact your website&apos;s
                  performance. We optimize site speed, mobile-friendliness, indexability, and other technical factors
                  that affect rankings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Site speed optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Mobile-friendly improvements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Schema markup implementation</span>
                  </li>
                </ul>
                <Link href="/services/technical-seo">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Content Strategy"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <LineChart className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">Content Strategy</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our content strategy service develops a comprehensive plan for creating and optimizing content that
                  attracts, engages, and converts your target audience. We identify content gaps and opportunities to
                  establish your authority.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Content gap analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">SEO-optimized content creation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Content performance tracking</span>
                  </li>
                </ul>
                <Link href="/services/content-strategy">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Link Building"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">Link Building</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our link building service focuses on earning high-quality backlinks from authoritative websites in
                  your industry. We use ethical, white-hat techniques to build your site&apos;s authority and improve
                  rankings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Competitor backlink analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Content-driven link acquisition</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Digital PR and outreach</span>
                  </li>
                </ul>
                <Link href="/services/link-building">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="SEO Analytics"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                  <BarChart3 className="h-4 w-4 text-emerald-600 dark:text-emerald-500 inline mr-1" />
                  Core Service
                </div>
                <h2 className="text-3xl font-bold">SEO Analytics</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our SEO analytics service provides comprehensive tracking and reporting of your SEO performance. We
                  monitor rankings, traffic, conversions, and other key metrics to measure ROI and refine strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Custom dashboard setup</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Regular performance reporting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                    <span className="text-zinc-500 dark:text-zinc-400">Data-driven strategy adjustments</span>
                  </li>
                </ul>
                <Link href="/services/seo-analytics">
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Boost Your Online Visibility?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Get a free SEO audit and discover how we can help you achieve your business goals.
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
