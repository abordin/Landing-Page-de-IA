import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Empresas Atendidas" },
  { number: 2000000, suffix: "+", label: "Conversas Automatizadas", format: "M" },
  { number: 98, suffix: "%", label: "Satisfação dos Clientes" },
  { number: 70, suffix: "%", label: "Redução de Custos" }
];

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const AnimatedCounter = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const increment = stat.number / 100;
        const interval = setInterval(() => {
          setCount(prev => {
            const next = prev + increment;
            if (next >= stat.number) {
              clearInterval(interval);
              return stat.number;
            }
            return next;
          });
        }, 20);

        return () => clearInterval(interval);
      }, index * 200);

      return () => clearTimeout(timer);
    }, [isVisible, stat.number, index]);

    const formatNumber = (num: number) => {
      if (stat.format === "M") {
        return (num / 1000000).toFixed(1) + "M";
      }
      return Math.round(num).toString();
    };

    return (
      <div className="text-center fade-in-up">
        <div className="stats-counter">
          {formatNumber(count)}{stat.suffix}
        </div>
        <div className="text-blue-100 text-lg">{stat.label}</div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Resultados que <span className="text-orange-300">Comprovam</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
