import { configureStore } from '@reduxjs/toolkit'
import misPersonajesReducer from './features/mis-personajes/store/misPersonajesSlice'

export const store = configureStore({
  reducer: {
    misPersonajes: misPersonajesReducer,
  }
})