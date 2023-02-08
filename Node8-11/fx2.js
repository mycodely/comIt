var edad = process.argv[2];

function resultado(edad) {
    if (edad < 18) console.log("Sos menor de edad");
    else(console.log("Sos mayor de edad"));
}

var procesado = resultado(edad);

module.exports = procesado;