import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, LinkedinIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Baraka Zambi",
      position: "Managing Director & Founder",
      department: "Executive Leadership",
      bio: "Visionary leader with 10+ years in security technology. Leads strategic direction and client relationships.",
      email: "baraka@bztechco.com",
      phone: "+255 759 875 769",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Maria Kimaro", 
      position: "Assistant Director",
      department: "Executive Leadership",
      email: "baraka@bztechco.com",
      phone: "+255 712 286 081",
      image: "/img/maria.jpg"
    },
    {
      id: 3,
      name: "Yusuph Issack",
      position: "Operations Manager", 
      department: "Operations",
      email: "Baraka@bztechco.com",
      phone: "+255 759 875 769",
      image: "/img/yusuph.jpg"
    },
    {
      id: 4,
      name: "Uria Kibona",
      position: "Sales & Marketing Manager",
      department: "Business Development", 
      email: "Baraka@bztechco.com",
      phone: "+255 759 875 769",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced management team brings together expertise in security technology, 
            business operations, and customer service to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="pt-6 flex justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border border-border bg-muted">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center scale-125"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.department}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-primary" />
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    title={`Call ${member.name}`}
                  >
                    <Phone className="w-4 h-4 text-primary" />
                  </a>
                
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
// bztechco.ltd.tz@gmail.com

export default Team;