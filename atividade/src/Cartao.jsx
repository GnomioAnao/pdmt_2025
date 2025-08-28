const Cartao = (props) => {
  return (
    <div className="card shadow-sm">
        <div className="card-header text-muted">
            <h3 font-size="30">{props.cabecalho}</h3>  
        </div>
        <div className="card-body">
            {props.children} 
            <p className="text-muted small mt-2">{props.rodape}</p>
        </div>
    </div>
  )
}

export default Cartao