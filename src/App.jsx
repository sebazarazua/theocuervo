import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Nosotros from './components/sections/Nosotros';
import Productos from './components/sections/Productos';
import ObrasSociales from './components/sections/ObrasSociales';
import Contacto from './components/sections/Contacto';
import './App.css'

function App() {

  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <ObrasSociales />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
