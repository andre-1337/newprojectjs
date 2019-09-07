#!/usr/bin/env node
// newproject.js by Link-Byte
// Creates a new directory wherever you run the script, alongside a package.json file and an index.js

// Requiring vital NPM packages
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('yargs').argv;

// Requiring vital /lib/ packages
const inquirer = require('./lib/inquirer');
const creator = require('./lib/creator');
const updater = require('./lib/updater');

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
    const { projectName } = await inquirer.askForProjectName();
    creator.createDir(projectName);
}

run();