const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const router = Router()
const upload = require('../midlleware/upload')
const errorHandlier = require('../utils/errorHandlier')
const Create = require('../models/create')
const passport = require('passport')
const create = require('../models/create')
const fs = require('fs')

router.post('/create',
passport.authenticate('jwt', {
session: false
}),
upload.single('file'),
async (req, res) => {
try{
    const create = new Create({
        name: req.body.name,
        cost: req.body.cost,
        p: req.body.p,
        user: req.user.id,
        //провераем если есть файл иначе добавлаем пустой строка
        imageSrc: req.file ? req.file.path : ''
        })
        await create.save()
        res.status(201).json({message: 'Спасибо вы создали Меню'})
}catch(e){errorHandlier(res,e)}
})

router.get('/allcreate',
async (req, res)=>{
try{
const create = await Create.find()
res.json(create)
}catch(e){
errorHandlier(res, e)
}
})

router.post('/delete/menu',
async (req, res)=>{
const {imageSrc, cost, p, id} = req.body
try{
await Create.find({
_id: req.body.id
})
//fs.unlinkSync(path)
res.status(200).json({message: 'Menu удалена'})
}catch(e){errorHandlier(res, e)}
})
module.exports = router