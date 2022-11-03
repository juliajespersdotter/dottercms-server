const debug = require('debug')('dotter_cms:post_controller')
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
	// publish new post to db
	res.send('publish new!!!')
}

module.exports = {
	show,
	publish,
}
