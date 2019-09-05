const fs = require('fs');
const chalk = require('chalk');
const files = require('./files');

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
            console.log(chalk.green('Success! Time to make something awesome!'));


            // FILE MODELS
            // Package.JSON model
            var packageJSONModel = {
                "//1": "This project has been made with <3 by NewProject.JS",
                "name": dirName,
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node index.js"
                },
                "repository": {
                    "type": "git",
                    "url": ""
                },
                "author": "",
                "license": "ISC"
            }

            // Index.JS model
            var indexJSModel = ("//Made with <3 by NewProject.JS");


            // Creating the package.json
            fs.appendFile(`${dirName}\\package.json`, JSON.stringify(packageJSONModel, null, 2), (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.green(`package.json has been successfully created under \`${dirName}\` `));
            });

            // Creating the index.js
            fs.appendFile(`${dirName}\\index.js`, indexJSModel, (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.green(`index.js has been successfully created under \`${dirName}\` `));
            });
        }
    }
}
