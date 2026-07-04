import Navbar from "@/components/Navbar";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  About,
  Clients,
  Contact,
  CtaBand,
  Hero,
  News,
  Products,
  Quality,
  Services,
  Stats,
  TopBar,
  WhyAirox,
} from "@/components/Sections";

export default function Home() {
  return (
    <div id="top">
      <JsonLd />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <WhyAirox />
        <Quality />
        <Clients />
        <Services />
        <CtaBand />
        <News />
        <Contact />
      </main>
      <Footer />
      <Effects />
    </div>
  );
}
