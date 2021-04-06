const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-db', { 
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,

    },
    age: {
        type: Number
    }
});

const newUser = new User({name: 'Lou', age: 24});

// upon user save success print user to console
newUser.save().then(() => {
    console.log(newUser);
}).catch(err => {
    console.log(err)
});