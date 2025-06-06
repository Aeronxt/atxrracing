"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function EsportsPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Team Captain",
      stats: { wins: 156, podiums: 247, championships: 3 },
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg"
    },
    {
      name: "Maria Rodriguez",
      role: "Lead Strategist",
      stats: { wins: 134, podiums: 212, championships: 2 },
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "David Kim",
      role: "Race Engineer",
      stats: { wins: 98, podiums: 167, championships: 1 },
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg"
    }
  ]

  const achievements = [
    {
      year: 2024,
      title: "Virtual Racing World Championship",
      description: "1st Place in Teams Championship"
    },
    {
      year: 2023,
      title: "Digital Endurance Series",
      description: "Champions in both Driver and Team categories"
    },
    {
      year: 2022,
      title: "Global SimRacing Challenge",
      description: "Winners of the Premier Division"
    }
  ]

  const requirements = [
    {
      title: "Equipment",
      items: [
        "High-end gaming PC or racing simulator",
        "Professional racing wheel and pedals",
        "Stable internet connection (minimum 50Mbps)",
        "Racing seat or cockpit setup (recommended)"
      ]
    },
    {
      title: "Skills",
      items: [
        "Extensive experience in sim racing",
        "Strong understanding of racing theory",
        "Excellent communication skills",
        "Team-oriented mindset"
      ]
    },
    {
      title: "Commitment",
      items: [
        "20+ hours weekly for practice",
        "Available for team events and races",
        "Participate in strategy meetings",
        "Regular performance reviews"
      ]
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
            ATXR Esports
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-secondary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dominating the virtual racing world with skill, strategy, and dedication.
          </motion.p>
        </div>
        
        {/* Racing stripe decorations */}
        <div className="absolute -right-10 top-0 h-full w-20 bg-accent/80 transform skew-x-12" />
        <div className="absolute -right-4 top-0 h-full w-4 bg-primary/80 transform skew-x-12" />
      </div>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Virtual Racing Excellence</h2>
              <p className="text-muted-foreground mb-6">
                ATXR Esports represents the digital evolution of our racing legacy. 
                Our team competes at the highest level of virtual motorsport, combining 
                cutting-edge technology with professional racing expertise.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24</div>
                  <div className="text-sm text-muted-foreground">Active Drivers</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">388</div>
                  <div className="text-sm text-muted-foreground">Race Wins</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Championships</div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="#join-team">Join Our Team</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                alt="ATXR Esports Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Pro Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{member.stats.wins}</div>
                        <div className="text-sm text-muted-foreground">Wins</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{member.stats.podiums}</div>
                        <div className="text-sm text-muted-foreground">Podiums</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{member.stats.championships}</div>
                        <div className="text-sm text-muted-foreground">Titles</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Achievements</h2>
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 last:mb-0"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{achievement.title}</CardTitle>
                      <span className="text-primary font-bold">{achievement.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-team" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join ATXR Esports</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              We're always looking for talented drivers to join our team. If you have 
              what it takes to compete at the highest level, we want to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {requirements.map((req, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Icons.check className="h-5 w-5 mr-2 text-accent" />
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Race?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our next recruitment phase and become part of the most competitive 
            esports racing team. Applications are reviewed monthly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}