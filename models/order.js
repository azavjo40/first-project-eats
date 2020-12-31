const {Schema, model} = require('mongoose')
const order = new Schema({
valu:{
sos0:{type: String},
sos1:{type: String},
sos2:{type: String},
cola3:{type: String},
sos4:{type: String},
sos5:{type: String},
sos6:{type: String},
cola7:{type: String},
cola8:{type: String},
cola9:{type: String},
cola10:{type: String},
cost:{type: String}},
name:{type: String, required: true},
phone:{type: String, required: true},
address:{type: String, required: true},
myMessage:{type: String},
date: {type: Date,default: Date.now}
})
module.exports = model('Order', order)