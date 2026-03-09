"use client"

import { useState, useEffect, useRef } from "react"
import {
  Send,
  Bot,
  User,
  Calendar,
  Calculator,
  Database,
  Bell,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Simulated AI conversation for demo
const demoConversation = [
  {
    role: "bot",
    message:
      "Hi! I'm Angel's AI assistant. I'm available 24/7 to help you get an estimate, answer questions, or schedule an appointment. How can I help you today?",
    delay: 0,
  },
  {
    role: "user",
    message: "I need a new roof. How much would it cost for a 2000 sq ft house?",
    delay: 2000,
  },
  {
    role: "bot",
    message:
      "Great question! For a 2,000 sq ft home, roof replacement typically ranges from $8,000-$15,000 depending on materials. Here's a quick breakdown:",
    delay: 3500,
  },
  {
    role: "bot",
    message:
      "• Asphalt Shingles: $8,000-$10,000\n• Architectural Shingles: $10,000-$13,000\n• Metal Roofing: $12,000-$15,000+\n\nWould you like me to schedule a free on-site inspection for an exact quote?",
    delay: 5000,
  },
  {
    role: "user",
    message: "Yes, can someone come this Saturday around 10am?",
    delay: 7500,
  },
  {
    role: "bot",
    message:
      "Perfect! I've checked our schedule and Saturday at 10:00 AM is available. I've booked that slot for you and sent a calendar invite to your email. Our team will also receive a push notification. Is there anything else you'd like to know?",
    delay: 9000,
  },
]

const aiFeatures = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a lead. Your AI receptionist works around the clock.",
  },
  {
    icon: Database,
    title: "Infinite Memory",
    description: "Stores company info, pricing, and FAQs in a powerful vector database.",
  },
  {
    icon: Calculator,
    title: "Instant Estimates",
    description: "Provides accurate ballpark estimates using your custom pricing formulas.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Sends push notifications and calendar events to your phone instantly.",
  },
]

export function LeadCaptureSection() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(false)
  const [hasStartedDemo, setHasStartedDemo] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  })

  // Auto-play demo conversation
  useEffect(() => {
    if (!hasStartedDemo) return

    demoConversation.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.role === "bot") {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            setVisibleMessages(index + 1)
          }, 1500)
        } else {
          setVisibleMessages(index + 1)
        }
      }, msg.delay)
    })
  }, [hasStartedDemo])

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [visibleMessages, isTyping])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section
      id="estimate"
      className="relative min-h-screen flex items-center snap-section py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 will-animate">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Your Free <span className="text-gradient-orange">Estimate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a quote the traditional way, or experience our AI-powered receptionist 
            that's revolutionizing how contractors capture leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Traditional Form */}
          <div className="order-2 lg:order-1 will-animate">
            <div className="metallic-border rounded-2xl p-8 bg-card/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Traditional Contact Form
                  </h3>
                  <p className="text-sm text-muted-foreground">Quick 4-field form</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="text-muted-foreground">
                      Select Service Type
                    </option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="remodeling">Custom Remodeling</option>
                    <option value="repair">Roof Repair</option>
                    <option value="inspection">Roof Inspection</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-muted-foreground/20 text-muted-foreground font-semibold rounded-lg border border-border hover:bg-muted-foreground/30 transition-colors"
                >
                  Submit Request
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Response time: 24-48 hours during business hours
              </p>
            </div>
          </div>

          {/* AI Receptionist Demo */}
          <div className="order-1 lg:order-2 will-animate">
            <div className="metallic-border rounded-2xl overflow-hidden bg-card/80 glow-orange">
              {/* Header */}
              <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                        AI Digital Receptionist
                        <Sparkles className="h-4 w-4 text-primary" />
                      </h3>
                      <p className="text-xs text-green-400">Online • Always Available</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/20 rounded-full">
                    <span className="text-xs font-semibold text-primary">DEMO</span>
                  </div>
                </div>
              </div>

              {/* Chat Window */}
              <div
                ref={chatContainerRef}
                className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth"
              >
                {!hasStartedDemo ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-2">
                      See It In Action
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      Watch how our AI receptionist handles customer inquiries, provides estimates, 
                      and books appointments automatically.
                    </p>
                    <button
                      onClick={() => setHasStartedDemo(true)}
                      className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                      <span>Start Demo</span>
                      <Sparkles className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    {demoConversation.slice(0, visibleMessages).map((msg, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex gap-3 animate-fade-in",
                          msg.role === "user" ? "flex-row-reverse" : ""
                        )}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                            msg.role === "bot" ? "bg-primary/20" : "bg-secondary/20"
                          )}
                        >
                          {msg.role === "bot" ? (
                            <Bot className="h-4 w-4 text-primary" />
                          ) : (
                            <User className="h-4 w-4 text-secondary" />
                          )}
                        </div>
                        <div
                          className={cn(
                            "max-w-[80%] p-3 rounded-xl text-sm leading-relaxed whitespace-pre-line",
                            msg.role === "bot"
                              ? "bg-muted text-foreground rounded-tl-none"
                              : "bg-secondary text-secondary-foreground rounded-tr-none"
                          )}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex gap-3 animate-fade-in">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-muted p-3 rounded-xl rounded-tl-none">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                            <span
                              className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <span
                              className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Success Notification */}
                    {visibleMessages >= demoConversation.length && (
                      <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-green-400">
                          Appointment booked! Push notification sent to contractor.
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Input (disabled for demo) */}
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="This is a demo - see it in action!"
                    disabled
                    className="flex-grow px-4 py-2.5 bg-muted border border-border rounded-lg text-muted-foreground text-sm disabled:opacity-50"
                  />
                  <button
                    disabled
                    className="px-4 py-2.5 bg-primary/50 text-primary-foreground rounded-lg disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 metallic-border rounded-xl bg-card/30 hover:bg-card/50 transition-colors"
                >
                  <feature.icon className="h-5 w-5 text-primary mb-2" />
                  <h4 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Upsell CTA */}
            <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Want this for your business?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI receptionist can capture 3x more leads than traditional forms. 
                    Ask us about our digital employee solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
