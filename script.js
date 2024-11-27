// Importa la clase Carrito desde el archivo Carrito.js
import { Carrito } from './Carrito.js';

// Crear una instancia del carrito
let carrito = new Carrito();

// Definición de productos disponibles
let productos = [
    { nombre: "Sweater Rainbow", precio: 15000, cantidad: 10 },
    { nombre: "Sweater Molly", precio: 17000, cantidad: 10 },
    { nombre: "Square Orange", precio: 20000, cantidad: 10 },
    { nombre: "Square Blue", precio: 20000, cantidad: 10 },
    { nombre: "Square Pink", precio: 20000, cantidad: 10 },
    { nombre: "Square Red", precio: 20000, cantidad: 10 }
];

// Función para mostrar todos los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.agregarProducto(producto);
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Función para realizar la compra y obtener el nombre y correo del usuario
function realizarCompra() {
    // Entrada de datos con prompt para obtener nombre y correo
    const nombre = prompt("Ingresa tu nombre:");
    const email = prompt("Ingresa tu correo electrónico:");

    // Validación simple para asegurar que el usuario ingresó ambos datos
    if (nombre && email) {
        console.log(`¡Gracias por tu compra, ${nombre}! Te hemos enviado un correo de confirmación a ${email}.`);
        carrito.mostrarCarrito(); // Muestra el contenido del carrito
        console.log(`El total de tu compra es: $${carrito.total}`);
        alert(`¡Gracias por tu compra, ${nombre}! Te hemos enviado un correo de confirmación a ${email}.`);
    } else {
        alert("Por favor, completa ambos campos.");
    }
}

// Agregar productos al carrito de ejemplo
agregarAlCarrito(productos[0]);  // Agrega un producto al carrito
agregarAlCarrito(productos[1]);  // Agrega otro producto al carrito

// Muestra los productos disponibles
mostrarProductos();

// Realiza la compra (esto sería una simulación)
realizarCompra();



