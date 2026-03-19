import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Achievements } from "../components/Achievements";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";

export const Screen = () => {
  return (
    <div className="min-h-screen bg-[#070910] text-white">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Contacts />
      <Footer />
    </div>
  );
};