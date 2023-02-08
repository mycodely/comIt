/* 3)Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder ante el endpoint /emoji con un emoji aleatorio
en un JSON de esta forma { "emoji": "💣" }. Para este ejercicio van a recibir una pequeña ayuda, la función para obtener un emoji aleatorio es la siguiente: */

var http = require("http");
var host = "127.0.0.1";
var port = 3000;
var fx = require('./emoji.js');
var URL = require('url')

// si hago el export-require de la función solo me trae el mismo emoji, porque se guarda desde el momento que se ejecuta, en cambio si lo uso como funcion en el main será diferente cada vez.
console.log(fx())
console.log(fx())
console.log(fx())



var server = http.createServer(function(req, res) {
    if (req.method !== "GET") {
        res.statusCode = 401
        res.end("Error: se esperaba una conexión GET\n")
    }

    var objetoUrl = URL.parse(req.url)
    if (objetoUrl.pathname === "/emoji") {
        var respuesta = JSON.stringify(`{ emoji: ${fx()}}`)
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(respuesta)
    } else {
        res.statusCode = 404
        res.end("Error: endpoint no encontrado\n")
    }
})

server.listen(port, host, function() {
    console.log(`Servidor escuchando en http://${host}:${port}/`)
})