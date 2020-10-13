class App extends React.Component{
    state = {
        active: true
    }
    handleClick = () =>{
        this.setState(prevState=>({
            active: !prevState.active
        }))
    }
    render(){
        return(
            <div>
                <SwitchButton active={this.state.active} click={this.handleClick}/>
                {this.state.active && <Clock />}
                
            </div>
        )
    }
}

const SwitchButton = (props) => {
    return(
    <button onClick={props.click}>{props.active?"Wyłącz":"Włącz"}</button>
    )
}

class Clock extends React.Component{
    interval = ""
    state={
        time:this.getTime()
    }

    getTime(){
        const currentTime = new Date();
        return({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        })
        
    }
    setTime(){
        const time = this.getTime();
        this.setState({
            time
        })
    }
    componentDidMount(){
        //trzeba bindować bo this tutaj console.log(this) jest window 
        this.interval= setInterval(this.setTime.bind(this),1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        const {hours, minutes, seconds} = this.state.time;
        return(
            <div>
                {hours<10?"0"+hours:hours} : {minutes<10?"0"+minutes:minutes} : {seconds>9?seconds:`0${seconds}`}
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))