import { ReactNode, useState } from "react"

interface Props{
    children : ReactNode
}


function Button(props : Props){
    const [status, setStatus] = useState(true)
    const [message, setMessage] = useState(props.children)
    const [enable, setEnable] =useState(false)


    const statusHandler=()=>{
        setStatus(false)
        setEnable(true)
        setMessage('Cargando...')
    }

    return (<button type="button" disabled={enable} className={`${status ? 'btn btn-primary' : 'btn btn-secondary'}`} onClick={()=>statusHandler()} >{message}</button>)
}

export default Button