let jugador1 = {
    nombre: 'David',
    apellidos: 'Andrew Warner',
    edad: 36,
    posicion: 'bateador',
    equipo: 'New South Wales',
    imagen: 'https://en.wikipedia.org/wiki/File:DAVID_WARNER_(11704782453).jpg'
};


let jugador1JSON = JSON.stringify(jugador1);

let jugador2 = JSON.parse(jugador1JSON);

console.table(jugador2);
