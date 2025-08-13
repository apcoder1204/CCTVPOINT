import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">BZ</span>
              </div>
              <div>
                <h3 className="font-bold">BZ TECH CO. LIMITED</h3>
                <p className="text-xs text-primary-foreground/80">Trading as CCTV POINT</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your trusted partner for comprehensive security and technology solutions in Tanzania.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              <strong>Slogan:</strong> "Secure Your Space. Stay Connected."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>CCTV Systems Installation</li>
              <li>Access Control Systems</li>
              <li>Alarm Systems</li>
              <li>Electric Fence Systems</li>
              <li>Gate Motors</li>
              <li>Networking Solutions</li>
              <li>Computer Sales</li>
              <li>24/7 Support & Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">
                    Ilomba & Kabwe Street<br />
                    Mbeya, Tanzania
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">+255 123 456 789</p>
                  <p className="text-primary-foreground/80">+255 987 654 321</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">bztechco.ltd.tz@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
                <div className="text-primary-foreground/80">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-4PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} BZ TECH CO. LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => window.open('https://instagram.com/cctv_point.tz', '_blank')}
                className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
              >
                Instagram
              </button>
              <button 
                onClick={() => window.open('https://facebook.com/cctvpoint.tz', '_blank')}
                className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
              >
                Facebook
              </button>
              <button 
                onClick={() => window.open('https://wa.me/255123456789', '_blank')}
                className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;