import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import PackagesSection from "@/components/PackagesSection";
import WakilSection from "@/components/WakilSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <PackagesSection onSelectPackage={setSelectedPackage} />
        <WakilSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection selectedPackage={selectedPackage} />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
