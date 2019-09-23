const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was overwritten by Nodejs!')

fs.appendFileSync('notes.txt', '\nThis file was appended by Nodejs!')