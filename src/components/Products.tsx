import { 
  Camera, 
  Shield, 
  Wifi, 
  Monitor, 
  Zap,
  DoorOpen,
  Bell,
  Video,
  Fence,
  Car,
  Network,
  Laptop
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      title: "CCTV Systems",
      icon: Camera,
      description: "Professional surveillance solutions for comprehensive security monitoring",
      products: [
        "IP Cameras (HIKVISION & Tiandy)",
        "Analog Camera Systems", 
        "DVR/NVR Recording Systems",
        "Remote Monitoring Solutions",
        "Night Vision Cameras",
        "Dome & Bullet Cameras"
      ],
      color: "text-primary"
    },
    {
      title: "Alarm & Access Control",
      icon: Shield,
      description: "Advanced security systems with mobile app integration and real-time alerts",
      products: [
        "Burglar Alarm Systems",
        "Access Control Systems",
        "Keycard & Biometric Readers",
        "Mobile App Integration",
        "Panic Buttons",
        "Intrusion Detection"
      ],
      color: "text-accent"
    },
    {
      title: "Video Intercoms",
      icon: Video,
      description: "Smart communication systems for secure visitor management",
      products: [
        "Video Door Phones",
        "IP Video Intercoms",
        "Multi-Unit Systems",
        "Mobile Integration",
        "Recording Capabilities",
        "Remote Door Release"
      ],
      color: "text-security-blue-light"
    },
    {
      title: "Electric Fencing & Gate Motors",
      icon: Zap,
      description: "NEMTEK electric fence systems and automated gate solutions",
      products: [
        "Electric Fence Systems (NEMTEK)",
        "Sliding Gate Motors",
        "Swing Gate Motors", 
        "Smart Gate Controls",
        "Remote Access Systems",
        "Solar-Powered Options"
      ],
      color: "text-destructive"
    },
    {
      title: "Networking Solutions",
      icon: Network,
      description: "Complete network infrastructure and connectivity solutions",
      products: [
        "Structured Cabling",
        "Network Planning & Setup",
        "WiFi Solutions",
        "Network Troubleshooting",
        "Fiber Optic Installation",
        "Network Security"
      ],
      color: "text-secondary-foreground"
    },
    {
      title: "Computer Sales",
      icon: Laptop,
      description: "Quality computers and accessories for business and personal use",
      products: [
        "Laptops & Desktops",
        "Printers & Scanners",
        "Computer Accessories",
        "Networking Equipment",
        "Software Solutions",
        "Technical Support"
      ],
      color: "text-muted-foreground"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security and technology solutions tailored to meet your specific needs. 
            From consultation to installation and ongoing maintenance, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services Section */}
        <div className="bg-security-grey-light/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Professional Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end service delivery ensuring your security systems are perfectly designed, 
              installed, and maintained for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Site Survey</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive assessment of your property to design the optimal security solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">System Design</h4>
              <p className="text-sm text-muted-foreground">
                Custom security system design tailored to your specific requirements and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DoorOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Installation</h4>
              <p className="text-sm text-muted-foreground">
                Professional installation by certified technicians ensuring optimal system performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Maintenance</h4>
              <p className="text-sm text-muted-foreground">
                Ongoing support and maintenance to keep your security systems running smoothly.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
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
    </section>
  );
};

export default Products;