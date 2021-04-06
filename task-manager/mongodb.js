const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager-db';
const id = new ObjectID();

console.log(id);
// mongodb guid's actually have info like a timestamp encoded in them!
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log("Unable to connect to db.", err);
    console.log("db connected");

    const db = client.db(databaseName);

    // insert one 
    // db.collection('users').insertOne({name: "Ed", "age": 21 }, (err, res) => {
    //     if (err) return console.log("Unable to insert user.");

    //     console.log(res.ops);
    // });

    // insert many
    // db.collection('users').insertMany([{ name: "Lou", age: 24 }, { name: "Anthony", age: 56 }], (err, res) => {
    //     if (err) return console.log("Unable to insert multiple users.");

    //     console.log(res.ops);
    // });

    // db.collection('tasks').insertMany([
    //     { description: "build app", completed: false }, 
    //     { description: "do dishes", completed: false }, 
    //     { description: "wash car", completed: false }
    // ], (err, res) => {
    //     if (err) return console.log("Unable to insert multiple tasks.");

    //     console.log(res.ops);
    // });
});