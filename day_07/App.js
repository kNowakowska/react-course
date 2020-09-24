class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isMessageActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }

    handleMessageButton (){
        this.setState({
            isMessageActive: !this.state.isMessageActive
        })
    }
    render(){
        console.log(this.state.isMessageActive)
        const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, deleniti nam! Vero dolore repudiandae esse veritatis, perspiciatis cum consequuntur accusamus."
        return(
            <>
            <button onClick = {this.handleMessageButton}>{this.state.isMessageActive?"Ukryj":"Pokaż"}</button>
            {/* pierwsze rozwiazanie */}
            {/* Jeśli pierwsza część jest prawdą to przechodzi do drugiej strony i ją zwraca, w przeciwnym wypadku nie zwraca nic. */}
            {/* <p>{this.state.isMessageActive && text}</p> */}

            {/* drugie rozwiazanie
             */}
            {/* {this.state.isMessageActive ? <p>{text}</p> : null} */}
            
            {/* trzecie rozwiazanie */}
            {this.state.isMessageActive && <p>{text}</p>}
            </>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'))
