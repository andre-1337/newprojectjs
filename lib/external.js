const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    /**
     * openCode (dirName) : opens the directory in a new VSC instance
     * @param {string} dirName the directory's name
     */
    openCode: async (dirName) => {
        await exec(`code ${dirName}\\`);
        console.log(chalk.bold.green('✔ Opening Visual Studio Code!'));
    }
}