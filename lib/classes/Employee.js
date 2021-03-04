const inquirer = require("inquirer");
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {
        return inquirer.prompt(question);
    }

    getRole() {

    }
}

module.exports = Employee;