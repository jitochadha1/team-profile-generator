const inquirer = require("inquirer");
// const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        // return inquirer.prompt(question);
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;