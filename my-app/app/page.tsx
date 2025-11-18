import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SpaceSection from "./components/Space";
import WhyNGC from "./components/WhyNGC";
import ContactSection from "./components/Contact-us";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SpaceSection />
        <WhyNGC />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}