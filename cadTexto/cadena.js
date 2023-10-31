const cadena =  (cad1,cad2) =>{
    if(cad1 === cad2){
        return true;
    }else{
        return false;
    }
}

module.exports = cadena;

//Si cad1 y cad2 son idénticas: retorna true
//Si cad1 y cad2 son diferentes: retorna false
//Si cad1 y cad2 son cadenas vacías: retorna true
//Si cad1 es una cadena vacía y cad2 no: retorna false
//Si cad1 es null y cad2 es una cadena: retorna false