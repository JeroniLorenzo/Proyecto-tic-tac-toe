const listaCeldas = document.querySelectorAll('.tablero .celda')
let turno=true
const ganador= (i, j, k)=>{
    movimientosArray[i] == movimientosArray[j] &&
            movimientosArray[j] == movimientosArray[k]&&
            movimientosArray[i] != null
            return true
}   
const movimientosArray = new Array(9).fill(null)
listaCeldas.forEach((celda, index)=>{

    celda.addEventListener('click',(()=>{
        if(turno){
            celda.classList.add('piezaX')
        }else{
            celda.classList.add('piezaO')
        }
        movimientosArray[index] = turno
        turno = !turno
         if(ganador(0,1,2)){
            /*Pasar a página de ganador*/
            }
    }),{once: true}  )
})