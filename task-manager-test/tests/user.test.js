const request = require('supertest')

const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, populateDatabase } = require('./fixtures/db')

beforeEach(populateDatabase)

test('should sign up a new user', async () => {
    const response = await request(app).post('/users').send({
        name: "Andrew",
        email: "andrew123@example.com",
        password: "mypass777!@"
    }).expect(201)

    // assert that db was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // assert the response is in the correct format
    
    // good for checking singular obj values, not so much for more complex cases
    // expect(response.body.user.name).toBe('Andrew')

    // better for more complex cases
    expect(response.body).toMatchObject({
        user: {
            name: 'Andrew',
            email: 'andrew123@example.com'
        },
        token: user.tokens[0].token
    })

    // assert that plaintext password is not stored in the database
    expect(user.password).not.toBe('mypass777!@');
})

test('should log in existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
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
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('should not delete account for unauthorized user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Jeff'
        })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Jeff')
})

test('should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            nonexistentField: 'Aslan'
        })
        .expect(400)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual(userOne.name)  
})