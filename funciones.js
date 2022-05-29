const guardarJugadora = (db, jugadora) => {
    db.setItem(jugadora.id, JSON.stringify(jugadora))
    window.location.href='/'
}

const cargarJugadoras = (db, parentNode) => {
    let claves = Object.keys(db)
    
    for(clave of claves){
        let jugadora = JSON.parse(db.getItem(clave))
        crearJugadora(parentNode, jugadora, db)
    }
}

const crearJugadora = (parentNode, jugadora, db) =>{
    let divJugadora = document.createElement('div')
    let nombreJugadora = document.createElement('h3')
    let apellidoJugadora = document.createElement('p')
    let telefonoJugadora = document.createElement('p')
    let dniJugadora = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreJugadora.innerHTML=jugadora.nombre
    apellidoJugadora.innerHTML=jugadora.apellido
    telefonoJugadora.innerHTML=jugadora.telefono
    dniJugadora.innerHTML=jugadora.dni
    iconoBorrar.innerHTML='delete_forever'

    divJugadora.classList.add('jugadora')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.remoteItem (jugadora.id)
        window.location.href = '/'
    }



    divJugadora.appendChild(nombreJugadora)
    divJugadora.appendChild(apellidoJugadora)
    divJugadora.appendChild(telefonoJugadora)
    divJugadora.appendChild(dniJugadora)
    divJugadora.appendChild(iconoBorrar)

    parentNode.appendChild(divJugadora)

}