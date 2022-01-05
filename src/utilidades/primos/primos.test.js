const { esNumeroPrimo } = require('./')

test('Devuelve Primo cuando Número 2', () => {

    expect( esNumeroPrimo(2) ).toBe(true)
    // expect(sum(1, 2)).toBe(3);
});

test('Devulve 0 cuando se incluye 1', () => {

    expect( esNumeroPrimo(1) ).toBe(false)
    // expect(sum(1, 2)).toBe(3);
});

test('Cuando el parámetro de entrada No es Primo', () => {

    expect( esNumeroPrimo(33) ).toBe(false)
    // expect(sum(1, 2)).toBe(3);
});

test('Cuando el parámetro de entrada Es Primo', () => {

    expect( esNumeroPrimo(97) ).toBe(true)
    // expect(sum(1, 2)).toBe(3);
});