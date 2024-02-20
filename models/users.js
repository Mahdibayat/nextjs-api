const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Users', usersSchema)