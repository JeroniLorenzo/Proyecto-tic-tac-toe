const ingresar = ()=>{
    let jugador1 = document.querySelector('#jugador1').value;
    let jugador2 = document.querySelector('#jugador2').value;

        sessionStorage.setItem("jugador1", jugador1);
        sessionStorage.setItem("jugador2", jugador2);
        window.location = "../pages/tablero.html";
}

const mostrarNombres=()=>{
    const contNombre1 = document.querySelector('#contNombre1');
    const contNombre2 = document.querySelector('#contNombre2');
    const contTurno = document.querySelector('#contTurno');
    let nombre1 = sessionStorage.getItem('jugador1');
    let nombre2 = sessionStorage.getItem('jugador2');
    let infoTurno = //`Empieza ${nombre1} y sigue ${nombre2}`
    contNombre1.innerHTML = nombre1;
    contNombre2.innerHTML = nombre2;
    contTurno.innerHTML = infoTurno;
}

const nombreGanador=()=>{
    const contGanador = document.querySelector('#contGanador');
    let ganador = sessionStorage.getItem('ganador');
    let infoGanador = `Ha ganado ${ganador}`;
    contGanador.innerHTML = infoGanador;
}

let listaCeldas = document.querySelectorAll('.tablero .celda'); //Declaramos listaCeldas a todas las clases .celda de la clase .tablero del html.

//Definimos las 2 piezas del juego, el contador de movimientos empieza en 0, el turno de "X" va a ser true y el de "O" será false

//Declaramos donde se van a gurdar los nombres para luego imprimirlos en el contenedor de turnoJugador

//Declaramos un array vacío dónde se van a guardar las piezas de los jugadores a medida que se vaya jugando

const pieza1='X';
const pieza2='O';
let turno = true;
let turnoJugador;
let arrCeldas = [0,0,0,0,0,0,0,0,0];

 
//Definimos las posiciones ganadoras del juego

const ganador = ()=>{
    if(arrCeldas[0] == arrCeldas[1] && arrCeldas[1] == arrCeldas[2] && arrCeldas[0] != 0){
        return true;
    } else if (arrCeldas[3] == arrCeldas[4] && arrCeldas[4] == arrCeldas[5] && arrCeldas[3] != 0){
        return true;
    }else if (arrCeldas[6] == arrCeldas[7] && arrCeldas[7] == arrCeldas[8] && arrCeldas[6] != 0){
        return true;
    }else if (arrCeldas[0] == arrCeldas[3] && arrCeldas[3] == arrCeldas[6] && arrCeldas[0] != 0){
        return true;
    }else if (arrCeldas[1] == arrCeldas[4] && arrCeldas[4] == arrCeldas[7] && arrCeldas[1] != 0){
        return true;
    }else if (arrCeldas[2] == arrCeldas[5] && arrCeldas[5] == arrCeldas[8] && arrCeldas[2] != 0){
        return true;
    }else if (arrCeldas[0] == arrCeldas[4] && arrCeldas[4] == arrCeldas[8] && arrCeldas[0] != 0){
        return true;
    }else if (arrCeldas[6] == arrCeldas[4] && arrCeldas[4] == arrCeldas[2] && arrCeldas[6] != 0){
        return true;
    }
}


listaCeldas.forEach((celda, posicion) => {
    celda.addEventListener('click', () => { 
        //Guardamos los nombres de los jugadores para luego imprimirlos en su respectivo contenedor de nombre.

        let nombre1 = sessionStorage.getItem('jugador1');
        let nombre2 = sessionStorage.getItem('jugador2');

        // Si turno es true pondremos la pieza1 (que son las 'X'), en el contenedor del turno se imprimirá el nombre del jugador1 y
        // damos el valor de 1 a las 'X'

            if (turno) {
                celda.innerHTML= pieza1;
                let contTurno = document.querySelector('#contTurno');
                contTurno.innerHTML = `${nombre2}`;
                turnoJugador = nombre1;
                arrCeldas[posicion] = 1;

        // Si turno es false pondremos la pieza2 (que son las 'O'), en el contenedor del turno se imprimirá el nombre del jugador2 y
        // damos el valor de 2 a las 'O'

            } else {
                celda.innerHTML= pieza2;
                let contTurno = document.querySelector('#contTurno');
                contTurno.innerHTML = `${nombre1}`;
                turnoJugador = nombre2;
                arrCeldas[posicion] = 2;
            }
            // Si las fichas coinciden con la posicion de la función ganador, guardamos el nombre del turno que ha ganado
            // y nos redirige a la vista de ganador con el nombre impreso.

            if (ganador()) {
                sessionStorage.setItem("ganador", turnoJugador);
                window.location = "../pages/ganador.html";
            }
            turno = !turno;
    
    })
}); 





