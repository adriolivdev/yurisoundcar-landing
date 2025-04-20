import './index.css'

// Componentes
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/Services'
import ProductsSection from './components/ProductsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import SocialSection from './components/SocialSection'  
import Footer from './components/Footer'
import BotaoWhatsapp from './components/BotaoWhatsapp'
import FaqSection from './components/FaqSection'


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-dark text-white font-sans">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <SocialSection />
        <ContactSection />
        <FaqSection />
        <Footer />
      </main>
      <BotaoWhatsapp />
    </>
  )
}

export default App
