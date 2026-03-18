function PersonajeSkeleton() {
  return (
    <div className='border border-[#e8a02025] rounded-2xl bg-[#1E1A1A] overflow-hidden animate-pulse w-48'>
      
      {/*barra de raza*/}
      <div className='w-full h-7 bg-[#2A2020]' />

      {/*area de imagen*/}
      <div className='w-full h-52 bg-[#241a02]' />

      {/*cuadro de texto*/}
      <div className='bg-[#000000] px-4 py-3 flex flex-col gap-2'>
        <div className='h-2.5 w-10 bg-[#2A2020] rounded-full' />
        <div className='h-4 w-28 bg-[#2A2020] rounded-full' />
        <div className='h-2.5 w-20 bg-[#2A2020] rounded-full' />
      </div>
    </div>
  )
}

export default PersonajeSkeleton