class App extends React.Component{
    state = {
        text: ""
    }

    handleInputChange(e){
       this.setState({
           text:e.target.value
       })
    }

    handleButtonClick =  () => {
        this.setState({
            text:""
        })

    }

    render(){
        return(
            <>
                <input value={this.state.text} placeholder="Wpisz..." onChange={this.handleInputChange.bind(this)} type="text" />
                <button onClick = {this.handleButtonClick}>Reset</button>
                <h1 className="title">{this.state.text.toUpperCase()}</h1>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))