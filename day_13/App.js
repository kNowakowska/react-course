//Komponenty (formularza) kontrolowane i niekontrolowane
//Komponent kontorlowany
//1. wykorzystanie state do trzymania aktualnej wartości pola formularza
//2. wykorzystanie atrybut value do wartości pola 
//3. zmiana właściwości w state odbywa się jako zmiana CHange pola

class Form extends React.Component{
    state = {
        city: "Londyn",
        text: "text",
        isLoved: true,
        number: "0"
    }
    handleChange = e => {
        if(e.target.type === "checkbox"){
            this.setState({
                [e.target.name] : e.target.checked
                
            })
        }else{
            this.setState({
                [e.target.name] : e.target.value
                
            })
        }
        
    }
    render() {
        return(
           <div>
               <label >Podaj miasto: <input value={this.state.city} onChange={this.handleChange} name="city" type="text"/></label>
               <br/>
               <label >Napisz coś o tym mieście: <textarea value={this.state.text} onChange={this.handleChange} name="text"></textarea></label>
               <br/>
               <label >Czy lubisz to miasto? <input type="checkbox" checked={this.state.isLoved} onChange={this.handleChange} name="isLoved"/></label>
               <br/>
               <label > Ile razy byłeś w tym mieście? <select value={this.state.number} onChange={this.handleChange} name="number">
                   <option value="0">0</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="more">więcej</option>

                </select></label>
           </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('root'))