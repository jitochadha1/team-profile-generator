const inquirer = require("inquirer");

inquirer
    .prompt([{
        type: 'text',
        message: 'Email?',
        name: 'email',
    }, {
        type: 'list',
        message: 'Which potion would you like to use?',
        name: 'action',
        choices
    }]).then(answers => {

    });


inquirer.prompt({
}).then(({ action }) => {
    const potionDetails = action.split(': ');

    this.player.usePotion(potionDetails[0] - 1);
    console.log(`You used a ${potionDetails[1]} potion.`);

    return this.checkEndOfBattle();
});