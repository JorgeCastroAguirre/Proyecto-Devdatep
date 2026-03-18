import React from 'react'
import {usePersonaje} from '../hooks/usePersonajes.js'
import {useParams,useNavigate} from 'react-router-dom'

function TarjetaDePersonaje() {
  const {id} = useParams()
  const navigate = useNavigate()

  const { isLoading, data: personaje, isError, error } = usePersonaje(id)

  if(isLoading) return <p>Cargando...</p>
  if(isError) return <p>Error: {error.message}</p>

  return (
    <div className='min-h-screen bg-[#021223] text-white font-rajdhani'>

      {/* NAV */}
      <nav className='bg-[#0a1a2e] border-b border-[#e8a02040] px-6 h-14 flex items-center gap-4'>
        <button
          onClick={() => navigate('/')}
          className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
            font-semibold tracking-widest uppercase text-[#9A9490]
            hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
        >
          ← Volver
        </button>
        <span className='text-xs text-[#7d7a74] tracking-wider'>
          Personajes &rsaquo;{' '}
          <span className='text-[#e8a020]'>{personaje.name}</span>
        </span>
      </nav>

      {/* HERO */}
      <div className='bg-[#0a1a2e] border-b border-[#e8a02040] px-6 pt-8 relative overflow-hidden
        flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-end'>
        
        {/* Imagen */}
        <div className='w-36 h-44 sm:w-44 sm:h-52 shrink-0 flex items-end justify-center relative'>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40
            rounded-full bg-[#e8a02015] border border-[#e8a02030]' />
          <img
            src={personaje.image}
            alt={personaje.name}
            className='relative z-10 w-36 h-44 sm:w-44 sm:h-52 object-contain object-bottom'
          />
        </div>

        {/* Info */}
        <div className='flex-1 pb-7 text-center sm:text-left w-full'>
          <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] mb-1'>
            Personaje #{String(personaje.id).padStart(3, '0')}
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-3 leading-none'
            style={{ fontFamily: 'Cinzel, serif' }}>
            {personaje.name}
          </h1>

          <div className='flex gap-2 flex-wrap mb-4 justify-center sm:justify-start'>
            <span className='text-[10px] tracking-widest uppercase font-semibold
              px-3 py-1 rounded-full bg-[#d45a0030] text-[#F07030] border border-[#d45a0060]'>
              {personaje.race}
            </span>
            <span className='text-[10px] tracking-widest uppercase font-semibold
              px-3 py-1 rounded-full bg-[#e8a02018] text-[#e8a020] border border-[#e8a02040]'>
              {personaje.affiliation}
            </span>
          </div>

          <p className='text-sm text-[#9A9490] leading-relaxed max-w-lg mx-auto sm:mx-0'>
            {personaje.description}
          </p>
        </div>
      </div>


      {/* CUERPO */}
      <div className='p-6'>

        {/* KI */}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Nivel de Ki
        </p>

        <div className='bg-[#111c30] border border-[#e8a02040] rounded-2xl p-6 mb-4 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-24 h-24 bg-[#e8a02012]
            rounded-bl-full rounded-tr-2xl' />

          <div className='flex items-end gap-2 mb-1'>
            <span className='text-5xl font-bold text-[#e8a020] leading-none'
              style={{ fontFamily: 'Cinzel, serif' }}>
              {personaje.ki}
            </span>
          </div>
          <p className='text-[10px] tracking-widest uppercase text-[#7d7a74] mb-5'>
            Ki base del personaje
          </p>

          <div className='h-1.5 bg-white/5 rounded-full overflow-hidden mb-5'>
            <div className='h-full bg-[#e8a020] rounded-full w-0 transition-all duration-700'
              style={{ width: '70%' }} />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div className='bg-[#162035] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#7d7a74] mb-1'>Ki base</p>
              <p className='text-lg font-bold text-white' style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.ki}
              </p>
            </div>
            <div className='bg-[#162035] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#7d7a74] mb-1'>Ki máximo</p>
              <p className='text-lg font-bold text-white' style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.maxKi}
              </p>
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Información
        </p>

        <div className='grid grid-cols-2 gap-3'>
          {[
            { label: 'Raza',             val: personaje.race },
            { label: 'Afiliación',       val: personaje.affiliation },
            { label: 'Planeta de origen',val: personaje.originPlanet?.name ?? 'Desconocido' },
            { label: 'Género',           val: personaje.gender },
          ].map(({ label, val }) => (
            <div key={label}
              className='bg-[#111c30] border border-white/5 rounded-xl px-4 py-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#7d7a74] mb-1'>{label}</p>
              <p className='text-sm font-semibold text-white'>{val}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TarjetaDePersonaje