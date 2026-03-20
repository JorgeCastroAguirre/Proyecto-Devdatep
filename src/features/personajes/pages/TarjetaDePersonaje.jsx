import {usePersonaje,useTraduccion} from '../hooks/usePersonajes.js'
import {useParams,useNavigate} from 'react-router-dom'
import FormularioComentario from '../../comentarios/components/FormularioComentario.jsx'
import TarjetaDePersonajeSkeleton from '../components/TarjetaDePersonajeSkeleton.jsx'
import { useState } from 'react'

const IDIOMAS = [
  { codigo: 'en', nombre: 'Inglés'},
  { codigo: 'ja', nombre: 'Japonés'},
  { codigo: 'pt', nombre: 'Portugués'},
  { codigo: 'fr', nombre: 'Francés'},
]

function TarjetaDePersonaje() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [idioma, setIdioma] = useState('en') //inicia en español 

  const { isLoading, data: personaje, isError, error } = usePersonaje(id)
  const {isLoading: traduciendo, data: traduccion} = useTraduccion(personaje?.description??'', idioma)

  if(isLoading) return <TarjetaDePersonajeSkeleton/>
  if(isError) return <p>Error: {error.message}</p>

  return (
    <div className='min-h-screen bg-[#1E1A1A] text-white font-rajdhani'>

      {/* NAV */}
      <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center gap-4'>
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
      <div className='bg-black border-b border-[#e8a02040] px-6 pt-8 relative overflow-hidden
        flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-center'>

        {/*DIV DE LA IMAGEN*/}
        <div className='w-40 h-48 sm:w-56 sm:h-72 lg:w-64 lg:h-80 shrink-0
          flex items-end justify-center relative'>
          {/*efecto*/}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2
            w-32 h-32 sm:w-40 sm:h-40 rounded-full
            bg-[#FA8A2A] opacity-20'
            style={{ filter: 'blur(40px)' }}
          />

          {/*efecto*/}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2
            w-20 h-16 rounded-full
            bg-[#FFD22B] opacity-10'
            style={{ filter: 'blur(20px)' }}
          />

          {/* Suelo con degradado sutil */}
          <div className='absolute bottom-0 left-0 right-0 h-10'
            style={{ background: 'linear-gradient(to top, rgba(250,138,42,0.08), transparent)' }}
          />
          <img
            src={personaje.image}
            alt={personaje.name}
            className='relative z-10 w-full h-full object-contain object-bottom
              transition-transform duration-300 hover:scale-105'
          />
        </div>

        {/*Info*/}
        <div className='flex-1 pb-7 text-center sm:text-left w-full'>
          <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] mb-1'>
            Personaje #{String(personaje.id).padStart(3, '0')}
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-none'
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


      {/*cuerpo*/}
      <div className='p-6'>

        {/*traduccion llamada a la api*/}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Traducción de descripción
        </p>

        <div className='bg-black border border-[#e8a02040] rounded-2xl p-5 mb-6'>

          {/*seleccionamos idioma*/}
          <div className='flex gap-2 flex-wrap mb-4'>
            {IDIOMAS.map(i => (
              <button
                key={i.codigo}
                onClick={() => setIdioma(i.codigo)}
                className={`text-[9px] tracking-widest uppercase font-semibold
                  px-3 py-1.5 rounded-lg border transition-colors
                  ${idioma === i.codigo
                    ? 'bg-[#e8a020] text-[#1E1A1A] border-[#e8a020]'
                    : 'border-[#e8a02040] text-[#9A9490] hover:border-[#e8a020] hover:text-[#e8a020]'
                  }`}
              >
                {i.nombre}
              </button>
            ))}
          </div>

          {/* Texto traducido */}
          {traduciendo
            ? <div className='animate-pulse'>
                <div className='h-3 bg-[#2E2828] rounded-full w-full mb-2' />
                <div className='h-3 bg-[#2E2828] rounded-full w-5/6 mb-2' />
                <div className='h-3 bg-[#2E2828] rounded-full w-4/6' />
              </div>
            : <p className='text-sm text-[#9A9490] leading-relaxed'>
                {traduccion}
              </p>
          }

          {/*fuente*/}
          <p className='text-[9px] text-[#3a3a3a] mt-3 tracking-wider uppercase'>
            Traducido por MyMemory API
          </p>
        </div>
        {/* KI */}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Nivel de Ki
        </p>

        <div className='bg-black border border-[#e8a02040] rounded-2xl p-6 mb-4 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-24 h-24 bg-[#e8a02012]
            rounded-bl-full rounded-tr-2xl' />

          <div className='flex items-end gap-2 mb-1'>
            <span className='text-5xl font-bold text-[#FFD22B] leading-none'
              style={{ fontFamily: 'Cinzel, serif' }}>
              {personaje.ki}
            </span>
          </div>
          <p className='text-[10px] tracking-widest uppercase text-white mb-5'>
            Ki base del personaje
          </p>

          <div className='h-1.5 bg-white/5 rounded-full overflow-hidden mb-5'>
            <div className='h-full bg-[#e8a020] rounded-full w-0 transition-all duration-700'
              style={{ width: '70%' }} />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#FA8A2A] mb-1'>Ki base</p>
              <p className='text-lg font-bold text-white' style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.ki}
              </p>
            </div>
            <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#F10124] mb-1'>Ki máximo</p>
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
              className='bg-black border border-white/5 rounded-xl px-4 py-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#FFD22B] mb-1'>{label}</p>
              <p className='text-sm font-semibold text-white'>{val}</p>
            </div>
          ))}
        </div>

      </div>
      {/*formulario de comentarios*/}
      <FormularioComentario 
        personajeId = {personaje.id}
        personajeNombre = {personaje.name}
      />
    </div>
  )
}

export default TarjetaDePersonaje