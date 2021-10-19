window.addEventListener('load', ()=> {
    //referenciamos a los elementos del DOM
    const formCrear = document.getElementById('form-crear')   
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')    
    /* PROCEDIMIENTO PARA EL ALTA */ 
    //configuramos el evento submit para el form crear
    formCrear.addEventListener('submit', (e) => {
        e.preventDefault()
        capturarValor()
    })    
    const capturarValor = ()=> {
        const tareaNombre = inputCrear.value.trim()
        //controlamos que no esté vacío (usamos operadores ternarios)
        ;(tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe ingresar un valor')        
    }
    //Funcion para renderizar la nueva tarea en index.html es decir un li (list item)
    const mostrarTareaHtml = (tarea) => {        
        const liHtml = `<li class="list-group-item d-flex justify-content-between"><strong>${tarea}</strong> <i class="fas fa-minus-circle borrar"></i></li>`
        listaTareas.innerHTML += liHtml
        formCrear.reset()
    };
    /* PROCEDIMIENTO PARA BUSCAR */ 
    //Configuramos el evento keyup
    inputBuscar.addEventListener('keyup', () => {        
        const caracter = inputBuscar.value.trim()        
        busqueda(caracter)        
    })
    //función de búsqueda
    const busqueda = (cadena) => {
        let arreglo = Array.from(listaTareas.children)
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textoFiltrado')                
            })

        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textoFiltrado')                
            })
    }
    /* PROCEDIMIENTO PARA BORRAR */ 
   
    // Configuramos el evento click para borrar
    listaTareas.addEventListener('click', (e) => {     
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })
})