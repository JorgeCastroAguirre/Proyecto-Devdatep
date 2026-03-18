import './App.css'
import Home from './pages/Home.jsx'
import PersonajeDetalles from './pages/PersonajeDetalles.jsx'
import {Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:id" element={<PersonajeDetalles />} />
      </Routes>   
    </>
  )
}

export default App
