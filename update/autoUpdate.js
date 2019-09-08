const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CLI = require('clui');
const Spinner = CLI.Spinner;

async function updatePkg() {
    const status = new Spinner('We are updating NewProject.JS, hang on tight!');
    status.start();
    try {
        await exec('npm i -g @andremont0101/newproject.js');
        console.log(chalk.bold.green(' Success! NewProject.JS has been updated!'));
        process.exit();
    } catch (err) {
        throw new Error(chalk.red(err));
    } finally {
        status.stop();
    }
}

updatePkg();