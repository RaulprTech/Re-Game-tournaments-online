import React from 'react';

const Titulo = (props) => {
    return(
        <div className="card text-center bg-dark">
            <h1 className="display-3"><b className="text-danger">HOME </b><b> LEAGUE</b></h1>
            <strong>#VamosASalirAdelante</strong>
            <div className="container mt-3 mb-2">
                <a type="button" href="#torneos" className="btn btn-lg btn-danger text-white">Ver Torneos</a>
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
                        <div className="col-sm mt-3 md-3">
                            <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93857447_1406268956231430_8973654069805580288_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeHoBqCWAAYFJT4npWz8SzUFepc9mUAYcLN6lz2ZQBhws_WHZmwxlBw9WTPpTkaN4BNCfTKp0wnTRXEhY5u7zTx6&_nc_oc=AQlawZEuLpPEmlt6sLJDPiLRJR7Pr2o4TIS7Zb9tMFlEGi7He62SMigVCxr-X87NA_A&_nc_ht=scontent-dfw5-2.xx&oh=2b225102392e2910cf3f699d9a28a6b1&oe=5ECFEAF7" className="img-fluid mx-auto d-block" alt="..." height="200px" width="400px" />
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;