// Funciones tradicionales
function saludar(nombre){
  return `Bienvenido ${nombre}`;
}

function mostrarAmigos(){
  return['Juan','Luis','Pedro'];
}

let resultado1 = saludar('Jhon');
let resultado2 = mostrarAmigos();

// console.log(resultado1);
// console.log(resultado2);

// Objeto
// Funcion flecha / parametro
const perfil = {
  'apellidos'   : 'Pachas Saravia',
  'nombres'     : 'Jesús Raúl',
  'edad'        : 22,
  'estaCasado'  : false,
  'amigos'      : ['Erick','Ximena','Karla','Joseandres'],
  'contacto'    :{
    'telefonos' : ['963334587'],
    'ciudad'    : 'Chincha',
    'casaPropia': true
  },
  'skill'       :function(){
    return "¡Yo se programar!"
  }
}

console.log(perfil.skill())