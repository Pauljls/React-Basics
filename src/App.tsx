
import Card,{CardBody} from "./components/Card"
import List from "./components/List"

const list =  [
  'Goku',
  'Tanjiro',
  'Eren'  
]

function App(){
  //ES UNA CONVENCION USAR handle(nombre de funcion) para asignar una fucnion a un componente
  const handleSelect = (elemento : string)=>{
     console.log(elemento + 1)
  }
  return <Card>
    <CardBody title={"Esto es un titulo"} text={"Esto es un texto"}/>
    <List data={list} onSelect={handleSelect}/>
  </Card>
}

export default App