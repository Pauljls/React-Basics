import { MouseEvent, useState } from "react"

//OTRA ORMA DE ASIGNARLE UN TIPO DE DATOS A PROPS
type props = {
    data : String[]
}


function List({data} : props){
    //1.ES NECESARIO INGRESAR COMO PROPIEDAD EL OBJETO EVENTO, YA QUE ONCLICK Y OTROS EVENTOS LO NECESITAN
    //  ESTE POR LO GENERAL VA EN LOS APRAMETROS DE LA FUNCION, POR DEFECTO ES AGREGADO, ESTE EVENTO ES MOUSEVENT
    //  EL CUAL ES DADO POR LAS ACCIONES DEL MOUSE 

    //PARA PODER USARLO CON LAS PROPIEDAS DEL OBEJTO COMO LO HARIAMOS DIRECTAMENTE EN EL CODIGO DEL MAP NECESITAREMOS
    //IONCLUIRLO EN UNA ARROW FUNCTION 
    
    //let index = 1;
    
    // useState() NOS SERVIRA APRA CAMBIAR O RESTABLECER EL VALOR DE UNA VARIABLE
    //YA QUE REACT SOLO LEERA UNA VEZ VALOR DE UNA VARIBLE DURANTE LA EJECUCION DE 
    //DEL COMPONENTE ASI QUE EL COMPORTAMIENTO DE USESTATE ES SETEAR EL VALOR Y LEUGO 
    // VOLVER A LLAMAR AL COMPONENTE PARA ASI CARGARLO CON EL NUEVO VALOR
    // FUNCIONAMIENTO :  USTATE ES UN METODO DE REACT ESTE DEVUELVE UN ARRAY CON EL OBJETO
    // Y UNA FUNCION PARA SETEARLO, ADICIONALMENTE SE LE PODRA PASAR UN PARAMETRO CON EL VALOR INICIAL
    // DE NO TENEER UN VALOR INICIAL PODEMOS USAR -1 PARA INDICARLO.
    //ADICIONALMENTE EL COMPORTAMIENTO DE CADA COMPOENNTE ES INIVIDUAL POR MAS QUE EPRTENEZCAN A ALMISMA CLASE
    //ES DECIR AL LLAMAR A LA ETIQUETA LIST TENDRA SU POPIA SELECCION PERO SI LLAMAMOS OTRO LSIT
    //ESTE TENDRA SI SE DA EL CASO Y SI ASI LO DESEAMOS OTRA SELECCION

    /* --------------------------- FORMA INCORRECTA ------------------------------
    
    const handleClick=(e : number)=>{
        index  = e
        console.log(e)
    }
    
    */ //-------------------------- FORMA CORRECTA----------------------------
    const [index, setIndex] =  useState(0)

    const handleClick=(e : number)=>{
        setIndex(e)
        console.log(e)
    }
    return( <ul className="list-group">
        
        {data.map( (elemento, i) => ( <li key={elemento} className={`list-group-item ${ index == i ? 'active' : ''}`} onClick={ ()=> handleClick(i) }>{elemento}</li>))}
  </ul>
    )
}

export default List