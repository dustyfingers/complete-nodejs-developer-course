const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-db', { 
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Email must be a valid email!')
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value){
            if (value.toLowerCase().includes('password')) throw new Error('Password must not contain the word "password"!')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('Age must be a positive number!')
        }
    }
});

const newUser = new User({name: 'Lou Williford  ', email: 'test@email.com ', password: 'queeens2'});

// upon user save success print user to console
newUser.save().then(() => {
    console.log(newUser);
}).catch(err => {
    console.log(err)
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const task = new Task({
    description: 'Review and learn more about mongoose!',
    completed: true
});

task.save().then(() => {
    console.log(task);
}).catch(err => console.log(err));