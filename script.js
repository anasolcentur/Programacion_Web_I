import { Carrito } from './carrito.js';
import { Producto } from './producto.js';

// Crear una instancia del carrito
let carrito = new Carrito();

// Definición de productos disponibles
let productos = [
    { nombre: "Sweater Rainbow", precio: 15000 },
    { nombre: "Sweater Molly", precio: 17000 },
    { nombre: "Square Orange", precio: 20000 },
    { nombre: "Square Blue", precio: 20000 },
    { nombre: "Square Pink", precio: 20000 },
    { nombre: "Square Red", precio: 20000 }
];

// Elementos del DOM
const carritoSection = document.getElementById('carrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const finalizarCompra = document.getElementById('finalizarCompra');
const mensajeNotificacion = document.getElementById('mensajeNotificacion');

// Función para agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('p').textContent;
        const productPrice = parseFloat(this.parentElement.querySelector('p + p').textContent.replace('$', '').replace(',', '').trim());

        // Crear una instancia de Producto
        const producto = new Producto(productName, productPrice);

        // Agregar el producto al carrito usando la clase Carrito
        carrito.agregarProducto(producto);

        // Actualizar la vista del carrito
        carrito.actualizarCarrito();

        // Mostrar el mensaje de notificación
        mostrarMensajeNotificacion();
    });
});

// Función para mostrar el mensaje de notificación
function mostrarMensajeNotificacion() {
    mensajeNotificacion.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeNotificacion.style.display = 'none';
    }, 3000);
}

// Ver carrito
document.getElementById('verCarrito').addEventListener('click', function() {
    carritoSection.classList.toggle('visible');
    carritoSection.classList.toggle('hidden');
});

// Vaciar carrito
vaciarCarrito.addEventListener('click', function() {
    carrito.vaciarCarrito();
    carrito.actualizarCarrito();
    carritoSection.classList.add('hidden');  // Ocultar el carrito después de vaciarlo
});

// Finalizar compra (simulación)
finalizarCompra.addEventListener('click', function() {
    $('#modalCompraExitosa').modal('show'); // Mostrar modal de compra exitosa

    carrito.vaciarCarrito();
    carrito.actualizarCarrito();
    carritoSection.classList.add('hidden');  // Ocultar el carrito después de finalizar la compra
});

// Al cargar la página, recuperar el carrito desde localStorage
document.addEventListener('DOMContentLoaded', function() {
    carrito.actualizarCarrito();
});

