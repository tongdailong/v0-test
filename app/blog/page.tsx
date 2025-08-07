import { getBlogPosts, testContentfulConnection } from "@/lib/contentful"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default async function BlogPage() {
  // Test Contentful connection
  await testContentfulConnection()

  const blogPosts = await getBlogPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">SEO Insights & Resources</h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Stay up-to-date with the latest SEO trends, strategies, and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src={blogPosts[0].featuredImage.url || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={blogPosts[0].featuredImage.title}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-950">
                    Featured Post
                  </div>
                  <h2 className="text-3xl font-bold">{blogPosts[0].title}</h2>
                  <p className="text-zinc-500 dark:text-zinc-400">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{new Date(blogPosts[0].publishedDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Latest Articles</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Explore our collection of SEO insights, tips, and strategies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.slug}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-zinc-950"
              >
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.featuredImage.url || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={post.featuredImage.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-zinc-500 dark:text-zinc-400">{post.excerpt}</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Get the latest SEO insights and tips delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
              </form>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
