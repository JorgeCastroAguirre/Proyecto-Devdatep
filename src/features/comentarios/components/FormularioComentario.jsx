import ListaComentarios from './ListaComentarios.jsx'
import { useFormularioComentario } from '../hooks/useFormularioComentario.js'

function FormularioComentario({personajeId,personajeNombre}) {
  const {
    nombre, setNombre,
    comentario, setComentario,
    errores, setErrores,
    cargando, 
    exito, setExito,
    comentarios,
    handleSubmit
  } = useFormularioComentario(personajeId)

  return (
    <div className='mt-6 px-6 pb-10'>

      {/* TITULO SECCION */}
      <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-4'>
        Deja tu comentario
      </p>

      <div className='bg-black border border-[#e8a02040] rounded-2xl p-5 sm:p-6'>

        {/* EXITO */}
        {exito && (
          <div className='bg-[#0a2010] border border-[#40C87040] rounded-xl p-4 mb-5'>
            <p className='text-[#40C870] text-[10px] tracking-[2px] uppercase font-semibold'>
              ¡Comentario publicado correctamente!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

          {/* NOMBRE */}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74]
              font-semibold block mb-2'>
              Tu nombre
            </label>
            <input
              type='text'
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
                setErrores(prev => ({ ...prev, nombre: undefined }))
                setExito(false)
              }}
              placeholder='Escribe tu nombre...'
              className={`w-full bg-[#1E1A1A] rounded-xl px-4 py-3 text-sm
                text-white placeholder:text-[#3a3a3a] outline-none
                transition-colors border focus:border-[#e8a020]
                ${errores.nombre ? 'border-[#F10124]' : 'border-[#e8a02025]'}`}
            />
            {errores.nombre && (
              <p className='text-[#F10124] text-[11px] mt-1.5 tracking-wide'>
                {errores.nombre[0]}
              </p>
            )}
          </div>

          {/* COMENTARIO */}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74]
              font-semibold block mb-2'>
              Comentario
            </label>
            <textarea
              value={comentario}
              onChange={(e) => {
                setComentario(e.target.value)
                setErrores(prev => ({ ...prev, comentario: undefined }))
                setExito(false)
              }}
              rows={4}
              placeholder={`¿Que opinas de ${personajeNombre}?`}
              className={`w-full bg-[#1E1A1A] rounded-xl px-4 py-3 text-sm
                text-white placeholder:text-[#3a3a3a] outline-none
                transition-colors resize-none border focus:border-[#e8a020]
                ${errores.comentario ? 'border-[#F10124]' : 'border-[#e8a02025]'}`}
            />
            <div className='flex items-center justify-between mt-1'>
              {errores.comentario
                ? <p className='text-[#F10124] text-[11px]'>{errores.comentario[0]}</p>
                : <span />
              }
              <p className={`text-[11px] ml-auto
                ${comentario.length > 280 ? 'text-[#F10124]' : 'text-[#7d7a74]'}`}>
                {comentario.length}/300
              </p>
            </div>
          </div>

          {/* BOTON */}
          <button
            type='submit'
            disabled={cargando}
            className='w-full bg-[#e8a020] text-[#021223] font-bold
              tracking-widest uppercase py-3 rounded-xl text-sm
              hover:opacity-90 transition-opacity
              disabled:opacity-50 disabled:cursor-not-allowed'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {cargando ? 'Publicando...' : 'Publicar comentario'}
          </button>

        </form>
      </div>
      <ListaComentarios comentarios={comentarios} />             
    </div>
)
}

export default FormularioComentario