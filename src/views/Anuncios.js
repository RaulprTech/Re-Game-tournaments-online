import React from 'react';
import Section from '../components/Section';

export default (props) => {
    return (
        <div id="Proximamente" className="bg-dark">
            <div className="container-lg">
                <div className="row">
                    <div className="col">
                        <h1 className="display-5 mt-3 pt-3 text-white">Proximamente...</h1>
                        <div className="card bg-dark text-white">
                            <Section button="false" img="https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632_1280.jpg" title="Enfrenta el desafio" text="Protege tus datos del hacker.  Vive la experiencia del primer juego original de Revolucion Game que llegara muy pronto, mantente alerta de las noticias de la comunidad" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}