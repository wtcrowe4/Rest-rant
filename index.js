const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//Wildcard Route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))