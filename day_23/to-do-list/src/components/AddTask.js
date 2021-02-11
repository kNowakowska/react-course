import {Component} from 'react';
import "./AddTask.css";

//komponent odpowiedzialny za UI: dodawanie zadania
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);
    state = { 
        name: '',
        date: this.minDate,
        important: false,
        done: false,
        finishDate: null
     }
     handleInputChange = e=>{
         const value = e.target.type==="checkbox"?e.target.checked:e.target.value;
         const name = e.target.name;
        this.setState({
            [name]:value,
        })
        
     }
        handleClick= e=>{
        e.preventDefault();
        const {name, date, important} = this.state;
        if(name.length>2){
            const add = this.props.add(name, date, important);
        if(add){
            this.setState({
                name: '',
                date: this.minDate,
                important: false,
            })
        }
        }else{
            alert("za krotka nazwa")
        }
        
      }

    render() { 
        
        const maxDate = this.minDate.slice(0,4)* 1 + 1 +"-12-31";
        return (  
            <form type="submit">
                <div className="container">
                    <input type="text" name="name" placeholder="dodaj zadanie" value={this.state.name} onChange={this.handleInputChange}/> 
                    <input type="checkbox" name="important" id="important" checked={this.state.important} onChange={this.handleInputChange}/> 
                    <label htmlFor="important">Priorytet</label>
                </div>
                
                <div className="container">
                    <label htmlFor="date" >Do kiedy zrobić</label>  
                    <input type="date" id="date" name="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleInputChange}/>
                </div>
                
                <button onClick={this.handleClick}>Dodaj</button>
            </form>
        );
    }
}
 

export default AddTask;