import Navbar from "@/components/LandingPage/Navbar";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Camp from "@/components/LandingPage/Camp";
import Courses from "@/components/LandingPage/Courses";
import Reviews from "@/components/LandingPage/Reviews";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Camp />
      <Courses />
      <Reviews />
      <Footer />
    </>
  );
}
