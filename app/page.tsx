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
import { MapPin, Car, Globe, Users, Trophy, Calendar } from "lucide-react"

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

  // Australian Victoria Tracks
  const victorianTracks = [
    {
      name: "Winton Raceway",
      location: "Benalla, Victoria",
      length: "3.0km",
      features: ["Technical layout", "Elevation changes", "Challenging corners"],
      image: "https://images.pexels.com/photos/12118842/pexels-photo-12118842.jpeg"
    },
    {
      name: "Sandown Raceway", 
      location: "Melbourne, Victoria",
      length: "3.1km",
      features: ["Historic circuit", "Fast flowing corners", "Great for beginners"],
      image: "https://images.pexels.com/photos/3621557/pexels-photo-3621557.jpeg"
    },
    {
      name: "Calder Park Raceway",
      location: "Melbourne, Victoria", 
      length: "2.3km",
      features: ["Thunderdome oval", "Road course", "Multiple configurations"],
      image: "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg"
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
          
          <Tabs defaultValue="victoria" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="victoria">Victoria Tracks</TabsTrigger>
              <TabsTrigger value="global">Global Testing</TabsTrigger>
              <TabsTrigger value="esports">Esports Team</TabsTrigger>
              <TabsTrigger value="races">Upcoming Races</TabsTrigger>
            </TabsList>
            
            {/* Victoria Track Experiences */}
            <TabsContent value="victoria" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icons.bmw width={48} height={48} className="mr-2" />
                  <div>
                    <h3 className="text-2xl font-bold">BMW E90 Modified Track Experience</h3>
                    <p className="text-muted-foreground">Road registered automatic transmission for comfortable yet thrilling track driving</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Badge variant="secondary" className="justify-center py-2">
                    <Icons.bmw width={20} height={20} className="mr-2" />
                    Auto Transmission
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    <Users className="w-4 h-4 mr-2" />
                    Beginner Friendly
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Road Registered
                  </Badge>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {victorianTracks.map((track, index) => (
                  <motion.div
                    key={track.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TrackCard
                      title={track.name}
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
                  Experience our modified BMW E90 on Victoria&apos;s premier racing circuits. Perfect for drivers seeking thrills while maintaining comfort and safety.
                </p>
                <Button size="lg" asChild>
                  <Link href="/experiences">Book Your Victoria Track Day</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Global Testing Experiences */}
            <TabsContent value="global" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">Global Track Testing & Experiences</h3>
                    <p className="text-muted-foreground">Partner with international teams for exclusive testing opportunities worldwide</p>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-4">
                    <Globe className="w-4 h-4 mr-2" />
                    Contact us to schedule your global testing experience
                  </Badge>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {globalExperiences.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlobalExperienceCard
                      title={experience.title}
                      location={experience.location}
                      description={experience.description}
                      features={experience.features}
                      image={experience.image}
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-accent/10 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-4">Ready for Global Testing?</h4>
                <p className="text-muted-foreground mb-6">
                  Connect with our partner teams around the globe for exclusive access to world-class racing experiences.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us for Global Testing</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Enhanced Esports Section */}
            <TabsContent value="esports" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">ATXR Racing Esports Team</h3>
                    <p className="text-muted-foreground">Professional sim racing drivers competing in global championships</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {esportsDrivers.map((driver, index) => (
                  <motion.div
                    key={driver.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <EsportsDriverCard
                      name={driver.name}
                      role={driver.role}
                      speciality={driver.speciality}
                      achievements={driver.achievements}
                      currentRace={driver.currentRace}
                      image={driver.image}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="bg-accent/10 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-4 text-center">Currently Competing In</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h5 className="font-semibold">F1 Esports Championship 2025</h5>
                    <p className="text-sm text-muted-foreground">Season ongoing</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h5 className="font-semibold">IMSA Michelin Pilot Challenge</h5>
                    <p className="text-sm text-muted-foreground">Round 3 upcoming</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h5 className="font-semibold">Le Mans Virtual Series 2025</h5>
                    <p className="text-sm text-muted-foreground">Championship leader</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button asChild>
                    <Link href="/esports">Join Our Esports Team</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Upcoming Races */}
            <TabsContent value="races" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <RaceCard
                  title="Circuit of the Americas"
                  date="May 15-17, 2025"
                  location="Austin, TX"
                  image="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
                />
                <RaceCard
                  title="Monaco Grand Prix"
                  date="June 5-7, 2025"
                  location="Monte Carlo, Monaco"
                  image="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg"
                />
                <RaceCard
                  title="Nürburgring 24 Hours"
                  date="June 20-21, 2025"
                  location="Nürburg, Germany"
                  image="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
                />
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link href="/races">Full Race Calendar</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface TrackCardProps {
  title: string
  location: string
  length: string
  features: string[]
  image: string
}

function TrackCard({ title, location, length, features, image }: TrackCardProps) {
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
              <Icons.check className="h-4 w-4 text-primary" />
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