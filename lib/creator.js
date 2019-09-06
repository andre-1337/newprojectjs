const fs = require('fs');
const chalk = require('chalk');
const files = require('./files');
const external = require('./external');

module.exports = {
    /**
     * Creates a new directory
     * @param {string} dirName The desired folder's name
     */

    createDir: (dirName) => {
        if (files.dirExists(dirName)) {
            console.log(chalk.red('This project directory already exists :('));
            process.exit();
        } else {
            // Creating the directory
            files.getCurrentDirBase(fs.mkdirSync(dirName));
            console.log(chalk.green('✔ Success! Time to make something awesome!'));


            // FILE MODELS
            // Index.JS model
            var indexJSModel = ("// Made with <3 by NewProject.JS");

            // README.md model
            var readmeMDModel = ("A new Node.JS project!");


            // Creating the package.json
            external.createPackageJSON();

            // Creating the index.js
            fs.appendFile(`${dirName}\\index.js`, indexJSModel, (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.bold.green(`✔ index.js has been successfully created under \`${dirName}\` `));
            });

            // Creating the README.md
            fs.appendFile(`${dirName}\\README.md`, readmeMDModel, (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.bold.green(`✔ README.md has been successfully created under \`${dirName}\``));
            });

            external.openCode(dirName);
        }
    }
}