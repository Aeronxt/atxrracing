"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Reynolds",
      role: "Team Principal",
      bio: "Former racing champion with over 20 years of experience in motorsport management.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      name: "Elena Vasquez",
      role: "Lead Driver",
      bio: "Multiple championship winner with a precision driving style and exceptional race craft.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
      name: "James Wilson",
      role: "Chief Engineer",
      bio: "Automotive engineering genius responsible for our cutting-edge vehicle developments.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg"
    },
    {
      name: "Sarah Chang",
      role: "Head of Strategy",
      bio: "Former F1 strategist bringing her exceptional analytical skills to our race planning.",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg"
    }
  ]
  
  const achievements = [
    { year: 2024, title: "International GT Championship", place: "1st Place" },
    { year: 2023, title: "World Endurance Series", place: "Constructors Champions" },
    { year: 2022, title: "24 Hours of Le Mans", place: "Class Winners" },
    { year: 2021, title: "North American Racing Series", place: "Drivers & Team Champions" },
    { year: 2020, title: "European Sprint Cup", place: "Drivers Champions" },
    { year: 2019, title: "Asian Endurance Challenge", place: "2nd Place" }
  ]
  
  const milestones = [
    {
      year: 2010,
      title: "ATXR Racing Founded",
      description: "Starting as a small team with big ambitions in local racing circuits."
    },
    {
      year: 2012,
      title: "First Major Victory",
      description: "Winning our first championship in the Regional GT Series."
    },
    {
      year: 2015,
      title: "International Expansion",
      description: "Entering global competitions and establishing our presence worldwide."
    },
    {
      year: 2018,
      title: "Launch of Driving Experiences",
      description: "Opening our racing experiences to the public."
    },
    {
      year: 2020,
      title: "Esports Division Created",
      description: "Expanding into virtual racing with our professional esports team."
    },
    {
      year: 2023,
      title: "New Headquarters",
      description: "Opening our state-of-the-art facility in Austin, Texas."
    }
  ]
  
  return (
    <div className="pt-24">
      <div className="relative bg-secondary text-secondary-foreground py-20">
        <div className="container relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ATXR Racing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-secondary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A team built on passion, performance, and precision.
          </motion.p>
        </div>
        
        {/* Racing stripe decorations */}
        <div className="absolute -right-10 top-0 h-full w-20 bg-accent/80 transform skew-x-12" />
        <div className="absolute -right-4 top-0 h-full w-4 bg-primary/80 transform skew-x-12" />
      </div>
      
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2010, ATXR Racing began as a small team with big ambitions. Based in Austin, Texas, 
                  we started competing in local circuits before quickly rising through the ranks to national and 
                  international competitions.
                </p>
                <p>
                  Our philosophy has always been centered on innovation, precision, and a relentless pursuit of 
                  excellence. We don't just race to compete—we race to push the boundaries of what's possible 
                  in motorsport.
                </p>
                <p>
                  Over the years, we've built a team of exceptional drivers, engineers, and strategists who 
                  share our passion for racing. Together, we've celebrated numerous victories, learned from 
                  defeats, and continuously evolved our approach to stay at the cutting edge of motorsport technology.
                </p>
                <p>
                  Today, ATXR Racing competes at the highest levels of motorsport, while also sharing our 
                  expertise and passion through driving experiences, esports competitions, and community initiatives.
                </p>
              </div>
              
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">15+</span>
                  <span className="text-muted-foreground">Years Racing</span>
                </div>
                <div className="h-12 border-r border-border"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">42</span>
                  <span className="text-muted-foreground">Championships</span>
                </div>
                <div className="h-12 border-r border-border"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">24</span>
                  <span className="text-muted-foreground">Countries</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg"
                  alt="ATXR Racing team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">From Local Circuits to Global Championships</h3>
                  <p className="text-white/80">Our journey to racing excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The principles that drive our team both on and off the track.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Icons.flag className="h-12 w-12" />}
              title="Excellence"
              description="We strive for excellence in everything we do, from race performance to customer experiences."
            />
            <ValueCard
              icon={<Icons.trophy className="h-12 w-12" />}
              title="Innovation"
              description="Constantly pushing the boundaries of technology and technique to gain competitive advantages."
            />
            <ValueCard
              icon={<Icons.globe className="h-12 w-12" />}
              title="Sustainability"
              description="Committed to developing eco-friendly racing technologies and practices for a greener future."
            />
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The dedicated professionals who make ATXR Racing a championship-winning team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="racing-card group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white">{member.bio}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              Tracing ATXR Racing's path from local competitions to international championships.
            </p>
          </div>
          
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="timeline" className="space-y-4">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-foreground/30" />
                
                {/* Timeline events */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div 
                      key={index}
                      className="relative flex gap-6"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary text-sm font-semibold">
                          {milestone.year}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="h-full w-0.5 bg-primary-foreground/30" />
                        )}
                      </div>
                      <Card className="flex-1 bg-primary-foreground/10 border-primary-foreground/20">
                        <CardHeader>
                          <CardTitle>{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 h-full">
                      <CardHeader className="flex flex-row items-center justify-between gap-4">
                        <div>
                          <CardTitle>{achievement.title}</CardTitle>
                          <CardDescription className="text-primary-foreground/70">
                            {achievement.year}
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <Icons.trophy className="h-6 w-6 mr-2 text-accent" />
                          <span className="font-bold">{achievement.place}</span>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="text-center h-full">
      <CardHeader>
        <div className="mx-auto">{icon}</div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}