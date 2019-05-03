const getNotes = require('./notes.js'),
      validator = require('validator');


const msg = getNotes();
console.log(msg);

console.log(validator.isEmail(msg));
console.log(validator.isEmail('therealemail@gmail.com'));
console.log(validator.isURL('https://gmail.com'));
