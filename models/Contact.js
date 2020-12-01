const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true },
  message: {type: String, required: true},
  date: {type: Date, default: Date.now,}
})

module.exports = model('Contact', schema)
