const {Router} = require('express')
const router = Router()
const errorHandlier = require('../utils/errorHandlier')
const Order = require('../models/order')
router.post('/order',
async (req, res)=>{
try{
const {
    sos0,sos1,sos2,cola3,sos4,sos5,sos6,cola7,cola8,cola9,cola10,cost,
    name, phone, address, message
} = req.body
console.log(req.body)
const order = new Order({
    sos0,sos1,sos2,cola3,sos4,sos5,sos6,cola7,cola8,cola9,cola10,cost,
    name, phone, address, message
})
await order.save()
res.status(201).json({message: 'спасибо ближайшей время ответим вам'})
}catch(e){errorHandlier(res, e)}
}
)
router.get('/order',
async (req, res)=>{
try{  
const order = await Order.find()
res.status(200).json(order)
}catch(e){errorHandlier(res, e)}
}
)
router.delete('/order/:id',
async (req, res)=>{
try{
await Order.remove({
    _id: req.params.id
})
res.status(200).json({message: 'Order удалена'})
}catch(e){errorHandlier(res, e)}
}
)
module.exports = router