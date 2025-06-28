import { Clock, TrendingUp, DollarSign, Brain, Plug, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Nunca perca um cliente novamente. Nossos chatbots trabalham sem parar, respondendo instantaneamente a qualquer hora do dia.",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "80% de Resolução",
    description: "Resolva automaticamente até 80% dos atendimentos mais comuns, liberando sua equipe para casos complexos.",
    color: "purple"
  },
  {
    icon: DollarSign,
    title: "Redução de 70% nos Custos",
    description: "Diminua drasticamente os custos operacionais de atendimento mantendo a qualidade do serviço.",
    color: "orange"
  },
  {
    icon: Brain,
    title: "Inteligência Avançada",
    description: "IA treinada especificamente para seu negócio, entendendo contexto e nuances da comunicação humana.",
    color: "green"
  },
  {
    icon: Plug,
    title: "Integração Total",
    description: "Conecta perfeitamente com Chatwoot, WhatsApp, Instagram e todos os seus sistemas existentes.",
    color: "indigo"
  },
  {
    icon: Users,
    title: "Experiência Humanizada",
    description: "Conversas naturais que seus clientes amam, mantendo o tom e personalidade da sua marca.",
    color: "pink"
  }
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
  indigo: "bg-indigo-100 text-indigo-600",
  pink: "bg-pink-100 text-pink-600"
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm font-medium mb-8">
            EMPRESAS QUE JÁ CONFIAM EM NOSSA SOLUÇÃO
          </p>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 mb-16">
            {/* Tech Companies */}
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">TechCorp</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">E-Shop</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">HealthCare+</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">EduPro</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">FinanceMax</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher nossos <span className="gradient-text">Chatbots IA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme seu atendimento com tecnologia de ponta que realmente funciona
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-scale fade-in-up">
                <div className={`w-16 h-16 ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
