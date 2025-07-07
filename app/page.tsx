"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function GitexNigeriaLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNavbar, setShowNavbar] = useState(false)

  const slideshowImages = [
    "/images/tech-conference.jpg",
    "/images/nigerian-market.jpg",
    "/images/nigerian-city.jpg",
    "/images/professional-conference.jpg",
  ]

  useEffect(() => {
    // Set target date to September 1, 2025
    const targetDate = new Date("2025-07-29T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(slideTimer)
  }, [slideshowImages.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight

      // Show navbar when scrolled past 80% of hero section
      setShowNavbar(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/images/nigeria-logo.png" alt="Nigeria" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-white hover:text-green-400 transition-colors text-sm font-medium">
                About
              </a>
              <a href="#eligibility" className="text-white hover:text-green-400 transition-colors text-sm font-medium">
                Eligibility
              </a>
              <Link
                href="/partnerships"
                className="text-white hover:text-green-400 transition-colors text-sm font-medium"
              >
                Partnerships
              </Link>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors text-sm font-medium">
                Contact
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">NOMINATE</Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black bg-opacity-70">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-1000"
          style={{
            backgroundImage: `url('${slideshowImages[currentSlide]}')`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <img src="/images/nigeria-logo.png" alt="Nigeria" className="h-20 md:h-48 w-auto mx-auto" />
          </div>

          <div className="border-t-2 border-white w-24 mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl mb-4 italic">Unveiling Innovation. Connecting Ecosystems.</p>
          <p className="text-xl md:text-2xl mb-12 italic">Showcasing Nigeria to the World.</p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm md:text-base">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm md:text-base">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Roadshows Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About The Roadshows</h2>
          <div className="border-t-2 border-green-500 w-24 mx-auto mb-12"></div>

          <div className="text-lg md:text-xl leading-relaxed mb-8 space-y-4">
            <p>
              The <span className="font-bold">GITEX Nigeria 2025 Regional Roadshows</span> are a nationwide startup
              discovery tour led by <span className="font-bold">NITDA</span> through the{" "}
              <span className="font-bold">Office for Nigerian Digital Innovation (ONDI)</span>.
            </p>
            <p>
              From June to August 2025, we'll travel across Nigeria's{" "}
              <span className="font-bold">six geopolitical zones</span> to uncover, engage, and spotlight the most{" "}
              <span className="font-bold">promising startups</span> from every corner of the country.
            </p>
            <p>
              This is your chance to <span className="font-bold">nominate your startup</span>,{" "}
              <span className="font-bold">pitch your solution</span>, and earn a spot at{" "}
              <span className="font-bold">GITEX Nigeria 2025</span> in Abuja—Nigeria's largest innovation showcase
              happening from <span className="font-bold">September 1–4, 2025</span>.
            </p>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold mb-16">
            NOMINATE YOUR STARTUP
          </Button>

          {/* Where We're Going */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Where We're
                <br />
                Going
              </h3>
              <div className="border-t-2 border-green-500 w-24 mb-8"></div>
              <p className="text-lg">We'll be bringing the GITEX roadshow to all six geopolitical zones in Nigeria.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">South West</h4>
                  <p className="text-gray-300">Lagos State</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">South South</h4>
                  <p className="text-gray-300">Akwa Ibom State</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">North East</h4>
                  <p className="text-gray-300">Gombe State</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">North Central</h4>
                  <p className="text-gray-300">Abuja FCT</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">South East</h4>
                  <p className="text-gray-300">Enugu State</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">North West</h4>
                  <p className="text-gray-300">Kano State</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Apply Section */}
      <section id="apply" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why You Should Apply</h2>
              <div className="border-t-2 border-green-500 w-24 mb-8"></div>
              <p className="text-lg leading-relaxed">
                We're looking for bold, local innovators who are solving real problems with scalable tech solutions.
                This is your chance to:
              </p>
            </div>

            <div className="space-y-4 relative">
              <Card className="bg-gray-800 border-green-500 border-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">
                    Pitch Your Startup Before A Jury Of Ecosystem Leaders, Investors, And Partners.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-2 translate-x-4 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Gain National Visibility And Prepare For GITEX Global Dubai.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform rotate-1 -translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Represent Your Zone At Nigeria's Biggest Tech Showcase.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-1 translate-x-6 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Connect With Hubs, Media, Investors, And Policymakers.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Who Can Apply */}
          <div id="eligibility" className="mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Who Can Apply?</h3>
                <div className="border-t-2 border-green-500 w-24 mb-8"></div>
                <p className="text-lg leading-relaxed mb-8">
                  If you're a startup founder or part of a growing tech venture based in Nigeria, we want to hear from
                  you. Eligible applicants include:
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold">
                  NOMINATE YOUR STARTUP
                </Button>
              </div>

              <div className="relative">
                <Card className="bg-gray-800 border-green-500 border-2 transform rotate-2 mb-4 hover:rotate-0 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-white">Early-stage or growth-stage tech startups</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-1 translate-x-8 mb-4 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-white">
                      Sector: HealthTech, AgriTech, FinTech, AI, EdTech, ClimateTech, CreativeTech, etc.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-green-500 border-2 transform rotate-1 -translate-x-4 mb-4 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-white">Registered or in-progress with CAC or Nigeria Startup Portal</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-2 translate-x-12 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-white">Based in any of Nigeria's six geopolitical zones</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="bg-gray-800 border-green-500 border-2 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-8 text-center">Follow The Journey</h3>
              <div className="border-t-2 border-green-500 w-24 mx-auto mb-8"></div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mb-8">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Twitter className="w-6 h-6" />
                </div>
                <div className="bg-green-600 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="bg-green-600 p-3 rounded-lg">
                  <Instagram className="w-6 h-6" />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Meet Us</h4>
                    <p className="text-gray-300">790 Cadastral Zone, Wuye District, Abuja.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Call Us</h4>
                    <p className="text-gray-300">08182887766</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email Us</h4>
                    <p className="text-gray-300">info@startup.gov.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177282857157!2d7.491302!3d9.057081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0b%3A0x99a8fe4168c50bc8!2sWuye%20District%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GITEX Nigeria Location"
              />
            </div>
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
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
