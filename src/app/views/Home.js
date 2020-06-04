import React from 'react';

const Titulo = (props) => {
    return(
        <div className="col text-center align-items-center">
            <h1 className="h1"><strong>Revolucion </strong><strong className="text-danger"> GAME</strong></h1>
            <strong>#VamosASalirAdelante</strong>
            <div className="container mt-3 mb-2">
                <a type="button" href="#Torneos" className="btn btn-lg btn-danger text-white">Ver Torneos</a>
            </div>
        </div>
    )
}

function Home() {
    return (
            <div className="row bg-dark" id="home">
                <div className="card text-white">
                    <img src="https://images.pexels.com/photos/46792/the-ball-stadion-football-the-pitch-46792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div className="col-sm">
                            <Titulo/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;