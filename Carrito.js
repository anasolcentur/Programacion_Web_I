class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
    }

    // Método para agregar un producto al carrito
    agregarProducto(producto) {
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
    }

    // Método para eliminar un producto del carrito
    eliminarProducto(nombreProducto) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre === nombreProducto) {
                this.productos.splice(i, 1);
                break;
            }
        }
        this.actualizarTotal();
    }

    // Método para vaciar el carrito
    vaciarCarrito() {
        this.productos = [];
        this.total = 0;
    }

    // Método para calcular el total del carrito
    actualizarTotal() {
        this.total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            this.total += this.productos[i].precio * this.productos[i].cantidad;
        }
    }

    // Método para mostrar el contenido del carrito
    mostrarCarrito() {
        console.log("Contenido del carrito:");
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${this.productos[i].nombre} x${this.productos[i].cantidad} - $${this.productos[i].precio * this.productos[i].cantidad}`);
        }
        console.log(`Total: $${this.total}`);
    }
}

// Exportar la clase para su uso en otros archivos
export default Carrito;
