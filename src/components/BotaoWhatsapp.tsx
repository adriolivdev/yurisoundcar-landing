import { FaWhatsapp } from 'react-icons/fa'

/**
 * BotaoWhatsapp é um botão flutuante que salta suavemente para chamar atenção.
 */
export default function BotaoWhatsapp() {
  return (
    <a
      href="https://wa.me/5547991343762?text=Olá! Vim pelo site da Yuri SoundCar e gostaria de mais informações."
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}
