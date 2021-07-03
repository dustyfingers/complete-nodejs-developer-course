const request = require('supertest')

const app = require('../src/app')
const Task = require('../src/models/task')
const { userOneId, userOne, populateDatabase } = require('./fixtures/db.js')

beforeEach(populateDatabase)

test('should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'wash the dishes'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})