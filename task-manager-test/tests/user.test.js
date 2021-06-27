const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')


const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

afterEach(() => {
    console.log("test case completed")
})

test('should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: "Andrew",
        email: "andrew123@example.com",
        password: "mypass777!@"
    }).expect(201)
})

test('should log in existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not log in user if given credentials are bad', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'nottherightpassword'
    }).expect(400)
})