

/* Función que hace una pizza.
   La función devuelve una promesa que se resuelve cuando la pizza está lista. */
function hazPizza(){
  const pizza = 'Pizza lista';
  const promesaPizza= new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pizza);
    }, 7000);
  });
  return promesaPizza;
}

/* Llamamos a la función que hace la pizza
    y cuando la pizza está lista, la mostramos por consola */
hazPizza()
  .then((resultado) => {
    console.log(resultado);
  });




