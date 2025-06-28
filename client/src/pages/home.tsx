import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import HowItWorks from "@/components/sections/how-it-works";
import UseCases from "@/components/sections/use-cases";
import Statistics from "@/components/sections/statistics";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add fade-in animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Statistics />
        <Testimonials />
        <CTA />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
