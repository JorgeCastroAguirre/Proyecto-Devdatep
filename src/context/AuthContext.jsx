import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [buscar, setBuscar] = useState('')  // ← solo queda esto

  return (
    <AuthContext.Provider value={{ buscar, setBuscar }}>
      {children}
    </AuthContext.Provider>
  )
}
