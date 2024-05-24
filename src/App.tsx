
import Card,{CardBody} from "./components/Card"
import List from "./components/List"
import Button from "./components/Button"

const list :  string[] =  [
  'Goku',
  'Tanjiro',
  'Eren'
]

//SHORT CIRCUIT OPERATOR
// const x = { operador && accion} ejemplo { 8>5 && "Es verdad"} funciona de la siguiente forma
//si el operador es verdadero entonces se cumple lo q ue esta al lado derecho del && sino entonces no sucede nada


// const x = 8-8 && "Hola mundo" // pero si el valor da 0 entonces siempre se imprimira 0,solo sucede en react
function App(){
  //ES UNA CONVENCION USAR handle(nombre de funcion) para asignar una fucnion a un componente
  const handleSelect = (elemento : string)=>{ 
     console.log(elemento + 1)
  }
  return <Card>
    <CardBody title={"Esto es un titulo"} text={"Esto es un texto"}/>
    {
      list.length ? (<List data={list} onSelect={handleSelect}/>) : "No hay contenido" 
    }
    <br/>
    <Button> Enviar </Button>
  </Card>
}

export default App