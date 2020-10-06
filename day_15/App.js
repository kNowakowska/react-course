/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną



class App extends React.Component{
    state={
        prediction: "",
        newPrediction: ""
    }

    predictions = [
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

    drawPrediction=()=>{
        return (Math.floor(Math.random()*this.predictions.length )+1)
    }

    handleShowPrediction=()=>{
       let id = this.drawPrediction() 
       let value = this.predictions.filter(item => item.id===id)
       value = value[0].name
        this.setState({
            prediction: value
        })
    }

    handleAddPrediction= e=>{
        e.preventDefault();
        let newPred = {name:this.state.newPrediction, id: this.predictions.length+1}
        this.predictions.push(newPred)
        this.setState({
            newPrediction: ""
        })
       
    }
    handleNewPrediction = e => {
        const content = e.target.value
        this.setState({
            prediction: "",
            newPrediction: content
        })
    }
    render(){
        return(
            <>
                <button onClick={this.handleShowPrediction}>zobacz wróżbę</button>
                <form onSubmit={this.handleAddPrediction}>
                    <input type="text" onChange={this.handleNewPrediction} value={this.state.newPrediction}/><button>Dodaj wróżbę</button>
                </form>
                <h1>{this.state.prediction}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))