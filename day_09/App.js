// const displayMessage=(isConfirmed, isFormSubmitted)=>{
//         if(isFormSubmitted){
            
//             if(isConfirmed ){
//                 return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!"/>
//             }
//             else{
//                 return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
//             }
//         }
        
//     }

const ValidationMessage = (props) => {
    const {txt} = props
    // const {txt, title} = props
    return(
        <p>{txt}</p>
    )
}

const ValidationForm = (props) => {
    const {confirm, change, submit} = props
    return(
        <form onSubmit={submit}>
                <input type="checkbox" id="age" onChange={change} checked={confirm}/>
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                <br/>
                <button type="submit" >Kup bilet</button>
        </form>
    )
}

class TicketShop extends React.Component{
    state ={
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = ()=>{
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false

        })
    }

    handleFormSubmitted= (e)=>{
        e.preventDefault();
        if(!this.state.isFormSubmitted){
            this.setState({
                isFormSubmitted:true,
            })
        }
        
    }
    

    displayMessage=()=>{
        if(this.state.isFormSubmitted){
            
            if(this.state.isConfirmed ){
                return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!"/>
            }
            else{
                return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
            }
        }
        
    }
    render(){

        const {isConfirmed, isFormSubmitted} = this.state
        
        return(
            <>
            <h1>Kup bilet na horror roku!</h1>
            
            <ValidationForm confirm={isConfirmed} change={this.handleCheckboxChange} submit={this.handleFormSubmitted}/>
            {/* {displayMessage(isConfirmed, isFormSubmitted)} */}
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))

//Part 3: 
// a) jeden komponent z dwoma różnymi tekstami
// b) destrukturyzacja
// c) funkcja poza komponentem