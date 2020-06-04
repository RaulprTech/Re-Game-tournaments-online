import React, {useState, useRef} from 'react';

export default (props) => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");


    const inputName = useRef();
    const inputEmail = useRef();
    const inputMessage = useRef();
    
      const sendForm = (ev) => {
        ev.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        setName("");
        setEmail("");
        setMessage("");
        console.log(json)
        })
      }


    return(
                <div className="row align-items-center justify-content-center mb-4">
                    <div className="col-sm-5 mt-2">
                        <div className="card text-dark mt-3">
                            <div className="container">
                                <div className="row text-center mt-4 ">
                                    <h1>¿Quieres mas informacion?</h1>
                                </div>
                                <form className="px-4 py-3" onSubmit={(ev)=>sendForm(ev)}>
                                    <div className="form-group mt-3 mb-3">
                                        <label htmlFor="validationName">Nombre</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="validationName" 
                                            placeholder="Nombre"
                                            value={name}
                                            ref={inputName}
                                            onChange={ (ev) => {setName(ev.target.value)}} 
                                            required
                                        />
                                        <div className="valid-feedback">
                                        Looks good!
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="FormEmail">Correo Electronico</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="FormEmail" 
                                            value={email}
                                            placeholder="email@example.com"
                                            ref={inputEmail}
                                            onChange={ (ev) => {setEmail(ev.target.value)}}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="validationMessage">Mensaje</label>
                                        <textarea 
                                            id="validationMessage"
                                            className="form-control"  
                                            value={message} 
                                            ref={inputMessage}
                                            onChange={ (ev) => {setMessage(ev.target.value)}}>
                                            </textarea>
                                        <div className="valid-feedback">
                                        Looks good!
                                        </div>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-lg btn-block btn-info">Contactar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    )
}