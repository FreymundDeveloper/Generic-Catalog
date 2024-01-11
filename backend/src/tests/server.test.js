const request = require('supertest');
const { app, server, closeServer } = require('../server/server');

// Back-End Tests
describe('GET /products', () => {
    beforeAll(async () => {
        return new Promise((resolve) => {
            server.on('listening', () => {
                console.log('Server is running at http://localhost:3001');
                resolve();
            });
        });
    });

    afterAll(async () => {
        return new Promise((resolve) => {
            closeServer(() => {
                resolve();
            });
        });
    });

    it('Basic Route Get Return Test', async () => {
        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
    });

    it('Route Get Return With Query Params Test', async () => {
        const response = await request(app).get('/products?price=500');

        expect(response.status).toBe(200);
    });

    it('Route Get Return With Multiples Content Query Params Test', async () => {
        const response = await request(app).get('/products?types=Regata,Camiseta');

        expect(response.status).toBe(200);
    });

    it('Route Get Return With Multiples Query Params Test', async () => {
        const response = await request(app).get('/products?sellers=Nike&name=Camiseta');
        
        expect(response.status).toBe(200);
    });
});
