import { useNavigate } from 'react-router-dom'
import { useCrearPersonaje } from '../hooks/useCrearPersonaje'
import { RAZAS } from '../schema/formularioCrearPersonaje.js'

function CrearPersonaje() {

  const navigate = useNavigate()
    const {
    valores,
    setValores,
    errores,
    cargando,
    handleChange,
    handleSubmit,
    inputClass,
  } = useCrearPersonaje()

  return (
    <div className='min-h-screen bg-[#1E1A1A] text-white'>

      {/*NAV*/}
      <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center gap-4'>
        <button
          onClick={() => navigate('/mis-personajes')}
          className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
            font-semibold tracking-widest uppercase text-[#9A9490]
            hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
        >
          ← Volver
        </button>
        <span className='text-xs text-[#7d7a74] tracking-wider'>
          Mis personajes &rsaquo; <span className='text-[#e8a020]'>Crear</span>
        </span>
      </nav>

      <div className='max-w-xl mx-auto px-6 py-8'>
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-2'>
          Nuevo personaje
        </p>
        <h1 className='text-3xl font-bold text-white mb-6'
          style={{ fontFamily: 'Cinzel, serif' }}>
          Crear <span className='text-[#e8a020]'>personaje</span>
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

          {/*Nombre*/}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              Nombre
            </label>
            <input name='nombre' value={valores.nombre} onChange={handleChange}
              placeholder='Ej: Kakaroth Evil...' className={inputClass('nombre')} />
            {errores.nombre && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.nombre[0]}</p>}
          </div>

          {/*Raza*/}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              Raza
            </label>
            <select name='raza' value={valores.raza} onChange={handleChange}
              className={inputClass('raza')}>
              <option value=''>Selecciona una raza</option>
              {RAZAS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            {errores.raza && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.raza[0]}</p>}
          </div>

          {/*Ki base y maximo*/}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
                Ki base
              </label>
              <input name='ki' value={valores.ki} onChange={handleChange}
                placeholder='Ej: 60.000.000' className={inputClass('ki')} />
              {errores.ki && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.ki[0]}</p>}
            </div>
            <div>
              <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
                Ki máximo
              </label>
              <input name='maxKi' value={valores.maxKi} onChange={handleChange}
                placeholder='Ej: 90.000.000' className={inputClass('maxKi')} />
              {errores.maxKi && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.maxKi[0]}</p>}
            </div>
          </div>

          {/*Afiliacion*/}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              Afiliación
            </label>
            <input name='afiliacion' value={valores.afiliacion} onChange={handleChange}
              placeholder='Ej: Z Fighter, Villain...' className={inputClass('afiliacion')} />
            {errores.afiliacion && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.afiliacion[0]}</p>}
          </div>

          {/*Descripcion*/}
          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              Descripción
            </label>
            <textarea name='descripcion' value={valores.descripcion} onChange={handleChange}
              rows={4} placeholder='Describe a tu personaje...'
              className={inputClass('descripcion') + ' resize-none'} />
            {errores.descripcion && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.descripcion[0]}</p>}
          </div>

          {/* Imagen — subir archivo */}
          <div>
          <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              Imagen <span className='text-[#3a3a3a]'>(opcional)</span>
          </label>

          {/* Preview de la imagen */}
          {valores.imagen && (
              <div className='w-full h-40 bg-[#1E1A1A] border border-[#e8a02025]
              rounded-xl overflow-hidden mb-3 flex items-center justify-center relative'>
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2
                  w-24 h-24 rounded-full bg-[#FA8A2A] opacity-20'
                  style={{ filter: 'blur(30px)' }} />
              <img
                  src={valores.imagen}
                  alt='preview'
                  className='relative z-10 h-full object-contain'
              />
              </div>
          )}

          {/* Input file */}
          <label className={`
              w-full flex items-center justify-center gap-3
              bg-[#1E1A1A] rounded-xl px-4 py-3 text-sm
              border border-dashed border-[#e8a02040]
              hover:border-[#e8a020] transition-colors cursor-pointer
          `}>
              <span className='text-[#e8a020] text-base'>↑</span>
              <span className='text-[#7d7a74] text-xs tracking-wider uppercase'>
              {valores.imagen ? 'Cambiar imagen' : 'Seleccionar imagen'}
              </span>
              <input
              type='file'
              accept='image/*'
              className='hidden'
              onChange={(e) => {
                  const file = e.target.files[0]
                  if (!file) return

                  const reader = new FileReader()
                  reader.onloadend = () => {
                  setValores(prev => ({ ...prev, imagen: reader.result }))
                  }
                  reader.readAsDataURL(file)
              }}
              />
          </label>

          {/* Boton para quitar imagen */}
          {valores.imagen && (
              <button
              type='button'
              onClick={() => setValores(prev => ({ ...prev, imagen: '' }))}
              className='mt-2 text-[9px] tracking-widest uppercase text-[#F10124]
                  border border-[#F1012430] rounded-lg px-3 py-1
                  hover:bg-[#F1012415] transition-colors'
              >
              Quitar imagen
              </button>
          )}
          </div>

          {/*boton*/}
          <button
            type='submit'
            disabled={cargando}
            className='w-full bg-[#e8a020] text-[#1E1A1A] font-bold
              tracking-widest uppercase py-3 rounded-xl text-sm
              hover:opacity-90 transition-opacity
              disabled:opacity-50 disabled:cursor-not-allowed'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {cargando ? 'Creando...' : 'Crear personaje'}
          </button>

        </form>
      </div>
    </div>
  )
}
export default CrearPersonaje