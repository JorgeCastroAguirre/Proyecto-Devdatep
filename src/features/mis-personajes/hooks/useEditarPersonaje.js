import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useSelector, useDispatch } from 'react-redux'               
import { actualizar } from '../store/misPersonajesSlice.js'       
import { schema } from '../schema/formularioCrearPersonaje.js'

export function useEditarPersonaje() {
  const { id }        = useParams()
  const dispatch      = useDispatch()                                
  const navigate      = useNavigate()
  const misPersonajes = useSelector(state => state.misPersonajes)     

  const personaje = misPersonajes.find(p => p.id === Number(id))

  const [valores, setValores] = useState({
    nombre:      personaje?.nombre      ?? '',
    raza:        personaje?.raza        ?? '',
    ki:          personaje?.ki          ?? '',
    maxKi:       personaje?.maxKi       ?? '',
    afiliacion:  personaje?.afiliacion  ?? '',
    descripcion: personaje?.descripcion ?? '',
    imagen:      personaje?.imagen      ?? '',
  })
  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    setValores(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrores(prev => ({ ...prev, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const resultado = schema.safeParse(valores)

    if (!resultado.success) {
      const arbol = z.treeifyError(resultado.error)
      setErrores({
        nombre:      arbol.properties?.nombre?.errors,
        raza:        arbol.properties?.raza?.errors,
        ki:          arbol.properties?.ki?.errors,
        maxKi:       arbol.properties?.maxKi?.errors,
        afiliacion:  arbol.properties?.afiliacion?.errors,
        descripcion: arbol.properties?.descripcion?.errors,
      })
      return
    }

    dispatch(actualizar({ id: Number(id), ...valores }))  // ← antes era setMisPersonajes
    navigate(`/mis-personajes/${id}`)
  }

  const inputClass = (campo) => `
    w-full bg-[#1E1A1A] rounded-xl px-4 py-3 text-sm text-white
    placeholder:text-[#3a3a3a] outline-none transition-colors border
    focus:border-[#e8a020]
    ${errores[campo] ? 'border-[#F10124]' : 'border-[#e8a02025]'}
  `

  return { id, personaje, valores, setValores, errores, handleChange, handleSubmit, inputClass }
}