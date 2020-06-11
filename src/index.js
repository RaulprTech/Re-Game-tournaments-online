import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

import App from './App';

const Wait = (props) => {
    return(
        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Cargando la Mejor Experiencia Gamer...</span>
        </div>
    )
}

ReactDOM.render(            
                <React.StrictMode>
                    <Suspense fallback={Wait}>
                        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                            <Router>
                              <App />
                            </Router>
                        </FirebaseAppProvider>
                    </Suspense>
                </React.StrictMode>, 
                document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
