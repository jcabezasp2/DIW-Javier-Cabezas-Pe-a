const coleccion = document.querySelector('#coleccion');



window.addEventListener('load', init);


async function init() {

    for(let i = 1; i <= 10; i++){
        preguntar(i);
    }

}


async function preguntar(index){

    const uri = `https://pokeapi.co/api/v2/pokemon/${index}` ;

    const resultado = await fetch(uri,{ method: 'get' }).catch(function(ex) { 
        console.error('Error', ex.message) })
    const jsonData = await resultado.json();
    mostrarResultados(jsonData, index);      

}


function mostrarResultados(jsonData, index) {
    console.log(jsonData);
    
    let template = document.querySelector('#card').content;

    let clon = template.cloneNode(true);

    clon.querySelector('.card-img-top').src = jsonData.sprites.front_default;
    clon.querySelector('.card-img-top').setAttribute('alt', `Imagen de ${jsonData.name}`);
    clon.querySelector('.card-title').textContent = `${jsonData.name}` ;
    clon.querySelector('.card-text').innerHTML = `#${index}`;
    let habilidades = clon.querySelector('.habilidades');
    jsonData.abilities.forEach(element => {
        habilidades.innerHTML += `<li>${element.ability.name}</li>`;
    });

    
    coleccion.appendChild(clon);
}