/**
 * Posts model
 */

module.exports = bookshelf => {
	return bookshelf.model('Posts', {
		tableName: 'posts',
	})
}
