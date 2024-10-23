// Función para capturar el nombre del usuario
function capturarNombre() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre) {
        alert(`Hola, ${nombre}! Bienvenido a Afterglow.`);
    } else {
        alert("No ingresaste un nombre.");
    }
}

// Función para validar el formulario de contacto
function validarFormulario(event) {
    event.preventDefault(); // Previene el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación simple
    if (nombre && email && mensaje) {
        alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
        
    } else {
        alert("Por favor, completa todos los campos.");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', validarFormulario);
    capturarNombre(); 
});
