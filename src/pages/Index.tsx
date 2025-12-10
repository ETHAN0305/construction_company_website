import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Hammer,
  Users,
  Award,
  ArrowRight,
  Building,
  Truck,
  CheckCircle,
  Menu
} from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "From concept to completion, we build your dream home with attention to every detail."
    },
    {
      icon: Building,
      title: "Subdivision Development",
      description: "Complete subdivision planning and development with modern infrastructure."
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation services."
    },
    {
      icon: Truck,
      title: "Building Supply",
      description: "Quality materials and supplies for contractors and DIY enthusiasts."
    }
  ];

  const stats = [
    { number: "500+", label: "Homes Built" },
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Subdivisions" },
    { number: "100%", label: "Satisfaction" }
  ];

  const recentProjects = [
    {
      title: "Sunset Ridge Subdivision",
      location: "North Valley",
      homes: 24,
      status: "Completed",
      image: "/placeholder.svg"
    },
    {
      title: "Pine Valley Commons",
      location: "West Side",
      homes: 32,
      status: "In Progress",
      image: "/placeholder.svg"
    },
    {
      title: "Heritage Oaks",
      location: "South District",
      homes: 15,
      status: "Completed",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EICON Builders and Supply</h1>
                <p className="text-xs text-gray-500">Building Dreams Since 1999</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('services')} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
              <Link to="/projects" className="text-gray-700 hover:text-amber-600 transition-colors">Projects</Link>
              <button onClick={() => handleNavigation('about')} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              <button onClick={() => handleNavigation('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-8">
                    <button
                      onClick={() => handleNavigation('services')}
                      className="text-left text-lg text-gray-700 hover:text-amber-600 transition-colors py-2"
                    >
                      Services
                    </button>
                    <Link
                      to="/projects"
                      className="text-left text-lg text-gray-700 hover:text-amber-600 transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <button
                      onClick={() => handleNavigation('about')}
                      className="text-left text-lg text-gray-700 hover:text-amber-600 transition-colors py-2"
                    >
                      About
                    </button>
                    <button
                      onClick={() => handleNavigation('contact')}
                      className="text-left text-lg text-gray-700 hover:text-amber-600 transition-colors py-2"
                    >
                      Contact
                    </button>
                    <Button className="bg-amber-500 hover:bg-amber-600 mt-4">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-500 text-gray-900 mb-4">Trusted Since 1999</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building Quality Homes in
                <span className="text-amber-400">Your Community</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EICON Builders and Supply specializes in custom home construction and subdivision development.
                We combine traditional craftsmanship with modern techniques to create homes that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 text-gray-900 hover:bg-amber-600">
                  <Link to="/projects" className="flex items-center">
                    View Our Projects
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" onClick={() => handleNavigation('contact')}>
                  <span className="flex items-center">
                    Get Free Quote
                    <Phone className="h-5 w-5 ml-2" />
                  </span>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="./logo.png"
                  alt="EICON Builders Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom homes to complete subdivisions, we provide comprehensive construction and supply services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our latest subdivision developments and custom home projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </span>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{project.homes} homes</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                View All Projects
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About EICON Builders</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, EICON Builders and Supply has been a trusted name in residential construction
                and building supplies. We specialize in creating quality subdivisions and custom homes that
                families are proud to call home.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence, attention to detail, and customer satisfaction has made us
                the preferred choice for homeowners and contractors throughout the region.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3" />
                  <span className="text-gray-700">Licensed and Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3" />
                  <span className="text-gray-700">25+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3" />
                  <span className="text-gray-700">Quality Materials & Craftsmanship</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3" />
                  <span className="text-gray-700">Full-Service Construction & Supply</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="./placeholder.svg"
                  alt="EICON Builders team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our team for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-300">(555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Monday - Friday, 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-300">info@eiconbuilders.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Office Location</h4>
                      <p className="text-gray-300">1234 Construction Way</p>
                      <p className="text-gray-300">Builder City, BC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a detailed quote for your project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="">Select a project type</option>
                      <option value="custom-home">Custom Home</option>
                      <option value="subdivision">Subdivision Development</option>
                      <option value="renovation">Renovation/Remodeling</option>
                      <option value="supplies">Building Supplies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EICON Builders and Supply</h3>
                  <p className="text-gray-400 text-sm">Building Dreams Since 1999</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner for custom home construction, subdivision development, and building supplies.
                Quality craftsmanship and customer satisfaction guaranteed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleNavigation('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
                <li><Link to="/projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
                <li><button onClick={() => handleNavigation('about')} className="hover:text-amber-400 transition-colors">About</button></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@eiconbuilders.com</li>
                <li>1234 Construction Way<br />Builder City, BC 12345</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EICON Builders and Supply. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
