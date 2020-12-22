const {Schema, model} = require('mongoose')
const order = new Schema({
kebab:{type: String},
sos:{type: String},
sos:{type: String},
cola:{type: String},
fanta:{type: String},
sprite:{type: String},
lipton:{type: String},
woda:{type: String},
ayran:{type: String},
mango:{type: String},
lemoniada:{type: String},
date: {type: Date,default: Date.now}
})
module.exports = model('Order', order)