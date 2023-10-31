const largo = require("./caracteres.js");

test('Cadena vacía devuelve cero ', () =>{
    expect(largo("")).toBe(0);
});

test('Cadena con un solo carácter devuelve 1 ', () =>{
    expect(largo("A")).toBe(1);
});

test('cadena con 14 caracteres, devuelve 14', () =>{
    expect(largo("Hola, como va?")).toBe(14);
});

test('Cadena con 5 espacios en blanco devuelve 5', () =>{
    expect(largo("     ")).toBe(5);
});

test('Cadena con varios caracteres "Hola, mundo": devuelve 11', () =>{
    expect(largo("Hola, mundo")).toBe(11);
});






