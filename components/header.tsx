"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
          <span className="font-bold text-xl">SEO Agency</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            Services
          </Link>
          <Link href="/case-studies" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            Case Studies
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Free Audit</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-4 py-4 px-4">
            <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-sm font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium" onClick={toggleMenu}>
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Free Audit</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
