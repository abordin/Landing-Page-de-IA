import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Se não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas"
  },
  {
    icon: CheckCircle,
    title: "Implementação Garantida",
    description: "Garantimos que seu chatbot estará funcionando perfeitamente em até 7 dias"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Nossa equipe está disponível para ajudar você a qualquer momento"
  },
  {
    icon: RefreshCw,
    title: "Atualizações Gratuitas",
    description: "Sua IA sempre atualizada com as últimas tecnologias, sem custo adicional"
  }
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Zero Riscos</span> para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos tão confiantes nos resultados que oferecemos garantias únicas no mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover-scale">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Money Back Guarantee Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-lg border-2 border-green-200">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <div className="text-left">
              <div className="text-lg font-bold text-gray-900">100% Garantia de Satisfação</div>
              <div className="text-sm text-gray-600">30 dias para testar sem riscos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}