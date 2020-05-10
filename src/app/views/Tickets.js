import React, { Component } from 'react';
import { tickets } from '../components/datos.json';
import Product from '../components/Product';

class Tickets extends Component {
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
                <div className="card bg-dark text-white text-center">
                    <img src={ticket.src} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <img src={ticket.title} className="img-fluid mx-auto d-block" alt="torneo" height="40px" width="80px" />
                            <div className="container mt-3 mb-2">
                                <a type="button" href="#comprar" className="btn btn-danger text-white">Comprar</a>
                            </div>
                            <hr className="my-4"/>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="row aling-center text-left no-gutters mt-5">
                                <p className="card-text">{ticket.info}</p>
                            </div>
                        </div>
                </div>
            );
        }
        );

        return (
            <div className="container-lg" id="torneos">
                        <h1 className="display-5 text-center text-white m-5"><strong>Torneos 2020</strong></h1>
                        <div className="row row-cols-1 row-cols-md-3">
                            {torneos}
                        </div>
                        <div className="row">
                            <div>
                                UNa divicion
                            </div>
                        </div>
                    </div>
        );
    }
}
export default Tickets;