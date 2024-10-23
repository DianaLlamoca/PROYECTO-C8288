//Obtengo la función que exporté del directorio /src/prueba2
const sumar=require('../src/prueba2')

//Realizo el test que solo suma 2 números y compara que sea 5. Si es así, la prueba pasa.
test('Sumar 2 números', () => {
    expect(sumar(2, 3)).toBe(5);
});
