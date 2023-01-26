window.addEventListener("load", iniciar);



function iniciar(){

    preguntar();

}


async function preguntar(){


    const uri = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1} ` ;

    const resultado = await fetch(uri,{ method: 'get' }).catch(function(ex) { 
        console.error('Error', ex.message) })
    const jsonData = await resultado.json();
    mostrarResultados(jsonData);      



}

function mostrarResultados(jsonData) {
    console.log(jsonData.stats);

    let template = document.querySelector('#card').content;

    let clon = template.cloneNode(true);

    clon.querySelector('.card-body-img').src = jsonData.sprites.front_default;
    clon.querySelector('.card-body-img').setAttribute('alt', `Imagen de ${jsonData.name}`);
    clon.querySelector('.card-body-title').innerHTML = `${jsonData.name} <span>${jsonData.stats[0].base_stat}hp</span>` ;

    clon.querySelector('.card-body-text').innerHTML = `${jsonData.base_experience} exp`;

    clon.querySelector('.ataque h3').innerHTML = `${jsonData.stats[1].base_stat}K`;
    clon.querySelector('.ataque-especial h3').innerHTML = `${jsonData.stats[2].base_stat}K`;
    clon.querySelector('.defensa h3').innerHTML = `${jsonData.stats[3].base_stat}K`;
    document.querySelector('#contenedor').appendChild(clon);
}