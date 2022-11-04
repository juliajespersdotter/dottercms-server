const debug = require('debug')('dottercms:post_controller')
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
 * Get a specific resource
 *
 * GET /:postId
 */
const showPost = async (req, res) => {
	const postId = req.params.postId

	const post = await models.Posts.fetchById(postId)

	res.send(post)
}

/**
 * publish new resource
 *
 * POST /publish
 */
const publish = async (req, res) => {
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

const edit = async (req, res) => {
	const postId = req.params.postId

	const post = await models.Posts.fetchById(postId)

	// check for errors
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: 'fail', data: errors.array() })
	}

	// get valid data
	const validData = matchedData(req)

	try {
		const editedPost = await post.save(validData)

		debug('Updated post successfully: %0', editedPost)
		res.send({
			status: 'success',
			data: editedPost,
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
	showPost,
	publish,
	edit,
}
