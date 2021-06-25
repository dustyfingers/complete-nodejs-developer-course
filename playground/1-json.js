const fs = require('fs');

const book = {
  title: '1984',
  author: 'George Orwell'
}

const bookJSON = JSON.stringify(book);
// stuff with the file system
fs.writeFileSync('1-json.json', bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.title)
