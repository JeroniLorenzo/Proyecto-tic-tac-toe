//Declaramos la función para guardar los nombres de los jugadores.
const ingresarMultijugador = ()=>{
    let jugador1 = document.querySelector('#jugador1').value;
    let jugador2 = document.querySelector('#jugador2').value;

    sessionStorage.setItem("modoJuego", "multijugador");
        sessionStorage.setItem("jugador1", jugador1);
        sessionStorage.setItem("jugador2", jugador2);
}
const ingresarCpu = ()=>{
    let jugador1 = document.querySelector('#jugador1').value;
    let jugador2 = document.querySelector('#jugador2').value;

    sessionStorage.setItem("modoJuego", "cpu");
        sessionStorage.setItem("jugador1", jugador1);
        sessionStorage.setItem("jugador2", jugador2);
}

//Declaramos la función donde mostraremos los nombres previamente guardados.
const mostrarNombres=()=>{
    const contNombre1 = document.querySelector('#contNombre1');
    const contNombre2 = document.querySelector('#contNombre2');
    const contTurno = document.querySelector('#contTurno');
    let modoJuego = sessionStorage.getItem('modoJuego');
    if(modoJuego == "multijugador"){
        nombre1 = sessionStorage.getItem('jugador1');
        nombre2 = sessionStorage.getItem('jugador2');
    }else if(modoJuego == "cpu"){
        nombre1 = sessionStorage.getItem('jugador1');
        nombre2 = sessionStorage.getItem('jugador2');
    }
    let infoTurno = `Empieza ${nombre1}`
    contNombre1.innerHTML = nombre1;
    contNombre2.innerHTML = nombre2;
    contTurno.innerHTML = infoTurno;

}

//Declaramos la funcion para imprimir el nombre del ganador.
const nombreGanador=()=>{
    const contGanador = document.querySelector('#contGanador');
    let ganador = sessionStorage.getItem('ganador');
    let infoGanador = `Ha ganado ${ganador}`;
    contGanador.innerHTML = infoGanador;
}

//Declaramos listaCeldas a todas las clases .celda de la clase .tablero del html.

let listaCeldas = document.querySelectorAll('.tablero .celda'); 

//Definimos las 2 piezas del juego, el contador de movimientos empieza en 0, el turno de "X" va a ser true y el de "O" será false

const pieza1='X';
const pieza2='O';
let contadorFichasUsadas = 0;
let turno = true;


//Declaramos donde se van a gurdar los nombres para luego imprimirlos en el contenedor de turnoJugador

let turnoJugador;

//Declaramos un array de 9 posiciones dónde se le damos el valor 0 a cada una de las casillas. (Array del tablero)

let arrCeldas = [0,0,0,0,0,0,0,0,0];

//Declaramos dos arrays para saber qué posiciones van a estar llenas y cuales estarán vacias para poder coger y recolocar las fichas de la CPU
//En el array del tablero.
 const casillaLlena = ()=>{
    let llenas = [];
    arrCeldas.forEach((valor, i)=>{
        if(valor == 2) llenas.push(i);
    })
    return llenas;
 }

 const casillaVacia = ()=>{
    let vacias = [];
    arrCeldas.forEach((valor, i)=>{
        if(valor == 0) vacias.push(i);
    })
    return vacias;
 }
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

//Declaramos la funcion para recolocar las fichas una vez se han superado las 6 fichas.

const recolocarFicha = ()=>{    
    let listaCeldas = document.querySelectorAll('.tablero .celda');

    listaCeldas.forEach((celda, posicion) => {
        //Si en la casilla está el valor 1, pondremos una "X"
        if(arrCeldas[posicion] == 1)
            celda.innerHTML= pieza1;
            //Si en la casilla está el valor 2, pondremos una "O"
        else if(arrCeldas[posicion] == 2)
            celda.innerHTML= pieza2;
            //Si en la casilla está el valor 0, se va a quedar vacío.
        else if(arrCeldas[posicion] == 0)
            celda.innerHTML= "";
    }) ; 
}

//Definimos la funcion principal del juego, en ella van 
const accionJugar = (celda, posicion)=>{

        //Guardamos los nombres de los jugadores para luego imprimirlos en su respectivo contenedor de nombre.

        let modoJuego = sessionStorage.getItem('modoJuego');
        if(modoJuego == "multijugador"){
            nombre1 = sessionStorage.getItem('jugador1');
            nombre2 = sessionStorage.getItem('jugador2');
        }else if(modoJuego == "cpu"){
            nombre1 = sessionStorage.getItem('jugador1');
            nombre2 = sessionStorage.getItem('jugador2');
        }

        //Declaramos un limiteFichas para cuando éste sea true nos permita recolocar ficha.

        let limiteFichas = false;

        //Condición de haber llegado al límite de fichas.

        if(contadorFichasUsadas == 6) {

            //Condición que valida quien va a quitar y poner ficha.
            // Si la casilla está ocupada por "X" y es el turno de "X" o la casilla está ocupada por "O" y es el turno de "O"
            
            if((arrCeldas[posicion] == 1 &&  turno == true) || (arrCeldas[posicion] == 2 &&  turno == false)){

                //Vaciamos la casilla, restamos una ficha para poder hacer el siguente movimiento y llamamos a la funcion para colocar la ficha

                arrCeldas[posicion] = 0;
                contadorFichasUsadas--;
                limiteFichas = true;//Si el limiteFichas está en false, no nos dejará quitar fichas.
                recolocarFicha();
            }
        }
       //Condición de si no están todas las fichas en juego y el contenido de la casilla está vacío, se sigue jugando y sumando fichas al contador.

        if(contadorFichasUsadas < 6 && arrCeldas[posicion] == 0 && limiteFichas == false) {
            contadorFichasUsadas++

        // Si turno es true pondremos la pieza1 (que son las 'X'), en el contenedor del turno se imprimirá el nombre del jugador1 y
        // damos el valor de 1 a las 'X' dentro del array.

            if (turno) {
                celda.innerHTML= pieza1;
                let contTurno = document.querySelector('#contTurno');
                contTurno.innerHTML = ` Mueve ${nombre2}`;
                turnoJugador = nombre1;
                arrCeldas[posicion] = 1;

        // Si turno es false pondremos la pieza2 (que son las 'O'), en el contenedor del turno se imprimirá el nombre del jugador2 y
        // damos el valor de 2 a las 'O' dentro del array.

            } else {
                celda.innerHTML= pieza2;
                let contTurno = document.querySelector('#contTurno');
                contTurno.innerHTML = `Mueve ${nombre1}`;
                turnoJugador = nombre2;
                arrCeldas[posicion] = 2;
            }
            // Si las fichas coinciden con la posicion de la función ganador, guardamos el nombre del jugador del turno que estaba en juego
            // y nos redirige a la vista de ganador con el nombre impreso.

            if (ganador()) {
                sessionStorage.setItem("ganador", turnoJugador);
                window.location = "../pages/ganador.html";
            }
            turno = !turno;
    }
    
}
listaCeldas.forEach((celda, posicion) => {
    celda.addEventListener('click', () => {
        //Declaramos qué modos de juego se van a jugar.
        let modoJuego = sessionStorage.getItem('modoJuego');
        if(modoJuego == "multijugador"){
            accionJugar(celda, posicion);
        }else if(modoJuego == "cpu"){
            accionJugar(celda, posicion);


            //Condicional de si no es nuestro turno:
            if(!turno){
                //Si no es nuestro turno pero no se han puesto las 6 fichas en juego, se van poniendo fichas al tablero y al array creado anteriormente
                //para saber cuantas posiciones están ocupadas.
                if(contadorFichasUsadas < 6 ){
                    let casillasVacias = casillaVacia();
                    let posicio = casillasVacias [Math.floor(Math.random() * casillasVacias.length)];
                    let casilla = document.querySelector('#casilla' + posicio);
                    accionJugar(casilla, posicio);
                }else{
                    //si sigue sin ser nuestro turno pero ya se ha llegado al numero máximo de fichas,
                    // llamamos a las funciones para que la CPU pueda coger las fichas de su turno ("O")
                    //Y moverla a una casilla del tablero que se encuentre vacía.
                    let casillasLlenas = casillaLlena();
                    let casillasVacias = casillaVacia();

                    //La cpu recoge una de sus fichas de una posición random y se la pasamos por parámetro a la función para que la recoja del tablero

                    let posicio = casillasLlenas [Math.floor(Math.random() * casillasLlenas.length)];
                    let casilla = document.querySelector('#casilla' + posicio);
                    accionJugar(casilla, posicio);


                    //La cpu recoloca la ficha en una casilla vacia a una posición random que la pasamos por parámetro a la función para recolocarla
                    //en el tablero de juego

                    let posicio2 = casillasVacias [Math.floor(Math.random() * casillasVacias.length)];
                    let casilla2 = document.querySelector('#casilla' + posicio2);
                    accionJugar(casilla2, posicio2);

                    
                }
            }
            
        }
        })
});