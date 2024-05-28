import { ReactNode} from "react"
import styled from "styled-components"

type BtnProps = {
    isLoading : boolean
}

//----PUNTOS IMPORTANTES
//1.SE GENERA CODIGO CSS DENTRO DE LOS BACKTICS 
//2.SE PEUDE ASIGNARLE UN STILIZADO SEGUN UNA PROPIEDAD
//SI LO DECLARAMOS CON EL TIPO COMO S EMUESTRA A CONTINUACION
const Btn = styled.button<BtnProps>`
    background-color: ${props => props.isLoading ? 'gray' : 'red'};
    padding: 25px 30px;
`

type Props = {
    children : ReactNode
    isLoading ?:  boolean
    onClick : ()=> void
}


console.log(styled)
function Button({children, onClick, isLoading} : Props){


    //const className = [`btn btn-${isLoading ? 'secondary' : 'primary'}`,styled.button, styled.padded].join(" ")
    //Los modulso de css iran en el apartado de clases
    return (<Btn 
        disabled={isLoading} 
        onClick={onClick} 
        //className={[style.button, style.padded].join(" ")}
        //Cambiando estilos dinamicamente con propeidades
        isLoading={isLoading}
        >
            {isLoading ? 'Cargando': children }
        </Btn>)
}

export default Button