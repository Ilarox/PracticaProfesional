const nombre = document.getElementById("nombre");
const tipoTorneo = document.getElementById("tipoTorneo");
const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");
const valorInscripcion = document.getElementById("valorInscripcion");
const minEquipos = document.getElementById("minEquipos");
const maxEquipos = document.getElementById("maxEquipos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

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
  if (tipoTorneo.value.length < 1) {
    mostrarMensajeError("tipoTorneo", "Tipo de torneo no válido");
    condicion = false;
  }
  if (fechaInicio.value.length < 1) {
    mostrarMensajeError("fechaInicio", "Fecha no válida");
    condicion = false;
  }
  if (fechaFin.value.length < 1){
    mostrarMensajeError("fechaFin", "Fecha no válida");
    condicion = false;
  }
  if (valorInscripcion.value.length < 1 || valorInscripcion.value.trim() == "") {
    mostrarMensajeError("valorInscripcion", "Valor no válido");
    condicion = false;
  }
  if (minEquipos.value < 1) {
    mostrarMensajeError("minEquipos", "Valor no válido");
    condicion = false;
  }
  if (maxEquipos.value <1) {
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
