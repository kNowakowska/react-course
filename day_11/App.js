const Item = (props) => {
    return(
        <li>{`owoc ${props.item}`}</li>
    )
}

class ListItems extends React.Component{

    state = {
        items: ["jabłko", "sliwka", "gruszka"]
    }

    render(){
        const Items = this.state.items.map((item) => <Item item={item} key={item}/>)
        return(
            <ul>
                {/* Użycie template stringa */}
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))