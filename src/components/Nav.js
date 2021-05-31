import React from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from "react-router-dom";
import logo from '../img/LOGO.png'
import 'firebase/auth';

const SignIn = (props) => {
    return (
        <li className="nav-item">
            <Link className="nav-link text-danger m-2" to="/Entrar"><strong>Entrar</strong></Link>
        </li>
    )
}

const SignUp = (props) => {
    return (
        <li className="nav-item">
            <Link className="nav-link text-danger m-2" to="/Registro"><strong>Regitrarme</strong></Link>
        </li>
    )
}

const SignOut = (props) => {

    const firebase = useFirebaseApp();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <li className="nav-item">
            <Link to="/"><a className="nav-link text-danger m-2" onClick={logout}><strong>Salir</strong></a></Link>
        </li>
    )
}

const Nav = (props) => {
    const user = useUser();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
            <a className="navbar-brand text-danger" href="/">
                <div className="d-flex flex-row bd-highlight">
                    <img src={logo} width="40" height="40" className="d-inline-block" alt="" />
                    <h4 className="bd-highlight mt-1 ml-2">Revolucion Game</h4>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-3" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-2">
                    <li className="nav-item">
                        <a type="button" href="#Torneos" className="btn btn-outline-danger m-2"><strong>Torneos</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-danger m-2" href="#Nosotros"><strong>Nosotros</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-danger m-2" href="#Proximamente"><strong>Proximamente</strong></a>
                    </li>
                    {/* {
                    user    ?   <SignOut/>
                            :   <SignIn/>
                    }
                    {
                        !user && <SignUp/> 
                    } */}
                </ul>
            </div>
        </nav>
    )
}
export default Nav;