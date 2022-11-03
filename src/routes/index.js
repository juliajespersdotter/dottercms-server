const express = require('express')
const router = express.Router()
const postController = require('../controllers/post_controller')
const postValidationRules = require('../validation/post')

router.get('/posts', postController.show)
router.get('/api', (req, res) => {
	res.send({ success: true, data: 'Hello!' })
})

// publish new content to site
router.post('/publish', postValidationRules.createRules, postController.publish)

module.exports = router
