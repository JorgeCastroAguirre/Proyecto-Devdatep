import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const crearPost = async (datos) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(datos),
  })
  if (!res.ok) throw new Error('Error al crear el post')
  return res.json()
}