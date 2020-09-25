class Counter extends React.Component{

    state = {
        count: 0,
        result: this.props.result
    }

    handleMathClick(type = "reset", number = 1 ){
        if(type === "substraction"){
            this.setState(prevState => ({
                count: prevState.count+1,
                result: prevState.result - number
            }))
        }else if (type === "addition"){
            this.setState(prevState => ({
                count: prevState.count+1,
                result: prevState.result + number
            }))
        }else if(type === "reset"){
            this.setState(prevState => ({
                count: prevState.count+1,
                result: this.props.result
            }))
        }
    }
    render(){
        return(
            <>
            {/* Do binda możemy przekazać argumenty które chcemy przekazac do funkcji. */}
            <button onClick = {this.handleMathClick.bind(this, "substraction", 1)}>-1</button>
            <button onClick = {() => this.handleMathClick()}>RESET</button>
            <button onClick = {() => this.handleMathClick("addition")}>+1</button>
            <h1>Liczba kliknięć: {this.state.count}</h1>
            <h1>Wynik: {this.state.result}</h1>
            </>
        )
    }
}

//uwaga aby w propsie nie podać "0" jako string
ReactDOM.render(<Counter result={0}/>, document.getElementById('root'))