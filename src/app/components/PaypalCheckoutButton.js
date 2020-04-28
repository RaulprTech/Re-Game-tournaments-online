import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({order}) => {
    const paypalConf = {
        currency: 'MXN',
        env: 'sandbox',
        client: {
            sandbox: 'AfJH8KanfJlQ6PEIRpvhWXaRzz9S_JZVnkyRyWG4QflWaQfquHPhxNPjitsb6L6UDQTSkaJZgSJiwZkX',
            production: '-- id--'
        },
        style: {
            label: 'paypal',
            size: 'medium',
            color: 'gold'
        }
    };

    const PaypalCheckoutButton = paypal.Button.driver('react', {React, ReactDOM})

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                amount: {
                    total: order.total,
                    currency: paypalConf.currency,
                },
                description: 'Compra ahora',
                custom: order.customer || '',
                item_list: {
                    items: order.items
                }
            }
        ],
        note_to_payer: 'Contactanos para cualquier aclaracion'
        };
        return actions.payment.create({ payment });
    };

    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert('El pago fue procesado correctamente, ID: ' + response);
        })
        .catch(error => {
            console.log(error);
            alert("Ocurrio un error al procesar el pago con Paypal")
        });
    };
    const onError = (error) => {
        console.log(error);
        alert("El pago no fue realizado, vuelva a intentarlo");
    };

    const onCancel = (data, actions) => {
        alert('Pago no realizado, el usuario cancelo el proceso')
    };

    return(
        <PaypalCheckoutButton
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error) => onError(error)}
            style={paypalConf.style}
            commit
            locale="es_MX"
            />
    );
};
export default PaypalCheckoutButton;