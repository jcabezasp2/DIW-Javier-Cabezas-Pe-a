
/* Modificamos la función anterior para que reciba los ingredientes de la pizza. */
function hazPizza(ingredientes){
  
  const promesaPizza= new Promise((resolve, reject) => {
    /* Si la pizza lleva piña,  rechazamos la promesa */
    if(ingredientes.includes("piña"))
      reject("La pizza no lleva piña!");
    else{
    /* Si no lleva piña, resolvemos la promesa */
    setTimeout(() => {
      resolve('Pizza lista con ' + ingredientes);
    }, 2000);
  }
  });
  return promesaPizza;
}

/* Llamamos a la función que hace la pizza pasandole los ingredientes */
hazPizza(['tomate', 'queso', 'jamón'])
  /* Código que se ejecuta cuando la promesa se resuelve */
  .then((resultado) => {
    console.log(resultado);
  })
  /* Código que se ejecuta cuando la promesa se rechaza */
  .catch((error) => { // Capturamos el error  
    console.log(error);
  });

/* Llamamos a la función que hace la pizza pasandole los ingredientes */
hazPizza(['tomate', 'queso', 'jamón','piña'])
  /* Código que se ejecuta cuando la promesa se resuelve */
  .then((resultado) => {
    console.log(resultado);
  })
    /* Código que se ejecuta cuando la promesa se rechaza */
  .catch((error) => { // Capturamos el error  
    console.log(error);
  });






