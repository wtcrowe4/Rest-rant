const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema(
  {
      name: {type: String, required: true},
      pic: String,
      cuisines: { type: String, required: true },
      city: { type: String, default: 'Anytown' },
      state: { type: String, default: 'USA' },
      founded: Number
  }
)

module.exports = mongoose.model('Place', placeSchema)




// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     founded: '1995',
//     pic: '/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'
//     //Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     founded: '1997',
//     pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg'
//     //Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

//   }]