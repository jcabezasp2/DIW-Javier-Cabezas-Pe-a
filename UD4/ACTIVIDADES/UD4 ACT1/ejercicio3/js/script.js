
if(localStorage.getItem("jugador") == null){
    let jugador1 = {
        nombre: 'David',
        apellidos: 'Andrew Warner',
        edad: 36,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://en.wikipedia.org/wiki/File:DAVID_WARNER_(11704782453).jpg'
    };

    localStorage.setItem("jugador", JSON.stringify(jugador1));
}else{
    console.table(JSON.parse(localStorage.getItem("jugador")));
}