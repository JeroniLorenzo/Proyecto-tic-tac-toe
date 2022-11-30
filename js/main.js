let turno = 0
let btnPulsado = (e)=>{
    turno++;
    const boton = e.target;
    boton.style.backgroundColor = turno % 2 ? 'orange' : 'blue';
}
document.querySelectorAll('td').forEach(obj=> obj.addEventListener('click', btnPulsado))