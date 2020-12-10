const {Schema, model} = require('mongoose')

// order image 
const orderSchema = new Schema({
    imageSrc: {type: String, default: ''},
    name: {type: String, required: true},
     paragraph: {type: String, required: true},
     cost: {type: Number, required: true},
     date: {type: Date, default: Date.now},
     user: {ref:'User', type: Schema.Types.ObjectId}
})