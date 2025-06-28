import { Bot, Clock, TrendingUp, DollarSign } from "lucide-react";
import LeadForm from "@/components/forms/lead-form";

export default function Hero() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Bot className="text-white text-lg" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold gradient-text">ChatBot IA</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#beneficios" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Benefícios
                </a>
                <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Como Funciona
                </a>
                <a href="#casos-uso" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Casos de Uso
                </a>
                <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Depoimentos
                </a>
                <a href="#contato" className="hero-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Revolucione seu <br/>
                  <span className="text-orange-300">Atendimento</span> com <br/>
                  <span className="text-orange-300">IA Inteligente</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-lg">
                  Implemente chatbots que resolvem até <strong className="text-orange-300">80% dos atendimentos</strong> automaticamente. Integração completa com Chatwoot e agentes especializados.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-300 flex items-center justify-center gap-2">
                    <TrendingUp className="w-8 h-8" />
                    80%
                  </div>
                  <div className="text-sm text-blue-100">Atendimentos Resolvidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-300 flex items-center justify-center gap-2">
                    <Clock className="w-8 h-8" />
                    24/7
                  </div>
                  <div className="text-sm text-blue-100">Disponibilidade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-300 flex items-center justify-center gap-2">
                    <DollarSign className="w-8 h-8" />
                    70%
                  </div>
                  <div className="text-sm text-blue-100">Redução de Custos</div>
                </div>
              </div>
              
              {/* Mobile Form CTA */}
              <div className="lg:hidden">
                <a href="#form" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-2xl">
                  Quero Automatizar Meu Atendimento
                </a>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:block" id="form">
              <LeadForm />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
}
