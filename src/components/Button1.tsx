import { ReactNode} from "react"

type Props = {
    children : ReactNode;
    event : () => void;
}



function Button1({children, event}:Props){
    const addElement=()=>{
        event()
    }

    return (<button type="button" className="btn btn-primary" onClick={addElement}>{children}</button>)
}

export default Button1