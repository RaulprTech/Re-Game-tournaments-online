import React, { Component } from 'react';
import {entradas} from './entradas.json';
import Card from './Card';



class Objetivos extends Component{
  constructor(){
    super();
    this.state = {
      entradas
    }
  }

  render(){

    const numTareas = this.state.entradas.length;
    const todos = this.state.entradas.map((todo, i) => {

      return(
            <Card title={todo.title} src={todo.src} info={todo.info} precioNormal={todo.precioNormal} precioMenor={todo.precioMenor} button={todo.button}/>
      );
    });
  return(
      <div>
        <h1 className="display-4 text-center text-white m-5"><strong className="bg-secondary p-2">Consigue Tu Entrada Al Evento AQUI</strong></h1>
        <div className="row row-cols-1 row-cols-md-3">
          {todos}
        </div>
      </div>
  );
}
}
export default Objetivos;
