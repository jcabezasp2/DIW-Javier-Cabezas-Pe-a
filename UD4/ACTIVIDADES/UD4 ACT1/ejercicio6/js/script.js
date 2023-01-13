
let jugadores = [];
const CONTENEDOR = document.querySelector("#jugadores");
window.addEventListener('load', init);


function init() {

    document.querySelector('#btnGuardar').addEventListener('click', enviar);
    
    if(localStorage.getItem("jugadores") != null){
        jugadores = JSON.parse(localStorage.getItem("jugadores"));
        mostrarJugadores();
    }else{
        CONTENEDOR.appendChild(document.createTextNode('No hay jugadores'));
    }
}



function enviar(event) {
    event.preventDefault();

    if(validar()){
        
        let nombre = document.querySelector('#nombre').value;
        let apellido = document.querySelector('#apellidos').value;
        let edad = document.querySelector('#edad').value;
        let posicion = document.querySelector('#posicion').value;
        let equipo = document.querySelector('#equipo').value;
        let urlText = document.querySelector('#txtURL').value;

        let jugador = {
            'nombre': nombre,
            'apellido': apellido,
            'edad': edad,
            'posicion': posicion,
            'equipo': equipo,
            'imagen': urlText
        }

        console.log(jugadores.push(jugador));
        localStorage.setItem('jugadores', JSON.stringify(jugadores));
        mostrarJugadores();
    } 




}

function validar(){

    let form = document.querySelector('form');
    form.classList.replace('needs-validation', 'was-validated')

    let inputs = document.querySelectorAll('input');
    let validado = true;
    inputs.forEach((input) => {
        if(!input.checkValidity()){
            validado = false
        }
    })
    return validado;
}

function mostrarJugadores(){
    let jugadores = JSON.parse(localStorage.getItem("jugadores"));
    CONTENEDOR.innerHTML = '';
    jugadores.forEach(element => {
        //tarjeta
        let div = document.createElement("div");
        div.setAttribute("class", "card col p-2");


        //lista
        let ul = document.createElement("ul");

        //nombre
        let nombre = document.createElement("li");
        nombre.appendChild(document.createTextNode(`${element.nombre} ${element.apellidos}`));
        nombre.setAttribute("class", "list-group-item fs-5");
        ul.appendChild(nombre);
        
        //posicion
        let cuartaLinea = document.createElement("li");
        cuartaLinea.appendChild(document.createTextNode(`${element.posicion}`));
        cuartaLinea.setAttribute("class", "list-group-item");
        ul.appendChild(cuartaLinea);

        //equipo
        let quintaLinea = document.createElement("li");
        quintaLinea.appendChild(document.createTextNode(`Equipo: ${element.equipo}`));
        quintaLinea.setAttribute("class", "list-group-item");
        ul.appendChild(quintaLinea);

        div.appendChild(ul);

         // imagen
         let imagen = document.createElement("img");
         imagen.setAttribute("src", element.imagen);
         imagen.setAttribute("class", "card-img-top");
         div.appendChild(imagen);
        
        CONTENEDOR.appendChild(div);
    });

}



