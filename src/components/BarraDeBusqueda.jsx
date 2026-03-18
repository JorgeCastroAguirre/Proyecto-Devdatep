import React, { useContext } from 'react'
import imagen_esfera from '../assets/image/descarga.png'
import { AuthContext } from '../context/AuthContext'


function BarraDeBusqueda() {

  const {buscar,setBuscar}=useContext(AuthContext)

  return (
    <>
      <div className='bg-[#1E1A1A] border [#e8a020] rounded-[5px] w-100 h-20 flex justify-evenly items-center'>
        <div className='w-[15%] h-15 ml-2'>
          <img className='w-full h-full object-contain' src={imagen_esfera} alt="esfera"/>
        </div>
        
        <input 
          className='bg-white border border-[#4a4a46] rounded-[5px] w-[80%] h-13 text-black mx-4' 
          type="text" 
          placeholder='Buscar por nombre ...'
          value={buscar}
          onChange={(e)=>setBuscar(e.target.value)} 
        />
        
      </div>
    </>
  )
}

export default BarraDeBusqueda