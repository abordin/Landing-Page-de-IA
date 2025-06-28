import { Settings, Link2, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Contate a Gente",
    description: "Entre em contato conosco e conte sobre seu negócio, desafios atuais e objetivos de atendimento."
  },
  {
    icon: Check,
    title: "Verificamos Quais Agentes Implementar",
    description: "Analisamos sua operação e identificamos quais funcionários IA serão mais eficazes para seu caso específico."
  },
  {
    icon: Link2,
    title: "Planejamos Cada Passo",
    description: "Criamos um plano detalhado de implementação, integrações necessárias e cronograma de ativação."
  },
  {
    icon: Rocket,
    title: "Lidamos com a Parte Técnica",
    description: "Sua equipe foca no que importa enquanto cuidamos de toda implementação, testes e configurações técnicas."
  }
];



export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e sem complicações em 4 passos. Você foca no seu negócio, nós cuidamos da tecnologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center fade-in-up">
                <div className="relative mb-8">
                  <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
