const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created with Node.js!\n');

fs.appendFileSync('notes.txt', 'This file was added into the file with Node.js as well!');
