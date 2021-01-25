const fs = require("fs")
const inquirer = require("inquirer")

const questions = () =>
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "Where do you live?",
                name: "location",
            },
            {
                type: "input",
                message: "What is something interesting about you?",
                name: "bio",
            },
            {
                type: "input",
                message: "What is your LinkedIn URL?",
                name: "LinkedIn",
            },
            {
                type: "input",
                message: "What is your GitHub URL?",
                name: "GitHub",
            },
        ])

const html = ({name, location, bio, LinkedIn, GitHub}) => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mini Project</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    <body>
        <h1>${name}</h1>
        <h2>${location}</h2>
        <h3>${bio}</h3>
        <p>${LinkedIn}</p>
        <p>${GitHub}</p>
    </body>
    </html>`
}

questions()
// regular expression on .replace
.then((answers) => fs.writeFile(`${answers.name.toLowerCase().replace(/ /g, "_")}.html`, html(answers), err =>
    {
        if (err) throw err;
        console.log('File Saved');
    }))
