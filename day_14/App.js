// const Dollars = (props) => (
//     <div>Wartość w dolarach: {props.amount<=0 ? "" : (props.amount /props.ratio).toFixed(2)}</div>
// )
    

// const Euros = (props) => (
//     <div>Wartość w euro: {props.amount<=0 ? "" : (props.amount/props.ratio).toFixed(2)}</div>
// )

const Cash = (props) => {
    return (
    <>
        <div>{props.title} {props.amount<=0 ? "" : (props.amount /props.ratio).toFixed(2)}</div>
    </>
)}

class ExchangeCounter extends React.Component{
    state = {
        amount: "",
        ratioDollar: 3.6,
        ratioEuro: 4.2
    }
    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    render() {
        const {amount, ratioDollar, ratioEuro} = this.state;
        return(
            <React.Fragment>
                <label> <input type="number" value={amount} onChange={this.handleChange}/></label>
                {/* <Dollars ratio={ratioDollar} amount={amount}/>
                <Euros ratio={ratioEuro} amount={amount}/> */}
                <Cash ratio={ratioDollar} title={"Wartość w $: "} amount={amount}/>
                <Cash ratio={ratioEuro} title={"Wartość w Euro: "} amount={amount}/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))