
const coleccion = document.querySelector('#coleccion');
window.addEventListener('load', init);

function init() {
document.querySelectorAll('.boton').forEach(item => {
    item.addEventListener('click', (event) => {
        let eleccion = event.target.getAttribute('data-id');
        coleccion.innerHTML = "";
        llamada(eleccion);
    })
});

}

function llamada(eleccion){

    const uri = `https://swapi.dev/api/${eleccion}/?format=json`;
    axios.get(uri)
    .then(function(respuesta) { 
           let cantidad = respuesta.data.count;
           for(let i = 1; i <= cantidad; i++){
            llamadaEnBucle(`${eleccion}/${i}`, eleccion);
           }
       })
     
    .catch(function(response) { 
       if (!response.status) {
           console.error('Error: el servidor no responde '+response);
       }
       else {
               console.error('Error '+response.status+': '+response.message);
           }
    }); 
    }


function llamadaEnBucle(eleccion){
    let tipo = eleccion.split('/')[0];
const uri = `https://swapi.dev/api/${eleccion}/?format=json`;
axios.get(uri)
.then(function(respuesta) { 
       switch(tipo){
              case 'people':
                        mostrarPersonaje(respuesta.data);
                        break;
                case 'planets':
                        mostrarPlaneta(respuesta.data);
                        break;
                case 'films':
                        mostrarPelicula(respuesta.data);
                        break;                
       }
   })
 
.catch(function(response) { 
   if (!response.status) {
       console.error('Error: el servidor no responde '+response);
   }
   else {
           console.error('Error '+response.status+': '+response.message);
       }
}); 
}


function mostrarPersonaje(personaje){

   
        let template = document.querySelector('#card').content;

        let clon = template.cloneNode(true);
    
        //Nombre
        clon.querySelector('.nombre').textContent = `${personaje.name}` ;
        //Cumpleanos
        clon.querySelector('.dato1').textContent = `Fecha de nacimiento: ${personaje.birth_year}` ;
        //genero
        clon.querySelector('.dato2').textContent = `Genero: ${personaje.gender}` ;
        //Planeta natal
        clon.querySelector('.dato3').textContent = `Planeta natal: ${nombrePlaneta(personaje.homeworld.split('/')[5])}` ;
        clon.querySelector('.dato3').addEventListener ('click', () => {
            llamadaElemento(personaje.homeworld)
        });
        //Peliculas
        let peliculas = clon.querySelector('.peliculas');
        personaje.films.forEach(pelicula => {
            let li = document.createElement('li');
            li.textContent = nombrePelicula(pelicula.split('/')[5]);
            li.setAttribute('class', 'list-group-item btn btn-link');
            li.addEventListener('click', () => {
                llamadaElemento(pelicula);
            });
            peliculas.appendChild(li);
        });

        coleccion.appendChild(clon);
}

function mostrarPlaneta(personaje){

    let template = document.querySelector('#card').content;

    let clon = template.cloneNode(true);

    //Nombre
    clon.querySelector('.nombre').textContent = `${personaje.name}` ;
    //Cumpleanos
    clon.querySelector('.dato1').textContent = `Clima: ${personaje.climate}` ;
    //genero
    clon.querySelector('.dato2').textContent = `Gravedad: ${personaje.gravity}` ;
    //Peliculas
    let peliculas = clon.querySelector('.peliculas');
    personaje.films.forEach(pelicula => {
        let li = document.createElement('li');
        li.textContent = nombrePelicula(pelicula.split('/')[5]);
        li.setAttribute('class', 'list-group-item btn btn-link');
        li.addEventListener('click', () => {
            llamadaElemento(pelicula);
        });
        peliculas.appendChild(li);
    });

    coleccion.appendChild(clon);
}

function mostrarPelicula(personaje){

    console.log(personaje)
     let template = document.querySelector('#card').content;
 
     let clon = template.cloneNode(true);
 
     //Nombre
     clon.querySelector('.nombre').textContent = `${personaje.title}` ;
     //Cumpleanos
     clon.querySelector('.dato1').textContent = `Director: ${personaje.director}` ;
     //genero
     clon.querySelector('.dato2').textContent = `Numero: ${personaje.episode_id}` ;

 
     coleccion.appendChild(clon);
 }



function llamadaElemento(eleccion){

    const uri = `${eleccion}?format=json`;
    console.log(uri)
    axios.get(uri)
    .then(function(respuesta) { 
           mostrar(respuesta.data) 
       })
     
    .catch(function(response) { 
       if (!response.status) {
           console.error('Error: el servidor no responde '+response);
       }
       else {
               console.error('Error '+response.status+': '+response.message);
           }
    }); 
    }
    
    function mostrar(respuesta){
        coleccion.innerHTML = '';
        tipo = respuesta.url.split('/')[4];
        switch(tipo){
            case 'people':
                      mostrarPersonaje(respuesta.data);
                      break;
              case 'planets':
                      mostrarPlaneta(respuesta.data);
                      break;
              case 'films':
                      mostrarPelicula(respuesta.data);
                      break;                
     }
    }

    function nombrePlaneta(numero){
        let nombre;
        
        switch(+numero){
            case 1: nombre = 'Tatooine';
            break;
            case 2: nombre = 'Alderaan';
            break;
            case 3: nombre = 'Yavin IV';
            break;
            case 4: nombre = 'Hoth';
            break;
            case 5: nombre = 'Dagobah';
            break;
            case 6: nombre = 'Bespin';
            break;
            case 7: nombre = 'Endor';
            break;
            case 8: nombre = 'Naboo';
            break;
            case 9: nombre = 'Coruscant';
            break;
            case 10: nombre = 'Kamino';
            break;
            case 11: nombre = 'Geonosis';
            break;
            case 12: nombre = 'Utapau';
            break;
            case 13: nombre = 'Mustafar';
            break;
            case 14: nombre = 'Kashyyyk';
            break;
            case 15: nombre = 'Polis Massa';
            break;
            case 16: nombre = 'Mygeeto';
            break;
            case 17: nombre = 'Felucia';
            break;
            case 18: nombre = 'Cato Neimoidia';
            break;
            case 19: nombre = 'Saleucami';
            break;
            case 20: nombre = 'Stewjon';
            break;
            case 21: nombre = 'Eriadu';
            break;
            case 22: nombre = 'Corellia';
            break;
            case 23: nombre = 'Rodia';
            break;
            case 24: nombre = 'Nal Hutta';
            break;
            case 25: nombre = 'Dantooine';
            break;
            case 26: nombre = 'Bestine IV';
            break;
            case 27: nombre = 'Ord Mantell';
            break;
            case 28: nombre = 'unknown';
            break;
            case 29: nombre = 'Trandosha';
            break;
            case 30: nombre = 'Socorro';
            break;
            case 31: nombre = 'Mon Cala';
            break;
            case 32: nombre = 'Chandrila';
            break;
            case 33: nombre = 'Sullust';
            break;
            case 34: nombre = 'Toydaria';
            break;
            case 35: nombre = 'Malastare';
            break;
            case 36: nombre = 'Dathomir';
            break;
            case 37: nombre = 'Ryloth';
            break;
            case 38: nombre = 'Aleen Minor';
            break;
            case 39: nombre = 'Vulpter';
            break;
            case 40: nombre = 'Troiken';
            break;
            case 41: nombre = 'Tund';
            break;
            case 42: nombre = 'Haruun Kal';
            break;
            case 43: nombre = 'Cerea';
            break;
            case 44: nombre = 'Glee Anselm';
            break;
            case 45: nombre = 'Iridonia';
            break;
            case 46: nombre = 'Tholoth';
            break;
            case 47: nombre = 'Iktotch';
            break;
            case 48: nombre = 'Quermia';
            break;
            case 49: nombre = 'Dorin';
            break;
            case 50: nombre = 'Champala';
            break;
            case 51: nombre = 'Mirial';
            break;
            case 52: nombre = 'Serenno';
            break;
            case 53: nombre = 'Concord Dawn';
            break;
            case 54: nombre = 'Zolan';
            break;
            case 55: nombre = 'Ojom';
            break;
            case 56: nombre = 'Skako';
            break;
            case 57: nombre = 'Muunilinst';
            break;
            case 58: nombre = 'Shili';
            break;
            case 59: nombre = 'Kalee';
            break;
            case 60: nombre = 'Umbara';
            break;
        }
        return nombre;
    }

    function nombrePelicula(numero){
        let nombre;

        switch(+numero){
            case 1: nombre = 'La amenaza fantasma';
            break;  
            case 2: nombre = 'El ataque de los clones';
            break;
            case 3: nombre = 'La venganza de los Sith';
            break;
            case 4: nombre = 'Una nueva esperanza';
            break;
            case 5: nombre = 'El imperio contraataca';
            break;
            case 6: nombre = 'El retorno del Jedi';
            break;
            case 7: nombre = 'El despertar de la fuerza';
            break;
            case 8: nombre = 'Los últimos Jedi';
            break;
            case 9: nombre = 'El ascenso de Skywalker';
            break;
        }
        return nombre;
    }
