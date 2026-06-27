import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useEffect(() => {
  AOS.init({
  duration: 1200,
  once: true,
  offset: 80,
  easing: "ease-out",
});
}, []);
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;