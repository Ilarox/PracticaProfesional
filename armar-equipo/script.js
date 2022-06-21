const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const botonEnter = document.querySelector('#enter');

function agregarJugadora(nombre, dni, telefono) {
    const elemento = '<li id="elemento"> <i onClick="jugadoraEliminada(this)" class="fas fa-trash de" data="eliminado" id="0"></i> <p class="text">'+ nombre.value +' -  DNI: '+ dni.value+' - Teléfono: '+ telefono.value + '</p></li>';
    lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener('click',() =>{
    const nombre = document.getElementById("nombreId");
    const dni = document.getElementById("dniId");
    const telefono = document.getElementById("telefonoId");

    if(nombre, dni, telefono) {
        agregarJugadora(nombre,dni,telefono);
    }
    
})

function jugadoraEliminada(element){
     element.parentNode.parentNode.removeChild(element.parentNode)
 }