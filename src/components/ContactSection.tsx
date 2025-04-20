import { useState } from 'react'

/**
 * ContactSection exibe um formulário de contato com visual escuro,
 * moderno e responsivo, alinhado com a identidade da Yuri SoundCar.
 */
export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, whatsapp, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setWhatsapp('')
    setMessage('')
  }

  return (
    <section id="contato" className="bg-dark text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">
          📩 Fale com a gente
        </h2>

        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transforme seu carro com estilo, segurança e tecnologia. Preencha o formulário
          e a gente entra em contato rapidinho!
        </p>

        {submitted && (
          <div className="mb-6 bg-green-700/90 text-green-100 px-6 py-4 rounded-lg text-center animate-fade-in">
            ✅ Sua mensagem foi enviada com sucesso!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border border-gray-700/60 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1 text-gray-300">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Seu nome completo"
                className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="voce@email.com"
                className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold mb-1 text-gray-300">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="(DDD) 99999-0000"
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-300">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Escreva sua mensagem aqui..."
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-orange-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
