const request = require('supertest')
const app = require('../src/app')

test('should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: "Andrew",
        email: "andrew123@example.com",
        password: "mypass777!@"
    }).expect(201)
})