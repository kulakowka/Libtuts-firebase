var express = require('express')
var router = express.Router()

const render = (view) => (req, res) => res.render(view)

router
.get('/shield/:platform/:name.svg', require('../controllers/shield/show'))
.get('*', render('index'))

module.exports = router
