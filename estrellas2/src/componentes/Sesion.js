import React, { useState } from 'react';


export const Sesion = (props) => {

   const [usuario,setUsuario] = useState("")
   const handleSumit = () =>{
    props.setLogin(true)

   }
    return (
        <div>
            <form onSubmit={handleSumit}>
                <h1>Ingrese su nombre</h1>
                <input
                value={usuario} 
                onChange={e => setUsuario(e.target.value)}
                >
                </input>
                <button>Agregar</button>
            </form>
        </div>
    )
}
