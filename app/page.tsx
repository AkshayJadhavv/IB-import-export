import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import WhyUs from "./components/sections/WhyUs";
//import GlobalPresence from "./components/sections/GlobalPresence";
import Stats from "./components/sections/Stats";
//import Gallery from "./components/sections/Gallery";
import Inquiry from "./components/sections/Inquiry";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Stats />
      {/* <GlobalPresence />
      <Gallery /> */}
      <Inquiry />
      <Contact />
      <Footer />
    </main>
  );
}
