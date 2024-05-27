import { ReactNode, useState } from "react"
//para crear un modulo de css sera necesario importarlo bajo una costante
//los modulos seran las propeidades del objeto por lo que sera necesario nombrarlas
//de la siguiente forma ".nombre"
import style from './Button.module.css'

type Props = {
    children : ReactNode
    isLoading ?:  boolean
    onClick : ()=> void
}


console.log(style)
function Button({children, onClick, isLoading} : Props){


    const className = [`btn btn-${isLoading ? 'secondary' : 'primary'}`,style.button, style.padded].join(" ")
    //Los modulso de css iran en el apartado de clases
    return (<button 
        disabled={isLoading} 
        onClick={onClick} 
        type="button" 
        className= {className}
        //className={[style.button, style.padded].join(" ")}
        >
            {isLoading ? 'Cargando': children }
        </button>)
}

export default Button