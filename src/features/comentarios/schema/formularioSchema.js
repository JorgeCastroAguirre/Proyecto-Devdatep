import {z} from 'zod'

export const schema = z.object({
  nombre:z.string().min(3,'Minimo 3 caracteres'),
  comentario:z.string().min(10,'Minimo 10 caracteres')
})