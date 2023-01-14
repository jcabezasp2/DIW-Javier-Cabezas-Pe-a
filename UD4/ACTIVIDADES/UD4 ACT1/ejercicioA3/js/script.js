import JugadorCriquet from "./jugadorCriquet.js";
let jugadores = [];
const CONTENEDOR = document.querySelector("#jugadores");
const EXITO = document.querySelector("#alertaExito");
window.addEventListener('load', init);


function init() {

    document.querySelector('#btnGuardar').addEventListener('click', enviar);
    
    if(localStorage.getItem("jugadores") != null){
        
        cargarJugadores();
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

        let jugador = new JugadorCriquet(nombre, apellido, edad, posicion,  equipo, urlText)

        console.log(jugadores.push(jugador));
        localStorage.setItem('jugadores', JSON.stringify(jugadores));
        mensajeExito();
        mostrarJugadores();
    } 




}

function validar(){

    let form = document.querySelector('form');
    form.classList.replace('needs-validation', 'was-validated')

    let inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="url"]');


    let validado = true;
    inputs.forEach((input) => {
        if(!input.checkValidity()){
            validado = false
        }
    })
    
    if(document.querySelector('#posicion').value == '' || document.querySelector('#equipo').value == ''){
    validado = false
    }
    return validado;
}

function mostrarJugadores(){
    CONTENEDOR.innerHTML = '';
    jugadores.forEach(element => {

        
        CONTENEDOR.appendChild(element.toHTML());
    });

}

function cargarJugadores(){

    let jugadoresJson = JSON.parse(localStorage.getItem("jugadores"));

        jugadoresJson.forEach(json => {
            let jugador = new JugadorCriquet(json._nombre, json._apellidos, json._edad, json._posicion,  json._equipo, json._imagen)
            jugadores.push(jugador);
         });
}


function mensajeExito(){
    EXITO.classList.remove('fade');
        let botonCerrar = document.querySelector('#btn-close');
        botonCerrar.addEventListener('click', () => {
            EXITO.classList.add('fade');
        });
        setTimeout(() => {
            EXITO.classList.add('fade');
        }, 3000);
}
