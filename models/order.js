const {Schema, model} = require('mongoose')
const order = new Schema({
costs:{type: String},
spares: {type: String},
name:{type: String, required: true},
phone:{type: String, required: true},
address:{type: String, required: true},
myMessage:{type: String},
date: {type: Date,default: Date.now}
})
module.exports = model('Order', order)