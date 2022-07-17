const router = require('express').Router()

//Places Index Page
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'
        //Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg'
        //Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
      }]
      
    res.render('places/index', { places })
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