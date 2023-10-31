function largo(cadena){
    let larg = cadena.length;
    return larg;
}

module.exports = largo;

//Cadena vacía: retorna cero 
//Cadena con un solo carácter: retorna 1
//cadena diez caracteres retorna 10
//Cadena con 5 espacios en blanco: retorna 5
//Cadena con varios caracteres "Hola, mundo": retorna 11