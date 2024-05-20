//CREAMOS UNA INTREFAZ APRA PODER ASOCIARLE UN TIPODE DATO

import { ReactNode } from "react"

//YA QUE POR DEFECTO PROPS ES ANY
interface Props{
  //PARA PODER USAR UNA ETIQUETA DENTRO DE NUESTRA ETIQUETA
  //ES NENCESARIO USAR REACT NODE PARA PODER HACERLO,ESTE LO LLAMARA DE
  //LA LIBRERIA REACT
  children: ReactNode
  //ESTE ES EN EL CASODE SOL TEXTO 
  //children : String ||| puede ser cualqueir otro tipo de dato realmente pero esta es la logica
}

interface CardBodyProps{
  title : String,
  //SI USAMOS UN SIMBOLO DE PREGUNTA EN ESTE CASO
  //INDICAREMOS QUE NO ES UN CARACTER OBLIGATORIO
  text? : String
}

function Card(props:Props){
  const { children } = props
    const width = {
        width: "350px",
    }
    //EL PRIMER PARENTESIS DE LLAVES EVALUA UNA VARIBLE EN LA PALNTILLA IGUAL QUE EN EJS
    //
    return <div className="card" style={{
        width : "450px"
    }}>
    <div className="card-body" >
      {children}
    </div>
  </div>
}

export function CardBody(props : CardBodyProps ){
  const { title, text} = props
  return(
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>

    </>
  )
}

export default Card