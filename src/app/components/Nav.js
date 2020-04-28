import React from 'react';

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand text-success" href="/"><h1>{props.title}</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a type="button" href="#entradas" className="btn btn-outline-success m-2"><strong>Entradas</strong></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-success m-2" href="/agenda"><strong>Agenda</strong><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-success m-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <strong>Invitados</strong>
                          </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Zona Gaming</a>
                            <a className="dropdown-item" href="#">Zona Maker</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-success m-2" href="#sponsors" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <strong>Sponsors</strong>
                          </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#goldSponsors">Oro</a>
                            <a className="dropdown-item" href="#silverSponsors">Plata</a>
                            <a className="dropdown-item" href="#bronzeSponsors">Bronce</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Unirse</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-success m-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <strong>Aliados</strong>
                          </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Institucionales</a>
                            <a className="dropdown-item" href="#">Estrategicas</a>
                            <a className="dropdown-item" href="#">Comunidades</a>
                            <a className="dropdown-item" href="#">Universidades</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Unirse</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-success m-2" href="#"><strong>Competencias</strong></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;