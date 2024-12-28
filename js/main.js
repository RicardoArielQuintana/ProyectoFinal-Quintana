const Almacen = [
    {
        id: 1,
        producto: "Gorra",
        cantidad: 50
    },
    {
        id: 2,
        producto: "Pantalon",
        cantidad: 20
    },
    {
        id: 3,
        producto: "Remera",
        cantidad: 30
    }
]

    //instanciado de Almacen
    class ProductoClase {
        constructor(id, producto, cantidad) {
            this.id = id;
            this.producto = producto;
            this.cantidad = cantidad;
        }
    }

    const ArrayDeProductos = Almacen.map(el => new ProductoClase(el.id, el.producto, el.cantidad));
    console.log(ArrayDeProductos);

// Objeto carrito de compras

const Carrito = [
    {
        id: 1,
        producto: "Gorra",
        cantidad: 1
    },
    {
        id: 3,
        producto: "Remera",
        cantidad: 1
    }
]


// Agregar articulos al carrito de compras

function agregarAlCarrito(idPedido, cantidadPedido) {

    Carrito.push({
        id: idPedido,
        producto: "agregado por el usuario",
        cantidad: cantidadPedido
    });
}


// Validar existencias



function validarAlmacen(idPedido, cantidadPedido) {

    let idP = idPedido;
    let idC = cantidadPedido;

    for (let i = 0; i < Almacen.length; i++) {
        const articulo = Almacen[i];
        if (idP == articulo.id) {

            if (idC < articulo.cantidad) {
                alert("Contamos con existencias suficientes para su compra");
                console.log("El id del articulo es:" + idP);
                console.log("La cantidad de unidades es :" + idC);
                console.log(articulo);
                return (true);
            } else {
                alert("No contamos con existencias suficientes para su compra, por favor seleccione otro articulo");
                console.log("El id del articulo es:" + idP);
                console.log("La cantidad de unidades es :" + idC);
                console.log(articulo);
            }
        }
        else {
            console.log("siguiente articulo")
        }
    }
}




// Mostrar carrito de compras

function verCarritoDeCompras() {
    let articulos = "\n";
    for (let i = 0; i < Carrito.length; i++) {
        const articulo = Carrito[i];
        articulos = articulos + "Producto: " + articulo.producto + ", Cantidad: " + articulo.cantidad + "\n";
    }
    alert("Los productos de su carrito de compra son: " + articulos);
}


//Selección de método de pago

function MetodoPago() {
    let okMetodo;
    do {
        let comoPago = Number(prompt('Ingrese método de pago para esta operacion \n 1- Efectivo en locales \n 2- Tarjeta de crédito \n 3- Tarjeta de debito'));
        console.log(comoPago);
        switch (comoPago) {
            case 1:
                okMetodo = confirm('Ud ha seleccionado pagar con: Efectivo en locales');
                break;
            case 2:
                okMetodo = confirm('Ud ha seleccionado pagar con: Tarjeta de crédito');
                break;
            case 3:
                okMetodo = confirm('Ud ha seleccionado pagar con: Tarjeta de debito');
                break;
            default:
                prompt('El método de pago seleccionado no está disponible');
        }
    } while (!okMetodo);
    return (okMetodo);
}

function core() {


    let idPedido = Number(prompt('Seleccione el producto que quiere comprar: \n 1 - Gorra \n 2 - Pantalon \n 3 - Remera'));
    let cantidadPedido = Number(prompt('Indique la cantidad de unidades que desea comprar'));




    let bandera = true;

   // while (bandera) {
        let validador = validarAlmacen(idPedido, cantidadPedido);
        console.log(validador);

        if (validador) {
            agregarAlCarrito(idPedido, cantidadPedido);
        }

        verCarritoDeCompras();

        let ok = MetodoPago();
        console.log(ok);
  //  }


}

core()



