import { useContext, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getTodosLosPersonajes } from '../assets/api/dragonball'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function PersonajeSkeleton() {
  return (
    <div className='border border-[#e8a02025] rounded-2xl bg-[#0a1a2e] overflow-hidden animate-pulse w-48'>
      <div className='w-full h-52 bg-[#111c30]' />
      <div className='bg-[#0d1829] px-4 py-3 flex flex-col gap-2'>
        <div className='h-2.5 w-10 bg-[#1a2840] rounded-full' />
        <div className='h-4 w-28 bg-[#1a2840] rounded-full' />
        <div className='h-2.5 w-20 bg-[#1a2840] rounded-full' />
      </div>
    </div>
  )
}
function ListaDePersonajes() {
  const { buscar } = useContext(AuthContext)
  const navigate = useNavigate()
  const [pagina, setPagina] = useState(1)   // estado de la página actual

  // cuando el usuario escribe, vuelve a página 1
  useEffect(() => {
    setPagina(1)
  }, [buscar])
  
  const { isLoading, data: personajes, isError, error } = useQuery({
    queryKey: ['personajes', pagina,buscar],        // pagina en la key
    queryFn: () => getTodosLosPersonajes(pagina,buscar),
  })

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

  return (
    <div>
      {/* GRID DE PERSONAJES */}
      <div className='flex flex-wrap justify-center gap-4 mb-8 '>
        {personajesFiltrados.map((personaje) => (
          <div
            key={personaje.id}
            onClick={() => navigate(`/personaje/${personaje.id}`)}
            className='group w-48 rounded-2xl overflow-hidden cursor-pointer
              bg-[#0a1a2e] border border-[#e8a02025]
              hover:border-[#e8a02070] hover:-translate-y-1
              transition-all duration-200'
          >
            <div className='w-full h-52 bg-[#111c30] flex items-center justify-center relative overflow-hidden'>
              <div className='absolute w-36 h-36 rounded-full bg-[#e8a02010] border border-[#e8a02020]' />
              <img
                src={personaje.image}
                alt={personaje.name}
                className='relative z-10 w-full h-full object-contain
                  group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='bg-[#0d1829] px-4 py-3 flex flex-col gap-0.5'>
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
        <div className='flex items-center justify-center gap-2 pb-4'>

          <button
            onClick={() => setPagina(p => Math.max(p - 1, 1))}
            disabled={pagina === 1}
            className='px-4 py-2 rounded-lg border border-[#e8a02040] text-[#9A9490]
              text-xs font-semibold tracking-widest uppercase
              hover:border-[#e8a020] hover:text-[#e8a020] transition-colors
              disabled:opacity-30 disabled:cursor-not-allowed'
          >
            ← Anterior
          </button>

          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPagina(n)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-all
                ${pagina === n
                  ? 'bg-[#e8a020] text-[#021223] border border-[#e8a020]'
                  : 'border border-[#e8a02025] text-[#7d7a74] hover:border-[#e8a020] hover:text-[#e8a020]'
                }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPagina(p => Math.min(p + 1, totalPaginas))}
            disabled={pagina === totalPaginas}
            className='px-4 py-2 rounded-lg border border-[#e8a02040] text-[#9A9490]
              text-xs font-semibold tracking-widest uppercase
              hover:border-[#e8a020] hover:text-[#e8a020] transition-colors
              disabled:opacity-30 disabled:cursor-not-allowed'
          >
            Siguiente →
          </button>

        </div>
      )}
    </div>
  )
}

export default ListaDePersonajes
