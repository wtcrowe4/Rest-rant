const router = require('express').Router()
const places = require('../models/places.js')

//Places Index Page
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//New Place Data POST
router.post('/', (req, res) => {
    console.log(req.body)
    //Default values if one is not provided
    if (!req.body.pic) {
        req.body.pic = 'https://via.placeholder.com/350'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
    //res.send('POST /places')
})

//New Place Page
router.get('/newPlace', (req, res) => {
    res.render('places/newPlace')
})


//Show Place Page
router.get('/showPlace', (req, res) => {
    res.render('places/showPlace')
})

//Edit Place Page
router.get('/editPlace', (req, res) => {
    res.render('places/editPlace')
})




module.exports = router