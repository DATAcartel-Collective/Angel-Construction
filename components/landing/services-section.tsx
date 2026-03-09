"use client"

import { Home, Building2, Paintbrush, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description:
      "Complete residential roofing solutions from repairs to full replacements. We protect your home with premium materials and expert craftsmanship.",
    features: [
      "Shingle Installation & Repair",
      "Storm Damage Assessment",
      "Leak Detection & Repair",
      "Gutter Systems",
    ],
    color: "primary",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description:
      "Industrial-grade roofing systems for businesses of all sizes. Minimize downtime with our efficient installation process and durable materials.",
    features: [
      "Flat Roof Systems",
      "Metal Roofing",
      "TPO & EPDM Installation",
      "Preventive Maintenance",
    ],
    color: "secondary",
  },
  {
    icon: Paintbrush,
    title: "Custom Remodeling",
    description:
      "Transform your space with our expert remodeling services. From kitchens to bathrooms, we bring your vision to life with precision.",
    features: [
      "Kitchen Renovations",
      "Bathroom Remodels",
      "Room Additions",
      "Exterior Upgrades",
    ],
    color: "accent",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center snap-section py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-steel/50 to-background" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 will-animate">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Built to <span className="text-gradient-orange">Last</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential repairs to large-scale commercial projects, we deliver quality 
            craftsmanship backed by decades of industry experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative metallic-border rounded-2xl overflow-hidden will-animate"
            >
              {/* Card Background */}
              <div className="absolute inset-0 metallic-gradient opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />

              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href="#estimate"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 will-animate">
          <p className="text-muted-foreground mb-6">
            Not sure what you need? Let our experts assess your project.
          </p>
          <Link
            href="#estimate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
