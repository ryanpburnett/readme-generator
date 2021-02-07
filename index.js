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
                message: chalk.rgb(255, 136, 0).bold("Please list any installation instructions."),
                name: "installation",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Please list how you use your project."),
                name: "usage",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Any code snippets you want to share?"),
                name: "codeSnippet",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Please list an path to an image of your project in use."),
                name: "imagePath",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("How can people contribute to your project?"),
                name: "contributing",
            },
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Any licenses you want to add?"),
                name: "license",
            },
        ])

const mdTemplate = ({projName, projDescription, installation, usage, codeSnippet, imagePath, contributing, license}) => {
    return `# ${projName}

## Description
${projDescription}

## Installation
${installation}

## Usage
${usage}

\`\`\`
${codeSnippet}
\`\`\`

![Title](${imagePath})

## Contributing
${contributing}

## License
${license}

The repo for this readme generator can be found on RPB's [Github](https://github.com/ryanpburnett/readme-generator) page.`
}

questions()
// regular expression on .replace
.then((answers) => fs.writeFile(`${answers.projName.toLowerCase().replace(/ /g, "_")}.md`, mdTemplate(answers), err =>
    {
        if (err) throw err;
        console.log('File Saved');
    }))
