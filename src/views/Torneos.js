import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { eventos } from '../components/datos.json';

import g1v1 from '../img/torneos/g1v1.png'
import g5v5 from '../img/torneos/g5v5.png'
import singlesFifa from '../img/torneos/singlesfifa.png'
import liguilla from '../img/torneos/liguilla.png'

export default (props) => {
    const [torneos, setTorneos] = useState(eventos);

    function select(img) {
        switch (img) {
            case "g1v1":
                return g1v1;
            case "g5v5":
                return g5v5;
            case "singlesFifa":
                return singlesFifa;
            case "liguilla":
                return liguilla;
        }
    }

    const tickets = torneos.map((torneo) => {
        return (
            <div className="col mb-4 animate__animated animate__flip">
                <Link to={torneo.link}>
                    <div className="card bg-danger text-white text-center">
                        <img src={select(torneo.src)} className="card-img" alt={torneo.title} />
                        <div className="card-img-overlay">
                            {/*
                                <div className="row">
                                    <div className="col">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row text-left mb-4">
                                    <div className="col">
                                        <p></p>
                                    </div>
                                    <div className="col text-center">
                                        <a type="button" href="#comprar" className="btn btn-danger">Entrar</a>
                                    </div>
                                    <div className="col">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row text-left">
                                    <div className="col-8">
                                            {
                                                    <h6 className="card-text">{torneo.date}</h6>
                                                    <h6 className="card-text">{torneo.hour}</h6>
                                            }
                                    </div>
                                        {
                                                <div className="card text-dark text-center p-2">
                                                    <h5 className="card-text">Premio</h5>
                                                    <h6 className="card-text text-danger">$300</h6>
                                                </div>
                                </div>
                            */}
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="container-sm">
            <h1 className="display-4 text-center text-white m-4"><strong>Torneos</strong></h1>
            <div className="row row-cols-1 row-cols-md-3">
                {tickets}
            </div>
        </div>
    )
}

