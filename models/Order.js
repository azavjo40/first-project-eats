const {Schema,model} = require('mongoose')

const orderSchema = new Schema({

name: {
type: String,
required: true
},
cost: {
type: Number,
required: true
},
p: {
type: String,
required: true
},
imageSrc: {
type: String,
default: ''
},
date: {
type: Date,
default: Date.now
},
user: {
ref: 'User',
type: Schema.Types.ObjectId
}
})

module.exports = model('Order', orderSchema)