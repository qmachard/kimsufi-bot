const figlet = require('figlet');
const clear = require('clear');
const chalk = require('chalk');

const inquirer  = require('./lib/inquirer');
const services  = require('./lib/services');

let model = null;

clear();

const checkAvailability = () => {
	return new Promise(async (resolve) => {
		const availabilities = await services.getAvailabilities(model);

		if (0 === availabilities.length) {
			console.log(chalk.red('No availability.'));
			console.log('Automatically restart in 30s, press CTRL+C to cancel');
			setTimeout(checkAvailability, 30000);

			return;
		}

		return resolve(availabilities.length);
	});
}

const run = async () => {
	console.log(
	  chalk.yellow(
	    figlet.textSync('Kimsufi Bot', { horizontalLayout: 'full' })
	  )
	);

	model = await inquirer.askKimsufiModel();

	number = await checkAvailability();

	console.log(chalk.green(`There are ${number} instance(s) !`));
	console.log(`https://www.kimsufi.com/fr/commande/kimsufi.xml?reference=${model.reference}`)
}

run();