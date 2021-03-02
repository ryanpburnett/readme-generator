const fs = require("fs")
const inquirer = require("inquirer")
const chalk = require("chalk")

const questions = () =>
    inquirer
        .prompt([
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("What is your project name?"),
                name: "projName",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Please type a description of your project."),
                name: "projDescription",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Any instructions for installation?"),
                name: "installation",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Tell us how you use your project."),
                name: "usage",
            },
            {
                type: "editor",
                message: chalk.rgb(255, 136, 0).bold("Any code snippets you want to share?"),
                name: "codeSnippet",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Images are nice, any pics of your project in use?  (share image path)"),
                name: "imagePath",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Do you have any dependencies in your project?"),
                name: "dependencies",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("How can people contribute to your project?"),
                name: "contributing",
            },
            {
                type: "checkbox",
                message: chalk.rgb(255, 136, 0).bold("Any licenses you want to add?"),
                choices: [
                    {name: "Apache 2.0"},
                    {name: "GNU General Public Licence"},
                    {name: "MIT Licence"},
                ],
                name: "license",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Please add a link to your GitHub profile"),
                name: "github",
            },

        ])

const mdTemplate = ({projName, projDescription, installation, usage, codeSnippet, imagePath, dependencies, contributing, license, github}) => {
    return `# ${projName}

[Description](#description)\n
[Licence](#license)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Dependencies](#dependencies)\n
[Contributing](#contributing)\n
[GitHub Link](#github-link)\n

## Description
${projDescription}

### License
${license}

### Installation
${installation}

### Usage
${usage}

\`\`\`
${codeSnippet}
\`\`\`

![Title](${imagePath})

### Dependencies
${dependencies}

### Contributing
${contributing}

### GitHub Link
${github}

The repo for this readme generator can be found on RPB's [Github](https://github.com/ryanpburnett/readme-generator) page.`
}

questions()

.then((answers) => fs.writeFile("README.md", mdTemplate(answers), err =>
    {
        if (err) throw err;
        console.log('File Saved');
    }))


// This code is if you want a readme filename that is the same as the project name

// questions()

// .then((answers) => fs.writeFile(`${answers.projName.toLowerCase().replace(/ /g, "_")}.md`, mdTemplate(answers), err =>
//     {
//         if (err) throw err;
//         console.log('File Saved');
//     }))
