const Feedback = (props) => {
  return (
    <div className='d-flex justify-content-evenly'>
        <button
            onClick={props.funcaoOK} 
            className="btn-rick">
            {props.textoOK}
        </button>
        <button
            onClick={props.funcaoNOK} 
            className="btn-morty">
            {props.textoNOK}
        </button>
    </div>
  )
}

export default Feedback