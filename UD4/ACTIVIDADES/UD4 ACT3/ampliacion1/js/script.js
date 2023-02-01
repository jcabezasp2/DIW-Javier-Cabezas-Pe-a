const uri = 'https://randomuser.me/api/?results=10';
const tabla = document.querySelector('#tabla');
const modal = document.querySelector('#modal');

window.addEventListener("load", init);

let datos;

function init() {

    let cerrar = document.querySelectorAll('.cerrar');
    cerrar.forEach((element) => {
        element.addEventListener('click', (event) => {
            modal.style.display = 'none';
        });
    });

fetch(uri,{ method: 'get' })
 .then(function(respuesta) { 
        return respuesta.json() 
    })
  .then (function(jsonData) { 
        mostrarResultados(jsonData);
    })
    .catch(function(ex) { 
        console.error('Error', ex.message) }) 


}

function mostrarResultados(jsonData) {
    datos = jsonData.results;

    jsonData.results.forEach((element , i) => {
        let fila = document.createElement('tr');
        fila.setAttribute('data-id', i);
        let celdaNumero = document.createElement('th');
        celdaNumero.setAttribute('scope', 'row');
        celdaNumero.appendChild(document.createTextNode(i + 1));
        fila.appendChild(celdaNumero);

        let celdaNombre = document.createElement('td');
        celdaNombre.appendChild(document.createTextNode(element.name.first));
        fila.appendChild(celdaNombre);

        let celdaApellido = document.createElement('td');
        celdaApellido.appendChild(document.createTextNode(element.name.last));
        fila.appendChild(celdaApellido);

        let celdaImagen = document.createElement('td');
        let imagen = document.createElement('img');
        imagen.setAttribute('src', element.picture.medium);
        celdaImagen.appendChild(imagen);
        fila.appendChild(celdaImagen);

        let celdaEmail = document.createElement('td');
        celdaEmail.appendChild(document.createTextNode(element.email));
        fila.appendChild(celdaEmail);

        let celdaBotones = document.createElement('div');
        celdaBotones.setAttribute('class', 'gap-3');
        let celda = document.createElement('td');
        let verDetalles = document.createElement('button');
        let icono = document.createElement('i');
        icono.setAttribute('class', 'bi bi-eye me-2');
        verDetalles.appendChild(icono);
        verDetalles.appendChild(document.createTextNode('Ver detalles'));
        verDetalles.setAttribute('type', 'button');
        verDetalles.setAttribute('class', 'btn btn-primary');
        verDetalles.addEventListener('click', mostrarDetalles);

        let editar = document.createElement('btn');
        editar.setAttribute('type', 'button');
        let iconoEditar = document.createElement('i');
        iconoEditar.setAttribute('class', 'bi bi-pencil me-2');
        editar.appendChild(iconoEditar);
        editar.appendChild(document.createTextNode('Editar'));
        editar.setAttribute('class', 'btn btn-warning mx-2');
        editar.addEventListener('click', function(event) {
            event.preventDefault()

        });

        let eliminar = document.createElement('button');
        let iconoEliminar = document.createElement('i');
        iconoEliminar.setAttribute('class', 'bi bi-trash me-2');
        eliminar.appendChild(iconoEliminar);
        eliminar.appendChild(document.createTextNode('Eliminar'));
        eliminar.setAttribute('type', 'button');
        eliminar.setAttribute('class', 'btn btn-danger');
        eliminar.addEventListener('click', function(event) {
            event.preventDefault()
        });

        celdaBotones.appendChild(eliminar);
        celdaBotones.appendChild(editar);
        celdaBotones.appendChild(verDetalles);
        
        celda.appendChild(celdaBotones);
        fila.appendChild(celda);
        tabla.appendChild(fila);
    });
}

function mostrarDetalles(event){
    modal.style.display = 'block';
    let id = this.parentNode.parentNode.parentNode.getAttribute('data-id');
    modal.querySelector('#imagen').setAttribute('src', datos[id].picture.large);
    modal.querySelector('#edad').innerHTML = `${datos[id].dob.age}`;
    modal.querySelector('#nombre').innerHTML = `${datos[id].name.first + ' ' + datos[id].name.last}`;
    modal.querySelector('#genero').innerHTML = `${datos[id].gender}`;
    modal.querySelector('#direccion').innerHTML = `${datos[id].location.street.number} ${datos[id].location.street.name} ${datos[id].location.city} ${datos[id].location.state} ${datos[id].location.country} ${datos[id].location.postcode}`;
    modal.querySelector('#telefono').innerHTML = `${datos[id].phone}`;
    modal.querySelector('#email').innerHTML = `${datos[id].email}`;
    console.log(datos[id]);
}


