
if(localStorage.getItem("jugadores") == null){

    console.log('No hay jugadores guardados')

    let jugador1 = {
        nombre: 'David',
        apellidos: 'Andrew Warner',
        edad: 36,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/DAVID_WARNER_%2811704782453%29.jpg'
    };
    
    let jugador2 = {
        nombre: 'Glenn',
        apellidos: 'Donald McGrath',
        edad: 52,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Glenn_McGrath_in_Circular_Quay%2C_Sydney%2C_Australia%2C_2018-02-03.jpg'
    };
    
    let jugador3 = {
        nombre: 'Wasim',
        apellidos: 'Akram',
        edad: 56,
        posicion: 'keeper',
        equipo: 'Lancashire',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Wasim-akram-gesf-2018-7878.jpg'
    };
    
    let array = [jugador1, jugador2, jugador3];
    

    localStorage.setItem("jugadores", JSON.stringify(array));
}else{

    let jugadores = JSON.parse(localStorage.getItem("jugadores"));

    jugadores.forEach(element => {
        console.table(element);
    });

    
}