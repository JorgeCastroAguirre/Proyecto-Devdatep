import { useQuery } from '@tanstack/react-query'
import { getTodosLosPersonajes, getUnSoloPersonaje } from '../assets/api/dragonball'

const fetchConDelay = async (fn, ms = 1500) => {
    const [data] = await Promise.all([ //para ejecutar las 2 operaciones en paralelas 
      fn(),
      new Promise(resolve => setTimeout(resolve, ms))  // espera minimo ms milisegundos
    ])
    return data
  }

export function usePersonajes(pagina, buscar) {
  return useQuery({
    queryKey: ['personajes', pagina, buscar],
    queryFn:  () => fetchConDelay( ()=> getTodosLosPersonajes(pagina, buscar),1500),
  })
}

export function usePersonaje(id) {
  return useQuery({
    queryKey: ['personaje', id],
    queryFn:  () => fetchConDelay( ()=> getUnSoloPersonaje(id),1500),
  })
}