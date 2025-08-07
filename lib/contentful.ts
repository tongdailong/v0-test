import { createClient } from "contentful"

// Create client with your credentials
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "hxyvik1wibmi",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "mZOkVpp_hLcfP8082bCGh7yxAA_iCQixK79aHFW6iaI",
})

// Helper function to convert Contentful rich text to HTML
function convertRichTextToHtml(content: any): string {
  if (typeof content === 'string') {
    return content
  }
  
  if (typeof content === 'object' && content !== null) {
    // If it's a Contentful rich text object
    if (content.content && Array.isArray(content.content)) {
      return content.content.map((node: any) => {
        if (node.nodeType === 'paragraph') {
          return `<p>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</p>`
        }
        if (node.nodeType === 'heading-1') {
          return `<h1>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h1>`
        }
        if (node.nodeType === 'heading-2') {
          return `<h2>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h2>`
        }
        if (node.nodeType === 'heading-3') {
          return `<h3>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h3>`
        }
        if (node.nodeType === 'heading-4') {
          return `<h4>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h4>`
        }
        if (node.nodeType === 'heading-5') {
          return `<h5>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h5>`
        }
        if (node.nodeType === 'heading-6') {
          return `<h6>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</h6>`
        }
        if (node.nodeType === 'unordered-list') {
          return `<ul>${node.content?.map((listItem: any) => 
            `<li>${listItem.content?.map((textNode: any) => textNode.value || '').join('') || ''}</li>`
          ).join('') || ''}</ul>`
        }
        if (node.nodeType === 'ordered-list') {
          return `<ol>${node.content?.map((listItem: any) => 
            `<li>${listItem.content?.map((textNode: any) => textNode.value || '').join('') || ''}</li>`
          ).join('') || ''}</ol>`
        }
        if (node.nodeType === 'list-item') {
          return `<li>${node.content?.map((textNode: any) => textNode.value || '').join('') || ''}</li>`
        }
        if (node.nodeType === 'hyperlink') {
          const url = node.data?.uri || '#'
          const text = node.content?.map((textNode: any) => textNode.value || '').join('') || ''
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
        }
        if (node.nodeType === 'text') {
          let text = node.value || ''
          if (node.marks?.includes('bold')) {
            text = `<strong>${text}</strong>`
          }
          if (node.marks?.includes('italic')) {
            text = `<em>${text}</em>`
          }
          if (node.marks?.includes('underline')) {
            text = `<u>${text}</u>`
          }
          return text
        }
        return ''
      }).join('')
    }
    
    // If it's a simple object with content property
    if (content.content) {
      return convertRichTextToHtml(content.content)
    }
    
    // If it's an array
    if (Array.isArray(content)) {
      return content.map(item => convertRichTextToHtml(item)).join('')
    }
  }
  
  return String(content || '')
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  publishedDate: string
  author: string
  category: string
  featuredImage: {
    url: string
    title: string
  }
}

export interface CaseStudy {
  title: string
  slug: string
  description: string
  industry: string
  results: string[]
  featuredImage: {
    url: string
    title: string
  }
  content: string
}

export interface HomePage {
  heroHeadline: string
  heroSubheadline: string
  heroCtaText: string
  heroImage: {
    url: string
    title: string
  }
  statsSection: {
    trafficIncrease: string
    conversionRate: string
    successfulProjects: string
  }
  testimonials: Testimonial[]
}

export interface Testimonial {
  quote: string
  clientName: string
  clientCompany: string
  clientPhoto: {
    url: string
    title: string
  }
  rating: number
}

export interface Service {
  name: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: {
    url: string
    title: string
  }
  expertise: string[]
}

// Mock data fallbacks
const mockHomePage: HomePage = {
  heroHeadline: "Boost Your Online Visibility with Data-Driven SEO",
  heroSubheadline:
    "We help businesses grow through strategic search engine optimization that delivers measurable results.",
  heroCtaText: "Get Free SEO Audit",
  heroImage: {
    url: "/placeholder.svg?height=550&width=550",
    title: "SEO Growth Chart",
  },
  statsSection: {
    trafficIncrease: "250%",
    conversionRate: "85%",
    successfulProjects: "500+",
  },
  testimonials: [
    {
      quote:
        "Working with this SEO agency transformed our online presence. Our organic traffic has increased by 200% in just 6 months.",
      clientName: "Sarah Johnson",
      clientCompany: "Marketing Director, TechCorp",
      clientPhoto: {
        url: "/placeholder.svg?height=40&width=40",
        title: "Client",
      },
      rating: 5,
    },
    {
      quote:
        "Their data-driven approach to SEO helped us identify opportunities we were missing. Our conversions have increased by 150%.",
      clientName: "Michael Chen",
      clientCompany: "CEO, GrowthStartup",
      clientPhoto: {
        url: "/placeholder.svg?height=40&width=40",
        title: "Client",
      },
      rating: 5,
    },
    {
      quote:
        "The team's expertise in technical SEO resolved issues that were holding our site back for years. Our rankings improved dramatically.",
      clientName: "Emily Rodriguez",
      clientCompany: "Digital Manager, RetailBrand",
      clientPhoto: {
        url: "/placeholder.svg?height=40&width=40",
        title: "Client",
      },
      rating: 5,
    },
  ],
}

const mockBlogPosts: BlogPost[] = [
  {
    title: "10 SEO Strategies That Actually Work in 2024",
    slug: "seo-strategies-2024",
    excerpt: "Discover the most effective SEO strategies that are driving real results for businesses this year.",
    content:
      "<p>Search engine optimization continues to evolve, and staying ahead of the curve is crucial for business success. Here are the top 10 SEO strategies that are delivering real results in 2024.</p><h2>1. Focus on User Experience (UX)</h2><p>Google's algorithm increasingly prioritizes websites that provide excellent user experiences. This includes fast loading times, mobile responsiveness, and intuitive navigation.</p>",
    publishedDate: "2024-01-15",
    author: "John Smith",
    category: "SEO Strategy",
    featuredImage: {
      url: "/placeholder.svg?height=400&width=600&text=SEO+Strategies+2024",
      title: "SEO Strategies 2024",
    },
  },
  {
    title: "How to Conduct a Comprehensive SEO Audit",
    slug: "seo-audit-guide",
    excerpt: "Learn the step-by-step process for conducting a thorough SEO audit that uncovers hidden opportunities.",
    content:
      "<p>An SEO audit is essential for understanding your website's current performance and identifying areas for improvement. Follow this comprehensive guide to conduct your own audit.</p><h2>Technical SEO Audit</h2><p>Start by examining your website's technical foundation, including site speed, mobile-friendliness, and crawlability.</p>",
    publishedDate: "2024-01-10",
    author: "Sarah Johnson",
    category: "Technical SEO",
    featuredImage: {
      url: "/placeholder.svg?height=400&width=600&text=SEO+Audit+Guide",
      title: "SEO Audit Guide",
    },
  },
  {
    title: "The Impact of AI on Search Engine Optimization",
    slug: "ai-impact-seo",
    excerpt: "Explore how artificial intelligence is changing the SEO landscape and how to adapt your strategy.",
    content:
      "<p>Artificial intelligence is revolutionizing search engine optimization. From Google's RankBrain to ChatGPT's impact on content creation, AI is reshaping how we approach SEO.</p><h2>AI-Powered Content Creation</h2><p>Learn how to leverage AI tools while maintaining content quality and authenticity.</p>",
    publishedDate: "2024-01-05",
    author: "Michael Chen",
    category: "SEO Trends",
    featuredImage: {
      url: "/placeholder.svg?height=400&width=600&text=AI+and+SEO",
      title: "AI and SEO",
    },
  },
]

// Test connection to Contentful
export async function testContentfulConnection(): Promise<boolean> {
  try {
    await client.getSpace()
    console.log("✅ Contentful connection successful")
    return true
  } catch (error) {
    console.warn("❌ Contentful connection failed:", error)
    return false
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
    })

    if (entries.items.length === 0) {
      console.log("No blog posts found in Contentful, using mock data")
      return mockBlogPosts
    }

    return entries.items.map((item: any) => ({
      title: item.fields.title || "Untitled",
      slug: item.fields.slug || "untitled",
      excerpt: item.fields.excerpt || "",
      content: convertRichTextToHtml(item.fields.content) || "",
      publishedDate: item.fields.publishedDate || new Date().toISOString(),
      author: item.fields.author || "Anonymous",
      category: item.fields.category || "General",
      featuredImage: {
        url: item.fields.featuredImage
          ? (item.fields.featuredImage.fields.file.url.startsWith('//') 
              ? `https:${item.fields.featuredImage.fields.file.url}`
              : item.fields.featuredImage.fields.file.url.startsWith('http')
                ? item.fields.featuredImage.fields.file.url
                : `https:${item.fields.featuredImage.fields.file.url}`)
          : "/placeholder.svg?height=400&width=600",
        title: item.fields.featuredImage?.fields.title || "Blog post image",
      },
    }))
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error)
    return mockBlogPosts
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    })

    if (entries.items.length === 0) {
      // Fallback to mock data
      const mockPost = mockBlogPosts.find((post) => post.slug === slug)
      return mockPost || null
    }

    const item = entries.items[0] as any
    return {
      title: item.fields.title || "Untitled",
      slug: item.fields.slug || "untitled",
      excerpt: item.fields.excerpt || "",
      content: convertRichTextToHtml(item.fields.content) || "",
      publishedDate: item.fields.publishedDate || new Date().toISOString(),
      author: item.fields.author || "Anonymous",
      category: item.fields.category || "General",
      featuredImage: {
        url: item.fields.featuredImage
          ? (item.fields.featuredImage.fields.file.url.startsWith('//') 
              ? `https:${item.fields.featuredImage.fields.file.url}`
              : item.fields.featuredImage.fields.file.url.startsWith('http')
                ? item.fields.featuredImage.fields.file.url
                : `https:${item.fields.featuredImage.fields.file.url}`)
          : "/placeholder.svg?height=400&width=600",
        title: item.fields.featuredImage?.fields.title || "Blog post image",
      },
    }
  } catch (error) {
    console.error("Error fetching blog post from Contentful:", error)
    const mockPost = mockBlogPosts.find((post) => post.slug === slug)
    return mockPost || null
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const entries = await client.getEntries({
      content_type: "caseStudy",
      order: ["-sys.createdAt"],
    })

    if (entries.items.length === 0) {
      // Return mock case studies
      return [
        {
          title: "E-commerce Revenue Growth",
          slug: "ecommerce-growth",
          description: "How we helped an online retailer increase organic traffic by 200% and boost revenue by 150%.",
          industry: "E-commerce",
          results: ["200% Traffic Increase", "150% Revenue Growth", "75% Bounce Rate Reduction"],
          featuredImage: {
            url: "/placeholder.svg?height=400&width=600&text=E-commerce+Case+Study",
            title: "E-commerce Case Study",
          },
          content:
            "<p>This case study demonstrates how strategic SEO implementation can drive significant business growth...</p>",
        },
        {
          title: "SaaS Lead Generation Success",
          slug: "saas-lead-generation",
          description: "How we helped a SaaS company increase qualified leads by 300% through targeted SEO strategies.",
          industry: "Software",
          results: ["300% Lead Increase", "75% Cost Reduction", "45% Conversion Rate Improvement"],
          featuredImage: {
            url: "/placeholder.svg?height=400&width=600&text=SaaS+Case+Study",
            title: "SaaS Case Study",
          },
          content: "<p>Learn how we transformed a SaaS company's lead generation through strategic SEO...</p>",
        },
      ]
    }

    return entries.items.map((item: any) => ({
      title: item.fields.title || "Untitled Case Study",
      slug: item.fields.slug || "untitled",
      description: item.fields.description || "",
      industry: item.fields.industry || "General",
      results: item.fields.results || [],
      featuredImage: {
        url: item.fields.featuredImage
          ? `https:${item.fields.featuredImage.fields.file.url}`
          : "/placeholder.svg?height=400&width=600",
        title: item.fields.featuredImage?.fields.title || "Case study image",
      },
      content: item.fields.content || "",
    }))
  } catch (error) {
    console.error("Error fetching case studies from Contentful:", error)
    return []
  }
}

export async function getHomePage(): Promise<HomePage> {
  try {
    const entries = await client.getEntries({
      content_type: "homePage",
      limit: 1,
    })

    if (entries.items.length === 0) {
      console.log("No homepage content found in Contentful, using mock data")
      return mockHomePage
    }

    const item = entries.items[0] as any
    return {
      heroHeadline: item.fields.heroHeadline || mockHomePage.heroHeadline,
      heroSubheadline: item.fields.heroSubheadline || mockHomePage.heroSubheadline,
      heroCtaText: item.fields.heroCtaText || mockHomePage.heroCtaText,
      heroImage: {
        url: item.fields.heroImage ? `https:${item.fields.heroImage.fields.file.url}` : mockHomePage.heroImage.url,
        title: item.fields.heroImage?.fields.title || mockHomePage.heroImage.title,
      },
      statsSection: {
        trafficIncrease: item.fields.trafficIncrease || mockHomePage.statsSection.trafficIncrease,
        conversionRate: item.fields.conversionRate || mockHomePage.statsSection.conversionRate,
        successfulProjects: item.fields.successfulProjects || mockHomePage.statsSection.successfulProjects,
      },
      testimonials: item.fields.testimonials || mockHomePage.testimonials,
    }
  } catch (error) {
    console.error("Error fetching homepage from Contentful:", error)
    return mockHomePage
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const entries = await client.getEntries({
      content_type: "teamMember",
      order: ["fields.order"],
    })

    if (entries.items.length === 0) {
      // Return mock team members
      return [
        {
          name: "John Smith",
          role: "Founder & CEO",
          bio: "John has over 10 years of experience in digital marketing and SEO strategy.",
          image: {
            url: "/placeholder.svg?height=200&width=200&text=John+Smith",
            title: "John Smith",
          },
          expertise: ["SEO Strategy", "Digital Marketing", "Business Development"],
        },
        {
          name: "Sarah Johnson",
          role: "SEO Director",
          bio: "Sarah leads our SEO team with expertise in technical SEO and content strategy.",
          image: {
            url: "/placeholder.svg?height=200&width=200&text=Sarah+Johnson",
            title: "Sarah Johnson",
          },
          expertise: ["Technical SEO", "Content Strategy", "Team Leadership"],
        },
      ]
    }

    return entries.items.map((item: any) => ({
      name: item.fields.name || "Team Member",
      role: item.fields.role || "Team Member",
      bio: item.fields.bio || "",
      image: {
        url: item.fields.image ? `https:${item.fields.image.fields.file.url}` : "/placeholder.svg?height=200&width=200",
        title: item.fields.image?.fields.title || item.fields.name || "Team Member",
      },
      expertise: item.fields.expertise || [],
    }))
  } catch (error) {
    console.error("Error fetching team members from Contentful:", error)
    return []
  }
}
