const fetch = require('node-fetch');
const CLI = require('clui');
const chalk = require('chalk')
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
            if (json.version === package.version) {
                console.log(chalk.green(' Everything\'s ok here! NewProject.JS is up-to-date'));
            } else {
                console.log(chalk.yellow(' There\'s an update available! Run \`npm i -g @andremont0101/newproject.js\` to update!'))
            }
        } catch (err) {
            throw new Error(chalk.red(err));
        } finally {
            status.stop();
        }
    }
}