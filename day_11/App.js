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
        select: "all"
    }

    handleUsersFilter(option){
        this.setState({
            select: option
        })
    }
    usersList = () => {

        let users = this.props.data.users;
        //Moje rozwiązanie:
        if(this.state.select==="all"){
            return users.map(user => <Item user={user} key={user.id}/>)
        }else{
            return users.filter(user => user.sex===this.state.select).map(user => <Item user={user} key={user.id}/>)
        }
        //Rozwiązanie w kursie:
        // switch(this.state.select){
        //     case "all":
        //         return users.map(user => <Item user={user} key={user.id}/>)
        //     case "female":
        //         return users.filter(user => user.sex==="female").map(user => <Item user={user} key={user.id}/>)
        //     case "male":
        //         return users.filter(user => user.sex==="male").map(user => <Item user={user} key={user.id}/>)
        //     default:
        //         return "coś sie zepsuło"
        // }
    }
    render(){
        
        return(
            <div>
               <button onClick={this.handleUsersFilter.bind(this,"all")}>Wszyscy</button>
               <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
               <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
               {this.usersList()}
            </div>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))