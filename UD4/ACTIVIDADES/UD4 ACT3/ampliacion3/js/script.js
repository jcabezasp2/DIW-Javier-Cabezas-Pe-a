const coleccion = document.querySelector('#coleccion');



window.addEventListener('load', init);


async function init() {


    let index = 1;
    let limite = 10;
    while(index <= limite){
        preguntar(index);
        index++;
    }

    document.querySelector('#menos').addEventListener('click', () => {
        if(limite > 10){
            limite -= 10;
            coleccion.innerHTML = '';
            index -= 20;
            while(index <= limite){
                preguntar(index);
                index++;
            }
        }
    });

    document.querySelector('#mas').addEventListener('click', () => {
        limite += 10;
        console.log(index);
        coleccion.innerHTML = '';
        while(index <= limite){
            preguntar(index);
            index++;
        }
    });

}


async function preguntar(index){

    const uri = `https://pokeapi.co/api/v2/pokemon/${index}` ;

    const resultado = await fetch(uri,{ method: 'get' }).catch(function(ex) { 
        console.error('Error', ex.message) })
    const jsonData = await resultado.json();
    mostrarResultados(jsonData, index);      

}


function mostrarResultados(jsonData, index) {
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