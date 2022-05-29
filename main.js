const nombre=document.querySelector('.nombre')
const apellido=document.querySelector('.apellido')
const telefono=document.querySelector('.telefono')
const dni=document.querySelector('.dni')
const btnAgregarJugadora=document.querySelector('.btn-agregar-jugadora')

const listadoJugadoras=document.querySelector('.listado-jugadoras')


const db=window.localStorage

btnAgregarJugadora.onClick = () => {
    let jugadora = {
        
        id:Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        dni: dni.value,

    }
    guardarJugadora(db, jugadora)
}

cargarJugadoras(db, listadoJugadoras)