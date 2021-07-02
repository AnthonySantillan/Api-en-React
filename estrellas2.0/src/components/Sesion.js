import React, { useState } from 'react'


 export const Sesion = ({ handleSubmited,handleStars}) => {

    const [usuario, setUsuario] = useState('')

    let jugador ={};
    
    const [estrella, setEstrella] = useState("")

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
                <input
                  id="dato"
                  label="Ingrese usuario"
                  value ={usuario}
                  onChange = {e => setUsuario(e.target.value)}
                  required
                  placeholder="usuario"
                />
                  <input
                  id="dato"
                  label="Ingrese usuario"
                  value ={estrella}
                  onChange = {e => setEstrella(e.target.value)}
                  required
                  placeholder="numero de estrellas"
                />
                
                 <button id="ingresar">Ingresar</button>
            </form>

           
        </div>
    )
} 