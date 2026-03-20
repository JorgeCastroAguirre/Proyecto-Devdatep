import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useDispatch } from 'react-redux'                             
import { agregar } from '../store/misPersonajesSlice.js'            
import { schema } from '../schema/formularioCrearPersonaje.js'

export function useCrearPersonaje() {
  const dispatch = useDispatch()                                       
  const navigate = useNavigate()

  const [valores, setValores] = useState({
    nombre: '', raza: '', ki: '', maxKi: '',
    afiliacion: '', descripcion: '', imagen: ''
  })
  const [errores,  setErrores]  = useState({})
  const [cargando, setCargando] = useState(false)

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

    setCargando(true)
    dispatch(agregar(valores))  //antes era agregarPersonaje(valores)
    navigate('/mis-personajes')
  }

  const inputClass = (campo) => `
    w-full bg-[#1E1A1A] rounded-xl px-4 py-3 text-sm text-white
    placeholder:text-[#3a3a3a] outline-none transition-colors border
    focus:border-[#e8a020]
    ${errores[campo] ? 'border-[#F10124]' : 'border-[#e8a02025]'}
  `

  return { valores, setValores, errores, cargando, handleChange, handleSubmit, inputClass }
}