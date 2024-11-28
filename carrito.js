export class Carrito {
  constructor() {
    // Recuperar el carrito desde localStorage, si existe, o inicializar como array vacío
    this.items = JSON.parse(localStorage.getItem('carrito')) || [];
  }

  // Agregar un producto al carrito
  agregarProducto(producto) {
    // Buscar si el producto ya existe en el carrito
    const productoExistente = this.items.find(item => item.name === producto.name);
    
    if (productoExistente) {
      // Si existe, incrementar la cantidad
      productoExistente.quantity++;
    } else {
      // Si no existe, agregarlo al array de items con cantidad 1
      this.items.push({ ...producto, quantity: 1 });
    }

    // Actualizar el localStorage después de agregar el producto
    this.actualizarLocalStorage();
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.items = [];  // Limpiar el array de productos
    this.actualizarLocalStorage();  
  }

  // Actualizar el localStorage con el array de productos
  actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }

  // Obtener el total de la compra
  obtenerTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Obtener la cantidad de productos en el carrito
  obtenerCantidad() {
    return this.items.length;
  }

  // Obtener todos los productos del carrito
  obtenerItems() {
    return this.items;
  }

  // Actualizar la vista del carrito
  actualizarCarrito() {
    // Elementos del DOM
    const carritoCantidad = document.getElementById('carritoCantidad');
    const carritoContenido = document.getElementById('carritoContenido');
    const totalCarrito = document.getElementById('totalCarrito');

    carritoCantidad.textContent = this.obtenerCantidad();

    // Mostrar los productos en el carrito
    carritoContenido.innerHTML = '';
    let total = this.obtenerTotal();
    
    if (this.obtenerCantidad() === 0) {
        carritoContenido.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        this.obtenerItems().forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<span>${item.name} x${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
            carritoContenido.appendChild(div);
        });
    }

    // Mostrar el total
    totalCarrito.textContent = total.toFixed(2);
  }
}
