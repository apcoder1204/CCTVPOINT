const Partners = () => {
  const partners = [
    {
      
      description: "World's leading supplier of video surveillance products and solutions",
      logo: "/img/Picture2.png"
    },
    {
      
      description: "Professional video surveillance and security solution provider",
      logo: "/img/Picture5.png"
    },
    {
      
      description: "Leading manufacturer of electric fence systems and perimeter security",
      logo: "/img/Picture3.png"
    },
    {
      
      description: "Innovative networking solutions and wireless technology products",
      logo: "/img/Picture4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with world-renowned brands to bring you the highest quality security 
            and technology solutions. Our partnerships ensure access to cutting-edge products 
            and reliable support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-xl border-2 border-border p-6 h-32 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors group-hover:shadow-lg">
                <div className="text-center">
                  <div className="w-22 h-20 rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs font-semibold text-foreground">{partner.name}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-security-grey-light/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Partnerships Mean for You
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic partnerships with leading brands ensure you get the best products, 
              competitive pricing, and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
              <p className="text-sm text-muted-foreground">
                Access to the latest, highest-quality security products from trusted global brands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Competitive Pricing</h4>
              <p className="text-sm text-muted-foreground">
                Direct partnership benefits passed on to you through competitive pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">
                Certified training and ongoing support from our partner manufacturers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Warranty Protection</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive warranties and manufacturer support for all products.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certified & Authorized Dealer
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-foreground">Authorized Dealer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary font-bold">⚡</span>
              </div>
              <span className="text-sm font-medium text-foreground">Technical Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary font-bold">🎓</span>
              </div>
              <span className="text-sm font-medium text-foreground">Factory Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary font-bold">🌟</span>
              </div>
              <span className="text-sm font-medium text-foreground">Premium Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;