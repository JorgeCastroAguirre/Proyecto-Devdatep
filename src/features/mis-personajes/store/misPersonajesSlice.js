import {createSlice} from '@reduxjs/toolkit'

const misPersonajesSlice = createSlice({
  name: 'misPersonajes',    //nombre de identificacion en el store
  initialState: [],         // el valor inicial del estado (array vacio)
  reducers: {               //las funciones que modifican el estado
    agregar: (state, action) => {
      state.push({ ...action.payload, id: Date.now() })
    },
    actualizar: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload.id) //si encuentra devuele 1 sino devuele -1
      if (index !== -1) state[index] = { ...state[index], ...action.payload }
    },
    eliminar: (state, action) => {
      return state.filter(p => p.id !== action.payload) //action.payload nos devuelve el id 
    }
  }
})

export const { agregar, actualizar, eliminar } = misPersonajesSlice.actions
export default misPersonajesSlice.reducer