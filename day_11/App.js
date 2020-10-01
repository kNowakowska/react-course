class ListItems extends React.Component{

    state = {
        items: ["jabłko", "sliwka", "gruszka"]
    }

    render(){
        return(
            <ul>
                {/* Użycie template stringa */}
                {this.state.items.map((item) => <li key={item}>{`owoc ${item}`}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))