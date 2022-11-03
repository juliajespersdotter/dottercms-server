const express = require('express')
const router = express.Router()
const postController = require('../controllers/post_controller')
const postValidationRules = require('../validation/post')

/* Get all resources */
router.get('/posts', postController.show)

/* Get a specific resource */
router.get('/:postId', postController.showPost)

/* Store a new resource */
router.post('/publish', postValidationRules.createRules, postController.publish)

/* Update a specific resource */
router.put('/:postId', postValidationRules.updateRules, postController.edit)

module.exports = router
