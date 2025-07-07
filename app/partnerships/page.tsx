"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users, Megaphone, Building, Zap, Globe, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PartnershipsPage() {
  const [selectedTier, setSelectedTier] = useState("platinum")

  const partnershipTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Title Sponsors",
      description: "Lead the event as our premier partner with maximum brand visibility and exclusive benefits.",
      benefits: [
        "Logo on all marketing materials",
        "Opening ceremony speaking slot",
        "Premium booth space",
        "VIP networking access",
      ],
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Media Partners",
      description: "Amplify the event's reach through strategic media collaboration and content partnerships.",
      benefits: [
        "Content collaboration opportunities",
        "Press conference participation",
        "Exclusive interview access",
        "Social media co-promotion",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Partners",
      description: "Connect with Nigeria's tech ecosystem through community engagement and startup support.",
      benefits: [
        "Startup mentorship opportunities",
        "Community event hosting",
        "Talent pipeline access",
        "Ecosystem networking",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technology Partners",
      description: "Showcase cutting-edge solutions and provide technical infrastructure for the event.",
      benefits: [
        "Tech showcase opportunities",
        "Demo presentation slots",
        "Innovation lab access",
        "Technical advisory roles",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Partners",
      description: "Bridge global connections and facilitate international collaboration opportunities.",
      benefits: [
        "Global network access",
        "International delegation hosting",
        "Cross-border partnerships",
        "Export opportunity facilitation",
      ],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Partners",
      description: "Support innovation recognition through award sponsorships and judging participation.",
      benefits: [
        "Award category naming rights",
        "Judging panel participation",
        "Winner mentorship programs",
        "Innovation showcase rights",
      ],
    },
  ]

  const sponsorshipTiers = {
    platinum: {
      name: "Platinum Partner",
      price: "₦50,000,000",
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      benefits: [
        "Title sponsor recognition",
        "Prime booth location (100sqm)",
        "5 speaking opportunities",
        "VIP hospitality for 50 guests",
        "Year-round partnership benefits",
        "Exclusive networking events",
        "Custom activation opportunities",
        "Media interview priority",
      ],
    },
    gold: {
      name: "Gold Partner",
      price: "₦25,000,000",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      benefits: [
        "Premium sponsor recognition",
        "Large booth space (50sqm)",
        "3 speaking opportunities",
        "VIP hospitality for 25 guests",
        "Quarterly partnership benefits",
        "Networking event access",
        "Co-branded content opportunities",
        "Priority media mentions",
      ],
    },
    silver: {
      name: "Silver Partner",
      price: "₦10,000,000",
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      benefits: [
        "Standard sponsor recognition",
        "Medium booth space (25sqm)",
        "1 speaking opportunity",
        "VIP hospitality for 10 guests",
        "Event partnership benefits",
        "General networking access",
        "Social media mentions",
        "Program listing inclusion",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">GITEX</span>
            <img src="/images/nigeria-logo.png" alt="Nigeria" className="h-6 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/professional-conference.jpg')",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Partner With Us</h1>
          <div className="border-t-2 border-green-500 w-24 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Join Nigeria's largest innovation showcase and connect with the future of African technology. Partner with
            GITEX Nigeria 2025 to showcase your brand, engage with startups, and drive meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold">
              BECOME A PARTNER
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold bg-transparent"
            >
              DOWNLOAD PARTNERSHIP DECK
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Partnership Opportunities</h2>
            <div className="border-t-2 border-green-500 w-24 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover various ways to collaborate with us and make a lasting impact on Nigeria's tech ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-green-500 border-2 hover:border-green-400 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="text-green-500 mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sponsorship Tiers</h2>
            <div className="border-t-2 border-green-500 w-24 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the sponsorship level that aligns with your goals and budget.
            </p>
          </div>

          {/* Tier Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-2 flex space-x-2">
              {Object.entries(sponsorshipTiers).map(([key, tier]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTier(key)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedTier === key ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Tier Details */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-800 border-green-500 border-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full ${sponsorshipTiers[selectedTier].color} mx-auto mb-6`}></div>
                <h3 className="text-3xl font-bold mb-4 text-white">{sponsorshipTiers[selectedTier].name}</h3>
                <div className="text-4xl font-bold text-green-500 mb-8">{sponsorshipTiers[selectedTier].price}</div>
                <ul className="space-y-3 mb-8">
                  {sponsorshipTiers[selectedTier].benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center justify-center">
                      <span className="text-green-500 mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold w-full">
                  SELECT THIS TIER
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Partner With GITEX Nigeria?</h2>
              <div className="border-t-2 border-green-500 w-24 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-full mt-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Massive Reach</h3>
                    <p className="text-gray-300">
                      Connect with over 10,000 attendees including startups, investors, government officials, and tech
                      enthusiasts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-full mt-1">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">National Impact</h3>
                    <p className="text-gray-300">
                      Shape Nigeria's digital transformation and contribute to the growth of Africa's largest economy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-full mt-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brand Excellence</h3>
                    <p className="text-gray-300">
                      Associate your brand with innovation, excellence, and the future of African technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">10,000+</div>
                <div className="text-gray-300">Expected Attendees</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                <div className="text-gray-300">Startups Participating</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-gray-300">International Speakers</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">6</div>
                <div className="text-gray-300">Geopolitical Zones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Partner?</h2>
          <div className="border-t-2 border-green-500 w-24 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Let's discuss how we can create a meaningful partnership that drives innovation and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">partnerships@startup.gov.ng</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">+234 818 288 7766</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">790 Cadastral Zone, Wuye District, Abuja</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold">
              SCHEDULE A MEETING
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 text-lg font-semibold bg-transparent"
            >
              REQUEST PROPOSAL
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-sm md:text-base">
            Brought To You By: National Information Technology Development Agency (NITDA) / Office For Nigerian Digital
            Innovation (ONDI)
          </p>
        </div>
      </footer>
    </div>
  )
}
