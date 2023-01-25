
/* Modificamos la función anterior para que reciba los ingredientes de la pizza */
function hazPizza(ingredientes){
  const pizza = 'Pizza lista con ' + ingredientes;
  const promesaPizza= new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pizza);
    }, 2000);
  });
  return promesaPizza;
}

/* Llamamos a la función que hace la pizza pasandole los ingredientes */
hazPizza(['tomate', 'queso', 'jamón'])
  .then((resultado) => {
    console.log(resultado);
  });

  /* Llamamos a la función que hace la pizza pasandole los incgredientes */
hazPizza(['tomate', 'queso', 'jamón', 'pepperoni'])
  .then((resultado) => {
    console.log(resultado);
  });




