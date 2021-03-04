const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, htmlContent) {
    return fs.writeFile(fileName, htmlContent, err => {
        if (err) throw new Error(err);

        console.log('Complete!')
    });
}

module.exports = writeToFile;