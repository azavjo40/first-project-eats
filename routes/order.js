const {Router} = require('express')
const router = Router()
const upload = require('../midlleware/upload')
const  errorHandlier = require('../utils/errorHandlier')
const Order = require('../models/Order')
router.post('/',upload.single('image'), async(req, res)=>{
 try{
    const { name, paragraph, cost} = req.body
    const order = new Order({
     imageSrc: req.file ? req.file.path : '',
     name: name,
     paragraph: paragraph,
     cost: cost
    })

    await order.save()

    res.status(201).json(order)

 }catch(e){
errorHandlier(res, e)
 }

})



module.exports = router