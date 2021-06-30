import React from 'react';
import { useState } from 'react';
import { Juego } from './componentes/Juego';
import './css/App.css';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);
  return <Juego key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}

// Colores
export const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};




export default Inicio;
