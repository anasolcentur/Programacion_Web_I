// Función para capturar el nombre del usuario
function capturarNombre() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    alert(`Hola, ${nombre}! Bienvenido a Afterglow.`);
}

// Función para validar el formulario de contacto
function validarFormulario(event) {
    event.preventDefault(); 

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


document.getElementById('contactForm').addEventListener('submit', validarFormulario);


window.onload = capturarNombre;
