const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const files 	  = require('./lib/files');
const inquirer    = require('./lib/inquirer');

init();
run();

function init () {
	clear();
	console.log(
	  chalk.yellow(
	    figlet.textSync('Blockchain', { horizontalLayout: 'full' })
	  )

	);
	console.log(
	  chalk.yellow(
	    figlet.textSync('Institute', { horizontalLayout: 'full' })
	  )

	);

	if (files.directoryExists('.git')) {
	  console.log(chalk.red('Already a git repository!'));
	  // process.exit();
	}

}

async function run () {

	const credentials = await inquirer.askGithubCredentials();
	console.log(credentials);

}

