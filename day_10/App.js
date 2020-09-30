//Warunkowe dodanie przycisku i obsługa stanu magazynu
// Wyszarzenie liczby 0 - css
// destrukturyzacja

class App extends React.Component{
    state = {
        availableProducts: 7,
        shoppingCart: 1
    }

    handleRemoveFromCart = () =>{
        this.setState({
            shoppingCart: this.state.shoppingCart-1
        })
    }

    handleAddToCart = () =>{
        this.setState({
            shoppingCart: this.state.shoppingCart+1
        })
    }
    handleBuying = () =>{
        this.setState({
            availableProducts: this.state.availableProducts-this.state.shoppingCart,
            shoppingCart: 0
        })
    }
    render(){
        const {shoppingCart, availableProducts} = this.state
        return(
            <>
                <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
                <span style={shoppingCart==0 ? { opacity: 0.3} : {}}> {shoppingCart} </span>
                <button disabled={shoppingCart==availableProducts ? true : false}onClick={this.handleAddToCart}>+</button>
                {shoppingCart>0 && <button onClick={this.handleBuying}>Kup</button>}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))