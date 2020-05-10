import React, {useState} from 'react';


export default (props) => {
    let [onSeparator, setOnSeparator] = useState(props.active);

    const Separator = () => {
        return (
            <div className="col-sm-12">
                <hr className="my-4" />
            </div>
        )
    }

    const Image = (props) => {
        return(
            <div className="col-md-4">
                <img src={props.img} className="img-fluid mx-auto d-block" alt="..." height="300px" width="500px" />
            </div>
        );
    }

    const Message = (props) => {
        return(
            <div className="col-md-8">
                <div className="card-body">
                    <h1 className="display-5">{props.title}</h1>
                    <p className="h4">{props.text}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="col bg-black align-items-center justify-content-center text-black">
                <section className="row no-gutters pt-4 pb-4">
                    <Image img={props.img}/>
                    <Message title={props.title} text={props.text} />
                </section>
            {onSeparator ? <Separator/>: console.log("separacion no generada")}
        </div>
    )
}