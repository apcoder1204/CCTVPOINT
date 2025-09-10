import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Projects />
      <Partners />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
