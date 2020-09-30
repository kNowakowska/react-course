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
        return(
            <>
                <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
                <span> {this.state.shoppingCart} </span>
                <button disabled={this.state.shoppingCart==this.state.availableProducts ? true : false}onClick={this.handleAddToCart}>+</button>
                {this.state.shoppingCart>0 && <button onClick={this.handleBuying}>Kup</button>}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))