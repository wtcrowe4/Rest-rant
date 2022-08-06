require('dotenv').config()
const mongoose = require('mongoose')

//Set default values for new documents
const setDefaultsOnInsert = true

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {console.log(`Mongo connected: ${process.env.MONGO_URI}`)})

module.exports.Place = require('./places')
module.exports.Comment = require('./comments')