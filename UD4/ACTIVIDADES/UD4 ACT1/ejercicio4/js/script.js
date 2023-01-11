
if(localStorage.getItem("jugadores") == null){
    let jugador1 = {
        nombre: 'David',
        apellidos: 'Andrew Warner',
        edad: 36,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://en.wikipedia.org/wiki/File:DAVID_WARNER_(11704782453).jpg'
    };
    
    let jugador2 = {
        nombre: 'Glenn',
        apellidos: 'Donald McGrath',
        edad: 52,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://en.wikipedia.org/wiki/File:Glenn_McGrath_in_Circular_Quay,_Sydney,_Australia,_2018-02-03.jpg'
    };
    
    let jugador3 = {
        nombre: 'Wasim',
        apellidos: 'Akram',
        edad: 56,
        posicion: 'keeper',
        equipo: 'New South Wales',
        imagen: 'https://en.wikipedia.org/wiki/File:Wasim-akram-gesf-2018-7878.jpg'
    };
    
    let array = [jugador1, jugador2, jugador3];
    

    localStorage.setItem("jugadores", JSON.stringify(array));
}else{

    let jugadores = JSON.parse(localStorage.getItem("jugadores"));

    jugadores.forEach(element => {
        console.table(element);
    });

    
}