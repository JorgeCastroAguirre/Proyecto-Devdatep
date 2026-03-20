import {useNavigate} from 'react-router-dom'

function BotonesDeNavegacion() {

  const navigate = useNavigate()

  return (
    <>
      {/*navegacion para mis-personajes*/}
        <nav className='flex flex-col md:flex-row gap-3 mx-4 my-10'>
          <button
            onClick={() => navigate('/mis-personajes')}
            className='border border-[#e8a02040] rounded-lg px-4 py-2
              text-xs font-semibold tracking-widest uppercase text-[#9A9490]
              hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
          >
            Mis personajes
          </button>
          <button
            onClick={() => navigate('/mis-personajes/crear')}
            className='bg-[#e8a020] rounded-lg px-4 py-2
              text-xs font-semibold tracking-widest uppercase text-[#1E1A1A]
              hover:opacity-90 transition-opacity'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            + Crear personaje
          </button>
        </nav>      
    </>
  )
}

export default BotonesDeNavegacion