const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function registrarEquipo() {
    axios.post('http://localhost/crear-usuario', {nombre: 'ilana pepita', email: 'ilana@pepita.com' 
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.warn(error);
      });
}

function ValidarRegistro()
{
    var nombre= document.getElementById("nombreId");

    var email= document.getElementById("emailId");

    var telefono= document.getElementById("telefonoId");
    
    var contrasenia= document.getElementById("contraseniaId");
    
    var verificacion=document.getElementById("verificacionId");
    
    if (ValidarNombre(nombre)==false)
    {
        nombre.style="border: 1px solid red";

    }
    else 
    {
        nombre.style="border: 0px";
    }

    if (ValidarMail(email)==false)
    {
        email.style="border: 1px solid red";

    }
    else 
    {
        email.style="border: 0px";
    }

    if (ValidarTelefono(telefono)==false)
    {
        telefono.style="border: 1px solid red";

    }
    else 
    {
        telefono.style="border: 0px";
    }

    if (ValidarContrasenia(contrasenia)==false)
    {
        contrasenia.style="border: 1px solid red";

    }
    else 
    {
        contrasenia.style="border: 0px";
    }

    if (ValidarVerificacionContrasenia(contrasenia, verificacion)==false)
    {
        verificacion.style="border: 1px solid red";

    }
    else 
    {
        verificacion.style="border: 0px";
    }

    debugger;

    registrarEquipo();
}

function ValidarNombre(nombre)
{
    if (nombre.value=="")
    {
        return false;
    }
    return true;

}

function ValidarMail(email)
{
    if (email.value!="")
    {
        var regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(regex.test(email.value));
        return regex.test(email.value);
    }
    
    return false;
}


function ValidarTelefono(telefono) 
{   
    if (telefono.value!="")
    {
        var regex = /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/;
        return regex.test(telefono.value);
    }
    return false;

}

function ValidarContrasenia(contrasenia) 
{   
    if (contrasenia.value!="")
    {
        regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        return regexPassword.test(contrasenia.value);
    }
    return false;

}

function ValidarVerificacionContrasenia(contrasenia, verificacion)
{
    if (contrasenia.value==verificacion.value)
    {
        return true;
    }
    return false;
}

