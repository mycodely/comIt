var fetch = require('node-fetch');

var url= 'https://emoji-aleatorio.herokuapp.com/emoji'

async function obtenerRes(){var resultado = await fetch(url) // se puede ejecutar con ".then(function)"; await solo funciona en Fx
console.log(resultado); // devuelve una promesa
}



async function obtenerEmoji(){
    var resultado = await fetch(url,{                         //los headers van como segundo parámetro de una función
        method: 'GET' ,                         
        headers: {
            nombre: 'norman',
            Accept: 'application/json'                  //             'text/plain'
        },
        body : 'dasdas'   // en el body se usan post para transmitir información de forma segura             

    });
    var contenido = await resultado.json();
    console.log(contenido);
}

obtenerEmoji()

