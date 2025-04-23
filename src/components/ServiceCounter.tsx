import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaTools, FaCar, FaLightbulb } from 'react-icons/fa';

export default function ServiceCounter() {
  const [count, setCount] = useState(0);

  // Anima a contagem até 500 serviços como exemplo
  useEffect(() => {
    let start = 0;
    const end = 500;
    const duration = 1500;
    const incrementTime = 15;
    const step = Math.ceil((end - start) / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32 text-center border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossa Experiência</h2>
        <p className="text-gray-600 mb-12">
          Estamos localizados em <strong>Araquari - SC</strong> e já realizamos centenas de instalações de som, LED e açessorios automotivos com agilidade e segurança.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-dark">
          <div className="flex flex-col items-center">
            <FaTools className="text-primary text-4xl mb-2" />
            <p className="text-3xl font-bold">{count}+</p>
            <p className="text-sm text-gray-600">Serviços realizados</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="text-primary text-4xl mb-2" />
            <p className="text-3xl font-bold">8+</p>
            <p className="text-sm text-gray-600">Anos de experiência</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-primary text-4xl mb-2" />
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-gray-600">Clientes satisfeitos</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-primary text-4xl mb-2" />
            <p className="text-3xl font-bold">Araquari - SC</p>
            <p className="text-sm text-gray-600">Nossa localização</p>
          </div>
        </div>
      </div>
    </section>
  );
}
