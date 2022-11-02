const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'We are up and running!' } })
})
