document.addEventListener('DOMContentLoaded', () => {

    // aqui vamos a poner todo el codigo
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'cerveza',
            precio: 27,
            imagen: 'cerveza.jpg'
        }, {
            id: 2,
            nombre: 'jabon',
            precio: 97,
            imagen: 'jabon.jpg'
        }, {
            id: 3,
            nombre: 'panditas',
            precio: 18,
            imagen: 'panditas.jpg'
        }
    ]

    let carrito = []
    const divisa = 'pesos'
    // traer elementos del DOM
    const DOMitems = document.querySelector('#items')
    const DOMcarrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    // funcionalidades
    function renderizarProductos() {
        baseDeDatos.forEach( function (producto) {
            
        })

    }


    // aqui termina el codigo
})