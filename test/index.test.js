//Obtengo la prueba que se encuentra en el directorio /src/index
const prueba = require('../src/index');

test('resultado',async ()=>{
    //Acá espero el resultado, al ser una promesa uso la sintaxis await dentro de una función asíncrona
    const resultado=await prueba();
    //Acá realizo la comprobación de que el resultado devuelto por la promesa sea "Prueba correcta" y la prueba sea validada.
    expect(resultado).toBe("Prueba correcta");
});
