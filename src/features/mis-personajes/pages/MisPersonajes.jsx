import { useSelector, useDispatch } from 'react-redux'                
import { eliminar } from '../store/misPersonajesSlice.js'             
import { useNavigate } from 'react-router-dom'
import { FaUserSecret } from 'react-icons/fa'

function MisPersonajes() {
  const misPersonajes = useSelector(state => state.misPersonajes)//useSelector es para leer el estado del store
  const dispatch = useDispatch()                               
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-[#1E1A1A] text-white'>
      <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center justify-between'>
        <button
          onClick={() => navigate('/')}
          className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
            font-semibold tracking-widest uppercase text-[#9A9490]
            hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
        >
          ← Volver
        </button>
        <span className='text-xs text-[#7d7a74] tracking-wider'>Mis personajes</span>
        <button
          onClick={() => navigate('/mis-personajes/crear')}
          className='bg-[#e8a020] rounded-lg px-4 py-2 text-xs
            font-semibold tracking-widest uppercase text-[#1E1A1A]
            hover:opacity-90 transition-opacity'
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          + Crear personaje
        </button>
      </nav>

      <div className='p-6'>
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-6'>
          Mis personajes
        </p>

        {misPersonajes.length === 0 && (
          <div className='flex flex-col items-center justify-center py-20 gap-4'>
            <p className='text-[#7d7a74] text-sm tracking-widest uppercase'>
              No tienes personajes creados
            </p>
            <button
              onClick={() => navigate('/mis-personajes/crear')}
              className='bg-[#e8a020] rounded-lg px-6 py-2 text-xs
                font-semibold tracking-widest uppercase text-[#1E1A1A]
                hover:opacity-90 transition-opacity'
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              + Crear mi primer personaje
            </button>
          </div>
        )}

        <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(192px,1fr))]'>
          {misPersonajes.map(p => (
            <div key={p.id}
              className='bg-black border border-[#e8a02025] rounded-2xl overflow-hidden
                hover:border-[#e8a02070] hover:-translate-y-1 transition-all duration-200'>

              <div className='w-full h-7 flex items-center justify-center
                bg-[#e8a02015] border-b border-[#e8a02025]'>
                <span className='text-[9px] font-semibold tracking-[2px] uppercase text-[#e8a020]'>
                  {p.raza}
                </span>
              </div>

              <div className='w-full h-48 bg-[#1E1A1A] flex items-center
                justify-center relative overflow-hidden'>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2
                  w-32 h-32 rounded-full bg-[#FA8A2A] opacity-20'
                  style={{ filter: 'blur(40px)' }} />
                {p.imagen
                  ? <img src={p.imagen} alt={p.nombre}
                      className='relative z-10 w-full h-full object-contain' />
                  : <FaUserSecret className='relative z-10 text-[#e8a020] opacity-30'
                      style={{ fontSize: '80px' }} />
                }
              </div>

              <div className='bg-[#0D0D0D] px-4 py-3 flex flex-col gap-0.5'>
                <h2 className='text-white font-semibold text-sm truncate'
                  style={{ fontFamily: 'Cinzel, serif' }}>
                  {p.nombre}
                </h2>
                <p className='text-[11px] text-[#7d7a74] tracking-wider uppercase'>
                  Ki <span className='text-[#e8a020]'>{p.ki}</span>
                </p>
              </div>

              <div className='bg-[#0D0D0D] px-4 pb-3 flex gap-2 border-t border-[#e8a02015]'>
                <button onClick={() => navigate(`/mis-personajes/${p.id}`)}
                  className='flex-1 text-[9px] tracking-widest uppercase font-semibold
                    border border-[#e8a02040] text-[#e8a020] py-1.5 rounded-lg
                    hover:bg-[#e8a02015] transition-colors'>
                  Ver
                </button>
                <button onClick={() => navigate(`/mis-personajes/${p.id}/editar`)}
                  className='flex-1 text-[9px] tracking-widest uppercase font-semibold
                    border border-[#e8a02040] text-[#9A9490] py-1.5 rounded-lg
                    hover:bg-[#e8a02010] transition-colors'>
                  Editar
                </button>
                <button
                  onClick={() => dispatch(eliminar(p.id))}            // ← nuevo
                  className='flex-1 text-[9px] tracking-widest uppercase font-semibold
                    border border-[#F1012430] text-[#F10124] py-1.5 rounded-lg
                    hover:bg-[#F1012415] transition-colors'>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MisPersonajes