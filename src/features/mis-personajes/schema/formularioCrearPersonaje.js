import {z} from 'zod'

export const RAZAS = ['Saiyan', 'Human', 'Namekian', 'Android',
               'Frieza Race', 'Majin', 'God', 'Angel',
               'Jiren Race', 'Nucleico', 'Evil', 'Unknown']

export const schema = z.object({
  nombre:      z.string().min(3,  'Mínimo 3 caracteres'),
  raza:        z.string().min(1,  'Selecciona una raza'),
  ki:          z.string().min(1,  'El ki es requerido'),
  maxKi:       z.string().min(1,  'El ki máximo es requerido'),
  afiliacion:  z.string().min(1,  'La afiliación es requerida'),
  descripcion: z.string().min(10, 'Mínimo 10 caracteres'),
  imagen:      z.string().optional(),
})