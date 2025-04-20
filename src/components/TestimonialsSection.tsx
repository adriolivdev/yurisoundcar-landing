import { FaStar } from 'react-icons/fa'

/**
 * TestimonialsSection exibe depoimentos de clientes satisfeitos.
 */
export default function TestimonialsSection() {
  const depoimentos = [
    {
      nome: 'Marcos Oliveira',
      texto: 'Serviço impecável! Instalaram o som no meu carro com perfeição e atenção aos detalhes.',
      imagem: '/cliente1.png',
      estrelas: 5,
    },
    {
      nome: 'Juliana Rocha',
      texto: 'Muito feliz com o resultado. Atendimento de qualidade e entrega rápida.',
      imagem: '/cliente2.png',
      estrelas: 5,
    },
    {
      nome: 'Rafael Santos',
      texto: 'A Yuri SoundCar é top! Comprei palhetas e luzes e chegaram super rápido.',
      imagem: '/cliente3.png',
      estrelas: 5,
    },
  ]

  return (
    <section id="depoimentos" className="bg-light py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">O que dizem nossos clientes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-gray-800"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-primary"
              />
              <p className="italic mb-4">“{item.texto}”</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: item.estrelas }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-brandGray">{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
