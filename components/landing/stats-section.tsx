"use client"

import { 
  Hammer, 
  Users, 
  Clock, 
  Award, 
  Heart,
  Shield,
  Star 
} from "lucide-react"

const stats = [
  {
    icon: Hammer,
    value: "500+",
    label: "Projects Completed",
    description: "Residential & commercial",
  },
  {
    icon: Users,
    value: "Family",
    label: "Owned & Operated",
    description: "Local roots, personal touch",
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years Experience",
    description: "Trusted since 2014",
  },
  {
    icon: Award,
    value: "A+",
    label: "BBB Rating",
    description: "Verified excellence",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Customer Satisfaction",
    description: "Our commitment to you",
  },
]

export function StatsSection() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 metallic-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 will-animate">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-display text-sm font-bold tracking-widest text-primary uppercase">
              Why Choose Angel
            </span>
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Built on Trust. Proven by Results.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative will-animate"
            >
              {/* Card */}
              <div className="relative h-full p-6 metallic-border rounded-xl bg-card/30 text-center hover:bg-card/50 transition-all duration-300 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Value */}
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="font-semibold text-foreground text-sm mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 will-animate">
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">5.0 Google Rating</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <Shield className="h-4 w-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Licensed & Insured</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Manufacturer Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}
