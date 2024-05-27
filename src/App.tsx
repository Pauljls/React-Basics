
import Card,{CardBody} from "./components/Card"
import List from "./components/List"
//PARA EVITAR LA REDUNDACIA LALMAMOS AL COMPONENETE COMO INDEX DENTRO DEL
//DIRECTORIO DONDE SE UBICA, POR DEFECTO REACT BUSCARA INDEX EN EL DIRECTORIO Y
//NO SERA NECESARIO LLAMARLO BAJO EL MISMO NOMBRE DE LA CARPETA
import Button from "./components/Button"
import Button1 from "./components/Button1"
import { useState } from "react"



//SHORT CIRCUIT OPERATOR
// const x = { operador && accion} ejemplo { 8>5 && "Es verdad"} funciona de la siguiente forma
//si el operador es verdadero entonces se cumple lo q ue esta al lado derecho del && sino entonces no sucede nada


// const x = 8-8 && "Hola mundo" // pero si el valor da 0 entonces siempre se imprimira 0,solo sucede en react
function App(){

  const [data,setData] = useState(['Goku','Tanjiro','Chanchito feliz'])

  //ES UNA CONVENCION USAR handle(nombre de funcion) para asignar una fucnion a un componente
  
  //const [isLoading, setIsLoading]= useState(false)
  //const handleClick =()=> setIsLoading(!isLoading)
  //
  //const list :  string[] =  [
  //  'Goku',
  //  'Tanjiro',
  //  'Eren'
  //]
//
  //return <Card>
  //  
  //  <CardBody title={"Esto es un titulo"} text={"Esto es un texto"}/>
  //  {
  //    list.length ? (<List data={list} />) : "No hay contenido" 
  //  }
  //  <br/>
  //  <Button isLoading={isLoading} onClick={handleClick} >Hola mundo</Button>
  //</Card>
  const addMinion=()=>{
    setData([...data,"minion"])
  }
  const delMinion=()=>{
    setData(data.slice(0,-1))
  }

  return(
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data}/>
    </Card>
  )

}


export default App