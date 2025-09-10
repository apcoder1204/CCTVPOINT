import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cctvImage from "@/assets/cctv-camera.jpg";
import accessControlImage from "@/assets/access-control.jpg";
import videoIntercomImage from "@/assets/video-intercom.jpg";
import electricFenceImage from "@/assets/electric-fence.jpg";
import gateMotorImage from "@/assets/gate-motor.jpg";
import networkingImage from "@/assets/networking.jpg";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      name: "HIKVISION IP Cameras",
      category: "CCTV Systems",
      image: cctvImage,
      description: "Professional IP surveillance with 4K resolution and AI analytics"
    },
    {
      name: "Biometric Access Control",
      category: "Access Control",
      image: accessControlImage,
      description: "Advanced fingerprint and card reader security systems"
    },
    {
      name: "Video Door Intercoms",
      category: "Intercoms",
      image: videoIntercomImage,
      description: "Smart video communication with mobile app integration"
    },
    {
      name: "NEMTEK Electric Fencing",
      category: "Perimeter Security",
      image: electricFenceImage,
      description: "High-voltage electric fence systems for maximum protection"
    },
    {
      name: "Smart Gate Motors",
      category: "Gate Automation",
      image: gateMotorImage,
      description: "Automated sliding and swing gates with remote control"
    },
    {
      name: "Network Infrastructure",
      category: "Networking",
      image: networkingImage,
      description: "Complete structured cabling and WiFi solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-0">
          <div className="relative h-80 overflow-hidden">
            {products.map((product, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center bg-white/95 backdrop-blur-sm">
                    <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20">
                      {product.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCarousel;