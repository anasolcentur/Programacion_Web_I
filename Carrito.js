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

  // Eliminar un producto del carrito
  eliminarProducto(productoName) {
    this.items = this.items.filter(item => item.name !== productoName);  // Filtrar el producto a eliminar
    this.actualizarLocalStorage();
  }

  // Incrementar la cantidad de un producto
  aumentarCantidad(productoName) {
    const producto = this.items.find(item => item.name === productoName);
    if (producto) {
      producto.quantity++;
      this.actualizarLocalStorage();
    }
  }

  // Disminuir la cantidad de un producto
  disminuirCantidad(productoName) {
    const producto = this.items.find(item => item.name === productoName);
    if (producto && producto.quantity > 1) {
      producto.quantity--;
      this.actualizarLocalStorage();
    }
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
        div.innerHTML = `
          <span>${item.name} x${item.quantity}</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="btn btn-sm btn-danger eliminarProducto" data-name="${item.name}">Eliminar</button>
          <button class="btn btn-sm btn-warning aumentarCantidad" data-name="${item.name}">+</button>
          <button class="btn btn-sm btn-warning disminuirCantidad" data-name="${item.name}">-</button>
        `;
        carritoContenido.appendChild(div);
      });
    }

    // Mostrar el total
    totalCarrito.textContent = total.toFixed(2);

    // Añadir los eventos de eliminar, aumentar y disminuir a los botones dinámicos
    document.querySelectorAll('.eliminarProducto').forEach(button => {
      button.addEventListener('click', (event) => {
        const productoName = event.target.dataset.name;
        this.eliminarProducto(productoName);
        this.actualizarCarrito();
      });
    });

    document.querySelectorAll('.aumentarCantidad').forEach(button => {
      button.addEventListener('click', (event) => {
        const productoName = event.target.dataset.name;
        this.aumentarCantidad(productoName);
        this.actualizarCarrito();
      });
    });

    document.querySelectorAll('.disminuirCantidad').forEach(button => {
      button.addEventListener('click', (event) => {
        const productoName = event.target.dataset.name;
        this.disminuirCantidad(productoName);
        this.actualizarCarrito();
      });
    });
  }
}

