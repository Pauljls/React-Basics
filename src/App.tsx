
import Card,{CardBody} from "./components/Card"
import List from "./components/List"

const list =  [
  'Goku',
  'Tanjiro',
  'Eren'  
]

function App(){
  return <Card>
    <CardBody title={"Esto es un titulo"} text={"Esto es un texto"}/>
    <List data={list} />
  </Card>
}

export default App