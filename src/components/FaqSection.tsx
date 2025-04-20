import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    pergunta: 'Vocês fazem instalação em domicílio?',
    resposta: 'Sim! A Yuri SoundCar oferece instalação de acessórios na sua casa com horário agendado.',
  },
  {
    pergunta: 'Quanto tempo leva uma instalação de som?',
    resposta: 'Geralmente leva entre 1 a 2 horas, dependendo da complexidade do sistema.',
  },
  {
    pergunta: 'Qual a garantia das instalações?',
    resposta: 'Oferecemos 90 dias de garantia em todos os serviços de instalação realizados.',
  },
  {
    pergunta: 'Vocês vendem acessórios também?',
    resposta: 'Sim! Trabalhamos com venda e instalação de acessórios automotivos internos e externos.',
  },
];

export default function FaqSection() {
  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f4f4f4] py-20 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#FF6600] mb-12">Perguntas Frequentes</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
                aria-expanded={ativo === index}
                aria-controls={`faq-${index}`}
              >
                {item.pergunta}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    ativo === index ? 'rotate-180 text-[#FF6600]' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                id={`faq-${index}`}
                className={`px-6 overflow-hidden text-gray-600 text-sm transition-all duration-300 ${
                  ativo === index ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                {ativo === index && <p>{item.resposta}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
