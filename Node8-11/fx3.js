var fs = require('fs');
var recibido = process.argv[2];

var crea = fs.mkdirSync(`./${recibido}`);

module.exports = crea;