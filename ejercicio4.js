// setTimeout() esto nos permitira dilatar/extender los tiempos de carga
let p1 = new Promise((resolve,rejec) => {
  setTimeout(resolve, 1000, "Primer saludo")
});

let p2 = new Promise((resolve,rejec) => {
  setTimeout(resolve, 500, "Segundo saludo")
});

// Prueba 1 
// Ejecutando promesa en paralelo
// La que tiene menor tiempo en ms se ejecutara primero

/*
p1.then((dato1) =>{
  console.log(dato1);
});

p2.then((dato2) =>{
  console.log(dato2);
});
*/

// Prueba 2
// Ejecutar la 2da promesa despues de la primera

/*
p1.then((res1) => {

  console.log(res1);

  p2.then((res2) =>{
    console.log(res2);
    console.log("Proceso concluido");
  });

});
*/

// Prueba 3
// Ejecutar ambas promesas

Promise.all([p1,p2]).then((respuestas)=>{
  
  respuestas.forEach(respuesta => {
    console.log(respuesta);
  });

});