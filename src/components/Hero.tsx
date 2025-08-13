import { Button } from "@/components/ui/button";
import { Shield, Camera, Lock, ArrowRight } from "lucide-react";

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
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToProducts}
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
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-security-blue-light rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white/80 text-sm">Security Dashboard</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Camera className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">CCTV Active</div>
                    <div className="text-white/70 text-sm">12 Cameras Online</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Lock className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Access Control</div>
                    <div className="text-white/70 text-sm">System Armed</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">System Status</span>
                    <span className="text-green-400 text-sm">All Clear</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;