let mongoose = require('mongoose')
let validator = require('validator')

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: value => (
      validator.isEmail(value)
    )
  },
})

module.exports = mongoose.model('User', userSchema)