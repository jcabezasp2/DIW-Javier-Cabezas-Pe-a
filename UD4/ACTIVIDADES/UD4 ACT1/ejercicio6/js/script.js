
let jugadores = [];
const CONTENEDOR = document.querySelector("#jugadores");
const EXITO = document.querySelector("#alertaExito");

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
        let apellidos = document.querySelector('#apellidos').value;
        let edad = document.querySelector('#edad').value;
        let posicion = document.querySelector('#posicion').value;
        let equipo = document.querySelector('#equipo').value;
        let urlText = document.querySelector('#txtURL').value;

        let jugador = {
            'nombre': nombre,
            'apellidos': apellidos,
            'edad': edad,
            'posicion': posicion,
            'equipo': equipo,
            'imagen': urlText
        }

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
        console.log(element);
        let divPrincipipal = document.createElement('div');
        divPrincipipal.classList.add('col')
        //tarjeta
        let div = document.createElement("div");
        div.setAttribute("class", "card");


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

        divPrincipipal.appendChild(div);
        CONTENEDOR.appendChild(divPrincipipal);
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



