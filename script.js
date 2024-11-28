// Recuperar carrito del localStorage al cargar la página
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Si no hay carrito, se inicializa como vacío

// Elementos del DOM
const carritoCantidad = document.getElementById('carritoCantidad');
const carritoContenido = document.getElementById('carritoContenido');
const verCarrito = document.getElementById('verCarrito');
const carritoSection = document.getElementById('carrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const finalizarCompra = document.getElementById('finalizarCompra');
const mensajeCompra = document.getElementById('mensajeCompra');

// Función para agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function() {
        // Obtener nombre y precio del producto desde los elementos DOM
        const productName = this.parentElement.querySelector('p').textContent;
        const productPrice = parseFloat(this.parentElement.querySelector('p + p').textContent.replace('$', '').replace(',', '').trim());

        // Buscar si el producto ya está en el carrito
        let productoExistente = false;
        carrito.forEach(item => {
            if (item.name === productName) {
                item.quantity++;  // Si existe, incrementar la cantidad
                productoExistente = true;
            }
        });

        // Si no existe, agregar el producto con cantidad 1
        if (!productoExistente) {
            carrito.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la vista del carrito
        actualizarCarrito();
    });
});

// Actualiza el carrito en la vista
function actualizarCarrito() {
    carritoCantidad.textContent = carrito.length;

    // Mostrar los productos en el carrito
    carritoContenido.innerHTML = '';
    let total = 0;
    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach(item => {
            total += item.price * item.quantity;
            const div = document.createElement('div');
            // Mostrar nombre, cantidad y precio correcto
            div.innerHTML = `<span>${item.name} x${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
            carritoContenido.appendChild(div);
        });
    }

    // Mostrar el total
    document.getElementById('totalCarrito').textContent = total.toFixed(2);
}

// Ver carrito
verCarrito.addEventListener('click', function() {
    carritoSection.style.display = 'block';
});

// Vaciar carrito
vaciarCarrito.addEventListener('click', function() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Vaciar carrito en localStorage
    actualizarCarrito();
    carritoSection.style.display = 'none';
});

// Finalizar compra (simulación)
finalizarCompra.addEventListener('click', function() {
    // Muestra un mensaje de éxito sin usar alert()
    mensajeCompra.textContent = 'Gracias por tu compra!';
    mensajeCompra.style.display = 'block';

    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Vaciar carrito en localStorage
    actualizarCarrito();
    carritoSection.style.display = 'none';
});

// Al cargar la página, recuperar el carrito desde localStorage
document.addEventListener('DOMContentLoaded', function() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recuperar el carrito o un array vacío
    actualizarCarrito();
});
