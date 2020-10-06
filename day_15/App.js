/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

const predictions = [
    {
        name: "pierwsza wróżba",
        id: 1
    },
    {
        name: "druga wróżba",
        id: 2
    },
    {
        name: "trzecia wróżba",
        id: 3
    }
]

class App extends React.Component{
    state={
        prediction: ""
    }

    drawPrediction=()=>{
        return (Math.floor(Math.random()*this.props.predictions.length )+1)
    }

    handleShowPrediction=()=>{
       let id = this.drawPrediction() 
       let value = this.props.predictions.filter(item => item.id===id)
       value = value[0].name
        this.setState({
            prediction: value
        })
    }
    render(){
        return(
            <>
                <button onClick={this.handleShowPrediction}>zobacz wróżbę</button>
                <h1>{this.state.prediction}</h1>
            </>
        )
    }
}

ReactDOM.render(<App predictions={predictions} />, document.getElementById('root'))