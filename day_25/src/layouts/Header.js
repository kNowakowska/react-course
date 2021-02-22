import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "../styles/Header.css";
import header1 from "../img/header1.jpg";
import header2 from "../img/header2.jpg";
import header3 from "../img/header3.jpg";


const Header = () => {
    // const images = [header1, header2, header3];
    // const index = Math.floor(Math.random()*3);
    // const img = images[index];
    return ( 
        <>
        {/* Swicth sprawia ze wykonuje sie jeden  Route a nie wszystkie pasujace */}
         <Switch>
            <Route path='/' exact render={()=>(
                <img src={header1} alt="miasto"/>
            )}/>
            <Route path='/products' render={()=>(
                <img src={header1} alt="miasto"/>
            )}/>
            <Route path='/contact' render={()=>(
                <img src={header2} alt="miasto"/>
            )}/>
            <Route path='/admin' render={()=>(
                <img src={header3} alt="miasto"/>
            )}/>    
             {/* Route bez atrybutu path dla widoku o nieistniejącym url  */}
            <Route  render={()=>(
                <img src={header2} alt="miasto"/>
            )}/>  
        </Switch>
         

         {/* <img src={img} alt="header"/> */}
        
        </>
     );
}
 
export default Header;