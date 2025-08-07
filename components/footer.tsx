import Link from "next/link"
import { Search, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              <span className="font-bold text-xl">SEO Agency</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Helping businesses grow through data-driven SEO strategies that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/keyword-research"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Keyword Research
                </Link>
              </li>
              <li>
                <Link
                  href="/services/on-page-seo"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  On-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-seo"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-strategy"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/link-building"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Link Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-analytics"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  SEO Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                <span className="text-sm text-zinc-500 dark:text-zinc-400">123 SEO Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                <span className="text-sm text-zinc-500 dark:text-zinc-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                <span className="text-sm text-zinc-500 dark:text-zinc-400">info@seoagency.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} SEO Agency. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-xs text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
