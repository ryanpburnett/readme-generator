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
                type: "input",
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
                name: "depenencies",
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
            {
                type: "input",
                message: chalk.rgb(255, 136, 0).bold("Please add a link to your GitHub profile"),
                name: "github",
            },

        ])

const mdTemplate = ({projName, projDescription, installation, usage, codeSnippet, imagePath, dependencies, contributing, license, github}) => {
    return `# ${projName}

### License
${license}

## Description
${projDescription}

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
// regular expression on .replace
.then((answers) => fs.writeFile(`${answers.projName.toLowerCase().replace(/ /g, "_")}.md`, mdTemplate(answers), err =>
    {
        if (err) throw err;
        console.log('File Saved');
    }))
