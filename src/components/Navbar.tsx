import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '/yuri-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const linkStyle = 'hover:text-[#FF6600] transition-colors duration-200 hover:underline underline-offset-4'

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'redes', label: 'Redes Sociais' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo e nome */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
          <img src={logo} alt="Yuri SoundCar" className="h-8 w-auto" />
          <span className="font-bold text-xl text-[#FF6600]">Yuri SoundCar</span>
        </button>

        {/* Ícone do menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {sections.map((sec) => (
            <a
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`cursor-pointer ${linkStyle}`}
            >
              {sec.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu mobile responsivo */}
      <div className={`md:hidden bg-black transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {sections.map((sec) => (
            <a
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="text-white text-left hover:text-[#FF6600] transition cursor-pointer"
            >
              {sec.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
