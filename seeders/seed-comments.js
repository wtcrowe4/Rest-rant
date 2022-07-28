const db = require('../models')

let seed = async () => {
    let place = await db.Place.findOne({  name: 'Rocky\'s Hot Chicken' })
    let comment = await db.Comment.create({ 
        author: 'Neil Armstrong',
        rant: false,
        stars: 5.0,
        content: 'This chicken is from outer space.'
    })
    place.comments.push(comment.id)
    await place.save()
    process.exit()
}

seed() 