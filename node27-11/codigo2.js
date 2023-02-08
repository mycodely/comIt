/*
2)Como el ejercicio anterior, solo que ahora debe responder con un JSON { "respuesta": "mundo" }.
Usar la función JSON.stringify(objeto) para enviar la respuesta como texto.*/

var http = require("http")
var port = 3000

var server = http.createServer(function (req,res) {
    if (req.url === '/hola' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        var text = JSON.stringify({ respuesta: "hola que tal" })
        res.end(text)
    } else {
        res.statusCode = 404
        res.end("ruta no encontrada")
    }
})

server.listen(port, function () {
    console.log(`server listening on ${port}`)
})



