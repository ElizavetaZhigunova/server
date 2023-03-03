const Router = require('express')
const adController = require('../controllers/adController')
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")

router.post('', authMiddleware, adController.createDir)

module.exports = router