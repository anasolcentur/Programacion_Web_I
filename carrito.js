// carrito.js

export class Carrito {
  constructor() {
    // Intentar obtener los elementos del carrito desde localStorage
    this.items = JSON.parse(localStorage.getItem('carrito')) || [];
  }

  agregarProducto(producto) {
    const productoExistente = this.items.find(item => item.name === producto.name);
    if (productoExistente) {
      productoExistente.quantity++;
    } else {
      this.items.push({ ...producto, quantity: 1 });
    }
    this.actualizarLocalStorage();
  }

  vaciarCarrito() {
    this.items = [];
    this.actualizarLocalStorage();
  }

  actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }

  obtenerTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  obtenerCantidad() {
    return this.items.length;
  }

  obtenerItems() {
    return this.items;
  }
}
