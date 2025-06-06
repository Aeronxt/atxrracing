"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { motion, AnimatePresence } from "framer-motion"
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, 
  User, Building, Globe, Car, Trophy, HelpCircle, CheckCircle2,
  Users, Zap, Star, ArrowRight, Instagram, Twitter, Facebook,
  Youtube, Linkedin, PlayCircle
} from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
    preferredContact: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaqItem, setOpenFaqItem] = useState<string | undefined>(undefined)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(formState)
    setFormSubmitted(true)
    setIsSubmitting(false)
  }

  const inquiryTypes = [
    { value: "experience", label: "BMW E90 Track Experience" },
    { value: "global-testing", label: "Global Testing Programs" },
    { value: "esports", label: "Esports Team" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "media", label: "Media & Press" },
    { value: "general", label: "General Inquiry" }
  ]

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "Speak directly with our team",
      value: "+1 (555) 123-ATXR",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM AEST",
      href: "tel:+15551234287"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Send us a detailed message",
      value: "info@atxrracing.com",
      action: "Send Email",
      available: "24/7 Response",
      href: "mailto:info@atxrracing.com?subject=ATXR Racing Inquiry&body=Hello ATXR Racing Team,%0D%0A%0D%0AI'm interested in learning more about your services. Please contact me to discuss:%0D%0A%0D%0A- BMW E90 Track Experiences%0D%0A- Global Testing Programs%0D%0A- Esports Team%0D%0A- Other:%0D%0A%0D%0AThank you!"
    }
  ]

  const teamMembers = [
    {
      name: "Marcus Johnson",
      role: "Experience Director",
      specialty: "BMW E90 & Victoria Tracks",
      email: "marcus@atxrracing.com",
      phone: "+61 3 9555 0123",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      availability: "Mon-Fri 9AM-5PM"
    },
    {
      name: "Elena Rodriguez", 
      role: "Global Programs Manager",
      specialty: "International Testing & F1",
      email: "elena@atxrracing.com",
      phone: "+61 3 9555 0124",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      availability: "Mon-Sat 8AM-6PM"
    },
    {
      name: "Alex Chen",
      role: "Esports Team Lead",
      specialty: "Sim Racing & Virtual Events",
      email: "alex@atxrracing.com",
      phone: "+61 3 9555 0125",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
      availability: "Daily 2PM-10PM"
    }
  ]

  const faqs = [
    {
      id: "booking",
      question: "How do I book a BMW E90 track experience?",
      answer: "Booking is easy! Visit our Experiences page, select your preferred Victorian track (Winton, Sandown, or Calder Park), choose your date, and complete the online booking form. You'll receive confirmation within 24 hours.",
      category: "Booking"
    },
    {
      id: "requirements",
      question: "What are the requirements for track experiences?",
      answer: "You must be 18+ with a valid driver's license. Our BMW E90 features automatic transmission, making it perfect for beginners. We provide all safety equipment including helmets, racing suits, and professional instruction.",
      category: "Requirements"
    },
    {
      id: "global-testing",
      question: "How can I access global testing programs?",
      answer: "Our global testing programs (Radical SR3/SR8, F1 simulators, Supercars) are available through our international partner network. Contact us to discuss specific circuits, dates, and requirements for your preferred experience.",
      category: "Global Programs"
    },
    {
      id: "pricing",
      question: "What's included in the experience pricing?",
      answer: "All experiences include: professional instruction, safety equipment, multiple track sessions, in-car video recording, data analysis, refreshments, and certificates. Global programs include accommodation packages and logistics support.",
      category: "Pricing"
    },
    {
      id: "weather",
      question: "What happens if weather conditions are poor?",
      answer: "Safety is our priority. If conditions are unsafe, we'll reschedule your experience at no additional cost. Light rain sessions may continue with additional safety briefings and modified session structure.",
      category: "Weather"
    },
    {
      id: "modifications",
      question: "Can I bring my own vehicle for track days?",
      answer: "While our focus is on our BMW E90 experiences, we occasionally offer 'bring your own car' track days. Your vehicle must pass our safety inspection and meet specific technical requirements.",
      category: "Vehicles"
    },
    {
      id: "esports",
      question: "How do I join the ATXR Esports team?",
      answer: "We&apos;re always looking for talented sim racers! Check our Esports page for current openings, required equipment specs, and application processes. We compete in F1 Esports, IMSA Michelin Pilot Challenge, and Le Mans Virtual Series.",
      category: "Esports"
    },
    {
      id: "partnerships",
      question: "Do you offer corporate partnerships or team building?",
      answer: "Absolutely! We provide corporate packages, team building events, and partnership opportunities. These can include exclusive track access, hospitality packages, and custom experiences tailored to your company's needs.",
      category: "Corporate"
    },
    {
      id: "international",
      question: "Do you accommodate international visitors?",
      answer: "Yes! Many of our participants travel from overseas. We can assist with accommodation recommendations, transport logistics, and ensuring you have the necessary documentation for your track experience.",
      category: "International"
    },
    {
      id: "photography",
      question: "Can I get photos and videos of my experience?",
      answer: "Every experience includes in-car video recording and data analysis. Professional photography packages are available for an additional fee, including action shots and ceremony photos.",
      category: "Media"
    }
  ]

  const faqCategories = ["All", "Booking", "Requirements", "Global Programs", "Pricing", "Esports", "Corporate"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://images.pexels.com/photos/442584/pexels-photo-442584.jpeg"
            alt="ATXR Racing Contact"
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
              Contact
              <span className="text-gradient block">ATXR Racing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Ready to experience the thrill? Get in touch with our team for BMW E90 adventures, global testing, or esports opportunities.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-semibold text-primary mb-2">{method.value}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.available}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" asChild>
                      <a href={method.href}>
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form & Team */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you&apos;re interested in our BMW E90 track experiences, global testing programs, or joining our esports team, we&apos;re here to help make it happen.
              </p>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Card className="border-primary/50 bg-primary/5">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-primary">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out to ATXR Racing. Our team will get back to you within 24 hours.
                        </p>
                        <Button 
                          onClick={() => setFormSubmitted(false)}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          required 
                          value={formState.name}
                          onChange={handleChange}
                          className="border-2 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={formState.email}
                          onChange={handleChange}
                          className="border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="+61 4XX XXX XXX" 
                          value={formState.phone}
                          onChange={handleChange}
                          className="border-2 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                          <SelectTrigger className="border-2 focus:border-primary">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="How can we help you?" 
                        required 
                        value={formState.subject}
                        onChange={handleChange}
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us more about your interest in ATXR Racing experiences..." 
                        rows={6} 
                        required 
                        value={formState.message}
                        onChange={handleChange}
                        className="border-2 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                        <SelectTrigger className="border-2 focus:border-primary">
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either is fine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Team Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Connect directly with our specialists for personalized assistance.
              </p>

              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-semibold mb-1">{member.role}</p>
                            <p className="text-sm text-muted-foreground mb-3">{member.specialty}</p>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                                  {member.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href={`tel:${member.phone}`} className="text-primary hover:underline">
                                  {member.phone}
                                </a>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{member.availability}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our BMW E90 experiences, global testing programs, and esports team.
            </p>
          </motion.div>

          {/* FAQ Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {faqCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible value={openFaqItem} onValueChange={setOpenFaqItem}>
              <AnimatePresence>
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <AccordionItem value={faq.id} className="border-2 rounded-lg mb-4 px-6">
                      <AccordionTrigger className="text-left hover:no-underline group">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <HelpCircle className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-12 pr-4 pb-6">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Accordion>
          </motion.div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help! Get in touch for personalized assistance with your racing experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="mailto:info@atxrracing.com?subject=ATXR Racing Inquiry&body=Hello ATXR Racing Team,%0D%0A%0D%0AI have additional questions about your services. Please contact me to discuss:%0D%0A%0D%0AThank you!">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+15551234287">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Location & Social */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Headquarters</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Located in the heart of Melbourne, our headquarters serve as the hub for all ATXR Racing operations.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">ATXR Racing Headquarters</h3>
                        <p className="text-muted-foreground">
                          Level 15, 123 Collins Street<br />
                          Melbourne, VIC 3000<br />
                          Australia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Business Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-sm text-primary mt-2">Track experiences available weekends</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Social Media & Connect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Follow Our Journey</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Stay updated with our latest BMW E90 experiences, global testing adventures, and esports victories.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { platform: "Instagram", handle: "@atxrracing", icon: <Instagram className="h-5 w-5" />, followers: "12.5K" },
                  { platform: "YouTube", handle: "ATXR Racing", icon: <Youtube className="h-5 w-5" />, followers: "8.2K" },
                  { platform: "Twitter", handle: "@atxrracing", icon: <Twitter className="h-5 w-5" />, followers: "5.1K" },
                  { platform: "LinkedIn", handle: "ATXR Racing", icon: <Linkedin className="h-5 w-5" />, followers: "3.4K" }
                ].map((social, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{social.platform}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-primary">{social.followers}</p>
                          <p className="text-xs text-muted-foreground">followers</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <PlayCircle className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Latest Video</h3>
                      <p className="text-muted-foreground">BMW E90 at Winton Raceway</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}