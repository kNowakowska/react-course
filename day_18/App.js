class Counter extends React.Component{
    state={
        result: 1,
        ratio: 2
    }
    handleMultiplication = () => {
        this.setState((state)=>({
            result: state.result* state.ratio
        }))
    }
    componentDidUpdate(){
        //dodatkowy warunek bo mimo zmiany nadal result jest wiekszy od 1000 i tworzy to pętlę nieskonczonę, zatem po zmianie ratio na 0.5 ten drugi warunek przerywa pętlę niekonczona
        if(this.state.result>1000 && this.state.ratio===2){
            this.setState(()=>({
                ratio: 0.5
            }))
        }
        else if(this.state.result <1 && this.state.ratio===0.5){
            this.setState(()=>({
                ratio: 2
            }))
        }
    }
    render(){
        return(
            <div>
                <p>Kalkulator mnoży przez 2, jeśli suma jest mniejsza niż 1000. Po przekroczeniu 1000 kalkulator mnoży przez 0.5 aż osiągnie sumę
                    mniejszą niż jeden. Wtedy ponownie zaczyna mnożyć przez 2.
                </p>
            <button onClick={this.handleMultiplication}>{`Pomnóż przez ${this.state.ratio}`}</button>
                <h1>Wynik: {this.state.result}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))