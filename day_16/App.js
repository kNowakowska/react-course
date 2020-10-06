// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

class List extends React.Component{
    state = {
        people: [{
            name: "Jan K.",
            id: 0
        },
        {
            name: "Piotr C.",
            id: 1
        },
        {
            name: "Marysia W.",
            id: 2
        },
        {
            name: "John S.",
            id: 3
        }
        ]
    }

    handleDelete = e=>{
        this.setState({
            people: this.state.people.filter(person => person.id != e.target.id)
        })
    }
    render(){
        return(
            <ul>
                {this.state.people.map(person => <Person name={person.name} id={person.id} key={person.id} delete={this.handleDelete}/>)}
            </ul>
        )
    }
}

const Person = (props) => {
    return(
        <li>{props.name} <button id={props.id} onClick={props.delete}>Usuń</button></li>
    )
    
}

ReactDOM.render(<List/>, document.getElementById('root'))