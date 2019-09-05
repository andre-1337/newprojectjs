const inquirer = require('inquirer');
const files = require('./files');
const argv = require('minimist')(process.argv.slice(2));

module.exports = {

    /**
     * Question constructor.
     */

    askForProjectName: () => {
        const questions = [{
            name: 'projectName',
            type: 'input',
            message: 'What is the project\'s name?',
            default: argv._[0] || files.getCurrentDirBase(),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please, enter the projec\'s name'
                }
            }
        }]
        return inquirer.prompt(questions);
    }
}