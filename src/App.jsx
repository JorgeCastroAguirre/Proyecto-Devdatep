import './App.css'
import Home from './features/personajes/pages/Home.jsx'
import PersonajeDetalles from './features/personajes/components/PersonajeDetalles.jsx'
import {Routes,Route} from 'react-router-dom'
import MisPersonajes from './features/mis-personajes/pages/MisPersonajes.jsx'
import CrearPersonaje from './features/mis-personajes/pages/CrearPersonaje.jsx'
import DetallePersonaje from './features/mis-personajes/pages/DetallePersonaje.jsx'
import EditarPersonaje from './features/mis-personajes/pages/EditarPersonaje.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:id" element={<PersonajeDetalles />} />
        <Route path="/mis-personajes" element={<MisPersonajes />} />
        <Route path="/mis-personajes/crear" element={<CrearPersonaje />} />
        <Route path="/mis-personajes/:id" element={<DetallePersonaje />} />
        <Route path="/mis-personajes/:id/editar" element={<EditarPersonaje />} />
      </Routes>   
    </>
  )
}

export default App
