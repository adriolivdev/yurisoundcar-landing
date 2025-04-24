import { useEffect } from 'react'
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

/**
 * SocialSection exibe os canais da Yuri SoundCar com embed do feed do Instagram.
 */
export default function SocialSection() {
  useEffect(() => {
    // Carrega o script do Elfsight somente uma vez
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="redes" className="bg-[#111111] text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-primary mb-6">
          Conecte-se com a gente
        </h2>

        {/* Descrição */}
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Siga a Yuri SoundCar nas redes sociais e acompanhe as últimas
          personalizações e novidades exclusivas.
        </p>

        {/* Links de redes sociais */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-xl mb-12">
          <a
            href="https://instagram.com/yurisoundcar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <FaInstagram className="text-2xl" /> @yurisoundcar
          </a>
          <a
            href="https://wa.me/5547991343762"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <FaWhatsapp className="text-2xl" /> WhatsApp
          </a>
          <a
            href="https://www.tiktok.com/@yurisoundcar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <FaTiktok className="text-2xl" /> TikTok
          </a>
        </div>

        {/* Feed do Instagram (Elfsight Widget) */}
        <div
          className="elfsight-app-314ad505-151a-4879-9647-1514c5e41aae"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  )
}
