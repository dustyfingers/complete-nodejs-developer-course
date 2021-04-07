const express = require("express");
require('./db/mongoose');

const User = require('./models/User');
const Task = require('./models/Task');

const app = express();

const PORT = process.env.PORT || 5000;

// configures express to automaticlaly parse incoming data into objects!
app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.status(201).send({user, message: 'User created successfully!'});
    }).catch(error => {
        res.status(400).send({error, message: 'Error while creating user...'});
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send({task, message: 'Task created successfully!'});
    }).catch(error => {
        res.status(400).send({error, message: 'Error while creating task...'});
    });
});

app.listen(PORT, () => console.log(`Server is live on port ${PORT}...`))