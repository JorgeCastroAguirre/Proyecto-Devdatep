import React from 'react'
import imagen_esfera from '../assets/image/descarga.png'
function BarraDeBusqueda() {
  return (
    <>
      <div className='bg-[#1c1c26] border border-[#e8a020] rounded-[5px] w-100 h-12 flex justify-evenly items-center'>
        <div className='w-10 h-8 object-contain'>
          <img className='w-full h-full' src={imagen_esfera} alt="esfera"/>
        </div>
        <input 
          className='bg-[#30302e] border border-[#4a4a46] rounded-[5px] w-[85%] h-8 text-white' 
          type="text" 
          placeholder='Buscar por nombre, raza, afiliacion...' 
        />
      </div>
    </>
  )
}

export default BarraDeBusqueda