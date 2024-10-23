//Obtengo la función que exporté del directorio /src/prueba3
const factorial=require('../src/prueba3');

//Realizo la prueba unitaria:
test('Calcular el factorial', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
});
