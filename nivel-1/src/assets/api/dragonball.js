import axios from 'axios'

const dragonballApi= axios.create({
    baseURL:'https://dragonball-api.com/api'
})

//Para obtener todos los personajes
export const getTodosLosPersonajes = async ()=>{
    const res=await dragonballApi.get('/characters')
    console.log(res)
    return res.data
}
//Para obtener un solo personaje
export const getUnSoloPersonaje =async (id)=>{
    const res=await dragonballApi.get(`/characters/${id}`)
    console.log(res)
    return res.data
}