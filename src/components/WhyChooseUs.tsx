import { 
  Award, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Settings,
  Shield,
  Headphones
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Certified technicians with years of experience in security system installation and maintenance.",
      features: ["Certified professionals", "Quality workmanship", "Industry standards compliance"]
    },
    {
      icon: Settings,
      title: "Innovation & Technology",
      description: "We use the latest technology and cutting-edge equipment from trusted global brands.",
      features: ["Latest technology", "Premium brands", "Future-proof solutions"]
    },
    {
      icon: DollarSign,
      title: "Affordable Solutions",
      description: "Competitive pricing without compromising on quality. We offer flexible payment options.",
      features: ["Competitive pricing", "Flexible payments", "Value for money"]
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Our customers are our priority. We ensure every project exceeds expectations.",
      features: ["Customer-focused", "Satisfaction guarantee", "Long-term relationships"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency response for all our clients.",
      features: ["24/7 availability", "Emergency response", "Remote monitoring"]
    },
    {
      icon: Shield,
      title: "Reliability & Trust",
      description: "Proven track record with hundreds of successful installations across Tanzania.",
      features: ["Proven track record", "Reliable service", "Trusted partner"]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BZ TECH CO. LIMITED?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When it comes to security, you need a partner you can trust. Here's why hundreds of 
            clients across Tanzania choose us for their security and technology needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group">
                <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{reason.description}</p>
                  
                  <ul className="space-y-2">
                    {reason.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Our Track Record Speaks for Itself
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">5+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border rounded-xl p-8 max-w-2xl mx-auto">
            <Headphones className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Secure Your Property?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied customers who trust us with their security needs. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => window.open('tel:+255123456789', '_self')}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;