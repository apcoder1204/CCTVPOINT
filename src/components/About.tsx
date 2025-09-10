import { Shield, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const rotatingImages = [
    {
      src: "/img/cctv.jpeg",
      alt: "CCTV Security Systems",
      title: "CCTV Security Systems",
      subtitle: "Professional surveillance solutions"
    },
    {
      src: "/img/alarms.jpeg",
      alt: "Alarm Systems",
      title: "Alarm Systems", 
      subtitle: "Advanced security protection"
    },
    {
      src: "/img/fence.jpg",
      alt: "Electric Fencing",
      title: "Electric Fencing",
      subtitle: "Perimeter security solutions"
    },
    {
      src: "/img/picture1.jpg",
      // alt: "Video Intercoms",
      // title: "Video Intercoms",
      // subtitle: "Smart communication systems"
    },
    {
      src: "/img/network.jpeg",
      alt: "Networking Solutions",
      title: "Networking Solutions",
      subtitle: "Complete infrastructure setup"
    }
    ,
    {
      src: "/img/team.jpg",
      // alt: "Access Control",
      // title: "Access Control",
      // subtitle: "Advanced security solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % rotatingImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-security-grey-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About BZ TECH CO. LIMITED
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for comprehensive security and technology solutions in Tanzania. 
            We combine expertise, innovation, and reliability to protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground">
              Founded with a mission to make security accessible and reliable for everyone in Tanzania, 
              BZ TECH CO. LIMITED has grown to become a leading provider of security and technology solutions. 
              Trading as CCTV POINT, we specialize in delivering cutting-edge security systems that give our 
              clients peace of mind.
            </p>
            <p className="text-muted-foreground">
              From residential homes to large commercial facilities, our team of certified professionals 
              ensures that every installation meets the highest standards of quality and reliability. 
              We're not just about selling products – we're about building lasting relationships and 
              providing ongoing support to keep your security systems running optimally.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Systems Installed</div>
              </div>
            </div>
          </div>

          {/* Rotating Images Carousel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 overflow-hidden relative">
              {/* Current Image */}
              <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                <img 
                  src={rotatingImages[currentImageIndex].src}
                  alt={rotatingImages[currentImageIndex].alt}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
                <h4 className="text-2xl font-bold mb-2 transition-all duration-500">
                  {rotatingImages[currentImageIndex].title}
                </h4>
                <p className="text-lg opacity-90 transition-all duration-500">
                  {rotatingImages[currentImageIndex].subtitle}
                </p>
              </div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {rotatingImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide reliable, innovative, and affordable security solutions that protect 
                homes and businesses across Tanzania, ensuring peace of mind for our clients.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be Tanzania's leading security technology company, setting the standard for 
                excellence in security solutions and customer service throughout East Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrity, innovation, reliability, and customer satisfaction drive everything we do. 
                We believe in building long-term relationships based on trust and excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;