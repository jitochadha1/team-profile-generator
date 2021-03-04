const basicQuestions = [{
    type: 'text',
    message: 'Name?',
    name: 'name'
}, {
    type: 'text',
    message: 'ID?',
    name: 'id'
}, {
    type: 'text',
    message: 'Email?',
    name: 'email'
}];

module.exports = {
    menu: {
        type: 'list',
        message: 'You can add an engineer, an intern or finish the team',
        name: 'action',
        choices: ['Engineer', 'Intern', 'Finish building team']
    },
    teamManager: [...basicQuestions, {
        type: 'text',
        message: 'Office number?',
        name: 'officeNumber',
    }],
    engineer: [...basicQuestions, {
        type: 'text',
        message: 'Github username?',
        name: 'github',
    }],
    intern: [...basicQuestions, {
        type: 'text',
        message: 'School?',
        name: 'school',
    }]
};