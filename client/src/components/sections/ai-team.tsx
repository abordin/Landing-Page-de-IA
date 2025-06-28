import { Brain, MessageSquare, TrendingUp, Headphones, Users, ShoppingBag } from "lucide-react";

const aiEmployees = [
  {
    id: 1,
    name: "Sofia - Vendedora IA",
    role: "Especialista em Vendas",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d49c51?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    icon: TrendingUp,
    color: "green",
    description: "Qualifica leads, apresenta produtos e fecha vendas automaticamente",
    capabilities: [
      "Qualificação de leads 24/7",
      "Apresentação de produtos",
      "Agendamento de reuniões",
      "Follow-up personalizado"
    ],
    performance: "+45% em conversões"
  },
  {
    id: 2,
    name: "Carlos - Atendente IA",
    role: "Especialista em Suporte",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    icon: Headphones,
    color: "blue",
    description: "Resolve dúvidas técnicas e escalada inteligente para humanos",
    capabilities: [
      "Suporte técnico N1",
      "Consulta de pedidos",
      "Políticas da empresa",
      "Escalação inteligente"
    ],
    performance: "80% casos resolvidos"
  },
  {
    id: 3,
    name: "Ana - Social Media IA", 
    role: "Especialista em Redes Sociais",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    icon: MessageSquare,
    color: "purple",
    description: "Gerencia Instagram, Facebook e responde DMs instantaneamente",
    capabilities: [
      "Resposta a DMs",
      "Comentários automáticos",
      "Engajamento 24/7",
      "Gestão multi-redes"
    ],
    performance: "Resposta em 5 segundos"
  },
  {
    id: 4,
    name: "Roberto - E-commerce IA",
    role: "Especialista em Vendas Online",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    icon: ShoppingBag,
    color: "orange",
    description: "Recupera carrinho abandonado e recomenda produtos personalizados",
    capabilities: [
      "Carrinho abandonado",
      "Recomendações IA",
      "Rastreamento de pedidos",
      "Pós-venda automático"
    ],
    performance: "+30% recuperação vendas"
  }
];

const colorClasses = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    gradient: "from-green-400 to-green-600"
  },
  blue: {
    bg: "bg-blue-100", 
    text: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-400 to-blue-600"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600", 
    border: "border-purple-200",
    gradient: "from-purple-400 to-purple-600"
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200", 
    gradient: "from-orange-400 to-orange-600"
  }
};

export default function AITeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça Seu Novo <span className="gradient-text">Time de Funcionários IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada funcionário IA é especializado em uma área específica, trabalhando 24/7 para fazer sua empresa crescer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiEmployees.map((employee) => {
            const Icon = employee.icon;
            const colors = colorClasses[employee.color as keyof typeof colorClasses];
            
            return (
              <div key={employee.id} className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} hover-scale fade-in-up group`}>
                {/* Avatar and Status */}
                <div className="relative mb-6">
                  <img 
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center border-2 border-white`}>
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  {/* Online Status */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Employee Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{employee.name}</h3>
                  <p className={`text-sm font-medium ${colors.text} mb-3`}>{employee.role}</p>
                  <p className="text-gray-600 text-sm">{employee.description}</p>
                </div>
                
                {/* Capabilities */}
                <div className="space-y-2 mb-6">
                  {employee.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mr-2 flex-shrink-0`}></div>
                      {capability}
                    </div>
                  ))}
                </div>
                
                {/* Performance Badge */}
                <div className={`bg-gradient-to-r ${colors.gradient} text-white text-center py-2 px-4 rounded-lg text-sm font-semibold`}>
                  {employee.performance}
                </div>
                
                {/* Hire Button */}
                <button 
                  onClick={() => {
                    const formElement = document.getElementById('form');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm hover:bg-blue-100 hover:text-blue-700"
                >
                  Contratar {employee.name.split(' ')[0]}
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Monte Seu Time Ideal</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Você pode contratar quantos funcionários IA precisar. Cada um é especializado e trabalha em harmonia com sua equipe humana.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                Trabalho em equipe
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-blue-600" />
                Aprendizado contínuo
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                Comunicação natural
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}