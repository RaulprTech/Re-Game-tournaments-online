import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Tickets from './views/Tickets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Evento from './components/Evento';


function App(){

    return(
        <div className="bg-dark">
            <Nav/>
            <div className="container-fluid">
                <Home />
                <div id="Aliados" className="row">
                    <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/93707360_1404202289771430_8892519586373566464_o.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_eui2=AeFrBXWGvnH6hhCrdM5ucqsciWrfWAWjHn-Jat9YBaMefwWyXjWBGF5S_hcGzdICJKVA-sYt1sBsYOlbkL00E50M&_nc_oc=AQk8yegdIVPjQ-eoc07dZNRh5thmR3188akFPyz89y0QST5D4MUZ0muitanhm02h9q0&_nc_ht=scontent-qro1-1.xx&oh=0e05d1ab90dca76dd9d1aa8f7198b192&oe=5ECEDC7C" className="card-img" alt="..."/>
                </div>
                <div id="Nosotros" className="row">
                    <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/86872485_1355613914630268_8757401491494404096_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_eui2=AeGfq3t38lRmZmjxGMv0F_8r0wsH12dMlRXTCwfXZ0yVFUtf0dEbCr9jtppZQGH3dXWw_NQwa0NwgKkq4FchJ1U7&_nc_oc=AQm9VVMpNYB8cO6toQUuQpfkUzUYQhiCqAI7z_NOvDh47dVP1mm98Dm93jzC3mcLfC4&_nc_ht=scontent-qro1-1.xx&oh=946f81ef454231e17f21bfcd87da7d7b&oe=5ECFED1A" className="card-img" alt="..."/>
                </div>
                <Tickets/>
            </div>
            <div className="container-fluid bg-danger align-items-center justify-content-center text-white">
                <div className="container">
                    <h1 className="display-5 p-3">Proximamente...</h1>
                    <Evento img="https://cdn.pixabay.com/photo/2017/05/08/02/22/game-2294201_1280.jpg" title="Proximamente mas Eventos" text="Estamos trabajando para traerte mas eventos"/>
                </div>
            </div>
            <div className="container-sm">
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
