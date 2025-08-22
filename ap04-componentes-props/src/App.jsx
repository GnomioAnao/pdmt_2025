
import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const componenteFeedback = (
    <Feedback
      textoOK="já chegou"
      textoNOK="ainda não"
      funcaoOK={() => alert("obrigado pelo feedback!")}
      funcaoNOK={() => alert("vamos verificar")}
    />
  )
  return <div>
    <div>
      <i class="fa-solid fa-hippo fa-3x"></i>
      <i class="fa-solid fa-hippo fa-2x"></i>
      <i class="fa-solid fa-hippo fa-med"></i>
      <i class="fa-solid fa-hippo fa-med"></i>
    </div>
    <div className="container border rounded my-2 p-3">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho="22/05/2025">
            <Pedido
              icone="fa-hdd"
              titulo="SSD"
              descricao="SSD Kingston" />
              <div className="mt-3"></div>
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho="23/02/2025">
            <Pedido
              icone="fa-book"
              titulo="Pequeno principe"
              descricao="Livro clássico" />
              <div className="mt-3"></div>
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho="28/02/2025">
            <Pedido
              icone="fa-headphones"
              titulo="Headphone"
              descricao="Headphone Bluetooth" />
              <div className="mt-3"></div>
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho="03/05/2025">
            <Pedido
              icone="fa-camera"
              titulo="Câmera"
              descricao="Câmera GoPro" />
              <div className="mt-3"></div>
              {componenteFeedback}
          </Cartao>
        </div>

      </div>
    </div>
  </div>
}

export default App
