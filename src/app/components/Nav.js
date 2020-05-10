import React from 'react';
//import logo from './src/revo.jpeg';


const Nav = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
            <a className="navbar-brand text-danger" href="/">
                <div className="d-flex flex-row bd-highlight">
                    <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/26814995_799012183623780_4933161944715841644_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFsSaZKO_GgkFKj0rqkOXzDuV9PoC3Myqi5X0-gLczKqL2yQAV6JF_j4Sg-vt_EOpLTgAjqBFhOPn0Fv_OAtdL5&_nc_oc=AQnTYDTxmeePmVzVRBujQ_-xO2AsFoZgPmpCaMjCKXww94KsJSwFLs_73oP1Fp2kldo&_nc_ht=scontent-qro1-1.xx&oh=0d856a27c4b74dc79684020b34f8eff3&oe=5ED1D001" width="40" height="40" className="d-inline-block" alt=""/>
                    <h2 className="pl-3 bd-highlight">Revolucion Game</h2>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button type="button" href="#torneos" className="btn btn-outline-danger m-2"><strong>Torneos en linea</strong></button>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link text-danger m-2" href="#Nosotros"><strong>Nosotros</strong></a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link text-danger m-2" href="#Aliados"><strong>Aliados</strong></a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link text-danger m-2" href="#Agenda"><strong>Mas Torneos</strong></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;