import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import ProductCarousel from "./ProductCarousel";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-security-grey-light/30 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <Shield className="w-5 h-5" />
                <span>Tanzania's Trusted Security Partner</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Secure Your Space.
                <span className="text-primary block">Stay Connected.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Professional security and technology solutions for homes and businesses across Tanzania. 
                From CCTV systems to access control, we've got you covered with cutting-edge technology and expert installation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToProducts}
                className="hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                View Our Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Product Showcase Carousel */}
          <div className="relative">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;