
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
    let contenedor = document.querySelector("#contenedor");

    jugadores.forEach(element => {
        let div = document.createElement("div");
        let primeraLinea = document.createElement("p");
        primeraLinea.appendChild(document.createTextNode(`Nombre: ${element.nombre}`));
        div.appendChild(primeraLinea);

        let segundaLinea = document.createElement("p");
        segundaLinea.appendChild(document.createTextNode(`Apellidos: ${element.apellidos}`));
        div.appendChild(segundaLinea);

        let terceraLinea = document.createElement("p");
        terceraLinea.appendChild(document.createTextNode(`Edad: ${element.edad}`));
        div.appendChild(terceraLinea);

        let cuartaLinea = document.createElement("p");
        cuartaLinea.appendChild(document.createTextNode(`Posición: ${element.posicion}`));
        div.appendChild(cuartaLinea);

        let quintaLinea = document.createElement("p");
        quintaLinea.appendChild(document.createTextNode(`Equipo: ${element.equipo}`));
        div.appendChild(quintaLinea);

        let sextaLinea = document.createElement("p");
        sextaLinea.appendChild(document.createTextNode(`Imagen: ${element.imagen}`));
        div.appendChild(sextaLinea);
        div.style.border = "1px solid black";
        contenedor.appendChild(div);
    });

    
}