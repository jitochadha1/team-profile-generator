function teamMembers(team) {
    return `
        <div class="card">
            <div class="card-divider">
                <h3>${team.manager.getName()}</h3>
                <h5><i class="fa fa-coffee"></i> ${team.manager.getRole()}</h5>
            </div>
            <div class="card-section">
                <table>
                    <tr>
                        <td>ID: ${team.manager.getId()}</td>
                    </tr>
                    <tr>
                        <td>
                            email:
                            <a href="mailto:${team.manager.getEmail()}">
                                ${team.manager.getEmail()}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Office number:
                            ${team.manager.getOfficeNumber()}
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        ${team.engineers.map(engineer => `
            <div class="card">
                <div class="card-divider">
                    <h3>${engineer.getName()}</h3>
                    <h5><i class="fa fa-glasses"></i> ${engineer.getRole()}</h5>
                </div>
                <div class="card-section">
                    <table>
                        <tr>
                            <td>ID: ${engineer.getId()}</td>
                        </tr>
                        <tr>
                            <td>
                                email:
                                <a href="mailto:${engineer.getEmail()}">
                                    ${engineer.getEmail()}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Github:
                                <a href="https://github.com/${engineer.getGithub()}">
                                    ${engineer.getGithub()}
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        `).join('')}

        ${team.interns.map(intern => `
            <div class="card">
                <div class="card-divider">
                    <h3>${intern.getName()}</h3>
                    <h5><i class="fa fa-graduation-cap"></i> ${intern.getRole()}</h5>
                </div>
                <div class="card-section">
                    <table>
                        <tr>
                            <td>ID: ${intern.getId()}</td>
                        </tr>
                        <tr>
                            <td>
                                email:
                                <a href="mailto:${intern.getEmail()}">
                                    ${intern.getEmail()}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>School: ${intern.getSchool()}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `).join('')}
    `;
}

module.exports = teamMembers;