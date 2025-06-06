"use client"

import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import clsx from 'clsx'
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Experiences" },
    { href: "/about", label: "About Us" },
    { href: "/esports", label: "Esports" },
    { href: "/partners", label: "Partners" },
    { href: "/races", label: "Races" },
    { href: "/videos", label: "Videos" },
    { href: "/news", label: "News" },
    { href: "/jobs", label: "Jobs" },
    { href: "/trackdays", label: "Trackdays" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 bg-transparent py-2",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : ""
    )}>
      <div className="container flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Icons.logo 
              src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/webimages//atxrlog%20white%20(1).png"
              alt="ATXR Racing Logo"
              className="h-28 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={cn(
                "uppercase font-bold tracking-wider text-white nav-link px-0 py-0 text-sm xl:text-base transition-colors duration-300",
                pathname === item.href ? "text-accent" : "hover:text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[350px] bg-background/95 backdrop-blur-md border-l border-accent/20"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-accent/20">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <Icons.logo 
                      src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/webimages//atxrlog%20white%20(1).png"
                      alt="ATXR Racing Logo"
                      className="h-16 w-auto"
                    />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all duration-300",
                            pathname === item.href 
                              ? "text-accent bg-accent/10 border-l-4 border-accent" 
                              : "text-white hover:text-accent hover:bg-white/5 hover:translate-x-1"
                          )}
                        >
                          <span className="uppercase">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="border-t border-accent/20 pt-6 space-y-4">
                  <Link href="/experiences/book" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-black font-bold">
                      Book Experience
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-black">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Racing-inspired decoration */}
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-50" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"