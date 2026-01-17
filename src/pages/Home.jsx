import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";
import Navbar from "../components/navbar/Navbar";
import Stats from "../sections/Stats";
import Footer from "../components/Footer";
import InitiativePrakriti from "../sections/InitiativePrakriti";
import MascotSection from "../sections/MascotSection";
import MidnightCarnival from "../sections/MidnightCarnival";


export default function Home() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16">
        <Hero />
        <AboutUs />
        <Stats />
        <MidnightCarnival />
        <InitiativePrakriti />
        <MascotSection />
        <Footer />
        {/* Other sections will go here */}
      </main>
    </>
  );
}

