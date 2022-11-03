/**
 * Post validation rules
 */

const { body } = require('express-validator')

const createRules = [
	body('title').exists().isLength({ min: 3 }).trim(),
	body('content').exists().isLength({ min: 3 }).trim(),
	body('created_at'),
]

const updateRules = [
	body('title').exists().isLength({ min: 3 }).trim(),
	body('content').exists().isLength({ min: 3 }).trim(),
	body('created_at'),
]

module.exports = {
	createRules,
	updateRules,
}
