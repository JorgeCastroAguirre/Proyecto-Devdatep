import axios from 'axios'

export const traducirTexto = async (texto, idiomaDestino = 'en') => {
  //recortar a 400 para que no se caiga la pagina xd
  const textoCorto = texto.length > 400
    ? texto.substring(0, 400) + '...'
    : texto
  const textoEncoded = encodeURIComponent(textoCorto)
  const res = await axios.get(`https://lingva.ml/api/v1/es/${idiomaDestino}/${textoEncoded}`)

  return res.data.translation
}
