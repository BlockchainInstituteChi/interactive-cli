const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  askGithubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
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
  askOptions: () => { 
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Choose an option: (A or B)',
        validate: function( value ) {
          if ( value === "A" || value === "B" ) {
            return true;
          } else {
            return 'Please choose either A or B';
          }
        }
      }];

    return inquirer.prompt(questions);
  },
  optionA: () => {
    console.log('A');
  },
  optionB: () => {
    console.log('B');

  }
}