"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"
import { Icons } from "@/components/icons"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { MapPin, Car, Globe, Users, Trophy, Calendar, Check, Route, Flag, Settings, ArrowRight, Target } from "lucide-react"

interface Track {
  title: string;
  location: string;
  length: string;
  features: string[];
  image: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  
  const newsItems = [
    {
      title: "ATXR Racing Secures Major Sponsor for 2025 Season",
      date: "April 15, 2025",
      image: "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg",
      category: "Team News"
    },
    {
      title: "Team ATXR Takes Podium at International Championship",
      date: "March 28, 2025",
      image: "https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg",
      category: "Race Results"
    },
    {
      title: "ATXR Esports Division Announces New Driver Lineup",
      date: "March 10, 2025",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      category: "Esports"
    }
  ]

  // Australian Tracks
  const australianTracks: Track[] = [
    {
      title: "Sydney Motorsport Park",
      location: "Eastern Creek, NSW",
      length: "3.93km",
      features: [
        "FIA Grade 2 facility",
        "Night racing with LED lighting",
        "Multiple circuit layouts",
        "Professional pit facilities"
      ],
      image: "https://rgpoutowdawylaxqncyi.supabase.co/storage/v1/object/public/otherlogos//pf-e9febaff--ARDCnewsletterheader.webp"
    },
    {
      title: "Mount Panorama Circuit",
      location: "Bathurst, NSW",
      length: "6.213km",
      features: [
        "Iconic mountain course",
        "23 challenging corners",
        "174m elevation change",
        "Home of the Bathurst 1000"
      ],
      image: "https://rgpoutowdawylaxqncyi.supabase.co/storage/v1/object/public/otherlogos//DSC01209.webp"
    },
    {
      title: "Winton Raceway",
      location: "Benalla, Victoria",
      length: "3.0km",
      features: [
        "Technical layout",
        "Elevation changes",
        "Challenging corners",
        "Perfect for beginners"
      ],
      image: "https://rgpoutowdawylaxqncyi.supabase.co/storage/v1/object/public/otherlogos//WMR_aerial06.jfif"
    },
    {
      title: "Sandown Raceway", 
      location: "Melbourne, Victoria",
      length: "3.1km",
      features: [
        "Historic circuit",
        "Fast flowing corners",
        "Great for beginners",
        "Long straights"
      ],
      image: "https://rgpoutowdawylaxqncyi.supabase.co/storage/v1/object/public/otherlogos//Race-19-EV09-24-MH3_5754.jpg"
    },
    {
      title: "Calder Park Raceway",
      location: "Melbourne, Victoria", 
      length: "2.3km",
      features: [
        "Thunderdome oval",
        "Road course",
        "Multiple configurations",
        "Technical sections"
      ],
      image: "https://rgpoutowdawylaxqncyi.supabase.co/storage/v1/object/public/otherlogos//600e781aef90c.jpg"
    }
  ]

  // Global testing experiences
  const globalExperiences = [
    {
      title: "Radical Track Testing",
      location: "Worldwide Circuits",
      description: "Experience the raw power of Radical sports cars on professional circuits",
      features: ["Radical SR3/SR8", "Professional instruction", "Data analysis"],
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
    },
    {
      title: "F1 Testing Experience",
      location: "International F1 Circuits",
      description: "Get behind the wheel of Formula 1 machinery with our partner teams",
      features: ["F1 simulator", "Track familiarization", "Pro coaching"],
      image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg"
    },
    {
      title: "Supercar Testing",
      location: "Global Partner Tracks",
      description: "Test high-performance supercars on world-renowned racing circuits",
      features: ["Multiple car options", "Professional setup", "International venues"],
      image: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
    }
  ]

  // Esports team drivers
  const esportsDrivers = [
    {
      name: "Alex Chen",
      role: "Lead Driver",
      speciality: "Formula 1 Sim",
      achievements: ["iRacing World Championship", "F1 Esports Pro Series"],
      currentRace: "F1 Esports Championship 2025",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      name: "Sarah Martinez",
      role: "GT Specialist", 
      speciality: "GT3/GTE Racing",
      achievements: ["IMSA Esports Champion", "Le Mans Virtual Winner"],
      currentRace: "IMSA Michelin Pilot Challenge Esports",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
      name: "James Thompson",
      role: "Endurance Expert",
      speciality: "Endurance Racing",
      achievements: ["24h Nürburgring Esports", "Sebring 12h Virtual Winner"],
      currentRace: "Le Mans Virtual Series 2025",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg"
    }
  ]
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Interactive Results Section (Tabs) */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Experience the Thrill</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From BMW E90 track experiences in Victoria to global F1 testing, ATXR Racing offers unparalleled motorsport adventures worldwide.
            </p>
          </motion.div>
          
          <Tabs defaultValue="trackdays" className="w-full">
            <TabsList className="grid w-full grid-cols-3 gap-4 h-auto mb-12 bg-transparent">
              <TabsTrigger 
                value="trackdays" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Icons.bmw width={32} height={32} className="mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Track Days</h3>
                  <p className="text-sm opacity-80">Experience & Rental Program</p>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="race" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Race Program</h3>
                  <p className="text-sm opacity-80">Your path to professional racing</p>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="training" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Training & Coaching</h3>
                  <p className="text-sm opacity-80">Professional development</p>
                </div>
              </TabsTrigger>
            </TabsList>
            
            {/* Track Day Experiences */}
            <TabsContent value="trackdays" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icons.bmw width={48} height={48} className="mr-2" />
                  <div>
                    <h3 className="text-2xl font-bold">BMW E90 Track Experience & Rental Program</h3>
                    <p className="text-muted-foreground">Your gateway to motorsport with our high-performance road registered BMW E90</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Track Day Experience</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Perfect for motorsport beginners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Professional instruction included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>All safety equipment provided</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Video recording and analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Sprint/Time Attack Rental</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Full team support available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Professional videography</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Data analysis and coaching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Technical support team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {australianTracks.map((track: Track, index: number) => (
                  <motion.div
                    key={track.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TrackCard
                      title={track.title}
                      location={track.location}
                      length={track.length}
                      features={track.features}
                      image={track.image}
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Experience Australia&apos;s finest racing circuits with our BMW E90 program - the perfect way to enter motorsport 
                  without the hassle of owning and maintaining a track car. From beginner track days to competitive Sprint events, 
                  we provide everything you need to start your racing journey.
                </p>
                <Button size="lg" asChild>
                  <Link href="/experiences">Book Your Track Experience</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Race Program Content */}
            <TabsContent value="race" className="space-y-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8"
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Your Journey to Professional Racing</h3>
                        <p className="text-muted-foreground">
                          From F4 to GT3, discover your path in professional motorsport with ATXR Racing&apos;s comprehensive race program.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Flag className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Global Racing Opportunities</h4>
                            <p className="text-sm text-muted-foreground">F4, F3, GT3, and Endurance racing pathways available</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Trophy className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">ATXR Academy Journey</h4>
                            <p className="text-sm text-muted-foreground">Structured progression from testing to professional racing</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Settings className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Professional Support</h4>
                            <p className="text-sm text-muted-foreground">Full team backing, data analysis, and career guidance</p>
                          </div>
                        </div>
                      </div>

                      <Button asChild size="lg" className="w-full md:w-auto">
                        <Link href="/race">
                          Explore Race Program
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src="https://images.pexels.com/photos/12118842/pexels-photo-12118842.jpeg"
                        alt="ATXR Racing Program"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="grid grid-cols-2 gap-2">
                          <Badge variant="secondary" className="bg-black/70 text-white">
                            F4 to GT3 Pathways
                          </Badge>
                          <Badge variant="secondary" className="bg-black/70 text-white">
                            Professional Racing
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Training Content */}
            <TabsContent value="training" className="space-y-8">
              {/* ... existing training content ... */}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

// Track Card Component
function TrackCard({ title, location, length, features, image }: Track) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{length}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/experiences/book">Book Experience</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface GlobalExperienceCardProps {
  title: string
  location: string
  description: string
  features: string[]
  image: string
}

function GlobalExperienceCard({ title, location, description, features, image }: GlobalExperienceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Icons.check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/contact">Contact for Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface EsportsDriverCardProps {
  name: string
  role: string
  speciality: string
  achievements: string[]
  currentRace: string
  image: string
}

function EsportsDriverCard({ name, role, speciality, achievements, currentRace, image }: EsportsDriverCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role} • {speciality}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h5 className="font-semibold text-sm mb-2">Recent Achievements:</h5>
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Trophy className="h-3 w-3 text-primary" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
          <div>
            <h5 className="font-semibold text-sm mb-1">Currently Racing:</h5>
            <Badge variant="outline" className="text-xs">
              {currentRace}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  image: string
}

function FeatureCard({ title, description, icon, href, image }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface RaceCardProps {
  title: string
  date: string
  location: string
  image: string
}

function RaceCard({ title, date, location, image }: RaceCardProps) {
  return (
    <div className="racing-card group">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="flex items-center text-white/80 mb-2 text-sm">
          <Icons.calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex items-center text-white/80 text-sm">
          <Icons.mapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  )
}