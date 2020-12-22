const {Router} = require('express')
const router = Router()
const errorHandlier = require('../utils/errorHandlier')
const Order = require('../models/order')
router.post('/order',
async (req, res)=>{
try{
const {
kebab,sos,cola,fanta, sprite,lipton,
woda,ayran, mango, lemoniada
} = req.body
console.log(req.body)
const order = new Order({
kebab,sos,cola,fanta, sprite,lipton,
woda,ayran, mango, lemoniada
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