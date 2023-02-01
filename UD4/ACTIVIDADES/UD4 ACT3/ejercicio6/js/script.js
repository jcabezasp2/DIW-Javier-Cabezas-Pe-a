const uri = 'https://swapi.dev/api/people/?format=json';
const coleccion = document.querySelector('#coleccion');
window.addEventListener('load', init);

function init() {
llamada();

}


function llamada(){
axios.get(uri)
.then(function(respuesta) { 
        console.log(respuesta.data);
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

function mostrar(personajes){

    personajes.results.forEach(personaje => {
        console.log(personaje);

        let template = document.querySelector('#card').content;

        let clon = template.cloneNode(true);
    
        //Nombre
        clon.querySelector('.nombre').textContent = `${personaje.name}` ;
        //Cumpleanos
        clon.querySelector('.cumpleanos').textContent = `${personaje.birthday}` ;
        //genero

        //Planeta natal

        //Peliculas





        coleccion.appendChild(clon);



    });


}

