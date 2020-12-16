const express = require('express')
const config = require('config')
const passport = require('passport')
//const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')



const app = express()
app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/auth', require('./routes/auth.contact'))
app.use('/api', require('./routes/order'))

// что бы файл статичиска нашли получать  доступ на примую с клента
app.use('/uploads',express.static('uploads'))

//cors
app.use(cors)

//body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// смотрить запрос
app.use(morgan('dev'))

// тут даем фронтент если продакшн то что бы указать статичиский папку наш

//if (process.env.NODE_ENV === 'production') {
 // app.use('/', express.static(path.join(__dirname, 'client', 'build')))

 // app.get('*', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  //})
//}

//passport.js
app.use(passport.initialize())
// передаем паспорт
require('./midlleware/passport')(passport)


const PORT = process.env.PORT || config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()



