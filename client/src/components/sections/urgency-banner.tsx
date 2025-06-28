import { Clock, Star } from "lucide-react";

export default function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="font-semibold">
            OFERTA LIMITADA: Implementação GRATUITA para os próximos 10 clientes
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="ml-1">Apenas hoje</span>
          </div>
        </div>
      </div>
    </div>
  );
}