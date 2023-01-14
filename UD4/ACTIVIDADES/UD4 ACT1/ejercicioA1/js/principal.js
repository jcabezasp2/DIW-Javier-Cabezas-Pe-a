import { POSICIONES } from "./posiciones.js";
import JugadorCriquet from "./jugadorCriquet.js";

let jugador = new JugadorCriquet('David','Andrew Warner', 36, POSICIONES.bateador, 'New South Wales','https://upload.wikimedia.org/wikipedia/commons/2/2c/DAVID_WARNER_%2811704782453%29.jpg');

let jugadorJson = JSON.stringify(jugador);

let json = JSON.parse(jugadorJson);

let jugador2 = new JugadorCriquet(json._nombre, json._apellidos, json._edad, json._posicion,  json._equipo, json._imagen);

console.table(jugador2);

jugador2.lanzar(); //=

jugador2.batear() //=
