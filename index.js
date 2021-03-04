const inquirer = require("inquirer");

const writeToFile = require("./lib//writeToFile");
const generateHTML = require("./lib//generateHTML");

const team = {
    interns: [],
    engineers: []
};

finishProgram(team);

const menuQuestion = {
    type: 'list',
    message: 'You can add an engineer, an intern or finish the team',
    name: 'action',
    choices: ['Engineer', 'Intern', 'Finish building team']
};

const basicQuestions = () => ([{
    type: 'text',
    message: 'Name?',
    name: 'name',
}, {
    type: 'text',
    message: 'ID?',
    name: 'id',
}, {
    type: 'text',
    message: 'Email?',
    name: 'email',
}]);

const questions = {
    teamManager: [...basicQuestions(), {
        type: 'text',
        message: 'Office number?',
        name: 'officeNumber',
    }],
    engineer: [...basicQuestions(), {
        type: 'text',
        message: 'Github username?',
        name: 'githubUserName',
    }],
    intern: [...basicQuestions(), {
        type: 'text',
        message: 'School?',
        name: 'school',
    }]
};

inquirer.prompt(questions.teamManager).then(answers => {
    const { name, id, email, officeNumber } = answers;
    console.log(name, id, email, officeNumber);

    team.manager = answers;

    showMenu();
});

function finishProgram(team) {
    console.log('This is the team:', team);
    writeToFile('team.html', generateHTML(team));
}

function showMenu() {
    inquirer.prompt(menuQuestion).then(({ action }) => {
        console.log('Answer:', action);

        if (action === 'Engineer') {
            inquirer.prompt(questions.engineer).then(answers => {
                team.engineers.push(answers);
                showMenu();
            });
        } else if (action === 'Intern') {
            inquirer.prompt(questions.intern).then(answers => {
                team.interns.push(answers);
                showMenu();
            });
        } else {
            finishProgram(team);
        }
    });
}
