const CONTENEDOR = document.querySelector("#jugadores");
if(localStorage.getItem("jugadores") == null){

    CONTENEDOR.appendChild(document.createTextNode('No hay jugadores'));
    


    let jugador1 = {
        nombre: 'David',
        apellidos: 'Andrew Warner',
        edad: 36,
        posicion: 'bateador',
        equipo: 'New South Wales',
        imagen: 'https://th.bing.com/th/id/OIP.t4iPNZu1Ut1zXxakBaLRjQHaKw?pid=ImgDet&rs=1'
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
        //tarjeta
        let div = document.createElement("div");
        div.setAttribute("class", "card col");
        // imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", element.imagen);
        imagen.setAttribute("class", "card-img-top");
        div.appendChild(imagen);

        //nombre
        let cardBody = document.createElement("div");
        let nombre = document.createElement("h5");
        nombre.appendChild(document.createTextNode(`${element.nombre}`));
        nombre.setAttribute("class", "card-title text-center");
        cardBody.appendChild(nombre);
        div.appendChild(cardBody);

        //lista
        let ul = document.createElement("ul");
        
        //apellidos
        let segundaLinea = document.createElement("li");
        segundaLinea.appendChild(document.createTextNode(`Apellidos: ${element.apellidos}`));
        segundaLinea.setAttribute("class", "list-group-item");
        ul.appendChild(segundaLinea);

        //edad
        let terceraLinea = document.createElement("li");
        terceraLinea.appendChild(document.createTextNode(`Edad: ${element.edad}`));
        terceraLinea.setAttribute("class", "list-group-item");
        ul.appendChild(terceraLinea);

        //posicion
        let cuartaLinea = document.createElement("li");
        cuartaLinea.appendChild(document.createTextNode(`Posición: ${element.posicion}`));
        cuartaLinea.setAttribute("class", "list-group-item");
        ul.appendChild(cuartaLinea);

        //equipo
        let quintaLinea = document.createElement("li");
        quintaLinea.appendChild(document.createTextNode(`Equipo: ${element.equipo}`));
        quintaLinea.setAttribute("class", "list-group-item");
        ul.appendChild(quintaLinea);

        
        div.appendChild(ul);
        CONTENEDOR.appendChild(div);
    });

    
}