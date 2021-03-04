const fs = require('fs');
const generateHTML = require("./team-members");

// TODO: Create a function to write README file
function writeToFile(fileName, members, callback = () => { }) {
    getTemplate(html => {
        const membersHTML = generateHTML(members);
        const content = html.replace('{%=members%}', membersHTML);

        fs.writeFile(fileName, content, err => {
            if (err) throw new Error(err);
            callback();
        });
    });

}

function getTemplate(callback) {
    return fs.readFile('./lib/html-generator/team-template.html', 'utf-8', (err, html) => {
        callback(html);
    })
}

module.exports = writeToFile;