# 🐉 Dragon Ball Z — Universe Encyclopedia

Aplicación web para explorar el universo Dragon Ball Z, consumiendo la API oficial de Dragon Ball y JSONPlaceholder.

---

## 🚀 Demo

🔗 [Ver proyecto en vivo](https://tu-url.vercel.app)

---

## 🛠️ Tecnologías utilizadas

 Tecnología| Versión | Uso |

[React](https://react.dev/) | 18+ | Biblioteca de UI 
[Vite](https://vitejs.dev/) | 5+ | Bundler y dev server 
[Tailwind CSS](https://tailwindcss.com/) | 3+ | Estilos 
[React Query](https://tanstack.com/query) | 5+ | Manejo de datos del servidor 
[React Router DOM](https://reactrouter.com/) | 6+ | Navegación entre páginas 
[Redux Toolkit](https://redux-toolkit.js.org/) | 2+ | Estado global 
[Zod](https://zod.dev/) | 3+ | Validación de formularios 
[Axios](https://axios-http.com/) | 1+ | Peticiones HTTP 
[React Icons](https://react-icons.github.io/) | 5+ | Iconos 

---

## 📡 APIs utilizadas

 API | Endpoint base | Uso 

[Dragon Ball API](https://dragonball-api.com/) | `https://dragonball-api.com/api` | Lista y detalle de personajes 
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) | `https://jsonplaceholder.typicode.com` | Comentarios del personaje 
[LingavaTranslate](https://lingva.ml/) | `https://jsonplaceholder.typicode.com` | Traduccion de la descripcion de imagen
---

## ✨ Funcionalidades

### Exploración de personajes
- Listado completo de los 58 personajes de Dragon Ball Z
- Paginacion dinamica con numeros de pagina
- Busqueda en tiempo real por nombre
- Estado vacío con ícono cuando no se encuentran resultados

### Detalle del personaje
- Pagina dedicada por personaje con ruta 
- Imagen del personaje con efecto de luz de ki
- Badges de raza y afiliación con colores unicos por tipo
- Stats de ki base y ki maximo
- Informacion de planeta de origen, genero y afiliacion
- Formulario de comentarios integrado en la pagina

### Comentarios
- Formulario validado con Zod
- Validacion en tiempo real — el error desaparece al escribir
- Contador de caracteres con limite de 300
- Integracion con JSONPlaceholder via POST
- Lista de comentarios publicados con avatar de inicial
- Cada comentario muestra nombre, fecha y texto
- Editar comentario publicado
- Eliminar comentario publicado

### Mis personajes — CRUD completo
- Crear tu propio personaje guerrero con formulario validado
- Selección de raza desde un listado de 13 razas disponibles
- Subir imagen desde el dispositivo o URL externa
- Vista previa de la imagen antes de guardar
- Icono por defecto si no se sube imagen
- Listar todos los personajes creados en una pagina dedicada
- Ver detalle completo de cada personaje creado
- Editar cualquier campo del personaje
- Eliminar personaje con confirmacion

### Diseño y experiencia
- Paleta de colores oficial de Dragon Ball Z
- Skeleton loaders animados durante la carga de datos
- Diseño completamente responsivo para movil y desktop
- Hover effects y transiciones suaves en las cards
- Efecto de luz difuminada detrás de las imagenes
- Barra de raza con color unico por cada tipo
- Badges de raza con colores temáticos

### Arquitectura
- Modularizacion por features (personajes, mis-personajes, comentarios)
- Hooks personalizados para separar logica de UI
- Schemas de validacion Zod centralizados
- Estado global con Redux Toolkit para personajes propios
- Context API para búsqueda global
- React Query para cache y sincronizacion de datos del servidor
- Peticiones HTTP centralizadas en archivos de API separados

---

## 🌿 Ramas del repositorio

Rama | Descripción 

`main` | Código estable — merges de cada nivel 
`nivel-1` | Listado, búsqueda, paginación y skeletons 
`nivel-2` | Formulario Zod, CRUD, Redux Toolkit, features 

---

## 👤 Autor

**Jorge Castro Aguirre**



