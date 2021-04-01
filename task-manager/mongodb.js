//  CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager-db';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log("Unable to connect to db.", err);
    console.log("db connected");

    const db = client.db(databaseName);

    // insert one 
    // db.collection('users').insertOne({name: "Lou", "age": 24 }, (err, res) => {
    //     if (err) return console.log("Unable to insert user.");

    //     console.log(res.ops);
    // });

    // insert many
    // db.collection('users').insertMany([{ name: "Lou", age: 24 }, { name: "Anthony", age: 56 }], (err, res) => {
    //     if (err) return console.log("Unable to insert multiple users.");

    //     console.log(res.ops);
    // });

    db.collection('tasks').insertMany([
        { description: "build app", completed: false }, 
        { description: "do dishes", completed: false }, 
        { description: "wash car", completed: false }
    ], (err, res) => {
        if (err) return console.log("Unable to insert multiple tasks.");

        console.log(res.ops);
    });
});