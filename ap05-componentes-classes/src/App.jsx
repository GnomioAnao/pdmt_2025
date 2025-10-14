import React from "react"
import Lontra from "./lontra"
import EstacaoClimatica from "./EstacaoClimatica"
import Loading from "./Loading"


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensageErro: null
    }
    console.log('constructor')
  }

  // state = {

  //   latitude: null,
  //   longitude: null,
  //   estacao: null, 
  //   data: null, 
  //   icone: null,
  //   mensageErro: null

  // }



  icones = {
    'Primavera': 'tree-large',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }

  obterEstacao = (latitude, data) => {
    const anoAtual = data.getFullYear()

    //21/06 
    const d1 = new Date(anoAtual, 5, 21)

    //24/09
    const d2 = new Date(anoAtual, 8, 24)

    //22/12
    const d3 = new Date(anoAtual, 11, 22)

    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if (data >= d1 && data < d2) {
      return estaNoSul ? 'Inverno' : 'Verão'
    }
    if (data >= d2 && data < d3) {
      return estaNoSul ? 'Primavera' : 'Outono'
    }
    if (data >= d3 || data < d4) {
      return estaNoSul ? 'Verão' : 'Inverno'
    }
    return estaNoSul ? 'Outono' : 'Primavera'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(
          position.coords.latitude,
          dataAtual
        )
        const icone = this.icones[estacao]
        //esta errado: this.state.icone = icone
        this.setState({
          icone: icone,
          estacao: estacao,
          data: dataAtual,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },

      (err) => {
        console.log(`Error: ${err}`)
        this.setState({
          mensageErro: 'Tente novamente mais tarde'
        })
      }
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // agora a lontra tem um parceiro, mas ainda, cada lontra é produzida por um componente React chamado Lontra


  render() {
    console.log('render')
    return (
      <div className='container mt-2'>
        <div className="row">
          <div className='col-12'>
            {/* componente react chamado Lontra abaixo: */}
            <Lontra tamanho="fa-3x" />
            <Lontra tamanho="fa-3x" />
          </div>
        </div>
        <div className="row">
          <div className='col-sm-12'>
            {
              (!this.state.latitude && !this.state.mensageErro) ?
                <Loading  />
                :
                this.state.mensageErro ?

                  //p.border.rounded.p-2.fs-1.text.center
                  <p className="border rounded p-2 fs-1 text center">
                    É preciso dar premissão para acesso à localização. Atualize a página e tente de novo, ajustando a configuraçao no seu navegador
                  </p>
                :

                <EstacaoClimatica
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                  estacao={this.state.estacao}
                  data={this.state.data}
                  icone={this.state.icone}
                  mensageErro={this.state.mensageErro}
                  obterLocalizacao={this.obterLocalizacao}
                  />
              }
          </div>
        </div>
      </div>
    )
  }
}