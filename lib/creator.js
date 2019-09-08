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
            // index.JS model
            var indexJSModel = ("// Made with <3 by NewProject.JS");

            // package.json model
            var packageJSONModel = ({
                "name": "",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node index.js"
                },
                "keywords": [],
                "author": "",
                "license": "ISC"
            })

            // README.md model
            var readmeMDModel = ("A new Node.JS project!");


            // Creating the index.js
            fs.appendFile(`${dirName}\\index.js`, indexJSModel, (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.bold.green(`✔ index.js has been successfully created under \`${dirName}\` `));
            });

            // Creatin the packae.json
            fs.appendFile(`${dirName}\\package.json`, JSON.stringify(packageJSONModel, null, 2), (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.bold.green(`✔ package.json has been successfully created under \`${dirName}\` `));
            });

            // Creating the README.md
            fs.appendFile(`${dirName}\\README.md`, readmeMDModel, (err) => {
                if (err) throw new Error(chalk.red(err));
                console.log(chalk.bold.green(`✔ README.md has been successfully created under \`${dirName}\``));
            });

            const projDir = `${dirName}\\`;

            // Starts a new Git repository
            external.startGitRepo(projDir);
            // Adds a new .gitignore file ignoring /node_modules
            external.addGitIgnore(projDir);
            // Opens Visual Studio Code in the new directory
            external.openCode(dirName);
        }
    }
}