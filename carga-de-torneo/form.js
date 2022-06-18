const nombre = document.getElementById("nombre");
const tipoTorneo = document.getElementById("tipoTorneo");
const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");
const valorInscripcion = document.getElementById("valorInscripcion");
const minEquipos = document.getElementById("minEquipos");
const maxEquipos = document.getElementById("maxEquipos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");




function onlyNumberKey(evt) 
{ 
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") //trim() elimina los espacios en blanco en ambos extremos del string.
  {
    mostrarMensajeError("nombre", "Nombre no válido");
    condicion = false;
  }
  if (fechaInicio.value > fechaFin.value || fechaInicio.value =="") {
    mostrarMensajeError("fechaInicio", "Fecha no válida");
    condicion = false;
  }
  if (fechaFin.value < fechaInicio.value || fechaFin.value =="") {
    mostrarMensajeError("fechaFin", "Fecha no válida");
    condicion = false;
  }
  if (valorInscripcion.value < 1 || valorInscripcion.value.trim() == "") {
    mostrarMensajeError("valorInscripcion", "Valor no válido");
    condicion = false;
  }
 
  if (minEquipos.value <1 || minEquipos.value > maxEquipos.value) {
    mostrarMensajeError("minEquipos", "Valor no válido");
    condicion = false;
  }
  if (maxEquipos.value <1 || maxEquipos.value < minEquipos.value) {
    mostrarMensajeError("maxEquipos", "Valor no válido");
    condicion = false;
  }
 
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}
