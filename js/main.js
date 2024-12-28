
const Productos = document.getElementById("productos")

console.log("Productos. " + Productos)

const crearTarjetas = (arrayDeProductos) => {
    Productos.innerHTML = ""
    arrayDeProductos.forEach(el => {
        const articleContainer = document.createElement("article")
        articleContainer.classList.add("filaProductosFlex")

        const divContainer = document.createElement("div")
        divContainer.classList.add("contenedorProductos")
        const imagen = document.createElement("img")
        const titulo = document.createElement("h3")
        const descripcion = document.createElement("p")
        const precio = document.createElement("h4")
        const botonComprar = document.createElement("button")

        articleContainer.appendChild(divContainer)
        divContainer.append(imagen, titulo, descripcion, precio, botonComprar)

        titulo.innerText = el.producto
        descripcion.innerText = el.descripcion
        precio.innerText = "$ " + el.precio

        botonComprar.innerText = "Comprar"

        console.log("pasando..")

        articleContainer.append(divContainer, imagen, titulo, descripcion, precio, botonComprar)
        Productos.appendChild(articleContainer)

    })

}

const llamarData = async () => {
    const response = await fetch("./data.json")
    const arrayProductos = await response.json()

    console.log(arrayProductos)
    return arrayProductos
}

document.addEventListener("DOMContentLoaded", async () => {
    const arrayData = await llamarData()
    //   crearTarjetas(arrayData)
    console.log(arrayData)

})