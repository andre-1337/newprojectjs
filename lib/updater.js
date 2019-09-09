const fetch = require('node-fetch');
const CLI = require('clui');
const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const package = require('../package.json');
const Spinner = CLI.Spinner;

module.exports = {
    /**
     * checkForUpdate() : Connects to the GitHub repository, gets the RAW package.json and retrieves the version in that file
     */

    checkForUpdate: async () => {
        const status = new Spinner('Checking for available NPM updates...');
        status.start();
        try {
            const res = await fetch('https://raw.githubusercontent.com/Link-Byte/newprojectjs/master/package.json');
            const json = await res.json();
            if (json.version > package.version) {
                console.log(chalk.yellow(' There\'s an update available! Run \`newproject-update\` to update!'));
                console.log(chalk.yellow(`Currently installed version: ${package.version} | New available version: ${json.version}`));
            } else if (json.version < package.version) {
                console.log(chalk.yellow(' Yeah ok, Mr. Time Traveler.'))
            } else {
                console.log(chalk.green(' Everything\'s ok here! NewProject.JS is up-to-date'));
            }
        } catch (err) {
            throw new Error(chalk.red(err));
        } finally {
            status.stop();
        }
    }
}