const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const files 	  = require('./lib/files');
const inquirer    = require('./lib/inquirer');

init();
run();

function init () {
	clear();
	
	clearAndSetHeader('Blockchain Institute Rocks!');

	if (files.directoryExists('.git')) {
	  console.log(chalk.red('Already a git repository!'));
	  // process.exit();
	}

}

async function run () {

	const credentials = await inquirer.askOptions();
	console.log(credentials);

}

function clearAndSetHeader (message) {

	clear();

	if ( message.split(' ').length > 1 ) {
		var words = message.split(' ');
	} else if ( message.length > 10 ) {
		var words = message.match(/.{1,2}/g);
	}

	for ( var i = 0; i < words.length; i++ ) {
		console.log(
			chalk.yellow(
				figlet.textSync(words[i], { horizontalLayout: 'full' })
			)

		);
	}

}

