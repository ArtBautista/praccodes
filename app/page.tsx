import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Courses from "@/components/Courses";
import Reviews from "@/components/Reviews";
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
