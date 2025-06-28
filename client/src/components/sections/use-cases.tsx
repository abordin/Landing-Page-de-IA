import { TrendingUp, Headphones, ShoppingCart, Check } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Vendas Automatizadas",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Qualificação automática de leads",
      "Apresentação de produtos",
      "Agendamento de reuniões",
      "Follow-up personalizado"
    ],
    metric: "+45%",
    metricLabel: "Aumento em conversões",
    color: "green"
  },
  {
    icon: Headphones,
    title: "Suporte Inteligente",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Resolução de dúvidas frequentes",
      "Consulta de pedidos e status",
      "Políticas e procedimentos",
      "Escalação para especialistas"
    ],
    metric: "80%",
    metricLabel: "Casos resolvidos automaticamente",
    color: "blue"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Recomendações personalizadas",
      "Carrinho abandonado",
      "Rastreamento de pedidos",
      "Pós-venda automático"
    ],
    metric: "25%",
    metricLabel: "Recuperação de vendas",
    color: "purple"
  }
];

const colorClasses = {
  green: "bg-green-100 text-green-600 text-green-600 bg-green-50 text-green-700",
  blue: "bg-blue-100 text-blue-600 text-blue-600 bg-blue-50 text-blue-700",
  purple: "bg-purple-100 text-purple-600 text-purple-600 bg-purple-50 text-purple-700"
};

export default function UseCases() {
  return (
    <section id="casos-uso" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Casos de Uso</span> Comprovados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como diferentes empresas usam nossos chatbots para automatizar e crescer
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const [iconBg, iconColor, metricColor, metricBg, metricTextColor] = useCase.color === 'green' 
              ? ['bg-green-100', 'text-green-600', 'text-green-600', 'bg-green-50', 'text-green-700']
              : useCase.color === 'blue'
              ? ['bg-blue-100', 'text-blue-600', 'text-blue-600', 'bg-blue-50', 'text-blue-700']
              : ['bg-purple-100', 'text-purple-600', 'text-purple-600', 'bg-purple-50', 'text-purple-700'];
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-scale fade-in-up">
                <div className="mb-6">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className={`${iconColor} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`${iconColor} mr-2 mt-1 w-4 h-4 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`p-4 ${metricBg} rounded-lg`}>
                  <div className={`text-2xl font-bold ${metricColor}`}>{useCase.metric}</div>
                  <div className={`text-sm ${metricTextColor}`}>{useCase.metricLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
