const debug = require('debug')('dotter_cms:post_controller')
const { matchedData, validationResult } = require('express-validator')
const models = require('../models')

/**
 * get all resources
 *
 * GET /
 */
const show = async (req, res) => {
	// fetch all posts in db
	const posts = await models.Posts.fetchAll()
	res.send(posts)
}

/**
 * publish new resource
 *
 * POST /publish
 */
const publish = async (req, res) => {
	console.log('req', req)
	debug('Request incoming', req)
	// check for errors
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: 'fail', data: errors.array() })
	}

	// get valid data
	const validData = matchedData(req)

	try {
		const post = await new models.Posts(validData).save()

		debug('Created new post successfully: %0', post)
		res.send({
			status: 'success',
			data: post,
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when attempting to publish post',
		})
		throw error
	}
}

module.exports = {
	show,
	publish,
}
