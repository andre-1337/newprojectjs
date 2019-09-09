#!/usr/bin/env node
 // newproject.js by Link-Byte
// Creates a new directory wherever you run the script, alongside a package.json file and an index.js

// Requiring vital NPM packages
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('yargs').argv;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Requiring vital /lib/ packages
const inquirer = require('./lib/inquirer');
const creator = require('./lib/creator');
const updater = require('./lib/updater');
const external = require('./lib/external');

// Auto updating NewProject.JS
//if (!argv.update) {
//} else {
//    external.updateNewProjectJS();
//}

clear();
console.log(
    chalk.yellow(
        figlet.textSync('NewProject.JS', {
            horizontalLayout: 'full'
        })
    )
);

const run = async () => {
    await updater.checkForUpdate();
    const {
        projectName
    } = await inquirer.askForProjectName();
    creator.createDir(projectName);
}

run();