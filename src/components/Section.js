import React, {useState} from 'react';


export default (props) => {
    const [onSeparator, setOnSeparator] = useState(props.button);

    const Enlace = () => {
        return (
            <div className="col ml-2">
                <a type="button" href="/juegos" className="btn btn-lg btn-danger text-white">Jugar</a>
            </div>
        )
    }

    const Image = (props) => {
        return(
            <div className="col-md-4">
                <img src={props.img} className="img-fluid mx-auto d-block" alt="ilustracion" height="300px" width="500px" />
            </div>
        );  
    }

    const Message = (props) => {
        return(
            <div className="col-md-8">
                <div className="card-body">
                    <h1 className="h2">{props.title}</h1>
                    <p className="h6">{props.text}</p>
                </div>
                {onSeparator ? <Enlace/>: console.log("Seccion con boton creada")}
            </div>
        );
    }

    return (
        <div className="col bg-black align-items-center justify-content-center text-black">
                <section className="row no-gutters pt-4 pb-4">
                    <Image img={props.img}/>
                    <Message title={props.title} text={props.text} />
                </section>
        </div>
    )
}