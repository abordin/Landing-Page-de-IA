import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para implementar o chatbot?",
    answer: "A implementação completa leva entre 5-7 dias úteis. Isso inclui configuração personalizada, integração com seus sistemas e treinamento da IA com informações da sua empresa."
  },
  {
    question: "O chatbot funciona com meu sistema atual?",
    answer: "Sim! Nossos chatbots se integram nativamente com Chatwoot, WhatsApp Business API, Instagram, Telegram e podem conectar com qualquer CRM através de APIs. Se você usa outros sistemas, podemos criar integrações personalizadas."
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer: "Não! Nossa plataforma é completamente visual e intuitiva. Você pode criar e modificar fluxos de conversação sem programar. Oferecemos treinamento completo para sua equipe."
  },
  {
    question: "O que acontece se o chatbot não souber responder?",
    answer: "O chatbot possui escalação inteligente. Quando não consegue resolver um problema, transfere automaticamente para um atendente humano disponível, mantendo todo o contexto da conversa."
  },
  {
    question: "Posso personalizar as respostas do chatbot?",
    answer: "Totalmente! O chatbot aprende sobre sua empresa, produtos, tom de voz e processos específicos. Você pode ajustar respostas, criar novos fluxos e treinar a IA continuamente."
  },
  {
    question: "Qual é o custo de manutenção?",
    answer: "Oferecemos planos mensais que incluem hospedagem, manutenção, atualizações e suporte técnico. O investimento se paga rapidamente com a redução de custos operacionais."
  },
  {
    question: "Vocês oferecem garantia?",
    answer: "Sim! Oferecemos 30 dias de garantia total. Se não ficar satisfeito com os resultados, devolvemos 100% do investimento sem perguntas."
  },
  {
    question: "Como é medido o ROI da solução?",
    answer: "Fornecemos relatórios detalhados com métricas como: redução no tempo de resposta, % de casos resolvidos automaticamente, satisfação do cliente e economia em custos de atendimento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respondemos as principais dúvidas sobre implementação de chatbots IA
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <button 
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre os chatbots de IA.");
              window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
            }}
            className="hero-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Fale Conosco no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}