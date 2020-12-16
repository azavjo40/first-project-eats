const {Router} = require('express')
const router = Router()
const upload = require('../midlleware/upload')
const  errorHandlier = require('../utils/errorHandlier')
const Order = require('../models/Order')
const passport = require('passport')


router.post('/order',
passport.authenticate('jwt',{session: false}),
upload.single('file'),
 async(req, res)=>{
   
 try{
   console.log(req.body)
    const order = new Order({
    name: req.body.name,
    cost: req.body.cost,
   p: req.body.p,
    //user: req.user.id,
    
      //провераем если есть файл иначе добавлаем пустой строка
      imageSrc: req.file ? req.file.path : ''
    
   })
    await order.save()
  res.status(201).json(order)
console.log(order)
 }catch(e){
errorHandlier(res, e)

 }

})



module.exports = router