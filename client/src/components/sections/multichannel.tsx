import { MessageCircle, Instagram, Globe, Mail, Phone, Zap } from "lucide-react";

const channels = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "green",
    users: "2B usuários",
    description: "API oficial WhatsApp Business"
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "pink",
    users: "1.5B usuários",
    description: "DMs e comentários automáticos"
  },
  {
    name: "Website",
    icon: Globe,
    color: "blue",
    users: "Seu site",
    description: "Chat widget personalizado"
  },
  {
    name: "Email",
    icon: Mail,
    color: "gray",
    users: "Universal",
    description: "Respostas inteligentes por email"
  },
  {
    name: "Telefone",
    icon: Phone,
    color: "purple",
    users: "Voice AI",
    description: "Atendimento por voz (em breve)"
  }
];

const colorClasses = {
  green: "bg-green-500 text-white",
  pink: "bg-pink-500 text-white", 
  blue: "bg-blue-500 text-white",
  gray: "bg-gray-500 text-white",
  purple: "bg-purple-500 text-white"
};

export default function Multichannel() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">IA Respondendo</span> em Todos os Lugares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma única IA, múltiplos canais. Seus clientes recebem respostas consistentes onde quer que estejam
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Channels */}
          <div className="space-y-6">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              const colorClass = colorClasses[channel.color as keyof typeof colorClasses];
              
              return (
                <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover-scale fade-in-up">
                  <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{channel.name}</h3>
                      <span className="text-sm text-gray-500">{channel.users}</span>
                    </div>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              );
            })}
          </div>
          
          {/* Right Side - Conversation Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Central de Conversas</h3>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">IA Ativa</span>
                </div>
              </div>
              
              {/* Simulated Conversations */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">WhatsApp • João Silva</span>
                      <span className="text-xs text-gray-500">agora</span>
                    </div>
                    <p className="text-sm text-gray-600">IA: "Seu pedido #1234 foi entregue! 📦"</p>
                  </div>
                </div>
                
                {/* Instagram */}
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Instagram • @maria</span>
                      <span className="text-xs text-gray-500">2 min</span>
                    </div>
                    <p className="text-sm text-gray-600">IA: "Temos esse produto em estoque! 💝"</p>
                  </div>
                </div>
                
                {/* Website */}
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Site • Visitante</span>
                      <span className="text-xs text-gray-500">5 min</span>
                    </div>
                    <p className="text-sm text-gray-600">IA: "Posso ajudar com informações sobre preços"</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Email • carlos@empresa.com</span>
                      <span className="text-xs text-gray-500">1h</span>
                    </div>
                    <p className="text-sm text-gray-600">IA: "Enviamos as informações solicitadas"</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-500">Respondidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.3s</div>
                  <div className="text-xs text-gray-500">Tempo médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-500">Disponível</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">IA</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Sincronização Total em Tempo Real</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Quando um cliente muda de canal, a IA mantém todo o contexto da conversa. Histórico completo, preferências e status sempre sincronizados.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              <span>Contexto preservado</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Histórico unificado</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>Experiência consistente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}