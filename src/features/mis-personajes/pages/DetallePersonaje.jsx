import { useSelector, useDispatch } from 'react-redux'                
import { eliminar } from '../store/misPersonajesSlice.js'             
import { useParams, useNavigate } from 'react-router-dom'

function DetallePersonaje() {
  const { id } = useParams()
  const dispatch = useDispatch()                                 
  const navigate = useNavigate()
  const misPersonajes = useSelector(state => state.misPersonajes)     
  const personaje = misPersonajes.find(p => p.id === Number(id))

  if (!personaje) return (
    <div className='min-h-screen bg-[#1E1A1A] flex flex-col items-center justify-center gap-4'>
      <p className='text-[#7d7a74] text-sm tracking-widest uppercase'>
        Personaje no encontrado
      </p>
      <button onClick={() => navigate('/mis-personajes')}
        className='border border-[#e8a02040] rounded-lg px-4 py-2 text-xs
          font-semibold tracking-widest uppercase text-[#9A9490]
          hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'>
        ← Volver
      </button>
    </div>
  )

  const handleEliminar = () => {
    dispatch(eliminar(Number(id)))  // ← antes era setMisPersonajes filter
    navigate('/mis-personajes')
  }

  return (
    <div className='min-h-screen bg-[#1E1A1A] text-white'>

      {/*NAV*/}
      <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => navigate('/mis-personajes')}
            className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
              font-semibold tracking-widest uppercase text-[#9A9490]
              hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
          >
            ← Volver
          </button>
          <span className='text-xs text-[#7d7a74] tracking-wider'>
            Mis personajes &rsaquo; <span className='text-[#e8a020]'>{personaje.nombre}</span>
          </span>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => navigate(`/mis-personajes/${id}/editar`)}
            className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
              font-semibold tracking-widest uppercase text-[#e8a020]
              hover:bg-[#e8a02015] transition-colors'
          >
            Editar
          </button>
          <button
            onClick={handleEliminar}
            className='border border-[#F1012430] rounded-lg px-3 py-1 text-xs
              font-semibold tracking-widest uppercase text-[#F10124]
              hover:bg-[#F1012415] transition-colors'
          >
            Eliminar
          </button>
        </div>
      </nav>

      {/*HERO*/}
      <div className='bg-black border-b border-[#e8a02040] px-6 pt-8
        flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-end'>

        {/*Imagen*/}
        <div className='w-40 h-48 sm:w-56 sm:h-72 shrink-0
          flex items-end justify-center relative'>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2
            w-32 h-32 rounded-full bg-[#FA8A2A] opacity-20'
            style={{ filter: 'blur(40px)' }} />
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2
            w-20 h-16 rounded-full bg-[#FFD22B] opacity-10'
            style={{ filter: 'blur(20px)' }} />
          {personaje.imagen
            ? <img src={personaje.imagen} alt={personaje.nombre}
                className='relative z-10 w-full h-full object-contain object-bottom' />
            : <div className='relative z-10 w-full h-full flex items-center
                justify-center text-8xl'>
                👤
              </div>
          }
        </div>

        {/*Info*/}
        <div className='flex-1 pb-7 text-center sm:text-left w-full'>
          <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] mb-1'>
            Mi personaje
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-3 leading-none'
            style={{ fontFamily: 'Cinzel, serif' }}>
            {personaje.nombre}
          </h1>
          <div className='flex gap-2 flex-wrap mb-4 justify-center sm:justify-start'>
            <span className='text-[10px] tracking-widest uppercase font-semibold
              px-3 py-1 rounded-full bg-[#d45a0030] text-[#F07030] border border-[#d45a0060]'>
              {personaje.raza}
            </span>
            <span className='text-[10px] tracking-widest uppercase font-semibold
              px-3 py-1 rounded-full bg-[#e8a02018] text-[#e8a020] border border-[#e8a02040]'>
              {personaje.afiliacion}
            </span>
          </div>
          <p className='text-sm text-[#9A9490] leading-relaxed max-w-lg mx-auto sm:mx-0'>
            {personaje.descripcion}
          </p>
        </div>
      </div>

      {/*CUERPO*/}
      <div className='p-6'>

        {/*KI*/}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Nivel de Ki
        </p>
        <div className='bg-black border border-[#e8a02040] rounded-2xl p-6 mb-4'>
          <div className='flex items-end gap-2 mb-1'>
            <span className='text-5xl font-bold text-[#FFD22B] leading-none'
              style={{ fontFamily: 'Cinzel, serif' }}>
              {personaje.ki}
            </span>
          </div>
          <p className='text-[10px] tracking-widest uppercase text-[#7d7a74] mb-5'>
            Ki base del personaje
          </p>
          <div className='grid grid-cols-2 gap-3'>
            <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#FA8A2A] mb-1'>Ki base</p>
              <p className='text-lg font-bold text-white'
                style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.ki}
              </p>
            </div>
            <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#F10124] mb-1'>Ki máximo</p>
              <p className='text-lg font-bold text-white'
                style={{ fontFamily: 'Cinzel, serif' }}>
                {personaje.maxKi}
              </p>
            </div>
          </div>
        </div>

        {/*INFO GRID*/}
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
          Información
        </p>
        <div className='grid grid-cols-2 gap-3'>
          {[
            { label: 'Raza',       val: personaje.raza },
            { label: 'Afiliación', val: personaje.afiliacion },
            { label: 'Ki base',    val: personaje.ki },
            { label: 'Ki máximo',  val: personaje.maxKi },
          ].map(({ label, val }) => (
            <div key={label}
              className='bg-black border border-white/5 rounded-xl px-4 py-3'>
              <p className='text-[9px] tracking-widest uppercase text-[#FFD22B] mb-1'>{label}</p>
              <p className='text-sm font-semibold text-white'>{val}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
export default DetallePersonaje


