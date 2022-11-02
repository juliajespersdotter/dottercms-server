const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('up and running')
})
router.get('/api', (req, res) => {
	res.send({ success: true, data: 'Hello!' })
})

module.exports = router
