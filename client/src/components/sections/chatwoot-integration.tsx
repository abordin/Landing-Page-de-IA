import { Users, MessageSquare, Bot, TrendingUp, Clock, Settings } from "lucide-react";

export default function ChatwootIntegration() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Todos Seus Agentes e Colaboradores <span className="gradient-text">em Um Só Lugar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integração perfeita com Chatwoot. Gerencie conversas humanas e de IA na mesma plataforma, com escalação inteligente e contexto preservado
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão Unificada de Equipe</h3>
                <p className="text-gray-600">Veja toda sua equipe (humanos + IA) trabalhando juntos. Distribua conversas automaticamente com base na especialidade e disponibilidade.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Escalação Inteligente</h3>
                <p className="text-gray-600">IA identifica quando precisa de ajuda humana e transfere a conversa automaticamente mantendo todo contexto e histórico.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conversas Organizadas</h3>
                <p className="text-gray-600">Interface familiar do Chatwoot com todas as conversas organizadas por canal, prioridade e status de atendimento.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Métricas em Tempo Real</h3>
                <p className="text-gray-600">Acompanhe performance da IA e da equipe com dashboards integrados. Veja taxas de resolução, satisfação e tempo de resposta.</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Chatwoot Interface Mockup */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Chatwoot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex h-96">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                  <div className="p-3 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-sm">Conversações</h4>
                    <p className="text-xs text-gray-500">Abertas: 12</p>
                  </div>
                  
                  {/* Conversation List */}
                  <div className="space-y-1 p-2">
                    <div className="bg-blue-100 border border-blue-200 rounded p-2 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Klaus Crawley</span>
                        <span className="text-gray-500">2min</span>
                      </div>
                      <p className="text-gray-600 truncate">Hi, I need some help setting up...</p>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span className="text-green-600 font-medium">IA Bot</span>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded p-2 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Candice Matherson</span>
                        <span className="text-gray-500">5min</span>
                      </div>
                      <p className="text-gray-600 truncate">How many can I help you?</p>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-blue-600 font-medium">Humano</span>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded p-2 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Coreen Mowbrat</span>
                        <span className="text-gray-500">8min</span>
                      </div>
                      <p className="text-gray-600 truncate">I'm sorry to hear that. Please...</p>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span className="text-green-600 font-medium">IA Bot</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Klaus Crawley</h4>
                          <p className="text-xs text-gray-500">Founder, Drift Burner</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          IA Ativa
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="flex-1 p-4 bg-gray-50 space-y-3">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">Hi, I need some help setting up my new device.</p>
                      <span className="text-xs text-gray-500">Cliente • 12:32 PM</span>
                    </div>
                    
                    <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">No problem! Can you please tell me the make and model of your device and what specifically you need help with?</p>
                      <span className="text-xs opacity-75">IA Bot • 12:32 PM</span>
                    </div>
                    
                    <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">It's a new smartphone and I can't connect to WiFi</p>
                      <span className="text-xs text-gray-500">Cliente • 12:34 PM</span>
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-lg p-2">
                        <p className="text-sm text-gray-500">IA está digitando...</p>
                      </div>
                      <button className="bg-blue-600 text-white p-2 rounded-lg">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Panel */}
                <div className="w-1/4 bg-white border-l border-gray-200 p-3">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Ações da Conversa</h5>
                      <div className="space-y-2">
                        <button className="w-full text-left bg-gray-100 p-2 rounded text-xs hover:bg-gray-200">
                          Transferir para Humano
                        </button>
                        <button className="w-full text-left bg-gray-100 p-2 rounded text-xs hover:bg-gray-200">
                          Histórico do Cliente
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Informações</h5>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>Email: k.crawley@company.com</p>
                        <p>Telefone: +1555552398</p>
                        <p>Empresa: Drift Burner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Indicators */}
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>IA respondendo</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <Settings className="w-4 h-4" />
                <span>Chatwoot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}