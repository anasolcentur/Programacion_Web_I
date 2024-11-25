// Definición de un array para almacenar los productos disponibles
let productos = [
    {
        nombre: "Sweater Rainbow",
        precio: 15000,
        cantidad: 10
    },
    {
        nombre: "Sweater Molly",
        precio: 17000,
        cantidad: 10
    },
    {
        nombre: "Square Orange",
        precio: 20000,
        cantidad: 10
    },
    {
        nombre: "Square Blue",
        precio: 20000,
        cantidad: 10
    },
    {
        nombre: "Square Pink",
        precio: 20000,
        cantidad: 10
    },
    {
        nombre: "Square Red",
        precio: 20000,
        cantidad: 10
    }
];

// Definición de un objeto carrito con propiedades y métodos
let carrito = {
    productos: [],
    total: 0,

    // Método para agregar un producto al carrito
    agregarProducto: function(producto) {
        let encontrado = false;
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre === producto.nombre) {
                this.productos[i].cantidad++;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            this.productos.push({ ...producto, cantidad: 1 });
        }
        this.actualizarTotal();
    },

    // Método para eliminar un producto del carrito
    eliminarProducto: function(nombreProducto) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre === nombreProducto) {
                this.productos.splice(i, 1);
                break;
            }
        }
        this.actualizarTotal();
    },

    // Método para vaciar el carrito
    vaciarCarrito: function() {
        this.productos = [];
        this.total = 0;
    },

    // Método para calcular el total del carrito
    actualizarTotal: function() {
        this.total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            this.total += this.productos[i].precio * this.productos[i].cantidad;
        }
    },

    // Método para mostrar el contenido del carrito
    mostrarCarrito: function() {
        console.log("Contenido del carrito:");
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${this.productos[i].nombre} x${this.productos[i].cantidad} - $${this.productos[i].precio * this.productos[i].cantidad}`);
        }
        console.log(`Total: $${this.total}`);
    }
};

// Función para mostrar todos los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i].nombre} - $${productos[i].precio}`);
    }
}

// Función para simular la compra
function realizarCompra() {
    console.log("Realizando compra...");
    carrito.mostrarCarrito();
    console.log("Gracias por tu compra!");
}

