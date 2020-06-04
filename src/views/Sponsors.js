import React, { Component } from 'react';
import { gears, fifa } from '../components/datos.json';


class Sponsors extends Component {
    constructor() {
        super();
        this.state = {
            gears,
            fifa
        }
    }

    render() {

        const gears = this.state.gears.map((sponsor, i) => {
            return (
                <div className="col align-items-center" key={i}>
                    <img src={sponsor.src} className="img-fluid mx-auto d-block" alt="..." height="50px" width="200px" />
                </div>
            )
        });

        const fifa = this.state.fifa.map((sponsor, i) => {
            return (
                <div className="col align-items-center" key={i}>
                    <img src={sponsor.src} className="img-fluid mx-auto d-block" alt="..." height="50px" width="200px" />
                </div>
            )
        });

        return (
                <div id="Sponsors" className="container">  
                    <div className="row text-center text-white">
                        <div className="col">
                            <h1 className="display-4 text-center m-2 p-4"><strong>Sponsors</strong></h1>
                        </div>
                    </div>
                    <h1 className="display-5 text-center m-2 p-4 text-white"><strong>Gears</strong></h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-5 align-items-center">
                        {gears}
                    </div>
                    <h1 className="display-5 text-center m-2 p-4 text-white"><strong>Fifa</strong></h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-5 align-items-center">
                        {fifa}
                    </div>
                </div>
        );
    }
}
export default Sponsors;