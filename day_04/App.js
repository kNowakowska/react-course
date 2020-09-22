const ItemList = (props) =>{
     return (
         <li>{props.name}</li>
     )
}

class ItemList2 extends React.Component{
    render(){
        return(
            <li>{this.props.name} - {this.props.example}</li>
        )
    }
}

class ShoppingList extends React.Component{

    //docelowo to co jest w state ma być dynamiczne
    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'ziemniaki'
    }
    render(){
        return(
            <>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList2 name={this.state.items1} example={2+2}/>
                    <ItemList name={this.state.items2}/>
                    <ItemList2 name={this.state.items3}/>
                </ul>
            </>
        )
    }
}


ReactDOM.render(<ShoppingList/>, document.getElementById('root'))