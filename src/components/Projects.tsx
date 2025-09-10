import { Building, Home, ShoppingBag, Warehouse, GraduationCap, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const projectTypes = [
    {
      icon: Home,
      title: "Residential Security",
      description: "Comprehensive home security solutions for peace of mind",
      projects: [
        "Villa Security Systems in Mbeya",
        "Apartment Complex CCTV Installation", 
        "Smart Home Security Integration",
        "Residential Alarm Systems"
      ],
      stats: "200+ Homes Secured"
    },
    {
      icon: Building,
      title: "Commercial Buildings",
      description: "Professional security for offices and commercial spaces",
      projects: [
        "Office Building Access Control",
        "Bank Security Systems",
        "Hotel Surveillance Solutions",
        "Corporate Campus Security"
      ],
      stats: "150+ Businesses Protected"
    },
    {
      icon: ShoppingBag,
      title: "Retail Stores",
      description: "Comprehensive retail security and loss prevention",
      projects: [
        "Supermarket CCTV Systems",
        "Shopping Mall Security",
        "Pharmacy Security Solutions",
        "Electronics Store Protection"
      ],
      stats: "80+ Retail Locations"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Safe learning environments with advanced security",
      projects: [
        "University Campus Security",
        "Primary School CCTV Systems",
        "College Access Control",
        "Boarding School Surveillance"
      ],
      stats: "25+ Schools Secured"
    },
    {
      icon: Warehouse,
      title: "Industrial & Warehouses",
      description: "Heavy-duty security for industrial facilities",
      projects: [
        "Warehouse Perimeter Security",
        "Factory Surveillance Systems",
        "Industrial Access Control",
        "Logistics Center Security"
      ],
      stats: "40+ Industrial Sites"
    },
    {
      icon: Car,
      title: "Automotive & Transport",
      description: "Specialized security for transport and automotive sectors",
      projects: [
        "Car Dealership Security",
        "Transport Hub Surveillance",
        "Parking Lot Security",
        "Fleet Monitoring Systems"
      ],
      stats: "30+ Transport Facilities"
    }
  ];

  const testimonials = [
    {
      name: "John Mwalimu",
      company: "Mbeya Shopping Center",
      text: "Hakuna shida! CCTV system yetu imeboresha usalama wetu sana. Installation ilikuwa professional na support baada ya kuuza ni nzuri kabisa. Asante sana!",
      rating: 5
    },
    {
      name: "Sarah Hassan",
      company: "Residential Client",
      text: "Nimefurahi sana na home security system. Timu ilikuwa professional na system inafanya kazi vizuri. I recommend kabisa!",
      rating: 5
    },
    {
      name: "Dr. Peter Kamwene",
      company: "Mbeya Medical Center",
      text: "Security solution bora kwa medical facility yetu. Access control system imeboresha operations zetu significantly. Tunashukuru sana!",
      rating: 5
    },
    {
      name: "Mama Grace Mwambene",
      company: "Dar es Salaam Villa",
      text: "Wewe! Security system yetu ni nzuri sana. Sasa tunajisikia salama nyumbani. CCTV inafanya kazi vizuri na alarm system pia. Asante BZ Tech!",
      rating: 5
    },
    {
      name: "Raj Patel",
      company: "Arusha Electronics Store",
      text: "Excellent service from BZ Tech! Our store security has improved dramatically. The team was very professional and the system works perfectly. Highly recommended!",
      rating: 5
    },
    {
      name: "Fatima Ali",
      company: "Mwanza Hotel",
      text: "Hotel yetu imepata security system bora kabisa. Access control na CCTV zote zinafanya kazi vizuri. Staff wote wamefurahi na usalama mpya. Shukrani!",
      rating: 5
    },
    {
      name: "Prof. James Mwakyembe",
      company: "University of Dodoma",
      text: "Campus security yetu imeboreshwa sana. CCTV cameras zote zinafanya kazi vizuri na access control system ni efficient. Tunashukuru BZ Tech team!",
      rating: 5
    },
    {
      name: "Hassan Mwinyi",
      company: "Tanga Warehouse",
      text: "Warehouse yetu imepata security system bora. Perimeter fencing na CCTV cameras zote zinafanya kazi vizuri. Timu ilikuwa professional sana!",
      rating: 5
    },
    {
      name: "Sister Mary Kamau",
      company: "Kilimanjaro Hospital",
      text: "Hospital yetu imepata security solution bora. Access control system imeboresha usalama wa patients na staff. Tunashukuru sana BZ Tech!",
      rating: 5
    },
    {
      name: "Ahmed Salim",
      company: "Zanzibar Resort",
      text: "Resort yetu imepata security system ya kisasa. CCTV cameras na access control zote zinafanya kazi vizuri. Guests wote wamefurahi na usalama!",
      rating: 5
    }
  ];

  return (
    <section id="projects" className="py-20 bg-security-grey-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Projects & Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by homes, businesses, and institutions across Tanzania. 
            See how we've helped secure various types of properties with our comprehensive solutions.
          </p>
        </div>

        {/* Project Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectTypes.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{project.stats}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.projects.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="bg-card border max-w-3xl shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-primary rounded-full mr-2 animate-pulse"></div>
                  ))}
                </div>
                <div className="min-h-[120px] flex items-center justify-center">
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed transition-all duration-500 ease-in-out">
                    "{testimonials[currentTestimonialIndex].text}"
                  </p>
                </div>
                <div className="mb-6">
                  <p className="font-semibold text-foreground text-lg">{testimonials[currentTestimonialIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonialIndex].company}</p>
                </div>
                
                {/* Testimonial navigation dots */}
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      title={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Auto-rotation indicator */}
                <div className="mt-4 text-xs text-muted-foreground">
                  Testimonials auto-rotate every 4 seconds
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-primary to-security-blue-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us design and install a custom security solution for your property. 
            Contact us today for a free consultation and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => window.open('tel:+255123456789', '_self')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call for Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;