let jugador1 = {
    nombre: 'David',
    apellidos: 'Andrew Warner',
    edad: 36,
    posicion: 'bateador',
    equipo: 'New South Wales',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/DAVID_WARNER_%2811704782453%29.jpg'
};


let jugador1JSON = JSON.stringify(jugador1);

let jugador2 = JSON.parse(jugador1JSON);

console.table(jugador2);
