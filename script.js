// script.js

let carrito = [];
const carritoCantidad = document.getElementById('carritoCantidad');
const carritoContenido = document.getElementById('carritoContenido');
const verCarrito = document.getElementById('verCarrito');
const carritoSection = document.getElementById('carrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const finalizarCompra = document.getElementById('finalizarCompra');

// Función para agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('p').textContent;
        const productPrice = parseFloat(this.parentElement.querySelector('p + p').textContent.replace('$', '').replace(',', ''));

        carrito.push({ name: productName, price: productPrice });
        actualizarCarrito();
    });
});

// Actualiza el carrito en la vista
function actualizarCarrito() {
    carritoCantidad.textContent = carrito.length;

    // Mostrar los productos en el carrito
    carritoContenido.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        carritoContenido.appendChild(div);
    });

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
    actualizarCarrito();
    carritoSection.style.display = 'none';
});

// Finalizar compra (simulación)
finalizarCompra.addEventListener('click', function() {
    alert('Gracias por tu compra!');
    carrito = [];
    actualizarCarrito();
    carritoSection.style.display = 'none';
});
