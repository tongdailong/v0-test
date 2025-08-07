import { getBlogPost, getBlogPosts } from "@/lib/contentful"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <article className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="text-xl text-zinc-500 dark:text-zinc-400">{post.excerpt}</p>
            </div>

            {post.featuredImage?.url && post.featuredImage.url !== "/placeholder.svg?height=400&width=600" && (
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={post.featuredImage.url}
                  width={800}
                  height={450}
                  alt={post.featuredImage.title || post.title}
                  className="object-cover"
                />
              </div>
            )}

            {/* Blog content with proper styling */}
            <div className="blog-content prose prose-lg prose-zinc dark:prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.content || "<p>No content available.</p>" 
                }} 
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
