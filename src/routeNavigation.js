const routeing = require('express').Router()
const product = require('./routes/productRoute')
const promo = require('./routes/promoRoute')
const category = require('./routes/categoryRoute')
const history = require('./routes/historyRoute')
const user = require('./routes/userRoute')

routeing.use('/product', product)
routeing.use('/promo', promo)
routeing.use('/category', category)
routeing.use('/history', history)
routeing.use('/user', user)

module.exports = routeing
