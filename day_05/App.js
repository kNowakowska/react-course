//Przycisk - po kliknięciu dodawana jest litera do tekstu 


class App extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         text:""
    //     }
    // }
    
    state = {
        text: ""
    }

    //funkcja strzałkowa
    handleClick = () => {
        //this.state.text += "a"; ale nie zadziala bo nie wywoła ponownie funkcji render() i nie uaktualni strony
        const letter = "a";
        this.setState({
            text: this.state.text + letter
        })
    }

    //metoda deklarowana
    
    render(){
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Dodaj "A"</button>
                
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

//Funkcja strzałkowa a deklarowanie metody - bind
handleClick() {
    //this.state.text += "a"; ale nie zadziala bo nie wywoła ponownie funkcji render() i nie uaktualni strony
    const letter = "a";
    this.setState({
        //tutaj this jest undefined, inaczej niż w funkcji strzałkowej
        text: this.state.text + letter
    })
}

<button onClick={this.handleClick.bind(this)}>Dodaj "A"</button> 
//i wtedy można metodę deklarowaną

//setState - przekazanie do metody obiektu i funkcji
this.setState((prevState)=>{
    return{
        text: this.prevState.text+letter
    }
})

//Definiowanie state w konstruktorze (poprzedni sposob robienie, teraz można po prostu state = {} <- patrz wyżej)
constructor(){
    super(props);
    this.state = {
        text:""
    }
    
    //inny sposob wiązania z bind zamiast funkcji strzałkowej
    this.handleClick =this.handleClick.bind(this)
}