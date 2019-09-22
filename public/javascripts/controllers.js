addEventListener('load', inicio, false);

function inicio() {
    document.querySelector('.botonSubmit').addEventListener('click', verificarTerminos, false);
}

function verificarTerminos(e) {
    const terminos = document.querySelector('.terminos').checked;
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmarPassword = document.getElementById('confirmarPassword');
    if (nombre.value == '' || email.value == '' || password.value == '' || confirmarPassword.value == '') {
        alert('No pueden haber campos vacíos');
        e.preventDefault();
    }
    if (terminos == false) {
        alert('Debe aceptar los terminos');
        e.preventDefault();
    }
    if (password.value != confirmarPassword.value) {
        alert('Las contraseñas no coinciden');
        e.preventDefault();
    }

}