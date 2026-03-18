
function PersonajeSkeleton() {
  return (
    <div className='border border-[#e8a02025] rounded-2xl bg-[#0a1a2e] overflow-hidden animate-pulse w-48'>
      <div className='w-full h-52 bg-[#111c30]' />
      <div className='bg-[#0d1829] px-4 py-3 flex flex-col gap-2'>
        <div className='h-2.5 w-10 bg-[#1a2840] rounded-full' />
        <div className='h-4 w-28 bg-[#1a2840] rounded-full' />
        <div className='h-2.5 w-20 bg-[#1a2840] rounded-full' />
      </div>
    </div>
  )
}

export default PersonajeSkeleton