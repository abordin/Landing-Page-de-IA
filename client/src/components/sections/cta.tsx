import { Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Pronto para <span className="gradient-text">Automatizar</span> seu Atendimento?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Junte-se a mais de 500 empresas que já transformaram seu atendimento com nossos chatbots IA
        </p>
        
        <div className="space-y-6">
          <Button 
            onClick={scrollToForm}
            className="hero-gradient text-white font-bold py-4 px-12 rounded-xl text-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Quero uma Demonstração Gratuita
          </Button>
          
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Check className="text-green-500 mr-2 w-5 h-5" />
              <span>Demonstração gratuita</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-500 mr-2 w-5 h-5" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-500 mr-2 w-5 h-5" />
              <span>Implementação em 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
