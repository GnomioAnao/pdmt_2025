const Comentario = (props) => {
  return (
    <div className="d-flex align-items-start">
      <img
      src={props.foto}
      className="rounded-circle me-4" 
      width="100" 
      height="100" 
      />
  <div>
    <h5>{props.comentario}</h5>
  </div>
</div>
  )
}

export default Comentario