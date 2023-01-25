
/* Modificamos la función anterior para que reciba los ingredientes de la pizza. */
function hazPizza(ingredientes){
  
  const promesaPizza= new Promise((resolve, reject) => {
    if(ingredientes.includes("piña"))
      reject("La pizza no lleva piña!");
      else{
        setTimeout(() => {
          resolve('Pizza lista con ' + ingredientes);
        }, 2000);
      }
  });
  return promesaPizza;
}


/* Llamamos a la función que hace la pizza pasandole los ingredientes */
hazPizza(['tomate', 'queso', 'jamón'])
  .then((resultado) => {
    console.log(resultado);
    /* Llamamos a la función que hace la pizza pasandole los incgredientes 
      La llamada devolverá una nueva promesa */
    return hazPizza(['tomate', 'queso', 'jamón','piña']);
  })
  /* Encadenamos la segunda llamada a la función que hace la pizza */
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => { // Capturamos el error en una de las llamadas
    console.error(error);
  });



