const db = require('./db/connection');
const inquirer = require('inquirer');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View all Roles', 'View all Employeees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
        }
    ]).then(function (data) {
        console.log(data);
        if (data.choice === 'View All Departments') {
            viewAllDepartments();
        } else if (data.choice === 'View all Roles') {
            viewAllRoles();
        } else if (data.choice === 'View all Employeees') {
            viewAllEmployees();
        } else if (data.choice === 'Add a Department') {
            addDepartment();
        } else if (data.choice === 'Add a Role') {
            addRole();
        } else if (data.choice === 'Add an Employee') {
            addEmployee();
        } else if (data.choice === 'Update an Employee Role') {
            updateEmployee();
        } else {
            process.exit();
        }
    });
}
