const { ENGINE_METHOD_NONE } = require("constants");

function generateHTML(team) {
    return `
        <h1>My Team</h1>
        <h2>Manager</h2>
        <p>${JSON.stringify(team.manager)}</p>

        <hr>
        
        <h2>Engineers</h2>
        ${team.engineers.map(engineer => `<p>${JSON.stringify(engineer)}</p>`).join('')}
        
        <hr>
        <h2>Interns</h2>
        ${team.interns.map(intern => `<p>${JSON.stringify(intern)}</p>`).join('')}
    `;
}

module.exports = generateHTML;