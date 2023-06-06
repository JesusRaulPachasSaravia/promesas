let request = require("request-promise");

// Las promesas retornan objetos
let promesa = request("https://www.google.com");

// Se administran utilizando..
// Fullfiled = completada con exito
promesa.then(function(){
  console.log("URL Cargada");
});

// Reject = rechazado
promesa.catch(function(error){
  console.log("Falló la consulta");
  console.log(error);
});


// Se ejecuta luego de then/catch
// Settled = finalizado
promesa.finally(function(){
  console.log("Promesa finalizada");
});