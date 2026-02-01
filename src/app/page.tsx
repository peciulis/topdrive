import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Services from "@/components/Services";
import TradeIn from "@/components/TradeIn";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] selection:bg-[#ff3c00] selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Services />
      <TradeIn />
      <Philosophy />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
