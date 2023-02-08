//clase 11-10//

var n1;
var n2;


function sumar(){
    n1+n2
}

var SUMAR= sumar;

function operar(fun, n1, n2){
    return fun(n1, n2);
}

operar (sumar, 2, 5) // se puede hacer llamados de parámetros múltiples
//pero debe guardarse en una variable la función que luego se quiere invocar
// por ejemplo si se quiere llamar a una función dentro de un atributo
// el nombre del atributo es el identificador de la función

//EJERCICIOS//
//1. Definir una función llamada "siguiente", la cual retorne el
//siguiente (+1) de un número que obtenga por parámetros. Ejecutarla,
//o llamarla, con el valor: 1, 4, -2 y 0.

var SIGUIENTE = function siguiente (valor1){
    return valor1 + 1;
}
console.log(siguiente (1));
console.log(siguiente (4));
console.log(siguiente (-2));
console.log(siguiente (0));


//2. Definir una función llamada "doble", la cual retorne
//el doble (*2) de un número que obtenga por parámetros.
//Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

var DOBLE = function doble(valor2){
    return valor2*2
}

console.log(doble (1));
console.log(doble (4));
console.log(doble (-2));
console.log(doble (0));


//3. Definir una función que retorne el doble del siguiente
//de un número que obtenga por parámetros. Usar
//las 2 funciones anteriores.  Ejecutarla, o llamarla, con
//el valor: 1, 4, -2 y 0.

function combinadoSyD (valor3){
    r1 = SIGUIENTE(valor3);
    r2 = DOBLE (r1);
    return r2;
}
console.log(combinadoSyD(1));
console.log(combinadoSyD(4));
console.log(combinadoSyD(-2));
console.log(combinadoSyD(0));


//4. Definir una función llamada "suma", la cual me
//retorne la suma de 2 números que obtenga por parámetros. 
//Ejecutarla con los valores: 0 y 0; 2 y 4; -1 y -1;

function suma (v1,v2){
    return v1+v2;
}
console.log(suma(0,0));
console.log(suma(2,4));
console.log(suma(-1,-1));


//5. Usar las funciones anteriores para obtener:
 // 1. El siguiente de 4: 1+4
 // 2. El doble de 10: 2*10
 // 3. El siguiente del doble de 30: 1+(2*30)
 // 4. La suma de 4 y 5: 4+5
 // 5. El doble del siguiente del doble de 5: 2*(1+5)
 // 6. La suma del siguiente de 3 y 5: (1+3)+5
 // 7. La suma de 4 y del siguiente del doble de 10: 4+(1+(2*10))
 // 8. El siguiente de la suma del siguiente de 5 y
 //de la suma de 3 y 4: 1+((1+5)+(3+4)) 

 console.log(SIGUIENTE(4));
 console.log(DOBLE(10));
 console.log(SIGUIENTE(DOBLE(30)));
 console.log(suma(4,5));
 console.log(DOBLE(SIGUIENTE(5)));
 console.log(suma (SIGUIENTE(3),5));
 console.log(suma (4,(SIGUIENTE(DOBLE(10)))));
 console.log(SIGUIENTE(suma(SIGUIENTE(5),(suma(3,4)))));




 //Estrategias para codear//

 // siguiente (5) me debe dar 6 debo pensar como tiene que llamarse y lo
 // que debe retornar


 // EJERCICIOS PARTE 2//

 
 //1) Guardar en una variable llamada "sig", que tenga como 
 //valor la función siguiente. Usarla después.
 //2) Crear una variable llamada "log", que tenga como valor
 //la función console.log. Usarla después.
 //3) Crear un objeto "consola", que tenga un atributo con
 //valor console.log. Usarla después.
 //4) Crear una función llamada "ejecutar" que reciba por
 //parámetro una función y la ejecute.
 //5) Crear una función llamada "operar", que reciba 1 función
 //por parámetro, y un número. La misma debe retornar el resultado de ejecutar la función recibida, pasándole el número recibido.
 //6) Crear una función "vago", que me retorne una función que
 //cuando se llame imprima un mensaje por consola.

//1)
 var sig = function siguiente (valor1){
    return valor1 + 1;
}
console.log(sig(1));

//2)
var log = function (muestra){
    console.log(muestra);
}
log("hola");

//3) intento 1,2,3 no funciona
//var miConsola = new Object();{
//atributo1= function retorno (resultado){
 //   return resultado = console.log()};}

 //probando directamente

 var miConsola = new Object();
 miConsola.propiedad= function (ingresado){ return console.log(ingresado)};

miConsola.propiedad("hola");
// 4)
function prueba(){
    return console.log("prueba exitosa");
}

function ejecutar (recibeFx){
return (recibeFx());
}

// 5
 function operar1(recibeFx,number1){
    number1= recibeFx;
    return (number1)
}

// 6

 function vago(llamado){
     llamado = function () { console.log("hola")}
     return llamado();
    }


 


