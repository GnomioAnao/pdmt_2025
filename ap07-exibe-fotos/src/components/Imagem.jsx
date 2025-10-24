import React from 'react'

const Imagem = ({src, alt, estiloDaImagem}) => {
  return (
    <div className={estiloDaImagem}>
        <img src={src} alt={alt}/>
    </div>
  )
}

export default Imagem