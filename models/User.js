const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  phone: { type: Number, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  date: {type: Date, default: Date.now,}
})

module.exports = model('User', schema)
