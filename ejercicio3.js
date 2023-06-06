// Funcion basada en promesas

let request = require("request");
// Esta funcion retorna una promesa
// La clase Promise requiere de un executor(resolve,reject)
// callback => funcion que retorna un valor

function loadPage(url){

  return new Promise(function(resolve,reject){
    request(url, function(error, response){
      if(error) return reject(error);
      resolve(response)
    });
  });

}

let promesa = loadPage("https://google.com");

// Nos devuelve Promise { <pending> }
// console.log(promesa);

promesa.then(function(){
  console.log("URL Cargada");
}).catch(function(){
  console.log("Problemas al cargar el url");
})


promesa.finally(function(){
  console.log("Promesa finalizada");
})
