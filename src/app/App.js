import React from 'react';
//import Auth from './components/Auth';
import { useUser } from 'reactfire';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './views/Home';
import Torneos from './views/Torneos';
import Anuncios from './views/Anuncios';

const Main = (props) => {
    return(
        <div className="bg-dark">
            <div className="container-fluid">
                <Home />
                <div id="Aliados" className="row">
                    <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/93707360_1404202289771430_8892519586373566464_o.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_eui2=AeFrBXWGvnH6hhCrdM5ucqsciWrfWAWjHn-Jat9YBaMefwWyXjWBGF5S_hcGzdICJKVA-sYt1sBsYOlbkL00E50M&_nc_oc=AQk8yegdIVPjQ-eoc07dZNRh5thmR3188akFPyz89y0QST5D4MUZ0muitanhm02h9q0&_nc_ht=scontent-qro1-1.xx&oh=0e05d1ab90dca76dd9d1aa8f7198b192&oe=5ECEDC7C" className="card-img" alt="..."/>
                </div>
                <div id="Nosotros" className="row">
                    <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/86872485_1355613914630268_8757401491494404096_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_eui2=AeGfq3t38lRmZmjxGMv0F_8r0wsH12dMlRXTCwfXZ0yVFUtf0dEbCr9jtppZQGH3dXWw_NQwa0NwgKkq4FchJ1U7&_nc_oc=AQm9VVMpNYB8cO6toQUuQpfkUzUYQhiCqAI7z_NOvDh47dVP1mm98Dm93jzC3mcLfC4&_nc_ht=scontent-qro1-1.xx&oh=946f81ef454231e17f21bfcd87da7d7b&oe=5ECFED1A" className="card-img" alt="..."/>
                </div>
                <div id="Torneos"className="row pb-4 bg-danger">
                    <Torneos/>
                </div>
            </div>
            <div className="container-fluid align-items-center justify-content-center text-white">
                <Anuncios/>
            </div>
            <Footer/>
        </div>
    )
}

function App() {
  const user = useUser();
  return (
    <div>
      <Nav/>
      <Main />
    </div>
  );
}

export default App;
