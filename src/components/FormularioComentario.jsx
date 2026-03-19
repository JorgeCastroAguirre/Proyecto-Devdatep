import {useState} from 'react'
import {z} from 'zod'

const schema = z.object({
  nombre:z.string().min(3,'Minimo 3 caracteres'),
  comentario:z.string().min(10,'Minimo 10 caracteres')
})

function FormularioComentario({personajeId,personajeNombre}) {

  const [nombre, setNombre] = useState("")
  const [comentario, setComentario] = useState("")
  const [errores, setErrores] = useState({})
  const [cargando, setCargando] = useState(false)
  const [exito, setExito] = useState(false)
  const [comentarios, setComentarios] = useState([])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
      const resultado = schema.safeParse({nombre,comentario})
      console.log(resultado)

      if (!resultado.success) { // si es true se ejecuta y si es false no
        const erroresArbol = z.treeifyError(resultado.error)//esto devuelve  {properties:{nombre:{errors: ['error']}}}
        setErrores({
          nombre: erroresArbol.properties?.nombre?.errors, 
          comentario: erroresArbol.properties?.comentario?.errors,
        })
        return
      }
      
      setCargando(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            title:nombre,
            body:comentario,
            userId:personajeId
          })
        })
        const data = await res.json()
        console.log(data)

        setComentarios(prev=>[...prev,{
          id:data.id,
          nombre:nombre,
          comentario:comentario,
        }])

        setNombre('')
        setComentario('')
        setErrores({})
        setExito(true)
      } catch (error) {
        console.log('Error:',error)
      }
      finally{
        setCargando(false)
      }

  }  
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

      {/* LISTA DE COMENTARIOS */}
      {comentarios.length > 0 && (
        <div className='mt-6'>

          {/* Titulo con contador */}
          <div className='flex items-center gap-3 mb-4'>
            <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold'>
              {comentarios.length} {comentarios.length === 1 ? 'comentario' : 'comentarios'}
            </p>
            <div className='flex-1 h-px bg-[#e8a02025]' />
          </div>

          <div className='flex flex-col gap-3'>
            {comentarios.map((c) => (
              <div
                key={c.id}
                className='bg-[#111c30] border border-[#e8a02025]
                  rounded-2xl px-4 py-4 sm:px-5'
              >
                {/* Header del comentario */}
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center gap-3'>

                    {/*circulo en la cual dentro esta la primera letra del nombre*/}
                    <div className='w-8 h-8 rounded-full bg-[#e8a02020]
                      border border-[#e8a02040] flex items-center justify-center
                      shrink-0'>
                      <span className='text-[#e8a020] text-xs font-bold uppercase'
                        style={{ fontFamily: 'Cinzel, serif' }}>
                        {c.nombre.charAt(0)}
                      </span>
                    </div>
                    <p className='text-[#e8a020] text-xs font-semibold tracking-wider uppercase'
                      style={{ fontFamily: 'Cinzel, serif' }}>
                      {c.nombre}
                    </p>
                  </div>
                  <p className='text-[9px] text-[#7d7a74] tracking-wider'>
                    {c.fecha}
                  </p>
                </div>

                {/* Línea separadora */}
                <div className='h-px bg-[#e8a02015] mb-3' />

                {/* Texto del comentario */}
                <p className='text-sm text-[#9A9490] leading-relaxed'>
                  {c.comentario}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
)
}

export default FormularioComentario