//Przycisk - po kliknięciu dodawana jest litera do tekstu 


class App extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         text:""
    //     }
    // }
    
    state = {
        text: "",
        btn: "uruchom"
    }

    //funkcja strzałkowa
    handleClick = () => {
        //this.state.text += "a"; ale nie zadziala bo nie wywoła ponownie funkcji render() i nie uaktualni strony
        const number = Math.floor(Math.random()*10);
        this.setState({
            text: this.state.text + number
        })
    }

    //metoda deklarowana
    
    render(){
        const btnName = "stwórz liczbę";
        return (
            <React.Fragment>
                {/* <button onClick={this.handleClick}>{btnName}</button> */}
                {/* <button onClick={this.handleClick}>{this.state.btn}</button> */}
                <button onClick={this.handleClick}>{this.props.btnTitle}</button>
                <PanelResult data={this.state.text}>bbb</PanelResult>
            </React.Fragment>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.data}:{props.children}</h1>
    )
}
ReactDOM.render(<App btnTitle="Dodaj cyfrkę"/>, document.getElementById('root'));

//Funkcja strzałkowa a deklarowanie metody - bind
// handleClick() {
//     //this.state.text += "a"; ale nie zadziala bo nie wywoła ponownie funkcji render() i nie uaktualni strony
//     const letter = "a";
//     this.setState({
//         //tutaj this jest undefined, inaczej niż w funkcji strzałkowej
//         text: this.state.text + letter
//     })
// }

{/* <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>  */}
//i wtedy można metodę deklarowaną

//setState - przekazanie do metody obiektu i funkcji
// this.setState((prevState)=>{
//     return{
//         text: this.prevState.text+letter
//     }
// })

//Definiowanie state w konstruktorze (poprzedni sposob robienie, teraz można po prostu state = {} <- patrz wyżej)
// constructor(){
//     super(props);
//     this.state = {
//         text:""
//     }
    
//     //inny sposob wiązania z bind zamiast funkcji strzałkowej
//     this.handleClick =this.handleClick.bind(this)
// }

