import React, { Component } from 'react';
import {goldSponsors, silverSponsors, bronzeSponsors } from '../components/datos.json';
import Button from '../components/Button';



class Sponsors extends Component {
    constructor() {
        super();
        this.state = {
            goldSponsors,
            silverSponsors,
            bronzeSponsors
        }
    }

    render() {

        const goldSponsors = this.state.goldSponsors.map((goldSponsor, i) => {
            return (
                <div key={i}>
                    <img src={goldSponsor.src} className="img-fluid mx-auto d-block" alt="..." height="150px" width="350px" />
                </div>
            )
        });

        const silverSponsors = this.state.silverSponsors.map((silverSponsor, i) => {
            return (
                <div key={i}>
                    <img src={silverSponsor.src} className="img-fluid mx-auto d-block" alt="..." height="150px" width="350px" />
                </div>
            )
        });

        const bronzeSponsors = this.state.bronzeSponsors.map((bronzeSponsor, i) => {
            return (
                <div key={i}>
                    <img src={bronzeSponsor.src} className="img-fluid mx-auto d-block" alt="..." height="150px" width="350px" />
                </div>
            )
        })

        return (
                <div className="container-fluid bg-white">  
                    <div className="container-lg text-center">
                        <h1 className="display-4 text-center m-2 p-4"><strong>Sponsors</strong></h1>
                    </div>
                    <h1 className="display-5 text-center m-2 p-4"><strong>Gold</strong></h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-4">
                        {goldSponsors}
                    </div>
                    <h1 className="display-5 text-center m-2 p-4"><strong>Silver</strong></h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-4">
                        {silverSponsors}
                    </div>
                    <h1 className="display-5 text-center m-2 p-4"><strong>Bronze</strong></h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-4">
                        {bronzeSponsors}
                    </div>
                    <Button name="Participar" link="/Sponsors"/>
                </div>
        );
    }
}
export default Sponsors;