import { useNavigate } from 'react-router-dom'
import { useEditarPersonaje } from '../hooks/useEditarPersonaje'
import { RAZAS } from '../schema/formularioCrearPersonaje.js'

function EditarPersonaje() {

  const navigate = useNavigate()
  const {
    id,
    personaje,
    valores,
    errores,
    handleChange,
    handleSubmit,
    inputClass,
  } = useEditarPersonaje()

  if (!personaje) return (
    <div className='min-h-screen bg-[#1E1A1A] flex items-center justify-center'>
      <p className='text-[#7d7a74] text-sm tracking-widest uppercase'>
        Personaje no encontrado
      </p>
    </div>
  )
  return (
    <div className='min-h-screen bg-[#1E1A1A] text-white'>

      {/*NAV*/}
      <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center gap-4'>
        <button
          onClick={() => navigate(`/mis-personajes/${id}`)}
          className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
            font-semibold tracking-widest uppercase text-[#9A9490]
            hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
        >
          ← Volver
        </button>
        <span className='text-xs text-[#7d7a74] tracking-wider'>
          Mis personajes &rsaquo; {personaje.nombre} &rsaquo;{' '}
          <span className='text-[#e8a020]'>Editar</span>
        </span>
      </nav>

      <div className='max-w-xl mx-auto px-6 py-8'>
        <p className='text-[10px] tracking-[3px] uppercase text-[#e8a020] font-semibold mb-2'>
          Editando personaje
        </p>
        <h1 className='text-3xl font-bold text-white mb-6'
          style={{ fontFamily: 'Cinzel, serif' }}>
          Editar <span className='text-[#e8a020]'>{personaje.nombre}</span>
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Nombre</label>
            <input name='nombre' value={valores.nombre} onChange={handleChange}
              placeholder='Nombre del personaje' className={inputClass('nombre')} />
            {errores.nombre && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.nombre[0]}</p>}
          </div>

          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Raza</label>
            <select name='raza' value={valores.raza} onChange={handleChange}
              className={inputClass('raza')}>
              <option value=''>Selecciona una raza</option>
              {RAZAS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            {errores.raza && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.raza[0]}</p>}
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Ki base</label>
              <input name='ki' value={valores.ki} onChange={handleChange}
                placeholder='Ej: 60.000.000' className={inputClass('ki')} />
              {errores.ki && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.ki[0]}</p>}
            </div>
            <div>
              <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Ki máximo</label>
              <input name='maxKi' value={valores.maxKi} onChange={handleChange}
                placeholder='Ej: 90.000.000' className={inputClass('maxKi')} />
              {errores.maxKi && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.maxKi[0]}</p>}
            </div>
          </div>

          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Afiliación</label>
            <input name='afiliacion' value={valores.afiliacion} onChange={handleChange}
              placeholder='Ej: Z Fighter, Villain...' className={inputClass('afiliacion')} />
            {errores.afiliacion && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.afiliacion[0]}</p>}
          </div>

          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>Descripción</label>
            <textarea name='descripcion' value={valores.descripcion} onChange={handleChange}
              rows={4} placeholder='Describe a tu personaje...'
              className={inputClass('descripcion') + ' resize-none'} />
            {errores.descripcion && <p className='text-[#F10124] text-[11px] mt-1.5'>{errores.descripcion[0]}</p>}
          </div>

          <div>
            <label className='text-[9px] tracking-[2px] uppercase text-[#7d7a74] font-semibold block mb-2'>
              URL de imagen <span className='text-[#3a3a3a]'>(opcional)</span>
            </label>
            <input name='imagen' value={valores.imagen} onChange={handleChange}
              placeholder='https://...' className={inputClass('imagen')} />
          </div>

          <div className='flex gap-3'>
            <button
              type='button'
              onClick={() => navigate(`/mis-personajes/${id}`)}
              className='flex-1 border border-[#e8a02040] text-[#9A9490] font-bold
                tracking-widest uppercase py-3 rounded-xl text-sm
                hover:bg-[#e8a02010] transition-colors'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='flex-1 bg-[#e8a020] text-[#1E1A1A] font-bold
                tracking-widest uppercase py-3 rounded-xl text-sm
                hover:opacity-90 transition-opacity'
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Guardar cambios
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default EditarPersonaje


