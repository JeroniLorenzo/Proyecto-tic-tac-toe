const listaCeldas = document.querySelectorAll('.tablero .celda')
// let estadoTablero = ["","","","","","","",""]
let turno = true
const movArray = new Array(8).fill(null)
listaCeldas.forEach((celda, posicion) => {
    celda.addEventListener('click', () => {
       if (turno) {
            celda.classList.add('piezaX')
        } else {
            celda.classList.add('piezaO')
        }
        movArray[posicion] = turno
        if (combGanadora()) {
             window.location = "../pages/ganador.html"
        }turno = !turno
        
    }, { once: true })
})  

const ganar = (i, j, k) => {
    if (movArray[i] == movArray[j] &&
        movArray[j] == movArray[k] &&
        movArray[i] != null) {
        return true
    } else false 
    //  let empate = !estadoTablero.includes('')
    //       if(empate){
    //           return alert('EMPATE')
    //       }
}
const combGanadora = () => {
    if (ganar(0, 1, 2)) {
        return true
    }
    if (ganar(3, 4, 5)) {
        return true
    }
    if (ganar(6, 7, 8)) {
        return true
    }
    if (ganar(0, 3, 6)) {
        return true
    }
    if (ganar(1, 4, 7)) {
        return true
    }
    if (ganar(2, 5, 8)) {
        return true
    }
    if (ganar(0, 4, 8)) {
        return true
    }
    if (ganar(6, 4, 2)) {
        return true
    }
    return false
}
const ingresar = () => {
    let jugador1 = document.getElementById("jugador1").value
    let jugador2 = document.getElementById("jugador2").value
    if(jugador1&&jugador2){
         sessionStorage.setItem("jugador1", jugador1)
        sessionStorage.setItem("jugador2", jugador2)
        window.open('/pages/tablero.html')
    }else alert('Primero dime el nombre de los jugadores')
}

