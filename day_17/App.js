class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number: 0
        }
        console.log("metoda contructor")
    }
    componentWillMount(){
        console.log("metoda componentWillMount")
    }
    componentDidMount(){
        console.log("metoda componentDidMount")
        this.setState({
            number: 4
        })
    }

    componentDidUpdate(){
        console.log("metoda componentDidUpdate")
    }
    component
    render (){
        console.log("metoda render")
        
        return(
            <>
            <p>
                lifecycle - montowanie komponentu
                
            </p>
            <Child />
            </>
        )
    }
}

class Child extends React.Component{
    componentDidMount(){
        console.log("metoda componentDidMount w Child")
        
    }
    render(){
        console.log("metoda render w Child")
        return(
            <p>
            Dziecko
        </p>
        )
       
    }
}

ReactDOM.render(<App />, document.getElementById('root'))