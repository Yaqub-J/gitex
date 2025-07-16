"use client"

import { useState, useEffect, useRef } from "react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && event.target instanceof Node && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navbar */}
      <nav
        className={`fixed top-2 left-0 w-screen max-w-full px-0 z-50 transition-all duration-500 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-[95%] md:w-auto sm:px-4 md:px-0$${showNavbar ? " opacity-100 translate-y-0" : " opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full px-2 py-1 shadow-2xl flex items-center justify-between sm:px-4 sm:py-2 md:px-6 md:py-3 overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/images/nigeria-logo.png" alt="Nigeria" className="h-10 w-auto sm:h-12" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 md:space-x-6">
              <a href="#about" className="text-white hover:text-green-400 transition-colors text-xs sm:text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#eligibility" className="text-white hover:text-green-400 transition-colors text-xs sm:text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Eligibility</a>
              <Link href="/partnerships" className="text-white hover:text-green-400 transition-colors text-xs sm:text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors text-xs sm:text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">NOMINATE</Button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden bg-black/90 backdrop-blur-md border border-green-500/30 rounded-lg shadow-xl mt-2 p-2 sm:p-4 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-2 sm:space-y-4">
            <a href="#about" className="text-white hover:text-green-400 transition-colors text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#eligibility" className="text-white hover:text-green-400 transition-colors text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Eligibility</a>
            <Link href="/partnerships" className="text-white hover:text-green-400 transition-colors text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base" onClick={() => setIsMobileMenuOpen(false)}>NOMINATE</Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-black bg-opacity-70">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-1000"
          style={{
            backgroundImage: `url('${slideshowImages[currentSlide]}')`,
          }}
        />
        <div className="relative z-10 text-center px-2 sm:px-4">
          <div className="mb-4 sm:mb-8">
            <img src="/images/nigeria-logo.png" alt="Nigeria" className="h-16 sm:h-20 md:h-48 w-auto mx-auto" />
          </div>

          <div className="border-t-2 border-white w-16 sm:w-24 mx-auto mb-4 sm:mb-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 italic">Unveiling Innovation. Connecting Ecosystems.</p>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-12 italic">Showcasing Nigeria to the World.</p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 sm:space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-xs sm:text-sm md:text-base">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm md:text-base">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm md:text-base">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm md:text-base">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Roadshows Section */}
      <section id="about" className="py-10 sm:py-20 px-2 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">About the GITEX Nigeria 2025 North-West Roadshow</h2>
          <div className="border-t-2 border-green-500 w-16 sm:w-24 mx-auto mb-6 sm:mb-12"></div>

          <div className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 space-y-2 sm:space-y-4">
            <p>
              <span className="font-bold">GITEX Nigeria 2025 Regional Roadshow – North West Edition</span> is a high-impact innovation engagement program hosted by the National Information Technology Development Agency (NITDA), in collaboration with BigTech Agency Ltd as the official implementation partner for the North West. Scheduled for <span className="font-bold">Tuesday, July 29, 2025</span> at Coronation Hall, Kano Government House, this event is a strategic build-up to the national GITEX Nigeria 2025 event in Abuja.
            </p>
            <p>
              <span className="font-bold">Theme:</span> Bridging Nigeria’s Innovation with Global Opportunities
            </p>
            <p>
              The Kano roadshow is designed to identify and showcase high-potential tech startups, amplify the visibility of the North West innovation ecosystem, and foster regional collaboration with national and global stakeholders. It is a gateway to global opportunity for the North West innovation ecosystem.
            </p>
            <p>
              <span className="font-bold">Key Objectives:</span>
              <ul className="list-disc text-left ml-8 mt-2">
                <li>Identify and spotlight high-potential startups in the North West</li>
                <li>Strengthen federal-state collaboration in innovation</li>
                <li>Showcase the North West ecosystem to a national audience</li>
                <li>Foster regional unity through tech and youth mobilisation</li>
                <li>Inspire participation in the national digital economy</li>
                <li>Official launch of the SAAS Suite by BigTech Agency</li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Organised by:</span> KAOUN International (GITEX Global, GITEX Africa), NITDA, ONDI, and BigTech Agency Ltd (North West Implementation Partner). Supported by the Federal Ministry of Communications, Innovation and Digital Economy.
            </p>
            <p>
              <span className="font-bold">Venue:</span> Coronation Hall, Kano Government House, Kano State<br/>
              <span className="font-bold">Date:</span> Tuesday, July 29, 2025<br/>
              <span className="font-bold">Time:</span> 8:00AM - 4:00PM (WAT)
            </p>
            <p>
              <span className="font-bold">Expected Audience:</span> Startup founders, tech entrepreneurs, innovation hubs, government officials, academia, investors, media, and more.
            </p>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold mb-8 sm:mb-16">
            NOMINATE YOUR STARTUP
          </Button>
        </div>
      </section>

      {/* Why You Should Apply Section */}
      <section id="apply" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why You Should Join the Roadshow</h2>
              <div className="border-t-2 border-green-500 w-24 mb-8"></div>
              <p className="text-lg leading-relaxed">
                The GITEX Nigeria 2025 North-West Roadshow is a launchpad for high-potential founders solving real problems with technology. Startups selected from the Kano regional showcase will be granted exclusive exhibition slots at GITEX Nigeria 2025 in Abuja.
              </p>
              <ul className="list-disc ml-8 mt-4 text-lg text-left">
                <li>Free exhibition booth at GITEX Nigeria 2025 Startup Pavilion</li>
                <li>National & international visibility to 5,000+ participants, investors, and media</li>
                <li>Direct engagement with potential funders, corporate partners, and accelerators</li>
                <li>Featured media coverage across print, TV, and online channels</li>
                <li>Mentorship and post-event opportunities for further support and funding</li>
              </ul>
            </div>

            <div className="space-y-4 relative">
              <Card className="bg-gray-800 border-green-500 border-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">
                    Pitch your startup before a jury of ecosystem leaders, investors, and partners.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-2 translate-x-4 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Gain national and international visibility at GITEX Nigeria 2025.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform rotate-1 -translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Network with investors, policymakers, and tech leaders.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-green-500 border-2 transform -rotate-1 translate-x-6 hover:rotate-0 hover:translate-x-0 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">Be part of Kano’s journey to become a leading digital hub in Northern Nigeria.</p>
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
