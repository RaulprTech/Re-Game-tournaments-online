import React from 'react';
import PaypalCheckoutButton from './PaypalCheckoutButton';

import g5v5 from '../img/torneos/g1v1.png'
import reglasg5v5 from '../utilities/pdf/reglasg1v1.pdf'

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

        const Ticket = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card p-1">
                            <div className="card-body text-center">
                                <h2 className="card-title">¡Compra tu Acceso!</h2>
                                <h2 className="card-title text-success"><strong>$40</strong></h2>
                                <PaypalCheckoutButton order={order} />
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        const Costo = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-5 pr-5">
                            <div className="card-body text-center">
                                <h2 className="card-title">¡Compra tu Acceso!</h2>
                                <br/>
                                <h2 className="card-title text-success"><strong>$250</strong> x equipo</h2>
                                <br/>
                                <h2 className="card-title text-success"><strong>$50</strong> individual</h2>
                                <br/>
                                <p>*Si entras solo nosotros te ayudamos a encontrar equipo</p>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        const Detalles = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-2 pr-2">
                            <div className="card-body">
                                <h2>Detalles</h2>
                                <br/>
                                <ul className="card-text">
                                    <li>Modalidad: 5 vs 5</li>
                                    <li>Edad Minima: 12 años</li>
                                    <li>Eliminatorias: Mejor de 3</li>
                                    <li>Rondas: Segun el modo</li>
                                    <li>Modos de Juego: Duelo, Execution, Rey, Escalada y Gridiron<span className="badge badge-warning">Aleatorio</span></li>
                                    <li>Plataformas: XBOX y PC</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        const Fecha = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-5 pr-5">
                            <div className="card-body">
                                <div className="container text-white">
                                    <div className="row">
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Proximammente</h3></div>
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Hora: 17:00</h3></div>
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Participantes: 8-16</h3></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }
        
        const Premios = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-5 pr-5">
                            <div className="card-body">
                                <h2 className="card-title">Premios</h2>
                                <br/>
                                <div className="container ml-2 mr-2">
                                    <div className="row">
                                            <div className="row">
                                            <div className="col-sm-4">
                                                <h6>8 equipos</h6>
                                                <ol>
                                                    <li>$1000</li>
                                                    <li>$500</li>
                                                </ol>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6>16 equipos</h6>
                                                <ol>
                                                    <li>$1250</li>
                                                    <li>$750</li>
                                                </ol>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6>32 equipos</h6>
                                                <ol>
                                                    <li>$2500</li>
                                                    <li>$1000</li>
                                                    <li>$500</li>
                                                </ol>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        const Registro = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <div className="col-sm-10">
                                <h2 className="card-title">¿Como me registro?</h2>
                                <br/>
                                <ol className="card-text">
                                    <li>Compra tu pase de torneo</li>
                                    <li>Regístrate en el torneo</li>
                                    <li>Cuando estés en el evento, confirma tu asistencia 30 min. antes en el grupo formado para el evento</li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        const Reglas = (props) => {
            return(
                <article className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">
                                El tipo de torneo será con reglas de eliminación sencilla, es decir, el equipo perdedor de cada partida quedará eliminado y el ganador pasará a la siguiente ronda.
                                Cada Equipo dispondrá de 3 minutos para configurar los mandos y los ajustes generales. No se podrán utilizar paquetes personalizados, ni ningún otro elemento que no esté disponible en el menú de pausa del juego.
                                </p>
                                <br/>
                                <h3 className="card-title">Duracion del Set</h3>
                                <br/>
                                <ol className="card-text">
                                    <li>Los partidos eliminatorias serán jugados al mejor de 3.</li>
                                    <li>La gran final, se disputará al mejor de 5</li>
                                    <li>Si se produce una desconexión, se le concederá la victoria al otro jugador.</li>
                                </ol>
                                <br/>
                                <a href={reglasg5v5}>Ver mas Informacion</a>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }

        return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" >
                        <div className="row">
                            <div className="col-sm-12 mt-4">
                                <img 
                                    src={g5v5}
                                    className="card-img" alt="..."
                                />
                            </div>
                            <Registro/>
                            <Costo/>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <Detalles/>
                        <Fecha/>
                        <Premios/>
                    </div>
                </div>
                <Reglas/>
            </div>
        </div>
        )
    }