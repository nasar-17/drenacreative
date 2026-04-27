import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Process } from './components/Process/Process';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  // Initialize scroll animations wrapper for the entire app.
  // This automatically watches any element with .animate-on-scroll
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
