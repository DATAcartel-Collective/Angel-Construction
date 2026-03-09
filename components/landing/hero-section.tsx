"use client"

import Image from "next/image"
import { ArrowDown, Play, Shield, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center snap-section overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional roofing team at work"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl will-animate" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl will-animate" />
      
      {/* Steel Beam Decorations */}
      <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-40 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-0.5 h-20 bg-gradient-to-t from-border to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-0.5 h-20 bg-gradient-to-t from-border to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 will-animate">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              A+ BBB Rated • Licensed & Insured
            </span>
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 will-animate">
            <span className="block">Keeping You</span>
            <span className="block text-gradient-orange">Under Our Wing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed will-animate">
            Premium roofing and construction services built on trust, craftsmanship, and a commitment 
            to protecting what matters most — your home and family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 will-animate">
            <Link
              href="#estimate"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 glow-orange"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free Estimate
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <button className="group flex items-center gap-3 px-6 py-4 metallic-border rounded-lg hover:bg-muted/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <Play className="h-4 w-4 text-secondary fill-secondary" />
              </div>
              <span className="font-medium text-foreground">Watch Our Story</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto will-animate">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Emergency Service" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 metallic-border rounded-lg text-center group hover:bg-muted/30 transition-all duration-300"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 will-animate">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
