const ganador = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]

]

let pieza1 = 'X';
let pieza2 = 'O';
let interruptor = true;
let conjuntoceldas = document.querySelector('.celda')
let celdas = Array.from(conjuntoceldas)
let turnos = 6
let botonRestart = document.querySelector("#restart")
let cpu = JSON.parse(sessionStorage.getItem('cpu')) || false

const comprobacion = () => {
    for (ganador of ganador) {
        let cellA = celdas[ganador[0]]
        let cellB = celdas[ganador[1]]
        let cellC = celdas[ganador[2]]

        if (cellA.innerHTML === piezaActual &&
            cellB.innerHTML === piezaActual &&
            cellC.innerHTML === piezaActual) {
            return true;
        }
    }
    return false;
}

const randomCelda = () => {
    let randomCelda = getRandomCelda()
    while (randomCelda.innerHTML !== '') {
        randomCelda = getRandomCelda()
    }
    randomCelda.click()

}

const eliminarCeldaRandom = () => {
    const piezaActual = (interruptor) ? pieza1 : pieza2
    let randomCelda = getRandomCelda()
    while (randomCelda.innerHTML !== piezaActual) {
        randomCelda = getRandomCelda()
        randomCelda.click()
    }
    randomCelda.click()
}

const getRandomCelda = ()=>{
    const random = Math.round(Math.random()*8)
    return celda[random]
}

celdas.forEach((celda) => {
    cell.addEventListener("click", () => {
        const piezaActual = (interruptor) ? pieza1 : pieza2
        if (turnos > 0) {
            if (celda.innerHTML == "") {
                celda.innerHTML = piezaActual;
                interruptor = !interruptor
                turnos--;
            }
        }
        else {
            console.log("adios")
            if (celda.innerHTML === piezaActual) {
                celda.innerHTML = "";
                turnos++;
            }
        }

        if(comprobarGanador(piezaActual)){
            window.location = "../pages/ganador.html"
        }

        if (!interruptor && cpu) {
            if (turnos > 0) {
                clickRandomCelda()
            } else {
                deleteRandomCelda()
                clickRandomCelda()
            }

        }
    })
});

// botonRestart.addEventListener("click", () => {
//     interruptor = true;
//     turnos = 6;
//     celda.forEach((cell) => {
//     celda.innerHTML = "";
//     }) 
// })