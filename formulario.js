const formulario = document.getElementById('formulario');


const expresionesRegulares = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombrePatron: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidoPatron: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	dniPatron:/^\d{8}$/, // 8 numeros.
    emailPatron: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})+$/,
    telefonoPatron: /^\d{7,14}$/, // 7 a 14 numeros.
    passwordPatron: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/, 
	passwordPatron2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/
}


var nombre= document.getElementById('nombre');
var apellido= document.getElementById('apellido');
var dni= document.getElementById('dni');
var email= document.getElementById('email');
var telefonoCelular= document.getElementById('telefonoCelular');
var password1= document.getElementById('password1');
var password2= document.getElementById('password2');


function enviarFormulario() {
    
    if(nombre.value== null || nombre.value== "" || expresionesRegulares.nombrePatron.test(nombre.value)==false) 
    {
        document.getElementById('errorN').innerHTML = "Ingrese correctamente su nombre";        
    }
    else{
        document.getElementById('errorN').innerHTML = "";
    }
    if(apellido.value== null || apellido.value== "" || expresionesRegulares.apellidoPatron.test(apellido.value)==false) 
    {
        document.getElementById('errorA').innerHTML = "Ingrese correctamente su apellido";
    }
    else{
        document.getElementById('errorA').innerHTML = "";
    }
    if(dni.value== null || dni.value== "" ||  expresionesRegulares.dniPatron.test(dni.value)==false) 
    {
        document.getElementById('errorDNI').innerHTML = "Ingrese correctamente su DNI";
    }
    else{
        document.getElementById('errorDNI').innerHTML = "";
    }
    if(email.value== null || email.value== "" || expresionesRegulares.emailPatron.test(email.value)==false) 
    {
        document.getElementById('errorE').innerHTML = "Ingrese correctamente su email";
    } 
    else{
        document.getElementById('errorE').innerHTML = "";
    }
    if(telefonoCelular.value== null || telefonoCelular.value== "" || expresionesRegulares.telefonoPatron.test(telefonoCelular.value)==false) 
    {
        document.getElementById('errorTC').innerHTML = "Ingrese correctamente su teléfono";
    }
    else{
        document.getElementById('errorTC').innerHTML = "";
    }
    if(password1.value== null || password1.value== "" || expresionesRegulares.passwordPatron.test(password1.value)==false)
    {
        document.getElementById('errorP1').innerHTML = "Ingrese correctamente su contraseña. Formato de 8 a 15 dígitos, mínimo 1 mayúscula, 1 minúscula, 1 número y 1 carácter (.-@$!%*?&)";
    }
    else{
        document.getElementById('errorP1').innerHTML = "";
    }
    if(password2.value== null || password2.value== "" || expresionesRegulares.passwordPatron2.test(password2.value)==false) 
    {
        document.getElementById('errorP2').innerHTML = "Ingrese correctamente la confirmación de su contraseña";
    }
    else{
        document.getElementById('errorP2').innerHTML = "";
    }
    if(password1.value!=password2.value)
    {
        document.getElementById('errorP2').innerHTML = "Las contraseñas no coinciden";
    }
    else{
        document.getElementById('errorP2').innerHTML = "";
    }
    return false;
}