const inquirer = require("inquirer");

const questions = require('./questions');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const writeToFile = require("./html-generator/writeToFile");

class Program {
    constructor() {
        this.team = {
            manager: null,
            interns: [],
            engineers: []
        };
        this.start();
    }

    async start() {
        const manager = await this.getManager();
        this.saveManager(manager);
        this.showMenu();
    }

    async showMenu() {
        const { action } = await this.menuQuestion();
        this.handleMenuAction(action);
    }

    menuQuestion() {
        return inquirer.prompt(questions.menu);
    }

    handleMenuAction(action) {
        console.log('Answer:', action);

        if (action === 'Engineer') {
            inquirer.prompt(questions.engineer).then(answers => {
                const { name, id, email, github } = answers;
                const engineer = new Engineer(name, id, email, github);
                this.team.engineers.push(engineer);
                this.showMenu();
            });
        } else if (action === 'Intern') {
            inquirer.prompt(questions.intern).then(answers => {
                const { name, id, email, school } = answers;
                const intern = new Intern(name, id, email, school);
                this.team.interns.push(intern);
                this.showMenu();
            });
        } else {
            this.finishProgram(this.team);
        }
    }

    getManager() {
        console.log('Manager info:');
        return inquirer.prompt(questions.teamManager);
    }

    saveManager(manager) {
        const { name, id, email, officeNumber } = manager;
        this.team.manager = new Manager(name, id, email, officeNumber);
    }

    finishProgram(team) {
        const path = 'team.html';

        writeToFile(path, team, () => {
            console.log('Program finished! You can find your file at', path);
        });
    }
}

module.exports = Program;