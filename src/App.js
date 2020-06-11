import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import portada from './img/portada.png'
import duels from './img/duels.png'
import gamers from './img/gamers.png'

import { Switch, Route } from "react-router-dom";

import { useUser } from 'reactfire';

import Nav from './components/Nav';

import Footer from './components/Footer';
import Login from './components/Login'
import Registro from './components/Registro'
import Torneo from './components/Torneo'

import SGears from './components/SGears'
import GGears from './components/GGears'
import Fifamx from './components/Fifamx'
import Fifalg from './components/Fifalg'

import Home from './views/Home';
import Torneos from './views/Torneos';
import Anuncios from './views/Anuncios';
import Sponsors from './views/Sponsors';

const Main = (props) => {
    return(
        <div className="">
          <div className="container-fluid bg-dark">
                <Home fondo={portada}/>
                <div id="Duels" className="row">
                    <img src={duels} className="card-img" alt="..."/>
                </div>
                <div id="Nosotros" className="row">
                    <img src={gamers} className="card-img" alt="..."/>
                </div>
                <div id="Torneos"className="row pb-4 bg-danger">
                    <Torneos/>
                </div>
                <Sponsors/>
          </div>
          <Anuncios/>
          <Footer/>
        </div>
    )
}

function App() {
  const user = useUser();
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Entrar" component={Login} />
        <Route path="/Registro" component={Registro} />
        <Route path="/Torneo" component={Torneo} />
        <Route path="/SGears" component={SGears} />
        <Route path="/GGears" component={GGears} />
        <Route path="/Fifamx" component={Fifamx} />
        <Route path="/Fifalg" component={Fifalg} />
      </Switch>
    </div>
  );
}

export default App;