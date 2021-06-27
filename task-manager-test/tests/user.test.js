const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
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

test('should not log in notexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'userthatdoesntexist@email.com',
        password: 'nottherightpassword'
    }).expect(400)
})

test('should not log in user if given password is bad', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'nottherightpassword'
    }).expect(400)
})

test('should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
})

test('should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('should delete account for user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
})

test('should not delete account for unauthorized user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401);
})