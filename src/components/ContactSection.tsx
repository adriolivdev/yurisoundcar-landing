import { useState } from 'react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/22588896/2xit63l/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nome: name,
          email,
          whatsapp,
          mensagem: message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setWhatsapp('')
        setMessage('')
      } else {
        alert('Erro ao enviar. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar o formulário. Verifique sua conexão e tente novamente.')
    }
  }

  return (
    <section id="contato" className="bg-dark text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Fale com a gente 📩
        </h2>

        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Quer transformar seu carro com estilo, segurança e tecnologia? Preencha o formulário abaixo e nossa equipe entrará em contato!
        </p>

        {submitted && (
          <div className="mb-6 bg-green-700 text-green-100 px-4 py-3 rounded text-center">
            ✅ Sua mensagem foi enviada com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-gray-200">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold mb-1 text-gray-200">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="(47) 99999-0000"
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-200">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-md border border-gray-600 bg-transparent p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-orange-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
