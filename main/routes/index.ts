const router = require('express').Router()
const {testing} = require('../controllers/testController')

router.get('/test', testing)

module.exports = router