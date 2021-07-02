import React from 'react';
import { useState } from "react";

export function Formulario() {

    const [numero, setNumero] = useState("")

    return (
        <div>
            <form>
                <label>
                    Numero de estrellas
                    <input className="dato" type="text" value={numero}
                        onChange={e => setNumero(e.target.value)} placeholder="ingrese un numero" />
                </label>
                <button className="dato">Añadir</button>
            </form>
        </div>
    )
}
