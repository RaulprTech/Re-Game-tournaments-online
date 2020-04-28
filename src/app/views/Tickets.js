import React, { Component } from 'react';
import { tickets} from '../components/datos.json';
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

        return (
                <div className="container-lg" id="entradas">         
                    <h1 className="display-4 text-center text-white m-5"><strong className="bg-dark p-2">Consigue Tus Entradas</strong></h1>
                    <div className="row row-cols-1 row-cols-md-3">
                        {tickets}
                    </div>
                </div>
        );
    }
}
export default Tickets;