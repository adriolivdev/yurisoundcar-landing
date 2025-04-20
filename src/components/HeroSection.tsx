import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[85vh] bg-cover bg-center bg-no-repeat scroll-mt-24"
      style={{
        backgroundImage: "url('/yuri-hero.png')",
        backgroundPosition: 'center top',
      }}
    >
      {/* Overlay escuro com leve desfoque */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 pt-20 pb-10 md:pt-32 md:pb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Transforme seu carro com{' '}
          <span className="text-primary">estilo e performance</span>
        </h1>

        <p className="text-base md:text-lg text-gray-300 mb-6">
          Loja e serviços automotivos especializados em som, leds, acessórios e instalação com agilidade e segurança.
        </p>

        <a
          href="https://wa.me/5547991343762"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition"
        >
          Orçamento sem compromisso
        </a>
      </div>
    </section>
  );
}
