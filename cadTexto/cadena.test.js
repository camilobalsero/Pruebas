const cadena = require('./cadena.js');

test('Si las dsos cadenas son iguales retorna verdadero ', () => {
    expect(cadena("hola","hola")).toBe(true);
})

test('Si las dos cadenas son diferentes retorna false ', () => {
    expect(cadena("hola","mundo")).toBe(false);
})

test('Si las dos cadenas son cadenas vacias retorna true ', () => {
    expect(cadena("","")).toBe(true);
})

test('Si cad1 es una cadena vacía y cad2 no retorna false ', () => {
    expect(cadena("","hola")).toBe(false);
})

test('Si cad1 es null y cad2 es una cadena: retorna false ', () => {
    expect(cadena(null,"hola")).toBe(false);
})





