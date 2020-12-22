const {Schema,model} = require('mongoose')
const create = new Schema({
name: {type: String,required: true},
cost: {type: Number,required: true},
p: {type: String,required: true},
imageSrc: {type: String,default: '',required: true},
date: {type: Date,default: Date.now},
user: {ref: 'User',type: Schema.Types.ObjectId}
})
module.exports = model('Create', create)