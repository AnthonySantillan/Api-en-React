import React from 'react'

export const Lista = (props) => {
    return (
        <div>
            <h1>Partidas anteriores</h1>
            {
                props.nuevoJugador.map(Usuarios => 
                    <div key={Usuarios.usuario}>
                        <p>
                            jugador: {Usuarios.usuario}
                        </p>
                        <p>
                            puntaje: {Usuarios.puntuacion}
                        </p>
                    </div>)
            }
        </div>
    )
}
