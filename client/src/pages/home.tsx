import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import AITeam from "@/components/sections/ai-team";
import Benefits from "@/components/sections/benefits";
import Multichannel from "@/components/sections/multichannel";
import ChatwootIntegration from "@/components/sections/chatwoot-integration";
import HowItWorks from "@/components/sections/how-it-works";
import UseCases from "@/components/sections/use-cases";
import Guarantee from "@/components/sections/guarantee";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import UrgencyBanner from "@/components/sections/urgency-banner";
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
        <UrgencyBanner />
        <Hero />
        <SocialProof />
        <AITeam />
        <Benefits />
        <Multichannel />
        <ChatwootIntegration />
        <HowItWorks />
        <UseCases />
        <Guarantee />
        <FAQ />
        <CTA />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
