
import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const pedido = [
    {
      data: '21/08/2025',
      titulo: 'SSD',
      icone: 'fa-hdd',
      descricao: 'SSD Kingston' 
    },
    {
      data: '22/08/2025',
      titulo: 'Concrete Maths',
      icone: 'fa-book',
      descricao: 'Livro do Donald Kruth' 
    },
    {
      data: '21/08/2025',
      titulo: 'Headphone',
      icone: 'fa-headphones',
      descricao: 'Headphones Bluetooth' 
    },
    {
      data: '30/07/2025',
      titulo: 'Câmera',
      icone: 'fa-camera',
      descricao: 'Câmera GoPro' 
    }
  ]

  const hipopotamos = [
    {
      icone:'fa-solid fa-hippo fa-3x'
    },
    {
      icone:'fa-solid fa-hippo fa-2x'
    },
    {
      icone:'fa-solid fa-hippo fa-med'
    },
    {
      icone:'fa-solid fa-hippo fa-med'
    }

  ]

  const componenteFeedback = (
    <Feedback
      textoOK="já chegou"
      textoNOK="ainda não"
      funcaoOK={() => alert("obrigado pelo feedback!")}
      funcaoNOK={() => alert("vamos verificar")}
    />
  )
  return <div>
    {/* criar uma lista de hipopotamos e produzir cada jsx com a função map*/}
    <div>
      {
        hipopotamos.map((hipopotamo) =>(
          <i class={hipopotamo.icone}></i>

        ))
      }
      {/* <i class="fa-solid fa-hippo fa-3x"></i>
      <i class="fa-solid fa-hippo fa-2x"></i>
      <i class="fa-solid fa-hippo fa-med"></i>
      <i class="fa-solid fa-hippo fa-med"></i> */}
    </div>
    <div className="container border rounded my-2 p-3">
      <div className="row">
        {
          pedido.map((pedido) => (

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={pedido.data}>
            <Pedido
              icone={pedido.icone}
              titulo={pedido.titulo}
              descricao={pedido.descricao} />
              <div className="mt-3"></div>
              {componenteFeedback}
          </Cartao>
          <div className="mb-3"></div>
        </div>

          ))
        }

      </div>
    </div>
  </div>
}

export default App
