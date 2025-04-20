import { FaStar } from 'react-icons/fa'

const produtos = [
  {
    nome: 'Rádio Automotivo MP3+',
    descricao: 'Com assistente de voz e controle remoto incluso.',
    imagem: '/5.png',
    preco: 'R$ 135,00',
  },
  {
    nome: 'Multimídia MP5',
    descricao: 'Conexão Bluetooth, entrada USB e tela ampla.',
    imagem: '/2.png',
    preco: 'R$ 380,00',
  },
  {
    nome: 'Palheta Automotiva',
    descricao: 'Limpador de para-brisa resistente e silencioso.',
    imagem: '/3.png',
    preco: 'R$ 20,00',
  },
  {
    nome: 'Lâmpada Nano-LED',
    descricao: 'Par de lâmpadas automotivas com alta luminosidade.',
    imagem: '/5.png',
    preco: 'R$ 120,00',
  },
]

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-light py-20 px-6 text-dark scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Acessórios em Destaque</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-video">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-brandGray mb-1">{produto.nome}</h3>
                  <p className="text-sm text-gray-600 mb-2">{produto.descricao}</p>
                  <p className="text-lg font-bold text-primary mb-2">{produto.preco}</p>
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/5547991343762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-primary text-black font-semibold px-4 py-2 rounded-lg text-center hover:bg-orange-500 transition"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
              <div className="mt-12 text-center">
          <a
            href="https://wa.me/5547991343762"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition"
          >
            Ver todo o catálogo de produtos
          </a>
        </div>
      </div>
    </section>
  )
}
