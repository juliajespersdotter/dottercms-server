/**
 * Post validation rules
 */

const { body } = require('express-validator')

const createRules = [
	body('title').exists().isLength({ min: 3 }).trim(),
	body('content').exists().isLength({ min: 3 }).trim(),
]

const updateRules = [
	body('title').exists().isLength({ min: 3 }).trim(),
	body('content').exists().isLength({ min: 3 }).trim(),
]

module.exports = {
	createRules,
	updateRules,
}
