function slug(texto) {

    var elements = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'N': 'n', 'R': 'r', ' ': '-' };
    var textoR = texto.replace(/[ NRáéíóú]/g, fX => elements[fX]);
    return textoR;
}

module.exports = slug;