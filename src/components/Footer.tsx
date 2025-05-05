import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

/**
 * Footer exibe as informações da Yuri SoundCar no rodapé do site.
 * Inclui links, CNPJ, endereço com link para o Google Maps e crédito da Kaizen Code.
 */
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-10 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Coluna: Sobre a empresa */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-white">Yuri SoundCar</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Especializada em som automotivo, acessórios internos e externos. Transforme seu carro com estilo, segurança e performance.
          </p>
        </div>

        {/* Coluna: Contato */}
        <div>
          <h4 className="text-md font-bold mb-2 text-white">Contato</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <FaWhatsapp className="inline mr-2 text-primary" />
              <a href="https://wa.me/5547991343762" target="_blank" rel="noreferrer">
                (47) 99134-3762
              </a>
            </li>
            <li>
              <FaInstagram className="inline mr-2 text-primary" />
              <a href="https://instagram.com/yurisoundcar" target="_blank" rel="noreferrer">
                @yurisoundcar
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="inline mr-2 text-primary" />
              <a
                href="https://maps.app.goo.gl/CVzXazukUXTPxBCa7"
                target="_blank"
                rel="noreferrer"
              >
                Av. Pref. Alberto Natalino Miquelute, 9350 - Itinga - Araquari/SC
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna: Identificação Legal */}
        <div>
          <h4 className="text-md font-bold mb-2 text-white">Dados da empresa</h4>
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-medium">CNPJ:</span> 57.292.984/0001-49
          </p>
          <p className="text-sm text-gray-300">
            Yuri SoundCar Acessórios e Serviços Automotivos
          </p>
        </div>
      </div>

      {/* Linha de direitos autorais + crédito */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Yuri SoundCar. Todos os direitos reservados.
        <br />
        Desenvolvido por{' '}
        <a
          href="https://instagram.com/kaizencodedigital"
          className="text-green-400 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Kaizen Code Digital
        </a>
      </div>
    </footer>
  )
}
