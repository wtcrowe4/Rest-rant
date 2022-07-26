const db = require('../models')

db.Place.create([
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg',
        founded: 1989
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg',
        founded: 2020
    }
])
.then(() => {
    console.log('Seed Success!')
    process.exit()
})
.catch(err => {
    console.log('Seed Failure!', err)
    process.exit()
})
