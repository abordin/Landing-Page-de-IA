import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Nosso atendimento melhorou 300%. O chatbot resolve 85% das dúvidas automaticamente e nossos clientes adoram a rapidez das respostas. ROI em apenas 2 meses!",
    name: "Carlos Silva",
    position: "CEO, TechVendas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Implementação super simples e suporte excepcional. Reduzimos em 60% o tempo de primeira resposta e aumentamos a satisfação dos clientes significativamente.",
    name: "Ana Oliveira",
    position: "Diretora de CX, LogiSmart",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d49c51?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "A integração com nosso Chatwoot foi perfeita. Conseguimos escalar o atendimento sem contratar mais pessoas. Nosso NPS subiu 40 pontos!",
    name: "Roberto Santos",
    position: "COO, VendasMax",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que dizem nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas reais, resultados reais, transformações reais
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 fade-in-up">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
