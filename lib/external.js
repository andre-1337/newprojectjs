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
    },
    /**
     * startGitRepo(projDir) : starts a new empty GitHub repository
     * @param {string} projDir the current working directory
     */
    startGitRepo: async (projDir) => {
        await exec(`git init`, { cwd: projDir });
        console.log(chalk.bold.green('✔ Started an empty Git repository'));
    },
    /**
     * addGitIgnore(projDir) : adds a new .gitignore file and auto ignores /node_modules
     * @param {string} projDir the current working directory
     */
    addGitIgnore: async (projDir) => {
        await exec(`echo /.vs /node_modules >> .gitignore`, { cwd: projDir });
        console.log(chalk.bold.green('✔ Added a .gitignore file (auto ignoring /node_modules and .vs)'));
    }
}