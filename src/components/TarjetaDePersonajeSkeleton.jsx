function TarjetaDePersonajeSkeleton() {
return (
  <div className='min-h-screen bg-[#1E1A1A] text-white'>

    {/*NAV — carga inmediato, sin skeleton*/}
    <nav className='bg-black border-b border-[#F10124] px-6 h-14 flex items-center gap-4'>
      <button
        onClick={() => navigate('/')}
        className='border border-[#e8a02040] rounded-lg px-3 py-1 text-xs
          font-semibold tracking-widest uppercase text-[#9A9490]
          hover:text-[#e8a020] hover:border-[#e8a020] transition-colors'
      >
        ← Volver
      </button>
      <div className='h-3 w-32 bg-[#2E2828] rounded-full animate-pulse' />
    </nav>

    {/*hero*/}
    <div className='bg-black border-b border-[#e8a02040] px-6 pt-8
      flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-center animate-pulse'>

      {/* imagen skeleton */}
      <div className='w-40 h-48 sm:w-56 sm:h-72 lg:w-64 lg:h-80
        shrink-0 bg-[#2E2828] rounded-2xl' />

      {/* info skeleton */}
      <div className='flex-1 pb-7 w-full flex flex-col items-center sm:items-start gap-3'>
        <div className='h-2.5 w-24 bg-[#2E2828] rounded-full' />
        <div className='h-10 w-48 sm:w-64 bg-[#2E2828] rounded-xl' />
        <div className='flex gap-2'>
          <div className='h-6 w-16 bg-[#2E2828] rounded-full' />
          <div className='h-6 w-20 bg-[#2E2828] rounded-full' />
        </div>
        <div className='flex flex-col gap-2 w-full max-w-lg'>
          <div className='h-3 w-full    bg-[#2E2828] rounded-full' />
          <div className='h-3 w-5/6    bg-[#2E2828] rounded-full' />
          <div className='h-3 w-4/6    bg-[#2E2828] rounded-full' />
          <div className='h-3 w-5/6    bg-[#2E2828] rounded-full' />
          <div className='h-3 w-3/6    bg-[#2E2828] rounded-full' />
        </div>
      </div>
    </div>

    {/*cuerpo skeleton */}
    <div className='p-6 animate-pulse'>

      {/*KI titulo*/}
      <div className='h-2.5 w-24 bg-[#2E2828] rounded-full mb-4' />

      {/*KI card*/}
      <div className='bg-black border border-[#e8a02040] rounded-2xl p-6 mb-4'>
        <div className='h-12 w-36 bg-[#2E2828] rounded-xl mb-2' />
        <div className='h-2.5 w-32 bg-[#2E2828] rounded-full mb-5' />
        <div className='h-1.5 w-full bg-[#2E2828] rounded-full mb-5' />
        <div className='grid grid-cols-2 gap-3'>
          <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3 flex flex-col gap-2'>
            <div className='h-2 w-12 bg-[#2E2828] rounded-full' />
            <div className='h-5 w-20 bg-[#2E2828] rounded-lg' />
          </div>
          <div className='bg-[#1E1A1A] border border-white/5 rounded-xl p-3 flex flex-col gap-2'>
            <div className='h-2 w-16 bg-[#2E2828] rounded-full' />
            <div className='h-5 w-24 bg-[#2E2828] rounded-lg' />
          </div>
        </div>
      </div>

      {/*INFO GRID titulo*/}
      <div className='h-2.5 w-20 bg-[#2E2828] rounded-full mb-4' />

      {/*INFO GRID*/}
      <div className='grid grid-cols-2 gap-3'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}
            className='bg-black border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-2'>
            <div className='h-2 w-16 bg-[#2E2828] rounded-full' />
            <div className='h-4 w-24 bg-[#2E2828] rounded-lg' />
          </div>
        ))}
      </div>

    </div>
  </div>
)
}
export default TarjetaDePersonajeSkeleton