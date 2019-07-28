const inquirer		= require('inquirer');
const files		= require('./files');

module exports = {
	askGithubCredentials: () => {
		const questions = [
			{
				name: 'username',
				type: 'input',
				message: 'Enter your GitHub username or email address:',
				validation: function( value ) {
					if (value.length) {
						return true;
					} else {
						return 'Please enter your username or email address.';
					}
				}
			},
			{
				name: 'password',
				type: 'password',
				message: 'Enter your password:',
				validate: function(value) {
					if (value.length) {
						return true;
				} else {
					return 'Please enter your password.';
				}
				}
			}
	];
	return inquirer.prompt(questions);
	},
}

