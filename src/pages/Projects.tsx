import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Home, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const projects = [
    {
      id: 1,
      title: "Sunset Ridge Subdivision",
      location: "North Valley",
      year: "2024",
      homes: 24,
      status: "Completed",
      description: "Modern single-family homes featuring open floor plans, energy-efficient designs, and premium finishes.",
      features: ["3-4 Bedrooms", "2-3 Bathrooms", "2-Car Garage", "Energy Star Certified"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Meadowbrook Estates",
      location: "East Hills",
      year: "2023",
      homes: 18,
      status: "Completed",
      description: "Luxury custom homes with spacious layouts, high-end materials, and beautiful landscaping.",
      features: ["4-5 Bedrooms", "3-4 Bathrooms", "3-Car Garage", "Custom Designs"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Pine Valley Commons",
      location: "West Side",
      year: "2024",
      homes: 32,
      status: "In Progress",
      description: "Affordable family homes with modern amenities and community green spaces.",
      features: ["2-3 Bedrooms", "2 Bathrooms", "1-2 Car Garage", "Community Park"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Heritage Oaks",
      location: "South District",
      year: "2023",
      homes: 15,
      status: "Completed",
      description: "Traditional style homes with modern conveniences in a mature neighborhood setting.",
      features: ["3-4 Bedrooms", "2-3 Bathrooms", "2-Car Garage", "Mature Trees"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Riverside Crossing",
      location: "Downtown",
      year: "2024",
      homes: 28,
      status: "Planning",
      description: "Contemporary townhomes and single-family residences near the city center.",
      features: ["2-4 Bedrooms", "2-3 Bathrooms", "Attached Garage", "Urban Location"],
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Mountain View Terrace",
      location: "Highland Area",
      year: "2023",
      homes: 20,
      status: "Completed",
      description: "Elevated homes with stunning mountain views and premium outdoor living spaces.",
      features: ["3-5 Bedrooms", "3-4 Bathrooms", "2-3 Car Garage", "Mountain Views"],
      image: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "In Progress":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Planning":
        return "bg-gray-200 text-gray-700 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EICON Builders and Supply</h1>
                <p className="text-xs text-gray-500">Building Dreams Since 1999</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigateToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
              <Link to="/projects" className="text-gray-700 hover:text-amber-600 transition-colors">Projects</Link>
              <button onClick={() => handleNavigateToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              <button onClick={() => handleNavigateToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the quality subdivisions and custom homes we've built across the region.
            Each project represents our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                    variant="outline"
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </span>
                    <span className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {project.homes} homes
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your custom home or subdivision project.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={() => handleNavigateToSection('contact')}>
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;