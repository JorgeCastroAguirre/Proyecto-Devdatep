import { useContext, useState, useEffect } from 'react'
import {usePersonajes} from '../hooks/usePersonajes.js'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Paginacion from './Paginacion.jsx'
import PersonajeSkeleton from './PersonajeSkeleton.jsx'


function ListaDePersonajes() {
  const { buscar } = useContext(AuthContext)
  const navigate = useNavigate()
  const [pagina, setPagina] = useState(1)   // estado de la página actual

  // cuando el usuario escribe, vuelve a página 1
  useEffect(() => {
    setPagina(1)
  }, [buscar])
  
  //Manda al hooks/usePersonajes.js
  const { isLoading, data: personajes, isError, error } = usePersonajes(pagina, buscar)

  if (isLoading) return (
    <div className='flex flex-wrap gap-4'>
      {Array.from({ length: 12 }).map((_, i) => <PersonajeSkeleton key={i} />)}
    </div>
  )
  if (isError) return (
    <p className='text-red-400 text-sm text-center py-20'>Error: {error.message}</p>
  )

  const totalPaginas = personajes?.meta?.totalPages ?? 1

  const personajesFiltrados = personajes?.items ?? []



  if (personajesFiltrados.length === 0) return (
    <div className='flex flex-col items-center justify-center py-20 gap-3'>
      <p className='text-[#e8a020] text-4xl'>☯</p>
      <p className='text-[#7d7a74] text-sm tracking-widest uppercase'>
        No se encontró "{buscar}"
      </p>
    </div>
  )

  const RAZA_BADGE = {
    // Guerreros principales
    Saiyan:             'bg-[#FA8A2A20] text-[#FA8A2A] border-[#FA8A2A50]', // naranja — traje Goku
    Namekian:           'bg-[#40C87020] text-[#40C870] border-[#40C87050]', // verde — planeta Namek
    Human:              'bg-[#FFD22B20] text-[#FFD22B] border-[#FFD22B50]', // amarillo — ki humano
    Android:            'bg-[#7EB8FF20] text-[#7EB8FF] border-[#7EB8FF50]', // azul — mecánico/frío
    'Frieza Race':      'bg-[#F1012420] text-[#F10124] border-[#F1012450]', // rojo — peligro/villano
    Majin:              'bg-[#FF69B420] text-[#FF69B4] border-[#FF69B450]', // rosa — Buu
    God:                'bg-[#C084FC20] text-[#C084FC] border-[#C084FC50]', // violeta — divino
    Angel:              'bg-[#E0E0FF20] text-[#B0B8FF] border-[#B0B8FF40]', // blanco azulado — celestial
    'Jiren Race':       'bg-[#FB923C20] text-[#FB923C] border-[#FB923C50]', // naranja rojizo — orgulloso guerrero
    'Nucleico benigno': 'bg-[#34D39920] text-[#34D399] border-[#34D39950]', // esmeralda — benigno
    Nucleico:           'bg-[#F9731620] text-[#F97316] border-[#F9731650]', // naranja oscuro — nucleico
    Evil:               'bg-[#DC262620] text-[#DC2626] border-[#DC262650]', // rojo oscuro — malvado
    Unknown:            'bg-[#ffffff10] text-[#9A9490] border-[#ffffff20]', // gris — desconocido
  }
  
  function getBadge(race) {
    return RAZA_BADGE[race] ?? 'bg-[#ffffff10] text-[#9A9490] border-[#ffffff20]'
  }

  return (
    <div>
      {/* GRID DE PERSONAJES */}
      <div className='flex flex-wrap justify-center gap-4 mb-8 '>
        {personajesFiltrados.map((personaje) => (
          <div
            key={personaje.id}
            onClick={() => navigate(`/personaje/${personaje.id}`)}
            className='group w-48 rounded-2xl overflow-hidden cursor-pointer
              bg-[#1E1A1A] border border-[#e8a02025]
              hover:border-[#e8a02070] hover:-translate-y-1
              transition-all duration-200'
          >
            <div className={`
              w-full h-7 z-20
              flex items-center justify-center
              text-[9px] font-semibold tracking-[2px] uppercase
              border-b
              ${getBadge(personaje.race)}
            `}>
              {personaje.race}
            </div>
            <div className='w-full h-52 bg-[#241a02] flex items-center justify-center relative overflow-hidden'>
              
              {/* Triángulo inferior derecho */}
              <div className='absolute bottom-0 right-0 w-0 h-0'
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 0 208px 208px',
                  borderColor: 'transparent transparent rgba(250,138,42,0.06) transparent'
                }}
              />

              {/* Triángulo superior izquierdo */}
              <div className='absolute top-0 left-0 w-0 h-0'
                style={{
                  borderStyle: 'solid',
                  borderWidth: '90px 90px 0 0',
                  borderColor: 'rgba(255,210,43,0.04) transparent transparent transparent'
                }}
              />

              {/* Línea inferior */}
              <div className='absolute bottom-0 left-0 right-0 h-px'
                style={{ background: 'linear-gradient(90deg, transparent, rgba(250,138,42,0.4), transparent)' }}
              />
              <img
                src={personaje.image}
                alt={personaje.name}
                className='relative z-10 w-full h-50 object-contain
                  group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='bg-[#000000] px-4 py-3 flex flex-col gap-0.5'>
              <p className='text-[10px] tracking-widest text-[#7d7a74] uppercase'>
                #{String(personaje.id).padStart(3, '0')}
              </p>
              <h2 className='text-white font-semibold text-sm truncate'
                style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.name}
              </h2>
              <p className='text-[11px] text-[#7d7a74] tracking-wider uppercase mt-0.5'>
                Ki <span className='text-[#e8a020]'>{personaje.ki}</span>
              </p>
            </div>
          </div>
        ))}
        
      </div>

      {/* PAGINACIÓN */}
      {totalPaginas > 1 && (
        <Paginacion pagina={pagina} totalPaginas={totalPaginas} setPagina={setPagina} />
      )}
    </div>
  )
}

export default ListaDePersonajes
