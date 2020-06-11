import React from 'react';
import PaypalCheckoutButton from './PaypalCheckoutButton';

import liguilla from '../img/torneos/liguilla.png'
import reglasliguilla from '../utilities/pdf/reglasliguilla.pdf'

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

        const Detalles = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-2 pr-2">
                            <div className="card-body">
                                <h2>Detalles</h2>
                                <br/>
                                <ul className="card-text">
                                    <li>Modalidad: Xbox One 1 vs 1</li>
                                    <li>Edad Minima: 12 años</li>
                                    <li>Eliminatorias: Mejor de 2 (ida y vuelta). Duracion de 6 minutos.</li>
                                    <li>Gran Final: (Ida). Duracion de 10 minutos</li>
                                    <li>Nivel de dificultad: Clase Mundial</li>
                                    <li>Costo de inscripción: Haber quedado entre los primeros 8 de la home league</li>
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
                        <div className="card pl-5 pr-4">
                            <div className="card-body">
                                <div className="container text-white">
                                    <div className="row">
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Fecha: 1 de Junio</h3></div>
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Hora: 21:00</h3></div>
                                        <div className="col-sm-4 text-center text-white"><h3 className="badge badge-primary p-2">Participantes: 8</h3></div>
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
                                        <ol className="card-text">
                                            <li> lugar $1000 en efectivo</li>
                                            <li> lugar $300 en efectivo</li>
                                            <li> lugar $200 en efectivo</li>
                                        </ol>
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

        const Costo = (props) => {
            return(
                <article className="container m-2">
                    <div className="row">
                        <div className="card pl-5 pr-5">
                            <div className="card-body text-center">
                                <h2 className="card-title">Acceso al Torneo</h2>
                                <br/>
                                <h2 className="card-title text-success">Haber quedado entre los primero 8 de la home league</h2>
                                <br/>
                                <p>*Si entras solo nosotros te ayudamos a encontrar equipo</p>
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
                                    El cupo máximo de jugadores son 8, el tipo de torneo será con reglas de eliminación sencilla, es decir, el perdedor de cada partida quedará eliminado y el ganador pasará a la siguiente ronda.
                                </p>
                                <p className="card-text">
                                    Cada Jugador dispondrá de 3 minutos para configurar los mandos, las alineaciones y los ajustes generales. No se podrán utilizar paquetes personalizados, ni ningún otro elemento que no esté disponible en el menú de pausa del juego.
                                </p>
                                <br/>
                                <h3 className="card-title">Duracion del Set</h3>
                                <br/>
                                <ol className="card-text">
                                    <li>Los partidos de rondas eliminatorias serán jugados al mejor de 2 , partidos de ida y vuelta , con una duración de 6 minutos.</li>
                                    <li>La gran final, se disputará al mejor de 1 en un partido de Ida con una duración de 10 minutos y con opción de tiempos extra.</li>
                                    <li>En caso de empate, el juego se decidirá en una ronda de penales.</li>
                                </ol>
                                <br/>
                                <a href={reglasliguilla}>Ver mas Informacion</a>
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
                                    src={liguilla}
                                    className="card-img" alt="..."
                                />
                            </div>
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