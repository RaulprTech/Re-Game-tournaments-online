import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Tickets from './views/Tickets';
import Sponsors from './views/Sponsors';


function App(){
    return(
        <div className="bg-secondary">
            <Nav title={"Evento Sin Nombre"}/>
            <Home />
            <Tickets/>
            <Sponsors/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
