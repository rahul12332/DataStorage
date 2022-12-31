const express = require('express')
const router = express.Router()
const registerUser = require('../controllers/userControllers')
const loginUser = require('../controllers/loginControllers')


router.route('/').post(registerUser)
router.route('/login').post(loginUser)


module.exports = router;