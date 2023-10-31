const modulo = require('./mod.js');

test('modulo de 10 , 3: retorna 1', () => {
    expect(modulo(10,3)).toBe(1);
})

test('modulo de -7 , 2: retorna -1', () => {
    expect(modulo(-7,2)).toBe(-1);
})

test('modulo de 15 , -4: retorna 3', () => {
    expect(modulo(15,-4)).toBe(3);
})

test('modulo de 5.5 , 2: retorna 1.5', () => {
    expect(modulo(5.5,2)).toBe(1.5);
})

test('modulo de 11 , -5: retorna 1', () => {
    expect(modulo(11,-5)).toBe(1);
})




