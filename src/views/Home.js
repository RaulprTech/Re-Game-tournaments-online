import React from 'react';


function Home(props) {
    return (
            <div className="row justify-content-md-center" id="home">
                <div className="card text-white bg-dark">
                    <img src={props.fondo} className="card-img" alt="fondo"/>
                    <div className="card-img-overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-4 mx-auto text-center">
                                    <h1 className="card-title"><strong>Revolucion </strong><strong className="text-danger"> GAME</strong></h1>
                                    <a type="button" href="#Torneos" className="btn btn-lg btn-danger text-white">Ver Torneos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;