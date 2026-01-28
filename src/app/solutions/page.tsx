import Navbar from "@/components/layout/Navbar";
import SolutionSection from "@/components/sections/SolutionSection";
import ContactSection from "../../components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

export default function Page() {
  return (
    <>
      <Navbar />
      <SolutionSection />
      <Background />
      <Footer />
    </>
  );
}
