const {Router} = require('express')
const passport = require('passport')
const router = Router()
const errorHandlier = require('../utils/errorHandlier')
const {check, validationResult} = require('express-validator')
const Order = require('../models/order')
router.post('/order',
[
check('name', 'Введите имя').exists(),
check('phone', 'Введите телефон').exists(),
check('address', 'Введите Address').exists()
],
async (req, res)=>{
try{
const errors = validationResult(req)
if (!errors.isEmpty()) {
return res.status(400).json({
errors: errors.array(),
message: 'Некорректный данные выберите sos и заполните имя телефон адрес'
})
}
const {
costs,
name, phone, address, myMessage, spares, arrays
} = req.body
const order = new Order({
costs,
name, phone, address, myMessage, spares, arrays
})
await order.save()
res.status(201).json({message: 'спасибо ближайшей время ответим вам доставим заказь'})
}catch(e){errorHandlier(res, e)}
}
)
router.get('/order',
passport.authenticate('jwt', {
session: false
}),
async (req, res)=>{
try{
const order = await Order.find()
res.status(200).json(order)
}catch(e){errorHandlier(res, e)}
}
)
router.delete('/order/:id',
passport.authenticate('jwt', {
session: false
}),
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