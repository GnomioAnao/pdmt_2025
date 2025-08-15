//1. Criar um componente React que devolce um span que exibe o seu nome
//2. criar um componente React que devolve um span que exibe a sua idade
//3. ajustar o componebte App para que ele exiba "Me chamo Ana e tenho 20 anos"


// const Nome = () => {
//   return <div>
//     Caio
//   </div>
// }
// const idade = () => {
//   return <div>
//     20
//   </div>
// }

// const App = () => {
// return <div>
//     Me chamo <Nome/> e tenho <idade/>
//   </div>

// }

// --------------------------------------------------------------------
//aula dia: 08/08

// import "./style.css"
// const App = () => {
// return(
//   <div
//     style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
//       <label 
//       className='rotulo'
//         htmlfor="nome"
//         style={{display: 'block', marginBottom: 4}}>
//           Nome:
//       </label>
//       <input 
//         type='text'
//         id='nome'
//         style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8,
//           outline: 'none'}} />
//       <button
//         style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>
//           Enviar
//       </button>
    
//   </div>
// )
// }

//-------------------------------------------------------------------------------------------------------------
//atv1: quadro de profssionais da saúde:
// const App = () => {
//   return (
//     <div style={{ borderRadius: 30, width: '80%', margin: 'auto', padding: 50, textAlign: 'center', backgroundColor: '#f3eaff'}}>
//       <div style={{ fontWeight: 'bold', marginBottom: '5%', fontSize: 40 }}>
//         Profissionais da Saúde
//       </div>

//       <div style={{display: 'flex', justifyContent: 'space-around'}}>
//         <div style={{backgroundColor: '#f3eaff', padding: 10, width: 200, fontSize: 35}}>
//           <img 
//           src="/profissionalH2.jpg" 
//           style={{width: '100%', borderRadius: 10}}
//           />
//           <div>José da Silva</div>
//         </div>
//         <div style={{backgroundColor: "#f3eaff", padding: '10px', width: 200, fontSize: 35}}>
//           <img
//           src="/profissionalM1.jpg"
//           style={{width: '100%', borderRadius: 8}}
//           />
//           <div>Maria da Silva</div>
//         </div>
//         <div style={{backgroundColor: "#f3eaff", padding: 10, width: 200, fontSize: 35}}>
//           <img
//           src="/profissionalM3.jpg"
//           style={{width: '100%', borderRadius: 8}}
//           />
//           <div>Jaqueline Mendes</div>
//         </div>
//       </div>
//     </div>
//   )
// }


//  export default App

// //------------------------------------------------------------------------------

import "./style.css"

const App = () => {
  return (
    <div 
    className="quadro">
      <div className="titulo">
        BloodBorne
        <img src="/logo.jpg" className="logo"/>
      </div>

      <div className="titulo">Hora da caçada!</div>

      <div className="boss">
        <div className="cartao">
          <img src="/OrphanKos.jpg" alt="Orphan Of Kos"/>
          Orfão de Kos
        </div>
        <div className="cartao">
          <img src="/Ludwing.jpg" className="img-grande" alt="Ludwing" /> 
          Ludwing, o Sabre Sagrado        
        </div>
        <div className="cartao">
          <img src="/Lady.jpg" alt="Lady"/> 
          Lady Maria     
        </div>
        <div className="cartao">
          <img src="/Logarius.jpg" alt="Logarius"/> 
          Martyr Logarius       
        </div>
        <div className="cartao">
          <img src="/Gascoigne.jpg" alt="Gascoigne"/> 
          Padre Gascoigne  
        </div>
      </div>
      
    </div>

  )
}

export default App