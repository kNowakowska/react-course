class App extends React.Component{
    state = {
        text: ""
    }

    handleInputChange(e){
        console.log("Zawartość w evencie: " + e.target.value)
        console.log("Zawartość przed setState: " + this.state.text)

        //metoda asynchroniczna, wykonywana w trakcie render - w chwili renderowania strony, a nie tutaj!
       this.setState({
           text:e.target.value
       })
       console.log("Zawartość po setState: " + this.state.text)
    }

    handleButtonClick =  () => {
        this.setState({
            text:""
        })

    }

    render(){
        console.log("Zawartość w trakcie render: " + this.state.text)
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