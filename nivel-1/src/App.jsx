import './App.css'
import BarraDeBusqueda from './components/BarraDeBusqueda'
import ListaDePersonajes from './components/ListaDePersonajes'
import TarjetaDePersonaje from './components/TarjetaDePersonaje'


function App() {


  return (
    <>
      
      <div className='bg-[#021223]'> 
        <h1 className='text-[#e8a020]'>Dragon Ball</h1>
        <h1 className='text-[#7d7a74]'>Universe Encyclopedia</h1>
        <div className='bg-[#e8a020] w-full h-px'/>
        <h1 className='text-[#e8a020]'>API del universo Dragon Ball</h1>
        <h1 className='text-white'>Explora el universo</h1>
        <p className='text-[#7d7a74]'>Explora luchadores, alienígenas y leyendas de todas las sagas. 
          Filtra por raza, nivel de ki y afiliación.</p>
        <BarraDeBusqueda/>
        <div className='bg-[#e8a020] w-full h-px'/>
      </div>

      <TarjetaDePersonaje/>

      <ListaDePersonajes/>


    </>
  )
}

export default App
