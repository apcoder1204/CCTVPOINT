import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/img/Picture1.jpg" 
                alt="BZ Tech Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">BZ TECH CO. LIMITED</h1>
              <p className="text-xs text-muted-foreground">Trading as CCTV POINT</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => location.pathname === '/' ? scrollToSection('home') : navigate('/')} 
              className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button 
              onClick={() => navigate('/products')} 
              className={`transition-colors ${location.pathname === '/products' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Products & Services
            </button>
            <button 
              onClick={() => location.pathname === '/' ? scrollToSection('team') : navigate('/#team')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>+255 759 875 769</span>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-accent/90 text-accent-foreground">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => location.pathname === '/' ? scrollToSection('home') : navigate('/')} 
                className={`text-left transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button 
                onClick={() => navigate('/products')} 
                className={`text-left transition-colors ${location.pathname === '/products' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Products & Services
              </button>
              <button 
                onClick={() => location.pathname === '/' ? scrollToSection('team') : navigate('/#team')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Team
              </button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-foreground hover:text-primary transition-colors">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-foreground hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+255 123 456 789</span>
                </div>
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;