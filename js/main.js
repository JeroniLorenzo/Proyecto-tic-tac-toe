const ingresar = ()=>{
    let jugador1 = document.querySelector('#jugador1').value
    let jugador2 = document.querySelector('#jugador2').value

        sessionStorage.setItem("jugador1", jugador1)
        sessionStorage.setItem("jugador2", jugador2)
        window.location = "../pages/tablero.html"
}

const mostrarNombres=()=>{
    const contNombre1 = document.querySelector('#contNombre1')
    const contNombre2 = document.querySelector('#contNombre2')
    const contTurno = document.querySelector('#contTurno')
    let nombre1 = sessionStorage.getItem('jugador1')
    let nombre2 = sessionStorage.getItem('jugador2')
    let infoTurno = `Empieza ${nombre1} y sigue ${nombre2}`
    contNombre1.innerHTML = nombre1
    contNombre2.innerHTML = nombre2
    contTurno.innerHTML = infoTurno
}

const listaCeldas = document.querySelectorAll('.tablero .celda')

let turno = true

const arrCeldas = new Array(8).fill(null)

const ganar = (pos1, pos2, pos3) => {
    if (arrCeldas[pos1] == arrCeldas[pos2] &&
        arrCeldas[pos2] == arrCeldas[pos3] &&
        arrCeldas[pos1] != null) {
        return true
    }else {
         let empate = !arrCeldas.includes(null)
          if(empate){
            window.location = "../pages/empate.html"
          }
        }
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


listaCeldas.forEach((celda, posicion) => {
    celda.addEventListener('click', () => {
       if (turno) {
            celda.classList.add('piezaX')
        } else {
            celda.classList.add('piezaO')
        }
        arrCeldas[posicion] = turno
        if (combGanadora()) {
             window.location = "../pages/ganador.html"
           }
        turno = !turno
    }, { once: true })
})  





