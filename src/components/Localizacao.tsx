export default function Localizacao() {
    return (
      <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
           Nossa Localização
        </h2>
  
        <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
          <div className="w-full aspect-w-16 aspect-h-9 rounded-xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.134589169997!2d-48.78673392370306!3d-26.419132972763624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deca0be350279b%3A0xe0ea70bed92a5361!2sAv.%20Pref.%20Alberto%20Natalino%20Miquelute%2C%209350%20-%20Itinga%2C%20Araquari%20-%20SC%2C%2089245-000!5e0!3m2!1spt-BR!2sbr!4v1746465793906!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
  
          <a
            href="https://maps.google.com/?q=-26.419132972763624,-48.78673392370306"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition"
          >
            📲 Abrir no Maps
          </a>
        </div>
      </section>
    );
  }
  