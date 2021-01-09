import './App.css';
import {Component} from 'react';
class App extends Component {
  state={
    username: '',
    email: '',
    pass: '',
    accept:false,
    message: "",
    errors:{
      username: false,
      email: false,
      pass: false,
      accept:false,
    }
  }

  //komunikaty błędu
  messages={
    username_incorrect: 'Nazwa musi byc dłuższa niż 10 znaków i nie moze zawierać spacji',
    email_incorrect: "brak @ w emailu",
    password_incorrect: "haslo musi miec 8 znaków",
    accept_incorrect: 'niepotwierdzona zgoda'
  }
  handleChange = (e) =>{
    const type=e.target.type;
    const name = e.target.name;
    if(type==='text' || type==='password' ||type==="email"){
      const value = e.target.value;
      this.setState({
        [name]:value //jezeli korzystasz ze zmiennej przechowujacej nazwe wlasciwosci a nie z samej nazwy to []
      })
    }else if (type==="checkbox"){
      const checked=e.target.checked;
      this.setState({
        [name]:checked
      })

    }
  }
  formValidation=()=>{
    //true - ok, false - nie ok
    let username = false;
    let email = false;
    let password=false;
    let accept = false;
    let correct=false;
    if(this.state.username.length>10  && this.state.username.indexOf(" ")===-1) username=true;
    if(this.state.email.indexOf("@")!==-1) email=true;
    if(this.state.pass.length>8) password=true;
    if(this.state.accept) accept=true;
    if(username&&email&&password&&accept) correct=true;
    return({
      correct, username, email, password, accept
    })

  
  }
  handleSubmit= (e)=>{
    e.preventDefault();
    const validation = this.formValidation();
    if(validation.correct){
      this.setState({
        username: '',
        email: '',
        pass: '',
        accept:false,
        message: "Formularz został wysłany",
        errors:{
          username: false,
          email: false,
          pass: false,
          accept:false,
        }
      })
    }else{
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept:!validation.accept,
        }
      })
    }
  }

  componentDidUpdate(){
    if(this.state.message!==''){
      setTimeout(()=>this.setState({message:''}),3000)
    }
  }

  render(){
  return (
    <>
     <form onSubmit={this.handleSubmit} noValidate>
       <label htmlFor="user">Twoje imie: 
       <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
       {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
       </label>

       <label htmlFor="email">Twoj email: 
       <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
       {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
       </label>

       <label htmlFor="password">Twoje haslo: 
       <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
       {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
       </label>

       <label htmlFor="accept">
         <input type="checkbox"  id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>Wyrazam zgode
       </label>
       {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
       
       <button>Zapisz sie</button>
     </form>
     {this.state.message && <h3>{this.state.message}</h3>}
    </>
  );
}
}

export default App;
