![David](https://img.shields.io/david/Link-Byte/newprojectjs?label=Dependencies&logo=node-deps)
![GitHub](https://img.shields.io/github/license/Link-Byte/newprojectjs?label=License&logo=node-license)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Link-Byte/newprojectjs?label=Version&logo=project-ver)
![npm](https://img.shields.io/npm/v/node?label=Node.JS&logo=nodejs-ver)
![npm](https://img.shields.io/npm/v/npm?label=NPM&logo=npm-ver)

# Table of Contents

- [What Is NewProject.JS](#newproject.js)
- [NewProject.JS featuees](#features)
- [Installation and Usage](#usage)
- [Version Distribution](#versions)


# NewProject.JS

A small Node.JS CLI script that automatically creates a new project, `package.json`, `index.js` and `README.md` files for you!

# Features

Currently, NewProject.JS has a small set of features, that, with multiple updates in the future, could support even more
- Create a new directory
    - Create an `index.js`, `package.json` and `README.md` files inside the directory
    - Open Visual Studio Code after creating the directory and files
- Runs in any path
- Lightweight to an extent

# Usage

Run `npm i -g @andremont0101/newproject.js`\
Use NewProject.JS by running the CLI script inside the directory where you want to make the project with `newproject` and typing the desired project name when prompted (cannot contain spaces otherwise VSCode will open individual files per each space and not actually the directory.)

# Versions

## - 0.1.0 - 
    - First version of the NewProject.JS CLI

## - 0.2.0 - 
    - Fixed an issue with the script

## - 0.3.0 - 
    - Moved the file creation script to the createDir() function to clean up the newproject.js file.
    - Renamed the script usage from `newprojectjs` to `newproject` to avoid confusion with the `.js` extension

## - 1.0.1 - 
    - Added an update checking function created from scratch to warn users about possible new releases.
        - 1.0.3 - Hotfix
            - Just moved the updater function to the beggining of the code and deleted unnecessary imports.
        - 1.0.4 - Hotfix
            - Fixed a typo in the README.md and the updater.js files
        - 1.0.5 - Hotfix
            - Fixed even more typos and an issue with checkForUpdate() running twice.

## - 1.1.0 -
    - The creator.createDir() function now also creates a README.md!
        - 1.1.1 - Hotfix
            - Forgot to update the description in the README.md

## - 1.2.0 -
    - Added the external.js lib, currently with the `openCode();` function.
    VSCode is automatically opened once you create a new project with NewProject.JS