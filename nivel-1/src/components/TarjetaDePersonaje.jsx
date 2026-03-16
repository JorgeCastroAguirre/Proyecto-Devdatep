import React from 'react'

function TarjetaDePersonaje() {
  return (
    <>
      <div className='w-[80%] h-150 border border-[#e8a020] rounded-[5px] bg-[#021223] flex flex-col justify-evenly items-center'>
        <div className='w-50 h-50 border border-[#e8a020] rounded-[5px] '>

        </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-white'>Son Goku</h1>
            <h1 className='text-[#e8a020]'>Saiyan · Z Fighter</h1>
            <p className='text-[#7d7a74]'>The last survivor of the Saiyan race sent to Earth, Goku has transcended the limits of mortal power, achieving godly ki and becoming the universe's greatest protector.</p>
          </div>
          <div className='flex'>
            <div>BASE KI</div>
            <div>MAX KI</div>
            <div>AFFILIATION</div>
            <div>ORIGIN PLANET</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TarjetaDePersonaje