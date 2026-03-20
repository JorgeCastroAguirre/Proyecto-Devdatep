import { useState } from 'react'
import { z } from 'zod'
import { schema } from '../schema/formularioSchema.js'
import { crearPost } from '../../../api/jsonplaceholder.js'

export function useFormularioComentario(personajeId) {
  const [nombre,      setNombre]      = useState('')
  const [comentario,  setComentario]  = useState('')
  const [errores,     setErrores]     = useState({})
  const [cargando,    setCargando]    = useState(false)
  const [exito,       setExito]       = useState(false)
  const [comentarios, setComentarios] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resultado = schema.safeParse({ nombre, comentario })

    if (!resultado.success) { // si es true se ejecuta y si es false no
      const erroresArbol = z.treeifyError(resultado.error) //esto devuelve  properties:{nombre:{errors: ['error'],comentario:{errors:['error]}}}
      setErrores({
        nombre:     erroresArbol.properties?.nombre?.errors,
        comentario: erroresArbol.properties?.comentario?.errors,
      })
      return
    }

    setCargando(true)
    try {
      const data = await crearPost({
        title: nombre,
        body: comentario,
        userId: personajeId,
      })
      console.log(data)

      setComentarios(prev => [...prev, {
        id:         Date.now(),
        nombre:     nombre,
        comentario: comentario,
      }])

      setNombre('')
      setComentario('')
      setErrores({})
      setExito(true)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setCargando(false)
    }
  }

  return {
    nombre,      setNombre,
    comentario,  setComentario,
    errores,     setErrores,
    cargando,
    exito,       setExito,
    comentarios,
    handleSubmit,
  }
}