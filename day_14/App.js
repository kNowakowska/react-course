const Cash = (props) => {
    return (
    <>
        <div>{props.title} {props.amount<=0 ? "" : (props.amount /props.ratio).toFixed(2)}</div>
    </>
)}

class ExchangeCounter extends React.Component{
    state = {
        amount: "",
        // ratioDollar: 3.6,
        // ratioEuro: 4.2
    }

    currencies = [
        {
            id: 1,
            name: "dollar",
            ratio: 3.6,
            title: "Wartość w dolarach"
        },
        {
            id: 2,
            name: "euro",
            ratio: 4.1,
            title: "Wartość w euro"
        },
        {
            id: 3,
            name: "pound",
            ratio: 4.55,
            title: "Wartość w funtach"
        }
    ]
    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    render() {
        const {amount} = this.state;
        const calculators = this.currencies.map(currency => (<Cash key={currency.id} title={currency.title} ratio={currency.ratio} amount={amount}/>))
        return(
            <React.Fragment>
                <label> <input type="number" value={amount} onChange={this.handleChange}/></label>
                {/* <Dollars ratio={ratioDollar} amount={amount}/>
                <Euros ratio={ratioEuro} amount={amount}/> */}
                {/* <Cash ratio={ratioDollar} title={"Wartość w $: "} amount={amount}/>
                <Cash ratio={ratioEuro} title={"Wartość w Euro: "} amount={amount}/> */}
                {calculators}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))