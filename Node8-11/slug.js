/*
4) Crear el programa "slug.js" que reciba un texto como parámetro y reemplace del texto todos los:
--- espacios por guiones medios ("el profesor de node" -> "el-profesor-de-node").
--- mayúsculas por minúsculas ("NoRmaN" -> "norman"`).
--- vocales con acéntos por vocales sin acéntos ("canción" -> "cancion").
*/

var str = process.argv[2];
var str2 = process.argv[3];
var str3 = process.argv[4];

var replaced = str.replace(/ /g, '-');
console.log(replaced);

var caps = { 'N': 'n', 'R': 'r' }
var replaced2 = str2.toLowerCase(/[NR]/g, fX => caps[fX]);
console.log(replaced2);

var vocals = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
var replaced3 = str3.replace(/[áéíóú]/g, fX => vocals[fX]);
console.log(replaced3);


//var texto = "el gato negro es un gato negro"
//texto = texto.replace(/gato/g, "perro")

//console.log(texto) //> "el perro negro es un perro negro"

//var nombre = "Norman"
//nombre = nombre.toLowerCase()

//console.log(nombre) //> "norman"