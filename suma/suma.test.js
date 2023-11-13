const sum = require('./suma.js');

test('suma de 1 , 1: devuelve 2', () => {
    expect(sum(1,1)).toBe(2);
})

test('suma de 50 , 90: devuelve 140', () => {
    expect(sum(50,90)).toBe(140);
})

test('suma de 8 , 5: devuelve 13 ', () => {
    expect(sum(8,5)).toBe(13);
})

test('suma de 90 , 1: retorna 91', () => {
    expect(sum(90,1)).toBe(200);
})

test('suma de 1.1 , 1.2: retorna 1.3', () => {
    expect(sum(1.1, 1.2)).toBe(2.3);
})