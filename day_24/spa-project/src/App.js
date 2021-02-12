
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

const Home = ()=><h1>Strona startowa</h1>
const News = ()=><h1>Aktualnosci</h1>

const Contact = ()=><h1>Kontakt do nas</h1>

const ErrorPage = ()=><h1>Strona nie istnieje</h1>


function App() {
  return (
    // Browser router musi miec  jednego potomka 
    //Link nie powoduje odswieżania strony, co robi <a>
    <Router>
    <>
    <header>
      <nav>
        <ul>
          {/* <li><a href="/">Start</a></li>
          <li><a href="/news">Aktualności</a></li>
          <li><a href="/contact">Kontakt</a></li> */}
          <li><NavLink to="/" exact activeClassName="home_selected">Start</NavLink></li>
          <li><NavLink to="/news" activeClassName="news_selected" activeStyle={{
            backgroundColor: 'gray', letterSpacing: '2px'
          }}>Aktualności</NavLink></li>
          <li><NavLink to="/contact" activeClassName="contact_selected">Kontakt</NavLink></li>
        </ul>
      </nav>
    </header>
    <section>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/news" component={News}/>
        <Route component={ErrorPage}/>
      </Switch>
      
    </section>
    </>
    </Router>
  );
}

export default App;
