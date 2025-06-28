import { Settings, Link2, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Configuração Personalizada",
    description: "Analisamos seu negócio e configuramos a IA com conhecimento específico da sua empresa, produtos e processos."
  },
  {
    icon: Link2,
    title: "Integração Completa",
    description: "Conectamos com Chatwoot, WhatsApp Business, Instagram e todos os canais onde seus clientes estão."
  },
  {
    icon: Rocket,
    title: "Ativação Imediata",
    description: "Em poucos dias, seu chatbot está funcionando perfeitamente, atendendo clientes e gerando resultados."
  }
];

const features = [
  "Dashboard Unificado - Gerencie todos os atendimentos humanos e por IA em um só lugar",
  "Escalação Inteligente - IA passa automaticamente para humanos quando necessário",
  "Relatórios Avançados - Métricas detalhadas de performance e satisfação"
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
            Implementação simples e resultados imediatos em apenas 3 passos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
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
        
        {/* Integration Showcase */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Integração com Chatwoot</h3>
            <p className="text-gray-600">Potencialize o melhor sistema de atendimento com inteligência artificial</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => {
                const [title, description] = feature.split(' - ');
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Chatwoot Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-800">IA Bot está online</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-800">85% resoluções automáticas</span>
                    </div>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-orange-800">12 conversas transferidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
