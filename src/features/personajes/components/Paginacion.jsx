
function Paginacion({pagina,totalPaginas,setPagina}) {

  return (
    <>
        <div className='flex items-center justify-center gap-2 pb-4 mx-2'>

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

          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(n => ( // [1,2,3,4,5]
            <button
              key={n}
              onClick={() => setPagina(n)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-all
                ${pagina === n
                  ? 'bg-[#FFD22B] text-[#021223] border border-[#FFD22B]'
                  : 'border border-[#c9986d] text-[#7d7a74] hover:border-[#e8a020] hover:text-[#e8a020]'
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
    </>
  )
}

export default Paginacion