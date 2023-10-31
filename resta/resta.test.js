const rest = require('./resta.js');

test('resta de 10 , 5: retorna 5', () => {
    expect(rest(10,5)).toBe(5);
})

test('resta de 80 , 79: retorna 1', () => {
    expect(rest(80,79)).toBe(1);
})

test('resta de 50 , 6: retorna 44', () => {
    expect(rest(50,6)).toBe(44);
})

test('resta de 99 , 100: retorna -1', () => {
    expect(rest(99,100)).toBe(-1);
})

test('resta de 82 , 3: retorna 79', () => {
    expect(rest(82,3)).toBe(79);
})