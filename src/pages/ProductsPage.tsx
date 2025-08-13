import { 
  Camera, Shield, Wifi, Monitor, Zap, DoorOpen, Bell, Video, Fence, Car, Network, Laptop, ArrowLeft} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const ProductsPage = () => {
  const navigate = useNavigate();

  const productCategories = [
    {
      title: "CCTV Systems",
      icon: Camera,
      description: "Professional surveillance solutions for comprehensive security monitoring",
      image: "/img/cctv.jpeg", 
      products: [
        "IP Cameras (HIKVISION & Tiandy)",
        "Analog Camera Systems", 
        "DVR/NVR Recording Systems",
        "Remote Monitoring Solutions",
        "Night Vision Cameras",
        "Dome & Bullet Cameras"
      ],
      features: [
        "High-resolution video recording",
        "Night vision capabilities",
        "Remote mobile access",
        "Motion detection alerts",
        "Cloud storage options",
        "Professional installation"
      ],
      color: "text-primary"
    },
    {
      title: "Alarm & Access Control",
      icon: Shield,
      description: "Advanced security systems with mobile app integration and real-time alerts",
      image: "/img/alarms.jpeg", 
      products: [
        "Burglar Alarm Systems",
        "Access Control Systems",
        "Keycard & Biometric Readers",
        "Mobile App Integration",
        "Panic Buttons",
        "Intrusion Detection"
      ],
      features: [
        "24/7 monitoring",
        "Mobile app control",
        "Real-time notifications",
        "Professional monitoring",
        "Easy installation",
        "Reliable performance"
      ],
      color: "text-accent"
    },
    {
      title: "Video Intercoms",
      icon: Video,
      description: "Smart communication systems for secure visitor management",
      image: "/img/intercoms.jpeg", 
      products: [
        "Video Door Phones",
        "IP Video Intercoms",
        "Multi-Unit Systems",
        "Mobile Integration",
        "Recording Capabilities",
        "Remote Door Release"
      ],
      features: [
        "Crystal clear video",
        "Two-way communication",
        "Mobile app access",
        "Recording capabilities",
        "Easy installation",
        "Professional support"
      ],
      color: "text-security-blue-light"
    },
    {
      title: "Electric Fencing & Gate Motors",
      icon: Zap,
      description: "NEMTEK electric fence systems and automated gate solutions",
      image: "/img/fence.jpg", 
      products: [
        "Electric Fence Systems (NEMTEK)",
        "Sliding Gate Motors",
        "Swing Gate Motors", 
        "Smart Gate Controls",
        "Remote Access Systems",
        "Solar-Powered Options"
      ],
      features: [
        "High security perimeter",
        "Solar powered options",
        "Remote control access",
        "Professional installation",
        "Maintenance support",
        "Warranty coverage"
      ],
      color: "text-destructive"
    },
    {
      title: "Networking Solutions",
      icon: Network,
      description: "Complete network infrastructure and connectivity solutions",
      image: "/img/network.jpeg", 
      products: [
        "Structured Cabling",
        "Network Planning & Setup",
        "WiFi Solutions",
        "Network Troubleshooting",
        "Fiber Optic Installation",
        "Network Security"
      ],
      features: [
        "Professional planning",
        "Quality equipment",
        "Expert installation",
        "Ongoing support",
        "Performance optimization",
        "Security implementation"
      ],
      color: "text-secondary-foreground"
    },
    {
      title: "Computer Sales",
      icon: Laptop,
      description: "Quality computers and accessories for business and personal use",
      image: "/img/computers.jpeg", 
      products: [
        "Laptops & Desktops",
        "Printers & Scanners",
        "Computer Accessories",
        "Networking Equipment",
        "Software Solutions",
        "Technical Support"
      ],
      features: [
        "Quality hardware",
        "Warranty coverage",
        "Technical support",
        "Software installation",
        "Maintenance services",
        "Upgrade options"
      ],
      color: "text-muted-foreground"
    }
  ];

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
                {/* Page Header */}
        <div 
          className="relative py-16 overflow-hidden"
                      style={{
              backgroundImage: 'url("/img/Smart-Home-Security-Security.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mr-4 hover:bg-primary/10 text-white hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Products & Services
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive security and technology solutions tailored to meet your specific needs. 
                From consultation to installation and ongoing maintenance, we've got you covered.
              </p>
            </div>
          </div>
        </div>

      {/* Products Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={`${category.title} products`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="p-3 bg-background/90 backdrop-blur-sm rounded-lg">
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-3">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Products List */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Available Products:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.products.map((product, productIndex) => (
                          <div key={productIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToContact}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Get Quote for {category.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-security-grey-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end service delivery ensuring your security systems are perfectly designed, 
              installed, and maintained for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Site Survey</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive assessment of your property to design the optimal security solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">System Design</h4>
              <p className="text-sm text-muted-foreground">
                Custom security system design tailored to your specific requirements and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DoorOpen className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Installation</h4>
              <p className="text-sm text-muted-foreground">
                Professional installation by certified technicians ensuring optimal system performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Maintenance</h4>
              <p className="text-sm text-muted-foreground">
                Ongoing support and maintenance to keep your security systems running smoothly.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Custom Solution
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductsPage; 