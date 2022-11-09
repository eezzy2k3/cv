const generate = require('../controllers/cvController')


const express = require('express')

const router = express.Router()

// router.post("/",generate)

router.route("/")
.post(generate)

module.exports = router
