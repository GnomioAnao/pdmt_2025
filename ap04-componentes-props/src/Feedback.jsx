const Feedback = (props) => {
  return (
    <div className='d-flex justify-content-evenly'>
        <button
            onClick={props.funcaoOK} 
            className="btn btn-primary">
            {props.textoOK}
        </button>
        <button
            onClick={props.funcaoNOK} 
            className="btn btn-danger">
            {props.textoNOK}
        </button>
    </div>
  )
}

export default Feedback