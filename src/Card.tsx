//CREAMOS UNA INTREFAZ APRA PODER ASOCIARLE UN TIPODE DATO
//YA QUE POR DEFECTO PROPS ES ANY
interface Props{
  body: string
}

interface CardBodyProps{
  title : String,
  //SI USAMOS UN SIMBOLO DE PREGUNTA EN ESTE CASO
  //INDICAREMOS QUE NO ES UN CARACTER OBLIGATORIO
  text? : String
}

function Card(props:Props){
  const { body } = props
    const width = {
        width: "350px",
    }
    //EL PRIMER PARENTESIS DE LLAVES EVALUA UNA VARIBLE EN LA PALNTILLA IGUAL QUE EN EJS
    //
    return <div className="card" style={{
        width : "450px"
    }}>
    <div className="card-body" >
      {body}
    </div>
  </div>
}

export function CardBody(props : CardBodyProps ){
  const { title, text} = props
  return(
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </>
  )
}

export default Card