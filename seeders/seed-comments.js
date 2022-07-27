const db = require('../models')

let seed = async () => {
    let place = await db.Place.findOne({  name: 'H-Thai-ML' })
    let comment = await db.Comment.create({ 
        author: 'Tommy Guns',
        rant: false,
        stars: 4.0,
        content: 'It was great.'
    })
    place.comments.push(comment.id)
    await place.save()
    process.exit()
}

seed()