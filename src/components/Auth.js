import React, { useState, useRef} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';

export default (props) => {
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

    const logout = async () => {
        await firebase.auth().signOut();
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
            <div className="row align-items-center justify-content-center mb-4">
                <div className="col-sm-5 mt-2">
                    <div className="card text-dark mt-3">
                        <div className="container mt-3">
                            <h1 className="display-4">Inicia Sesion</h1>
                            <form className="px-4 py-3" onSubmit={(ev)=>sendForm(ev)}>
                                <div className="form-group mt-3">
                                    <label htmlFor="email">Correo Electronico</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        onChange={ (ev) => {setEmail(ev.target.value)}}
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
                                        onChange={ (ev) => {setPassword(ev.target.value)}}
                                        value={password}
                                        ref={inputPassword}
                                        className="form-control" 
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <br/>
                                <button type="submit">Iniciar Sesion</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
            {/*
            {
                !user ? <Sesion/>
                    :   <button onClick={logout}>Cerrar sesion</button>
            }
            <button onClick={submit}>Registrar</button>
        */}
        </div>
    )
}