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
