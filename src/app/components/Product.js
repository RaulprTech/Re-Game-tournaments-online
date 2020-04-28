import React, { Component } from 'react';
import PaypalCheckoutButton from './PaypalCheckoutButton';


class Product extends Component {
    render() {
        const finalPrice = parseFloat(this.props.price) * 0.75;

        const order = {
            customer: '123456',
            total: finalPrice,
            items: [{
                sku: '001',
                name: this.props.title,
                price: finalPrice,
                quantity: 1,
                currency: 'MXN'
            }]
        }

        return (
            <div className="col mb-4 mr-auto ml-auto">
                <div className="card mx-auto">
                    <div className="card-body text-center">
                        <h2 className="card-title">{this.props.title}</h2>
                        <button type="button" className="btn btn-transparent" data-toggle="tooltip" data-html="true" 
                            title={this.props.info}>
                            <i className="large material-icons">help</i>
                        </button>
                        <div className="col-12 p-4">
                            <img src={this.props.src} className="img-fluid mx-auto d-block" alt="..." height="100" width="100" />
                        </div>
                        <span class="badge badge-pill badge-danger">40 Diponibles</span>
                        <h2 className="card-title text-danger p-1"><strong><s>{"$" + this.props.price + " MXN"}</s></strong></h2>
                        <h2 className="card-title text-success p-1"><strong>{"$" + finalPrice + " MXN"}</strong></h2>
                        <PaypalCheckoutButton order={order} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;