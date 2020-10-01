const data = {
    users: [
        {
            id: 1,
            age:29,
            name: "Arek"
        },
        {
            id: 2, 
            age: 49,
            name: "Marta"
        },
        {
            id:3, 
            age: 19,
            name: "Stasia"
        },
        {
            id:4,
            age:24,
            name:"Karol"
        }
    ]
}

const Item = ({user}) => {
    return(
        <div>
            <h1>Użytkownik {user.name}</h1>
            <h2>Ma {user.age}</h2>
        </div>
    )
}

class ListItems extends React.Component{

    // state = {
    //     items: ["jabłko", "sliwka", "gruszka"]
    // }

    render(){
        const users = this.props.data.users;
        const Items = users.map((user) => <Item user={user} key={user.id}/>)
        return(
            <ul>
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))