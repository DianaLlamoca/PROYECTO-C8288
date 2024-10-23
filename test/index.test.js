const request = require('supertest');
const app = require('../src/index'));

describe('GET /', () => {
    it('Debería responder con Despliegue correcto', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Despliegue correcto');
    });
});
