import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getTodosLosPersonajes } from '../assets/api/dragonball'

function ListaDePersonajes() {

  const {isLoading, data:personajes, isError, error} = useQuery({
    queryKey:['personajes'],
    queryFn: getTodosLosPersonajes
  })
  
  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>


  return (
    <div className='flex flex-wrap gap-5'>
      {personajes.items.map((personaje)=>(
        <div key={personaje.id} className='border rounded-[10px] border-amber-400 w-50 h-120 bg-[#222233] '>
          <div className='w-full h-[80%]'>
            <img src={personaje.image} alt={personaje.name} className='w-full h-full object-contain'/>
          </div>
          <div className='w-full h-[20%] bg-[#171724] flex flex-col justify-evenly '>
            <p className='text-[#7d7a74]'>#{personaje.id}</p>
            <h1 className='text-white'>{personaje.name}</h1>
            <p className='text-[#7d7a74]'> KI {personaje.ki}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListaDePersonajes