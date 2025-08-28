import Comentario from "./Comentario"
import Feedback from "./Feedback"
import Cartao from "./Cartao"


const App = () => {

  const comentarios = [
    {
      username: 'Rick Sanchez',
      data: '11/11/2001',
      comentario: 'Olha só, Morty, eu odeio ter que dizer isso, mas o que as pessoas chamam de "amor" é só uma reação química pra levar os animais à reprodução. Te pega com força, Morty, mas vai se apagando devagar, deixando você encalhado num casamento. Eu fiz isso, seus pais vão fazer isso... Quebre o ciclo, Morty, fique por cima disso. Foque na ciência',
      foto: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },

    {
      username: 'Morty',
      data: '22/11/1963',
      comentario: 'Você é tipo Hitler, mas pelo menos Hitler se importava com a Alemanha ou algo do tipo',
      foto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },

    {
      username: 'Summer',
      data: '06/08/1945',
      comentario: 'Não é uma conversa, você está verbalmente me mantendo refém',
      foto: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    }
  ]

  const componenteFeedback = (
    <Feedback
      textoOK="Wubba Lubba Dub Dub!"
      textoNOK="Eu sou o Jerry"
      funcaoOK={() => alert("*som de arroto*")}
      funcaoNOK={() => alert("Sou chatão mané")}
    />
  )
  return <div>
    <div className="container my-4">
      <div className="row justify-content-center">
        {
          comentarios.map((comentario) => (

        <div className="col-sm-12 col-md-8 mb-4">
          <Cartao cabecalho={comentario.username} rodape={comentario.data}>
            <Comentario
              foto={comentario.foto}
              comentario={comentario.comentario}
              
               />
          </Cartao>
        <div className="mt-3"> {componenteFeedback}</div>
        </div>

          ))
        }

      </div>
    </div>
  </div>
}

export default App
