/**
 * User model
 */

const bcrypt = require('bcrypt')

module.exports = bookshelf => {
	return bookshelf.model(
		'User',
		{
			tablename: 'users',
			posts() {
				return this.hasMany('Posts')
			},
		},
		{
			async login(email, password) {
				// check if a user with this email and password exists
				const user = await new this({ email }).fetch({ require: false })
				if (!user) {
					return false
				}
				const hash = user.get('password')

				// hash incoming password and compare with db salt
				const result = await bcrypt.compare(password, hash)
				if (!result) {
					return false
				}

				return user
			},

			async fetchById(id, fetchOptions = {}) {
				// fetch user with parameter id
				return await new this({ id }).fetch(fetchOptions)
			},
		}
	)
}
