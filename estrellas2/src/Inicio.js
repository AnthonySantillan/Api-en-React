import React from 'react';
import { useState } from 'react';
import { Juego } from './componentes/Juego';
import { Sesion } from './componentes/Sesion';
import { Usuarios } from './componentes/Usuarios';
import './css/App.css';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);
  const [login, setLogin] = useState(false)
  const [nuevoJugador, setNuevoJugador] = useState(Usuarios)

  const añadirUsuario = (jugador) =>{
   setNuevoJugador([...Usuarios,jugador])
   setLogin(true)
  }
  return (
    <>
    {
      login === true ?
      (
        <Juego key={gameId} startNewGame={() => setGameId(gameId + 1)} 
        nuevoJugador={nuevoJugador}/>
      ) :(
        <Sesion setLogin={setLogin}  onSubmited={añadirUsuario}/>
      )
    }  
    </>
  );
}

// Colores
export const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default Inicio;
