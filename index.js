const express = require('express')
const app = express()
const dotenv = require('dotenv').config()


app.get('/', (req, res) => {
    res.send('Hello')
})

//Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))