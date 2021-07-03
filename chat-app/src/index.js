const path  = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 5000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.listen(port, () => console.log(`Server started on port ${port}`))