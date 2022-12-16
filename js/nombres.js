let nombre1=sessionStorage.getItem("jugador1")
let nombre2=sessionStorage.getItem("jugador2")
const mostrarNombre1 = ()=>{
    document.write(nombre1)
}
const mostrarNombre2 = ()=>{
    document.write(nombre2)
}
 const cambiarNombre = ()=>{
     if(turno){
         document.write(nombre1)
     }else{
        document.write(nombre2)
    }
    
 }