const inquirer = require("inquirer");
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    school() {

    }

    getSchool() {

    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;