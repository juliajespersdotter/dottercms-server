/**
 * Posts model
 */

module.exports = bookshelf => {
	return bookshelf.model(
		'Posts',
		{
			tableName: 'posts',
		},
		{
			async fetchById(id, fetchOptions = {}) {
				// fetch user with parameter id
				return await new this({ id }).fetch(fetchOptions)
			},
		}
	)
}
