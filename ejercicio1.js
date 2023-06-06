let request = require("request");

request("https://www.google.com.pe",function(){
  console.log("URL cargada correctamente")
});

console.log("Esto deberia cargar despues");