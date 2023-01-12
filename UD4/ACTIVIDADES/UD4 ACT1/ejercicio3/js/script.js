
if(localStorage.getItem("jugador") == null){

    console.log('No existe el jugador')
    let jugador1 = {
        nombre: 'David',
        apellidos: 'Andrew Warner',
        edad: 36,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/DAVID_WARNER_%2811704782453%29.jpg'
    };

    localStorage.setItem("jugador", JSON.stringify(jugador1));
}else{
    console.table(JSON.parse(localStorage.getItem("jugador")));
}