
//OTRA ORMA DE ASIGNARLE UN TIPO DE DATOS A PROPS
type props = {
    data : String[]
}


function List({data} : props){
    return( <ul className="list-group">
        {data.map( (elemento) => ( <li key={elemento} className="list-group-item">{elemento}</li>))}
  </ul>
    )
}

export default List