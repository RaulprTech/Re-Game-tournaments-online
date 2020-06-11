import React, { useState, useRef} from 'react';
import {useFirebaseApp, useUser} from 'reactfire';
import 'firebase/auth';

const LoginWithEmail = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 

    const inputEmail = useRef();
    const inputPassword = useRef();

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    const sendForm = (ev) => {
        ev.preventDefault();
        login();
        console.log(ev);
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div className="container m-2">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-sm-10">
                                    <h1 className="display-5">Inicia Sesion</h1>
                                    <form className="" onSubmit={(ev) => sendForm(ev)}>
                                        <div className="form-group mt-3">
                                            <label htmlFor="email">Correo Electronico</label>
                                            <input
                                                type="email"
                                                id="email"
                                                onChange={(ev) => { setEmail(ev.target.value) }}
                                                value={email}
                                                ref={inputEmail}
                                                placeholder="email@example.com"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="password">Contraseña</label>
                                            <input
                                                type="password"
                                                id="password"
                                                onChange={(ev) => { setPassword(ev.target.value) }}
                                                value={password}
                                                ref={inputPassword}
                                                className="form-control"
                                            />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <br />
                                        <button className="btn btn-block btn-outline-success" type="submit">Iniciar Sesion</button>
                                    </form>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

const LoginWithGoogle = (props) =>{

    const firebase = useFirebaseApp();
    let provider = new firebase.auth.GoogleAuthProvider();

    const login = async () => {
        await firebase.auth().signInWithPopup(provider);
    }
    
    return(
        <div className="container m-2">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-10 text-center">
                    <br/>
                    <p>o</p>
                    <br/>
                    <button className="btn btn-block btn-outline-warning" onClick={login}>Ingresar con Google</button>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default (props) => {
    return(
        <div className="container mt-4">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-5">
                    <div className="card text-dark pt-2 pb-2">
                        <LoginWithEmail/>
                        <LoginWithGoogle/>
                    </div>
                </div>
            </div> 
        </div>
    )
}