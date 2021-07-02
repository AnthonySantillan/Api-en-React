import React, { useState } from 'react'


 export const Sesion = ({ handleSubmited,handleStars}) => {

    const [usuario, setUsuario] = useState('')

    let jugador ={};
    
    const [estrella, setEstrella] = useState(0)

   /* const handleStar = (e) =>{
        e.preventDefault()
        cantidad = estrella
        handdleStars(cantidad)
    }*/

    const handleSubmit = (e) => {
        e.preventDefault()
        jugador.usuario=usuario
        jugador.puntuacion=0
        handleSubmited(jugador)
        handleStars(estrella)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Ingrese su usuario</h1>
                <input
                  id=""
                  label="Ingrese usuario"
                  value ={usuario}
                  onChange = {e => setUsuario(e.target.value)}
                  required
                />
                <h1>Ingrese el numero de estrellas</h1>
                  <input
                  id=""
                  label="Ingrese usuario"
                  value ={estrella}
                  onChange = {e => setEstrella(e.target.value)}
                  required
                />
                 <button>Ingresar</button>
            </form>

           
        </div>
    )
} 