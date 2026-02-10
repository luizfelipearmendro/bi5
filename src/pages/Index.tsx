import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
