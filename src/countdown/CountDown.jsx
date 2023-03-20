import React from 'react';
import { useState } from 'react';

function CountDown() {
    // targetSeconds (cantidad de segundos elegidos), Elapsedseconds (segundos que han pasado)

    let [targetSeconds, SetTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    function parseForm(ev){
        //prevengo el funcionamiento por default del evento
        ev.preventDefault();
        // leer la informacion que tiene este input
        let seconds = ev.target.seconds.value
        // enviar la información a la función "dispatched" y convertirlo en entero
        SetTargetSeconds(parseInt(seconds));
    }

        if(targetSeconds !== null){
            return (
                <p>Soy un conteo hasta el {targetSeconds}</p>
            )
        }
    
    return (
    <div>

    <p>¿Cuantos segundos quieres contar?</p>
    
    <form action='#' onSubmit={ ev => parseForm(ev) }>
        <input type="number" name='seconds' />
        <button>Iniciar</button>
    </form>

    </div>
  )
}

export default CountDown;