import Imagem from "./imagem"

const ListaImagem = ({photos, estiloDaImagem}) => {
    return(
        photos.map((photo) => (
            <Imagem 
                estiloDaImagem={estiloDaImagem}
                src={photo.src.small}
                alt={photo.alt}
                key={photo.id}
            />
        ))

    )
}

export default ListaImagem