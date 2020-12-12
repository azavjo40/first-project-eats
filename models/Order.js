const {Schema, model} = require('mongoose')

const orderSchema  = new Schema({
       imageSrc: {type: String, default: ''},
    name: {type: String,required: true },
        p: {type: String, required: true},
     cost: {type: Number, required: true},
     date: {type: Date, default: Date.now},
         user: {ref: 'User', type: Schema.Types.ObjectId }
  })
  
  module.exports = model('Order', orderSchema )