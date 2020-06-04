import React, { Component } from 'react';
import { tickets } from '../components/datos.json';
import Product from '../components/Product';

class Torneos extends Component {
    constructor() {
        super();
        this.state = {
            tickets
        }
    }

    render() {

        const tickets = this.state.tickets.map((ticket, i) => {
            return (
                <Product
                    key={i}
                    title={ticket.title}
                    src={ticket.src}
                    info={ticket.info}
                    price={ticket.price}
                    id={i}
                />
            );
        }
        );

        const torneos = this.state.tickets.map((ticket, i) => {
            return (
                <div className="card bg-danger text-white text-center m-2">
                    <img src={ticket.src} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="container-lg mt-3 mb-2">
                                <div className="row aling-center text-left no-gutters mt-4 mb-4">
                                    <div className="col">
                                        <p></p>
                                    </div>
                                    <div className="col">
                                        <a type="button" href="#comprar" className="btn btn-danger text-white">Entrar</a>
                                    </div>
                                    <div className="col">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row aling-center text-left no-gutters">
                                    <div className="col">
                                        <p className="card-text">{ticket.date}</p>
                                        <p className="card-text">{ticket.hour}</p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            );
        }
        );

        return (
                    <div className="container mb-4">
                        <h1 className="display-5 text-center text-white m-4"><strong>Torneos</strong></h1>
                        <div className="card-deck">
                            {torneos}
                        </div>
                    </div>
        );
    }
}
export default Torneos;


