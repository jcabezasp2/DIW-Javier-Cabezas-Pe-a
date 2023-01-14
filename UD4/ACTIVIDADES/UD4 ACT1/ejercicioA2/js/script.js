import { POSICIONES } from "./posiciones.js";
import JugadorCriquet from "./jugadorCriquet.js";

const CONTENEDOR = document.querySelector('#jugadores');

if(localStorage.getItem("jugadores") == null){

    CONTENEDOR.appendChild(document.createTextNode('No hay jugadores guardados'));


    let jugador1 = new JugadorCriquet('David','Andrew Warner', 36, POSICIONES.bateador, 'New South Wales','https://upload.wikimedia.org/wikipedia/commons/2/2c/DAVID_WARNER_%2811704782453%29.jpg');
    
    let jugador2 = new JugadorCriquet('Glenn', 'Donald McGrath', 52, POSICIONES.bateador, 'New South Wales', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Glenn_McGrath_in_Circular_Quay%2C_Sydney%2C_Australia%2C_2018-02-03.jpg');
    
    let jugador3 = new JugadorCriquet('Wasim', 'Akram', 56, POSICIONES.wicketKeeper, 'Lancashire', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Wasim-akram-gesf-2018-7878.jpg');
    
    let array = [jugador1, jugador2, jugador3];
    
    localStorage.setItem("jugadores", JSON.stringify(array));
}else{

    let jugadores = JSON.parse(localStorage.getItem("jugadores"));

    

    jugadores.forEach(json => {
       let jugador = new JugadorCriquet(json._nombre, json._apellidos, json._edad, json._posicion,  json._equipo, json._imagen)
       CONTENEDOR.innerHTML += jugador.toHTML();
    });

    
}