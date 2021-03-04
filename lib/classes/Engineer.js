const inquirer = require("inquirer");
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    github() {

    }

    getGithub() {

    }

    getRole() {

    }
}

module.exports = Engineer;