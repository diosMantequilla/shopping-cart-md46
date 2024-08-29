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
        }, {
            id: 4,
            nombre: 'panditas enchilados',
            precio: 18,
            imagen: 'panditas.jpg'
        }
    ]

    let carrito = []
    const divisa = 'pesos' // ignoramos un ratito
    // traer elementos del DOM
    const DOMitems = document.querySelector('#items')
    const DOMcarrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    // funcionalidades
    function renderizarProductos() {
        baseDeDatos.forEach( function (producto) {
            // dar ordenes de que hacer cuando vaya en cada producto

            // vamos a crear el contenedor card
            const miNodo = document.createElement('div')
            miNodo.classList.add('card', 'col-sm-4')
            // vamos a crear nuestra imagen
            const miNodoImagen = document.createElement('img')
            miNodoImagen.classList.add('card-img-top')
            miNodoImagen.setAttribute('src', producto.imagen)
            // creamos el card body
            const miNodoCardBody = document.createElement('div')
            miNodoCardBody.classList.add('card-body')
            // cramos el titulo en un h5
            const miNodoTitulo = document.createElement('h5')
            miNodoTitulo.classList.add('card-title')
            miNodoTitulo.textContent = producto.nombre
            // creamos un parrafo para poner el precio
            const miNodoPrecio = document.createElement('p')
            miNodoPrecio.classList.add('card-text')
            miNodoPrecio.textContent = producto.precio
            // creamos un boton para poder agregar los elementos al carrito
            const miNodoBoton = document.createElement('button')
            miNodoBoton.classList.add('btn', 'btn-primary')
            miNodoBoton.textContent = '+'

            // unimos todos los elementos que creamos
            miNodoCardBody.appendChild(miNodoTitulo)
            miNodoCardBody.appendChild(miNodoPrecio)
            miNodoCardBody.appendChild(miNodoBoton)
            miNodo.appendChild(miNodoImagen)
            miNodo.appendChild(miNodoCardBody)

            // insertamos nuestra card dentro del main con el id items
            DOMitems.appendChild(miNodo)
        })

    }


    renderizarProductos()
    // aqui termina el codigo
})
