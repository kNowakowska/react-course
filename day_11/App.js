const data = {
    users: [
        {
            id: 1,
            age:29,
            name: "Arek",
            sex: "male"
        },
        {
            id: 2, 
            age: 49,
            name: "Marta",
            sex: "female"
        },
        {
            id:3, 
            age: 19,
            name: "Stasia",
            sex: "female"
        },
        {
            id:4,
            age:24,
            name:"Karol",
            sex: "male"
        }
    ]
}

const Item = ({user}) => {
    return(
        <div className="userInfo">
            <h1>Użytkownik {user.name}</h1>
            <p>Informacje o użytkowniku</p>
            <p>Wiek: <strong>{user.age}</strong></p>
            <p>Płeć: {user.sex}</p>
        </div>
    )
}

class ListItems extends React.Component{

    state = {
        items: ["jabłko", "sliwka", "gruszka"]
    }

    render(){
        let users = this.props.data.users;
        users = users.filter(user=>user.sex==="female")
        const Items = users.map((user) => <Item user={user} key={user.id}/>)
        return(
            <ul>
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))