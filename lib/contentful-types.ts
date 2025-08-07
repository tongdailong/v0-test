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
  featuredServices: Service[]
  testimonials: Testimonial[]
}

export interface Service {
  name: string
  description: string
  icon: string
  features: string[]
  slug: string
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

export interface SiteSettings {
  companyName: string
  logo: {
    url: string
    title: string
  }
  contactEmail: string
  contactPhone: string
  address: string
  socialMedia: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  seoDefaults: {
    metaTitle: string
    metaDescription: string
    ogImage: {
      url: string
      title: string
    }
  }
}

// Contentful-specific types
export interface ContentfulRichTextNode {
  nodeType: string
  content?: ContentfulRichTextNode[]
  value?: string
  marks?: string[]
  data?: {
    uri?: string
  }
}

export interface ContentfulRichText {
  content?: ContentfulRichTextNode[]
}

export interface ContentfulAsset {
  fields: {
    file: {
      url: string
    }
    title?: string
  }
}

export interface ContentfulEntry {
  fields: {
    title?: string
    slug?: string
    excerpt?: string
    content?: ContentfulRichText
    publishedDate?: string
    author?: string
    category?: string
    featuredImage?: ContentfulAsset
    description?: string
    industry?: string
    results?: string[]
    heroHeadline?: string
    heroSubheadline?: string
    heroCtaText?: string
    heroImage?: ContentfulAsset
    trafficIncrease?: string
    conversionRate?: string
    successfulProjects?: string
    testimonials?: Testimonial[]
    featuredServices?: Service[]
    name?: string
    role?: string
    bio?: string
    image?: ContentfulAsset
    expertise?: string[]
  }
  sys: {
    id: string
    createdAt: string
  }
}

export interface ContentfulResponse {
  items: ContentfulEntry[]
  total: number
  skip: number
  limit: number
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
