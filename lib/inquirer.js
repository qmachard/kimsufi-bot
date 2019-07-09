const inquirer   = require('inquirer');

module.exports = {
	askKimsufiModel: () => {
		const questions = [
			{
				name: 'location',
				type: 'list',
				message: 'Enter your kimsufi location:',
				choices: [
					{name: 'All', value: 'all'},
					{name: 'France', value: 'fra'},
					{name: 'Canada', value: 'bhs'},
				],
			},
			{
				name: 'reference',
				type: 'list',
				message: 'Enter your kimsufi model:',
				choices: [
					{name: 'KS-1', value: '1801sk12'},
					{name: 'KS-2', value: '1801sk13'},
					{name: 'KS-3', value: '1801sk14'},
					{name: 'KS-4', value: '1801sk15'},
					{name: 'KS-5', value: '1801sk16'},
					{name: 'KS-7', value: '1804sk18'},
				],
			}
		]

		return inquirer.prompt(questions);
	}
}