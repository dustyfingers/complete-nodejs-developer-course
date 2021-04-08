const express = require("express");
require('./db/mongoose');

const User = require('./models/User');
const Task = require('./models/Task');

const app = express();

const PORT = process.env.PORT || 5000;

// configures express to automaticlaly parse incoming data into objects!
app.use(express.json());

// create a user
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.status(201).send({user, message: 'User created successfully!'});
    }).catch(error => {
        res.status(400).send({error, message: 'Error while creating user...'});
    });
});

// fetch all users
app.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.status(200).send({users, message: 'Users fetched successfully.'})
    }).catch(error => {
        res.status(400).send({error, message: 'Error while fetching users...'})
    });
});

// fetch one user
app.get('/users/:userID', (req, res) => {
    const _id = req.params.userID;

    User.findById(_id).then(user => {
        res.status(200).send({user, message: 'User fetched successfully.'})
    }).catch(error => {
        res.status(400).send({error, message: 'Error while fetching user...'})
    });
});

// create a task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send({task, message: 'Task created successfully!'});
    }).catch(error => {
        res.status(400).send({error, message: 'Error while creating task...'});
    });
});

// fetch all tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => {
        res.status(200).send({tasks, message: 'Tasks fetched successfully.'})
    }).catch(error => {
        res.status(400).send({error, message: 'Error while fetching tasks...'})
    });
});

// fetch one task
app.get('/tasks/:taskID', (req, res) => {
    const _id = req.params.taskID;

    Task.findById(_id).then(task => {
        res.status(200).send({task, message: 'Task fetched successfully.'})
    }).catch(error => {
        res.status(400).send({error, message: 'Error while fetching task...'})
    });
});

app.listen(PORT, () => console.log(`Server is live on port ${PORT}...`))