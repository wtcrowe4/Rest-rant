const router = require('express').Router()
const db = require('../models')

//Places Index Page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => res.render('places/index', { places }))
    .catch(err => res.render('error404'))
})

//New Place Data POST
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => res.redirect('/places'))
        .catch((err) => {
            if(err && err.name == 'ValidationError') {
                //Generate error message
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field[0].toUpperCase()}${field.slice(1)} was ${err.errors[field].value}.  `
                    message += `${err.errors[field].message}`
                }
                res.render('places/newPlace', {message}) //Pass in {req.body} to keep valid fields
            } else{
            res.render('error404')}
        })
})

//New Place Page
router.get('/newPlace', (req, res) => {
    res.render('places/newPlace')
})

//Edit Place Page
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => res.render('places/editPlace', {place}))
        .catch(err => {
            res.render('error404')
            console.log(err)})
})

//Show Place Page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => res.render('places/showPlace', {place}))
        .catch(err => res.render('error404'))
})

//Edit Place PUT
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(res.redirect(`/places/${req.params.id}`))
        .catch(err => {
            console.log(err)
            res.render('error404')})
}) 


//Delete Place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(res.redirect('/places'))
        .catch(res.render('error404'))
})


//Rant Post
router.post('/:id/rant', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                    .then(() => res.redirect(`/places/${req.params.id}`))
                })
                .catch(err => res.render('error404'))
        })
        .catch(err => res.render('error404'))
})

//Rant DELETE
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub page')
})


module.exports = router