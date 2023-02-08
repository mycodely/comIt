/* 1)Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder ante el endpoint /hola con el texto "mundo".


4) Como el ejercicio anterior, pero ahora el endpoint recibe un parámetro opcional indice, si este parámetro
está definido, se le pasa el índice a la función emoji, de esa forma devuelve el emoji del índice indicado, sino, sigue funcionando como antes. */

var http = require("http")
var port = 3000

var server = http.createServer(function (req,res) {
    if (req.url === '/hola') {
        res.end("mundo")
    } else {
        res.end("ruta no encontrada")
    }
})

server.listen(port, function () {
    console.log(`server listening on ${port}`)
})

