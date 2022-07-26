const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema(
  {
      name: {type: String, required: true},
      pic: {type: String, default: '/images/jason-leung-poI7DelFiVA-unsplash.jpg'},
      cuisines: { type: String, required: true },
      city: { type: String, default: 'Anytown' },
      state: { type: String, default: 'USA' },
      founded: Number
  }
)

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

