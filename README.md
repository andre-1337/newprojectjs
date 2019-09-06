![David](https://img.shields.io/david/Link-Byte/newprojectjs?label=Dependencies&logo=node-deps)
![GitHub](https://img.shields.io/github/license/Link-Byte/newprojectjs?label=License&logo=node-license)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Link-Byte/newprojectjs?label=Version&logo=project-ver)
![npm](https://img.shields.io/npm/v/node?label=Node.JS&logo=nodejs-ver)
![npm](https://img.shields.io/npm/v/npm?label=NPM&logo=npm-ver)

![newprojectjs](./newprojectjs.png)

# Table of Contents

- [What Is NewProject.JS](#newproject.js)
- [NewProject.JS featuees](#features)
- [Installation and Usage](#usage)
- [Changelog](#changelog)


# NewProject.JS

A small Node.JS CLI script that automatically creates a new project, `package.json`, `index.js` and `README.md` files for you!

# Features

Currently, NewProject.JS has a small set of features, that, with multiple updates in the future, could support even more
- Create a new directory
    - Create an `index.js`, `package.json` and `README.md` files inside the directory
    - Open Visual Studio Code after creating the directory and files

# Usage

Run `npm i -g @andremont0101/newproject.js`\
Use NewProject.JS by running the CLI script inside the directory where you want to make the project with `newproject` and typing the desired project name when prompted (cannot contain spaces otherwise VSCode will open individual files per each space and not actually the directory.)

# Changelog

## 1.3.2
- Fixed an issue with the auto-generated `package.json` not being used by NPM to define the installed packages