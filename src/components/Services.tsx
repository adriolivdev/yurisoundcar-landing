import { FaTools, FaSun, FaWrench, FaVolumeUp } from 'react-icons/fa'

/**
 * Componente de serviços oferecidos pela Yuri SoundCar com ícones representativos e imagens.
 */
export default function Services() {
  const servicos = [
    {
      titulo: 'Instalação de Som Automotivo',
      descricao: 'Sons potentes instalados com qualidade e precisão.',
      icone: <FaVolumeUp className="text-[#FF6600] text-4xl mb-4 mx-auto" />,
      imagem: '/service1.png',
    },
    {
      titulo: 'Instalação de Insulfilm',
      descricao: 'Aplicação de insulfilm com acabamento profissional.',
      icone: <FaSun className="text-[#FF6600] text-4xl mb-4 mx-auto" />,
      imagem: '/service2.png',
    },
    {
      titulo: 'Câmera de Ré',
      descricao: 'Instalação rápida e segura com alinhamento preciso.',
      icone: <FaWrench className="text-[#FF6600] text-4xl mb-4 mx-auto" />,
      imagem: '/service3.png',
    },
    {
      titulo: 'Manutenção de Acessórios',
      descricao: 'Revisamos e reparamos seus acessórios automotivos.',
      icone: <FaTools className="text-[#FF6600] text-4xl mb-4 mx-auto" />,
      imagem: '/service4.png',
    },
  ]

  return (
    <section id="servicos" className="bg-[#1a1a1a] text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FF6600] mb-12">Serviços Yuri SoundCar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-[#2b2b2b] p-5 rounded-xl shadow hover:shadow-lg transition-all text-center border border-[#ff660020] hover:scale-105"
            >
              <div className="w-full h-36 overflow-hidden rounded-md mb-4">
                <img
                  src={servico.imagem}
                  alt={`Imagem de ${servico.titulo}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {servico.icone}

              <h3 className="text-lg font-semibold mb-2">{servico.titulo}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
