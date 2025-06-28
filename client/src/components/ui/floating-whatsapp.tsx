import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os chatbots de IA e agendar uma demonstração."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg whatsapp-pulse hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
