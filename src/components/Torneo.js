import React from 'react';
import PaypalCheckoutButton from './PaypalCheckoutButton';


export default (props) => {
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
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" >
                        <div className="row">
                            <div className="col-sm-12 mt-4">
                                <img 
                                    src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=NWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2fFNQTw&docid=https%3A%2F%2Frevoluciongame.sharepoint.com%3A443%2Fsites%2FRevolucionGame%2F_api%2Fv2.0%2Fdrives%2Fb!PlsiUYtTx027EC9hTXhwrDDWYxlBUP5DsPBak-Ckq-eG9OkzQwkqRLYrx4hv9KQs%2Fitems%2F01QMDBDFJKACFSIWKECRCJTAH2BUJH54YF%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmV2b2x1Y2lvbmdhbWUuc2hhcmVwb2ludC5jb21AZWUxZmJkNWEtMzY0OS00MmRkLWE5ZmEtZjg1ZjJkMWI1ZjJkIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU5MTA0NjQ3OSIsImV4cCI6IjE1OTEwNjgwNzkiLCJlbmRwb2ludHVybCI6IkhnbTRNYjlFd1JSVFhhUnp4YkVVUEhBY3BXZHU2SGJQdFRXN2ZHYThHS0U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNDIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6IlpqY3paVFU0T1dZdE9EQTNaQzB3TURBd0xUUTNOakl0TWpVMU16UmtaakF6TXpkaSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOVEV5TWpWaU0yVXROVE00WWkwMFpHTTNMV0ppTVRBdE1tWTJNVFJrTnpnM01HRmoiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgV2ViIENsaWVudCIsImdpdmVuX25hbWUiOiJSYXVsIiwiZmFtaWx5X25hbWUiOiJwYWNoZWNvIHJvZHJpZ3VleiIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsInRpZCI6ImVlMWZiZDVhLTM2NDktNDJkZC1hOWZhLWY4NWYyZDFiNWYyZCIsInVwbiI6InJhdWxfdnJtXzIxMzRfaG90bWFpbC5jb20jZXh0I0ByZXZvbHVjaW9uZ2FtZS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDA2Mzg0Rjk5QyIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNjM4NGY5OWNAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLndyaXRlIGFsbHNpdGVzLmZ1bGxjb250cm9sIGFsbHNpdGVzLm1hbmFnZSBhbGxwcm9maWxlcy53cml0ZSIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGx9.TkJnMXVtQy9oZzJJZXJ3THNNaUNwNE5mejBUbEl3aEZGZ0pVQkZPQzJERT0&encodeFailures=1&width=1280&height=720"
                                    className="card-img" alt="..."
                                />
                            </div>
                            <div className="col-sm-12 mt-4">
                                <div className="card mx-auto">
                                    <div className="card-body text-center">
                                        <h2 className="card-title">¡Compra tu Acceso!</h2>
                                        <h4 className="card-title text-danger"><strong><s>$300</s></strong></h4>
                                        <h2 className="card-title text-success"><strong>$100</strong></h2>
                                        <PaypalCheckoutButton order={order} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        )
    }