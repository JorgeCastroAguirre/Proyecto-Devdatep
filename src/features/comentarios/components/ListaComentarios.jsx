function ListaComentarios({comentarios}) {

  if (comentarios.length === 0) {
    return null
  
  }
  return (
        <div className='mt-6'>
          {/*titulo con contador*/}
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
                {/*header del comentario*/}
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
                {/*linea separadora*/}
                <div className='h-px bg-[#e8a02015] mb-3' />
                {/*texto del comentario*/}
                <p className='text-sm text-[#9A9490] leading-relaxed'>
                  {c.comentario}
                </p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default ListaComentarios