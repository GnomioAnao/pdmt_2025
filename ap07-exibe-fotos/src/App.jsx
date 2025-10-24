import React from "react"
import Busca from "./components/Busca"
// import { createClient } from 'pexels'
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from "./utils/pexelsClient"
import Imagem from "./components/imagem"
import ListaImagem from "./components/ListaImagem"

export default class App extends React.Component {

  //pexelsClient = null

  //declarar uma variável de estado e guardar o vetor photos nela. ela pode se chamar photos
  state = {
    photos: []
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //     .then(result => this.setState({ photos: result.photos }))
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
    .then(result => {
      //console.log(result.data)
      this.setState({photos: result.data.photos})
    })
  }

  componentDidMount() {
    //this.pexelsClient = createClient('')
  }

  render() {
    return (
      <div className="grid w-9 m-auto p-3 border-1 border-round-md">
        <div className='col-12'>
          <div className='flex'>
            <PexelsLogo />
            <div className='ml-3'>
              <i
                className='pi pi-android'
                style={{ fontSize: '2rem' }}>
              </i>
            </div>
          </div>
        </div>
        <div className="col-12"> Exibir uma lista de...</div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className='grid'>
            <ListaImagem estiloDaImagem='col-12 sm:col-6 lg:col-4 xl:col-3' 
              photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )
  }
}
