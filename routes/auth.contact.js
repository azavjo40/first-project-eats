const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const Contact = require('../models/Contact')
const router = Router()
const errorHandlier = require('../utils/errorHandlier')
// /api/auth/register
router.post(
'/contact',
[
check('name', 'Введите имя').exists(),
check('phone', 'Введите телефон').exists(),
check('message', 'Введите сообщение').exists()

],
async (req, res) => {
try {
const errors = validationResult(req)
if (!errors.isEmpty()) {
return res.status(400).json({
errors: errors.array(),
message: 'Некорректный данные при отправка сообщения заполните все поля'
})
}
const {name, phone, message } = req.body
const contact = new Contact({name, phone, message})
await contact.save()
res.status(200).json({message: 'Спасибо ближайшее ответим вам'})
} catch (e) {
errorHandlier(res, e)
}
})
router.get('/contact',
async (req, res)=>{
try{
const contact = await Contact.find()
res.status(200).json(contact)
}catch(e){errorHandlier(res, e)}
}
)
router.delete('/contact/:id',
async(req, res)=>{
try{
await Contact.remove({
_id: req.params.id
})
res.status(200).json({message: 'Contact удалена'})
}catch(e){errorHandlier(res, e)}
}
)

module.exports = router