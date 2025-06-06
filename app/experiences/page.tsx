"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Icons } from "@/components/icons"
import { 
  ChevronRight, Clock, MapPin, Calendar, Users, Car, Globe, Trophy, 
  Star, CheckCircle, ArrowRight, Play, Zap, Target, Award, Settings,
  Timer, Flag, Shield, Camera, BookOpen, HeadphonesIcon
} from "lucide-react"

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("victoria")
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  
  // BMW E90 Victoria Track Experiences
  const victoriaExperiences = [
    {
      id: "winton-bmw",
      title: "Winton Raceway BMW E90 Experience",
      shortDesc: "Technical driving mastery on Victoria's premier circuit",
      description: "Master the art of racing on one of Australia's most technical circuits. Our modified BMW E90 with automatic transmission provides the perfect platform for learning advanced driving techniques while maintaining comfort and safety.",
      price: "$899",
      originalPrice: "$1,199",
      duration: "Full Day (8 hours)",
      location: "Winton Raceway, Benalla, Victoria",
      trackLength: "3.0km",
      difficulty: "Intermediate",
      maxSpeed: "180km/h",
      featured: true,
      includes: [
        "BMW E90 Modified (Auto Transmission)",
        "Professional CAMS-licensed instructor",
        "30+ track laps in BMW E90",
        "Track walk and theory session",
        "In-car video recording",
        "Data analysis and feedback",
        "Racing helmet and suit provided",
        "Track day certificate",
        "Complimentary lunch and refreshments"
      ],
      highlights: [
        "Road registered BMW E90 for comfort",
        "Beginner-friendly automatic transmission",
        "Technical 12-corner layout",
        "Elevation changes for skill development",
        "Professional racing instruction"
      ],
      image: "https://images.pexels.com/photos/12118842/pexels-photo-12118842.jpeg",
      trackFeatures: ["12 challenging corners", "100m elevation change", "2.8km main straight"]
    },
    {
      id: "sandown-bmw",
      title: "Sandown Raceway BMW E90 Experience", 
      shortDesc: "Historic circuit thrills with modern comfort",
      description: "Experience the legendary Sandown Raceway in our comfortable BMW E90. This historic circuit offers the perfect blend of high-speed sections and technical corners, ideal for drivers of all skill levels.",
      price: "$799",
      originalPrice: "$999",
      duration: "Full Day (7 hours)",
      location: "Sandown Raceway, Melbourne, Victoria",
      trackLength: "3.1km",
      difficulty: "Beginner-Friendly",
      maxSpeed: "200km/h",
      featured: false,
      includes: [
        "BMW E90 Modified (Auto Transmission)",
        "CAMS-certified driving instructor",
        "25+ laps on historic Sandown circuit",
        "Circuit history and technique briefing",
        "Professional in-car footage",
        "Performance data analysis",
        "Safety equipment provided",
        "Achievement certificate",
        "Gourmet lunch included"
      ],
      highlights: [
        "Historic racing circuit since 1962",
        "Fast flowing corners perfect for learning",
        "Long Dandenong Road straight",
        "Excellent for first-time track drivers",
        "BMW E90 automatic for easy handling"
      ],
      image: "https://images.pexels.com/photos/3621557/pexels-photo-3621557.jpeg",
      trackFeatures: ["Historic Turn 1 hairpin", "Fast Dandenong straight", "Technical back section"]
    },
    {
      id: "calder-bmw",
      title: "Calder Park Raceway BMW E90 Experience",
      shortDesc: "Multiple circuit configurations for diverse thrills",
      description: "Explore the versatility of Calder Park with multiple circuit configurations. From the historic Thunderdome to the technical road course, experience diverse racing challenges in our BMW E90.",
      price: "$749",
      originalPrice: "$899",
      duration: "Full Day (6 hours)",
      location: "Calder Park Raceway, Melbourne, Victoria",
      trackLength: "2.3km",
      difficulty: "Intermediate",
      maxSpeed: "170km/h",
      featured: false,
      includes: [
        "BMW E90 Modified (Auto Transmission)",
        "Professional racing instructor",
        "Multiple circuit configurations",
        "Road course and short circuit access",
        "HD in-car camera footage",
        "Telemetry data analysis",
        "Racing gear provided",
        "Skills assessment certificate",
        "Light refreshments"
      ],
      highlights: [
        "Multiple track configurations",
        "Historic Thunderdome oval access",
        "Technical road course challenges",
        "BMW E90 comfort meets performance",
        "Perfect for skill progression"
      ],
      image: "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg",
      trackFeatures: ["Thunderdome banking", "Technical infield", "Multiple layouts"]
    }
  ]

  // Global Testing Experiences  
  const globalExperiences = [
    {
      id: "radical-global",
      title: "Radical SR3/SR8 Global Testing",
      shortDesc: "Pure racing DNA across international circuits",
      description: "Experience the raw power and precision of Radical sports cars on world-renowned circuits. Our global partner network provides access to exclusive testing opportunities with professional-grade Radical SR3 and SR8 vehicles.",
      price: "From $2,999",
      duration: "2-3 Days",
      location: "International Circuits Worldwide",
      difficulty: "Advanced",
      maxSpeed: "280km/h",
      featured: true,
      includes: [
        "Radical SR3/SR8 track-prepared vehicle",
        "International circuit access",
        "Professional race engineer support",
        "Comprehensive data logging",
        "Video analysis and coaching",
        "Performance optimization",
        "International racing license consultation",
        "Accommodation packages available",
        "Global partner team support"
      ],
      highlights: [
        "Purpose-built racing machines",
        "Global circuit partnerships",
        "Professional engineering support",
        "Advanced telemetry systems",
        "International racing community"
      ],
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      regions: ["Europe", "Asia-Pacific", "Americas"]
    },
    {
      id: "f1-testing",
      title: "Formula 1 Testing Experience",
      shortDesc: "The pinnacle of motorsport technology",
      description: "Step into the world of Formula 1 with our exclusive testing programs. Experience cutting-edge F1 technology through advanced simulators and rare on-track opportunities with our partner teams.",
      price: "From $9,999",
      duration: "3-5 Days",
      location: "International F1 Circuits",
      difficulty: "Expert",
      maxSpeed: "350km/h",
      featured: true,
      includes: [
        "F1-spec simulator sessions",
        "Professional F1 circuit access",
        "Former F1 driver coaching",
        "Advanced telemetry analysis",
        "Exclusive paddock access",
        "Technical briefings",
        "Professional video production",
        "VIP hospitality package",
        "International logistics support"
      ],
      highlights: [
        "Authentic F1 simulator technology",
        "Former F1 driver instruction",
        "Exclusive circuit access",
        "Professional team integration",
        "Ultimate racing experience"
      ],
      image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg",
      regions: ["Europe", "Middle East", "Asia"]
    },
    {
      id: "supercar-global",
      title: "Supercar Global Testing",
      shortDesc: "World-class supercars on legendary circuits",
      description: "Test the limits of modern supercars on the world's most challenging circuits. From McLaren to Ferrari, experience the pinnacle of automotive engineering with professional support.",
      price: "From $1,999",
      duration: "1-2 Days",
      location: "Premium Global Circuits",
      difficulty: "Intermediate-Advanced",
      maxSpeed: "320km/h",
      featured: false,
      includes: [
        "Premium supercar selection",
        "World-class circuit access",
        "Professional driving coaches",
        "Performance data analysis",
        "High-definition video capture",
        "Technical workshops",
        "Racing equipment provided",
        "Luxury hospitality",
        "Certificate of completion"
      ],
      highlights: [
        "Latest supercar technology",
        "Legendary racing circuits",
        "Professional instruction",
        "Premium hospitality",
        "Global venue access"
      ],
      image: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
      regions: ["Worldwide"]
    }
  ]

  // Track Day & Performance Experiences
  const trackDayExperiences = [
    {
      id: "beginner-track",
      title: "Beginner Track Day",
      shortDesc: "Your first steps into track driving",
      description: "Perfect introduction to track driving with comprehensive instruction and safety focus. Learn the fundamentals of high-performance driving in a controlled, supportive environment.",
      price: "$499",
      duration: "Full Day",
      difficulty: "Beginner",
      includes: ["Classroom instruction", "In-car coaching", "Safety briefing", "Progressive skill building"],
      image: "https://images.pexels.com/photos/12118842/pexels-photo-12118842.jpeg"
    },
    {
      id: "advanced-coaching",
      title: "Advanced Driver Coaching",
      shortDesc: "Master advanced racing techniques",
      description: "One-on-one coaching with professional drivers to master advanced techniques like heel-toe shifting, trail braking, and racecraft.",
      price: "$1,299",
      duration: "Full Day",
      difficulty: "Advanced",
      includes: ["1-on-1 coaching", "Video analysis", "Data logging", "Technique refinement"],
      image: "https://images.pexels.com/photos/3621557/pexels-photo-3621557.jpeg"
    },
    {
      id: "race-prep",
      title: "Racing License Preparation",
      shortDesc: "Official racing license certification",
      description: "Complete preparation for your CAMS racing license with comprehensive training and assessment.",
      price: "$2,499",
      duration: "3 Days",
      difficulty: "Expert",
      includes: ["CAMS certification", "Race procedure training", "Safety protocols", "Official assessment"],
      image: "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg"
    }
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.02, 
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://images.pexels.com/photos/12118842/pexels-photo-12118842.jpeg"
            alt="Racing Experience"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Racing
              <span className="text-gradient block">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              From BMW E90 adventures in Victoria to global F1 testing - discover your ultimate racing experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                <Globe className="mr-2 h-5 w-5" />
                Global Experiences
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ChevronRight className="h-8 w-8 rotate-90" />
        </motion.div>
      </motion.section>

      {/* Experience Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Adventure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From comfortable BMW E90 experiences to cutting-edge global testing programs
            </p>
          </motion.div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 h-auto mb-12 bg-transparent">
              <TabsTrigger 
                value="victoria" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Icons.bmw width={32} height={32} className="mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Victoria BMW E90</h3>
                  <p className="text-sm opacity-80">Comfort meets performance</p>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="global" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Global Testing</h3>
                  <p className="text-sm opacity-80">Worldwide racing experiences</p>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="training" 
                className="py-6 px-8 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Training & Coaching</h3>
                  <p className="text-sm opacity-80">Professional development</p>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Victoria BMW E90 Experiences */}
            <TabsContent value="victoria" className="space-y-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8"
              >
                {/* Featured BMW E90 Experience */}
                <motion.div variants={itemVariants}>
                  <FeaturedExperienceCard experience={victoriaExperiences[0]} />
                </motion.div>

                {/* Other Victoria Experiences */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {victoriaExperiences.slice(1).map((experience, index) => (
                    <motion.div key={experience.id} variants={itemVariants}>
                      <DetailedExperienceCard 
                        experience={experience}
                        isSelected={selectedExperience === experience.id}
                        onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Global Testing Experiences */}
            <TabsContent value="global" className="space-y-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {globalExperiences.map((experience, index) => (
                    <motion.div key={experience.id} variants={itemVariants}>
                      <GlobalExperienceCard 
                        experience={experience}
                        isSelected={selectedExperience === experience.id}
                        onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Training & Coaching */}
            <TabsContent value="training" className="space-y-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {trackDayExperiences.map((experience, index) => (
                  <motion.div key={experience.id} variants={itemVariants}>
                    <TrainingExperienceCard experience={experience} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Thrill?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied drivers who have pushed their limits with ATXR Racing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/experiences/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Experience
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
                <Link href="/contact">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Speak to Our Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Featured Experience Card Component
function FeaturedExperienceCard({ experience }: { experience: any }) {
  return (
    <motion.div
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.01 }
      }}
      initial="rest"
      whileHover="hover"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-primary text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured Experience
            </Badge>
            <Badge variant="outline">{experience.difficulty}</Badge>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-3">{experience.title}</h3>
            <p className="text-lg text-muted-foreground mb-4">{experience.shortDesc}</p>
            <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{experience.location}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Flag className="h-4 w-4 text-primary" />
                <span>{experience.trackLength} circuit</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>Max {experience.maxSpeed}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-primary">{experience.price}</div>
            {experience.originalPrice && (
              <div className="text-lg text-muted-foreground line-through">{experience.originalPrice}</div>
            )}
          </div>

          <Button size="lg" className="w-full sm:w-auto">
            <ArrowRight className="mr-2 h-4 w-4" />
            Book This Experience
          </Button>
        </div>

        <div className="relative">
          <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-3 gap-2">
              {experience.trackFeatures.map((feature: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-black/70 text-white text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Detailed Experience Card Component
function DetailedExperienceCard({ experience, isSelected, onClick }: { 
  experience: any, 
  isSelected: boolean, 
  onClick: () => void 
}) {
  return (
    <motion.div
      layoutId={experience.id}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50">
        <div className="relative h-64">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{experience.difficulty}</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-black/70 text-white">
              {experience.trackLength}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
              <CardDescription className="text-base">{experience.shortDesc}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{experience.price}</div>
              {experience.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">{experience.originalPrice}</div>
              )}
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="pt-0 space-y-4">
                <p className="text-sm text-muted-foreground">{experience.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Victoria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Max {experience.maxSpeed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Safety Certified</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">Experience Highlights:</h5>
                  <div className="space-y-1">
                    {experience.highlights.slice(0, 3).map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>

        <CardFooter className="pt-4">
          <Button className="w-full" asChild>
            <Link href="/experiences/book">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Global Experience Card Component
function GlobalExperienceCard({ experience, isSelected, onClick }: { 
  experience: any, 
  isSelected: boolean, 
  onClick: () => void 
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50">
        <div className="relative h-56">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-white">
              <Globe className="w-3 h-3 mr-1" />
              Global
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-1">
              {experience.regions.map((region: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-black/70 text-white text-xs">
                  {region}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{experience.title}</CardTitle>
          <CardDescription>{experience.shortDesc}</CardDescription>
          <div className="text-xl font-bold text-primary">{experience.price}</div>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{experience.description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4 text-primary" />
              <span>{experience.difficulty}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>Max {experience.maxSpeed}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" variant="outline" asChild>
            <Link href="/contact">
              <Globe className="mr-2 h-4 w-4" />
              Contact for Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Training Experience Card Component
function TrainingExperienceCard({ experience }: { experience: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{experience.difficulty}</Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{experience.title}</CardTitle>
          <CardDescription>{experience.shortDesc}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{experience.description}</p>
          
          <div className="space-y-2">
            {experience.includes.map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xl font-bold text-primary">{experience.price}</div>
            <div className="text-sm text-muted-foreground">{experience.duration}</div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/experiences/book">
              <BookOpen className="mr-2 h-4 w-4" />
              Enroll Now
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}