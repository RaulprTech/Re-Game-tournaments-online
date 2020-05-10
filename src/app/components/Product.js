import React from 'react';
import PaypalCheckoutButton from './PaypalCheckoutButton';


const Product = (props) => {
        const finalPrice = parseFloat(props.price) * 0.50;

        const disponibles = props.disponibles;

        const order = {
            customer: '123456',
            total: finalPrice,
            items: [{
                sku: '001',
                name: props.title,
                price: finalPrice,
                quantity: 1,
                currency: 'MXN'
            }]
        }

        return (
            <div className="col mb-4 mr-auto ml-auto">
                <div className="card mx-auto">
                    <div className="card-body text-center">
                        <h2 className="card-title">{props.title}</h2>
                        <button type="button" className="btn btn-transparent" data-toggle="tooltip" data-html="true" 
                            title={props.info}>
                            <i className="large material-icons">help</i>
                        </button>
                        <div className="col-12 p-4">
                            <img src={props.src} className="img-fluid mx-auto d-block" alt="..." height="100" width="100" />
                        </div>
                        <span class="badge badge-pill badge-danger">{disponibles}</span>
                        <h2 className="card-title text-danger p-1"><strong><s>{"$" + props.price + " MXN"}</s></strong></h2>
                        <h2 className="card-title text-success p-1"><strong>{"$" + finalPrice + " MXN"}</strong></h2>
                        <PaypalCheckoutButton order={order} />
                    </div>
                </div>
            </div>
        )
    }
export default Product;