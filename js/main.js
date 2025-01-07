
const Productos = document.getElementById("productos")

if (Productos) { Productos.innerHTML = 'Contenido'; } else { console.error('El elemento no existe en el DOM'); }


const crearTarjetas = (arrayDeProductos) => {
    Productos.innerHTML = ""
    arrayDeProductos.forEach(el => {
        const articleContainer = document.createElement("article")
        articleContainer.classList.add("filaProductosFlex")

        const divContainer = document.createElement("div")
        divContainer.classList.add("contenedorProductos")

        const imagen = document.createElement("img")
        imagen.setAttribute("src", el.image)
        imagen.setAttribute("height", 200)

        const titulo = document.createElement("h3")
        const descripcion = document.createElement("p")
        const precio = document.createElement("h4")
        const botonComprar = document.createElement("button")


        titulo.innerText = el.title
        descripcion.innerText = el.description
        precio.innerText = "$ " + el.price

        botonComprar.innerText = "Comprar"

        console.log("pasando..")

        articleContainer.appendChild(divContainer)
        divContainer.append(imagen, titulo, descripcion, precio, botonComprar)
        Productos.appendChild(articleContainer)

    })

}
/*
const llamarData = async () => {
    const response = await fetch("./data.json")
    const arrayProductos = await response.json()

    console.log (arrayProductos)
    return arrayProductos
}
*/



const apiUrl='https://fakestoreapi.com/products';

const llamarData = async function obtenerProductos() {
    try{
        const response = await fetch (apiUrl);
        const prod = await response.json();
        console.log(prod);
        return (prod);

    } catch(error){
        console.log(error);
    }
    
}

document.addEventListener('DOMContentLoaded', async () => {
    const arrayData = await llamarData()
    console.log (arrayData)
    crearTarjetas (arrayData)
})