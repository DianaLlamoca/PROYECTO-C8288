//Uso supertest, pues me permitirá probar la API
const request=require('supertest');

//Obtengo la instancia del app express en el directorio /src/index
const app=require('../src/index');

const RespuestaEsperada = [
    { id: 1, name: 'user1', email: 'user1@test.com' },
    { id: 2, name: 'user2', email: 'user2@test.com' }
  ];
  
  //Aquí es donde realizo las pruebas
  describe('GET /users', () => {
    it('DEBERÍA RETORNAR UNA LISTA DE USUARIOS', async () => {
      const response = await request(app).get('/users');

      //Verifico que haya sido la conexión exitosa (200)
      expect(response.statusCode).toBe(200);   

      //Valido que los datos de la ruta al realizar la petición get a /users sea igual
      expect(response.body).toEqual(RespuestaEsperada);   
  
    },10000); //Establezco un tiempo de espera de 10 segundos
  });
