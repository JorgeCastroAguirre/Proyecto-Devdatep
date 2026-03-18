import React from 'react'
import BarraDeBusqueda from '../components/BarraDeBusqueda.jsx'
import ListaDePersonajes from '../components/ListaDePersonajes.jsx'
import img_logo from '../assets/image/dagon-ball-z-logo.png'

function Home() {
  return (
    <div className='min-h-screen bg-[#1E1A1A]'>

      {/* HEADER */}
      <div className='bg-[#0b0a0a] border-b border-[#F10124] px-6 py-4 flex items-center justify-between'>
        <div>
          <div className='w-100 h-40'>
            <img src={img_logo} alt="logo-dragon-ball" className='w-full h-full object-cover'/>
          </div>
          <p className='text-white text-xs tracking-widest uppercase mt-0.5'>
            Universe Encyclopedia
          </p>
        </div>
      </div>

      {/* HERO */}
      <div className='bg-[#0b0a0a] border-b border-[#FA8A2A] px-6 py-10 relative overflow-hidden'>
        {/* Acento decorativo derecha */}

        <p className='text-[10px] tracking-[3px] uppercase text-[#FA8A2A] font-semibold mb-3'>
          API del universo Dragon Ball
        </p>
        <h2 className='text-4xl font-bold text-white mb-3 leading-tight'
          style={{ fontFamily: 'Cinzel, serif' }}>
          Explora el <span className='text-[#FFD22B]'>universo</span>
        </h2>
        <p className='text-sm text-[#7d7a74] max-w-md leading-relaxed mb-6'>
          Explora luchadores, alienígenas y leyendas de todas las sagas.
          Filtra por raza, nivel de ki y afiliación.
        </p>

        <BarraDeBusqueda />
      </div>

      {/* DIVIDER con stats */}
      <div className='bg-[#0b0a0a] border-b border-[#FA8A2A] flex divide-x divide-[#FA8A2A]'>
        {[
          { label: 'Personajes', valor: '58' },
          { label: 'Razas',      valor: '12' },
          { label: 'Sagas',      valor: '7'  },
        ].map(({ label, valor }) => (
          <div key={label} className='flex-1 px-6 py-3'>
            <p className='text-[9px] tracking-[2px] uppercase text-white'>{label}</p>
            <p className='text-lg font-bold text-[#FFD22B]'
              style={{ fontFamily: 'Cinzel, serif' }}>{valor}</p>
          </div>
        ))}
      </div>

      {/* LISTA */}
      <div className='pt-6 pb-6'>
        <div className='flex items-center gap-4 mb-6'>
          <p className='text-[10px] tracking-[3px] uppercase text-white font-semibold'>
            Todos los personajes
          </p>
          <div className='flex-1 h-px bg-[#F10124]' />
        </div>
        <ListaDePersonajes />
      </div>

    </div>
  )
}

export default Home