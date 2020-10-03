const Cash = (props) => {
    return (
    <>
        <div>{props.title} {props.amount<=0 ? "" : (props.amount /props.ratio * props.price).toFixed(2)}</div>
    </>
)}

class ExchangeCounter extends React.Component{
    state = {
        amount: "",
        product: "electricity"
        // ratioDollar: 3.6,
        // ratioEuro: 4.2
    }
    static defaultProps = {
        currencies: [
            {
                id: 1,
                name: "zloty",
                ratio: 1,
                title: "Wartość w złotówkach"
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
            },
            {
                id: 4,
                name: "dollar",
                ratio: 3.6,
                title: "Wartość w dolarach"
            },
        ], 
        prices: {
            electricity: .51,
            gas: 4.78,
            oranges: 3.50,
        }
    }
    
    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    handlSelect= e => {
        this.setState({
            product: e.target.value,
            amount: ""
        })
    }
    selectPrice = (select) => {
        return this.props.prices[select];
    }
    insertSuffix(product){
        if(product==="electricity") return <em>kWh</em>
        else if(product === "gas") return <em>litrów</em>
        else if(product === "oranges") return <em>kg</em>
        else return ""
    }
    render() {
        const {amount, product} = this.state;
        const price = this.selectPrice(product)
        const calculators = this.props.currencies.map(currency => (<Cash price={price} key={currency.id} title={currency.title} ratio={currency.ratio} amount={amount}/>))
        return(
            <React.Fragment>
                <label>Wybierz product: 
                    <select value={product} onChange={this.handlSelect}>
                        <option value="electricity">prąd</option>
                        <option value="gas">benzyna</option>
                        <option value="oranges">pomarańcze</option>
                    </select>
                </label>
                <br/>
                <label> 
                    <input type="number" value={amount} onChange={this.handleChange}/> 
                    {this.insertSuffix(this.state.product)}
                </label>
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