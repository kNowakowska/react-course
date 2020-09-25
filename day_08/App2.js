class Counter extends React.Component{

    state = {
        count: 0,
        result: this.props.result
    }

    //wniosek: lepiej używać funkcji strzałkowej bo można uniknąć bindowania
    handleMathClick=(type = "reset", number = 1 )=>{
        // debugger
        if(type === "subtraction"){
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
           <MathButton 
            name="-10" 
            number={10} 
            type="subtraction" 
            click={this.handleMathClick} 
           />
           <MathButton 
            name="-1" 
            number={1} 
            type="subtraction" 
            click={this.handleMathClick} 
           />
           <MathButton 
            name="reset" 
            type="reset" 
            click={this.handleMathClick} 
           />
           <MathButton 
            name="+1" 
            number={1} 
            type="addition" 
            click={this.handleMathClick} 
           />
           <MathButton 
            name="+10" 
            number={10} 
            type="addition" 
            click={this.handleMathClick} 
           />
            <ResultPanel count={this.state.count} result={this.state.result}/>
            </>
        )
    }
}

const MathButton = (props) =>{
    return (
        <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
    )
    
}

const ResultPanel = (props) =>{
    return(
        <React.Fragment>
            <h1>Liczba kliknięć: {props.count} {props.count>10?<span> Przeciążenie procesora</span>:null}</h1>
            <h1>Wynik: {props.result}</h1>
        </React.Fragment>
    )
}
//uwaga aby w propsie nie podać "0" jako string
ReactDOM.render(<Counter result={0}/>, document.getElementById('root'))