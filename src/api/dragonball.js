import axios from 'axios'

const dragonballApi= axios.create({
    baseURL:'https://dragonball-api.com/api'
})

//Para obtener todos los personajes
export const getTodosLosPersonajes = async (pagina = 1, buscar = '') => {
    const res = await dragonballApi.get('/characters', {
      params: {
        page: pagina,
        limit: 12,
        name: buscar.trim() !== '' ? buscar : undefined
      }
    })
// Si es busqueda, la API devuelve array directo
// Lo normalizamos para que siempre tenga la misma estructura
    if (Array.isArray(res.data)) {
      return {
        items: res.data,
        meta: {
          totalPages: 1,
          currentPage: 1,
          totalItems: res.data.length
        }
      }
    }
    return res.data
  }
//Para obtener un solo personaje
export const getUnSoloPersonaje =async (id)=>{
    const res=await dragonballApi.get(`/characters/${id}`)
    
    return res.data
}