const { ENGINE_METHOD_NONE } = require("constants");

function generateHTML(team) {
    return `
        <h1>My Team</h1>
        <div>
        <h2>${JSON.stringify(team.manager.name)}</h2>
        <h2>Manager</h2>
        <div>
            <p>ID: ${JSON.stringify(team.manager.id)}</p>
            <p>Email: ${JSON.stringify(team.manager.email)}</p>
            <p>Office number: ${JSON.stringify(team.manager.officeNumber)}</p>
        </div>
        
        </div>
        <hr>
        <div>
        <h2>Engineers</h2>
        ${team.engineers.map(engineer => `
            <div>
                <h2>${JSON.stringify(engineer.name)}</h2>
                <h2>Engineer<h2>
                <div>
                    <p>ID: ${JSON.stringify(engineer.id)}</p>
                    <p>Email: ${JSON.stringify(engineer.email)}</p>
                    <p>Github: ${JSON.stringify(engineer.githubUserName)}</p>
                </div>
            </div>
        `).join('')}
        </div>

        <hr>
        <h2>Interns</h2>
        ${team.interns.map(intern => `
            <div>
                <h2>${JSON.stringify(intern.name)}</h2>
                <h2>Intern</h2>
                <div>
                    <p>ID: ${JSON.stringify(intern.id)}</p>
                    <p>Email: ${JSON.stringify(intern.email)}</p>
                    <p>School</p>
                </div>
            </div>
        `).join('')}
    `;
}

module.exports = generateHTML;