import React from 'react'
import BarraDeBusqueda from '../components/BarraDeBusqueda.jsx'
import ListaDePersonajes from '../components/ListaDePersonajes.jsx'

function Home() {
  return (
    <div className='min-h-screen bg-[#021223]'>

      {/* HEADER */}
      <div className='bg-[#0a1a2e] border-b border-[#e8a02040] px-6 py-4 flex items-center justify-between'>
        <div>
          <h1 className='text-[#e8a020] text-xl font-bold tracking-[4px] uppercase'
            style={{ fontFamily: 'Cinzel, serif' }}>
            Dragon Ball
          </h1>
          <p className='text-[#7d7a74] text-xs tracking-widest uppercase mt-0.5'>
            Universe Encyclopedia
          </p>
        </div>
      </div>

      {/* HERO */}
      <div className='bg-[#0a1a2e] border-b border-[#e8a02040] px-6 py-10 relative overflow-hidden'>
        {/* Acento decorativo derecha */}

        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-3'>
          API del universo Dragon Ball
        </p>
        <h2 className='text-4xl font-bold text-white mb-3 leading-tight'
          style={{ fontFamily: 'Cinzel, serif' }}>
          Explora el <span className='text-[#e8a020]'>universo</span>
        </h2>
        <p className='text-sm text-[#7d7a74] max-w-md leading-relaxed mb-6'>
          Explora luchadores, alienígenas y leyendas de todas las sagas.
          Filtra por raza, nivel de ki y afiliación.
        </p>

        <BarraDeBusqueda />
      </div>

      {/* DIVIDER con stats */}
      <div className='bg-[#0a1a2e] border-b border-[#e8a02025] flex divide-x divide-[#e8a02025]'>
        {[
          { label: 'Personajes', valor: '58' },
          { label: 'Razas',      valor: '12' },
          { label: 'Sagas',      valor: '7'  },
        ].map(({ label, valor }) => (
          <div key={label} className='flex-1 px-6 py-3'>
            <p className='text-[9px] tracking-[2px] uppercase text-[#7d7a74]'>{label}</p>
            <p className='text-lg font-bold text-[#e8a020]'
              style={{ fontFamily: 'Cinzel, serif' }}>{valor}</p>
          </div>
        ))}
      </div>

      {/* LISTA */}
      <div className='pt-6 pb-6'>
        <div className='flex items-center gap-4 mb-6'>
          <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold'>
            Todos los personajes
          </p>
          <div className='flex-1 h-px bg-[#e8a02025]' />
        </div>
        <ListaDePersonajes />
      </div>

    </div>
  )
}

export default Home