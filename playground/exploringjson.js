const fs = require("fs");

// const book = {
//     title: "Ego Is The Enemy",
//     author: "Ryan Holiday"
// }

// let bookJSON = JSON.stringify(book);
// // bokJSON is a string! not an object
// // bookJSON.title will throw an error
// console.log(bookJSON);

// let parsedData = JSON.parse(bookJSON);
// // parsedData is a javascript object
// console.log(parsedData.title);

// fs.writeFileSync('example.json', bookJSON);

let dataBuffer = fs.readFileSync('example.json');
let dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
console.log(data.title);