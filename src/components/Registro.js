import React, { useState, useRef} from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import {useFirebaseApp, useFirestoreDocData, useFirestore, useUser, useFirestoreCollection} from 'reactfire';

export default (props) => {
    
    // hook state
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ firstName, setFirstName ] = useState(''); 
    const [ lastName, setLastName ] = useState(''); 
    const [ birthday, setBirthday ] = useState(''); 


    // hook ref
    const inputEmail = useRef();
    const inputPassword = useRef();
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputBirthday = useRef();

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

    const Galeria = (props) => {
        const videosRef = firebase
          .firestore()
          .collection('videos');
        const videos = useFirestoreCollection(videosRef).docs.map(d => ({id: d.id, ...d.data()}));
        return(
          <ul>
            {
              videos.map(
                (video) => <li key={video.id}>{video.title}</li>
              )
            }
          </ul>
        )
      }


    const sendForm = (ev) => {
        ev.preventDefault();
        submit();
        console.log(ev);
        console.log("bienvenido " + firstName)
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    }

    return(
        <div>
            <div className="row align-items-center justify-content-center mb-4">
                <div className="col-sm-5 mt-2">
                    <div className="card text-dark mt-3">
                        <div className="container mt-3">
                            <h1 className="display-4">Registro</h1>
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
                                <div className="form-group mt-3">
                                    <label htmlFor="firstName">Nombre</label>
                                    <input 
                                        type="firstName" 
                                        id="firstName" 
                                        onChange={ (ev) => {setFirstName(ev.target.value)}}
                                        value={firstName}
                                        ref={inputFirstName}
                                        className="form-control" 
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="lastName">Apellido</label>
                                    <input 
                                        type="lastName" 
                                        id="lastName" 
                                        onChange={ (ev) => {setLastName(ev.target.value)}}
                                        value={lastName}
                                        ref={inputLastName}
                                        className="form-control" 
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <br/>
                                <button type="submit">Registrarme</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Galeria/>
        </div>
    )
}